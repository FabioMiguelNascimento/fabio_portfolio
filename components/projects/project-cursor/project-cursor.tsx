import { isMobile, onMobileChange } from "@/lib/device";
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface ContentArgs {
    direction: 'up' | 'down' | null;
    previous?: { project: any; metadata: any; index: number } | null;
    isTransitioning?: boolean;
}

interface ProjectCursorProps extends React.HTMLAttributes<HTMLDivElement> {
    tooltipContent: ReactNode | ((args: ContentArgs) => ReactNode);
    children: ReactNode;
    projectIndex: number;
    projectData: { project: any; metadata: any; index: number };
}

const ProjectCursor = React.forwardRef<HTMLDivElement, ProjectCursorProps>(function ProjectCursor({ children, tooltipContent, projectIndex, projectData, ...rest }, ref) {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false)
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
    const [showTooltipContent, setShowTooltipContent] = useState(false);
    const [animationDirection, setAnimationDirection] = useState<'up' | 'down' | null>(null);
    const [previousProject, setPreviousProject] = useState<{ project: any; metadata: any; index: number } | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

    const tooltipRef = useRef<HTMLDivElement>(document.createElement('div'));

    const handleMouseMove = (event: React.MouseEvent) => {
        const { clientX, clientY } = event

        const tooltipWidth = tooltipRef.current?.offsetWidth
        const tooltipHeight = tooltipRef.current?.offsetHeight
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        let tooltipX = clientX + 12
        let tooltipY = clientY + 12

        if (tooltipX + tooltipWidth > viewportWidth) {
            tooltipX = clientX - 10
        }

        if (tooltipY + tooltipHeight > viewportHeight) {
            tooltipY = clientY - 10
        }

        setTooltipPosition({ x: tooltipX, y: tooltipY })
    }

    const handleMouseEnter = () => {
        let newDirection: 'up' | 'down' | null = null;
        
        const previous = (globalThis as any).__lastHoveredIndex as number | null;
        const previousProjectGlobal = (globalThis as any).__lastHoveredProject as { project: any; metadata: any; index: number } | null;

        if (previous !== null && previousProjectGlobal) {
            if (projectIndex > previous) {
                newDirection = 'up';
            } else if (projectIndex < previous) {
                newDirection = 'down';
            }
        }

        setAnimationDirection(newDirection);

        if (previousProjectGlobal && previousProjectGlobal.project.id !== projectData.project.id) {
            setPreviousProject(previousProjectGlobal);
            setIsTransitioning(true);
        } else {
            setPreviousProject(null);
            setIsTransitioning(false);
        }

        (globalThis as any).__lastHoveredIndex = projectIndex;
        (globalThis as any).__lastHoveredProject = projectData;

        setIsTooltipVisible(true)
        setShowTooltipContent(false)
    }

    const handleMouseLeave = () => {
        setIsTooltipVisible(false)
        setAnimationDirection(null);

        setTimeout(() => {
            setPreviousProject(null);
            setIsTransitioning(false);
        }, 300)
    }

    useEffect(() => {
        let timeoutId: NodeJS.Timeout

        if (isTooltipVisible) {
            timeoutId = setTimeout(() => {
                setShowTooltipContent(true)
            }, 50)
        }

        return () => {
            clearTimeout(timeoutId)
        }
    }, [isTooltipVisible])

    useEffect(() => {
        if (showTooltipContent) {
        }
    }, [showTooltipContent, animationDirection, projectIndex, isTransitioning, previousProject])

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;
        if (isTransitioning) {
            timeoutId = setTimeout(() => {
                setPreviousProject(null);
                setIsTransitioning(false);
                (globalThis as any).__lastHoveredProject = projectData;
            }, 260);
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        }
    }, [isTransitioning, projectData])

    useEffect(() => {
            setIsMobileDevice(isMobile());
        const off = onMobileChange((now) => setIsMobileDevice(now));
        return off;
    }, []);

    const renderedContent = typeof tooltipContent === 'function' ? tooltipContent({ direction: animationDirection, previous: previousProject ?? undefined, isTransitioning }) : tooltipContent;

    if (isMobileDevice) {
        return (
            <div ref={ref} className="min-w-min" {...rest}>
                {children}
            </div>
        );
    }

    return (
        <div
            ref={ref}
            className="min-w-min"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...rest}
        >

            {isTooltipVisible && (
                <div
                    ref={tooltipRef}
                    className={`fixed border rounded-lg overflow-hidden transition-opacity duration-200 ${showTooltipContent ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        top: tooltipPosition.y,
                        left: tooltipPosition.x,
                        zIndex: 900000,
                        pointerEvents: 'none'
                    }}
                >
                    {showTooltipContent && renderedContent}
                </div>
            )}
            {children}
        </div>
    )
});

export default ProjectCursor;