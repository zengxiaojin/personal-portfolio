import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section className="section" id="projects">
            <h2>Projects</h2>

            <p className="sectionLead">
                学習した技術を、実際に動くWebアプリケーションとして形にすることを重視しています。
                各プロジェクトでは、課題、実装方針、得られる成果を整理しています。
            </p>

            <div className="projectGrid">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </div>
        </section>
    );
}