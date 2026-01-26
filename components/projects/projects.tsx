import ProjectsArea from "./projects-area";
import ProjectsHeader from "./projects-header";

export default async function Projects() {
    return(
        <section className="space-y-6" id="projects">
            <ProjectsHeader />
            <ProjectsArea />
        </section>
    )
}