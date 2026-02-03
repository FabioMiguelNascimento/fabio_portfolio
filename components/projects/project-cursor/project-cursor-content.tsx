import Image from "next/image";
import { type ProjectProps } from "../types";

interface Props {
    project: ProjectProps['project'];
    metadata: ProjectProps['metadata'];
    direction?: 'up' | 'down' | null;
    previous?: { project: ProjectProps['project']; metadata: ProjectProps['metadata']; index: number } | null;
    isTransitioning?: boolean;
}

export default function ProjectCursorContent({ project, metadata, direction, previous, isTransitioning }: Props) {
    const animationInClass = direction === 'up' ? 'animate-in-from-bottom' : direction === 'down' ? 'animate-in-from-top' : '';
    const animationOutClass = direction === 'up' ? 'animate-out-to-top' : direction === 'down' ? 'animate-out-to-bottom' : '';

    return (
        <div className="relative w-[300px] h-[169px] overflow-hidden">
            {isTransitioning && previous && (
                <Image
                    key={`prev-${previous.project.id}-${direction}`}
                    src={previous.project.image}
                    alt={previous.metadata.title}
                    width={300}
                    height={169}
                    priority={true}
                    className={`absolute inset-0 w-full h-full object-cover ${animationOutClass}`}
                />
            )}

            {(
                <Image
                    key={`curr-${project.id}-${direction}`}
                    src={project.image}
                    alt={metadata.title}
                    width={300}
                    height={169}
                    priority={true}
                    className={`absolute inset-0 w-full h-full object-cover ${isTransitioning ? animationInClass : ''}`}
                />
            )}
        </div>
    )
}