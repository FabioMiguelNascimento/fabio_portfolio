import { projects } from "@/config/projects";
import { getTranslations } from "next-intl/server";
import ProjectDialog from "./projects-dialog/project-dialog";

export default async function ProjectsArea() {
    const t = await getTranslations("projects");

    const demo = t('links.demo')
    const doc = t('links.doc')
    const repository = t('links.repository')

    return (
        <ul>
            {projects.map((proj, index) => {
                const projectTitleKey = `items.${proj.id}.title`;
                const projectDescriptionKey = `items.${proj.id}.description`;

                const title = t(projectTitleKey)
                const description = t(projectDescriptionKey)

                const metadata = {
                    title: title,
                    description: description,
                    links: {
                        repository: repository,
                        demo: demo,
                        doc: doc
                    }
                }

                return (
                    <button key={proj.id} className="border-b -mb-px last:border-b-0 w-full">
                        <ProjectDialog 
                            metadata={metadata}
                            project={proj}
                            projectIndex={index}
                            key={proj.id}
                        />
                    </button>
                );
            })}
        </ul>
    );
}