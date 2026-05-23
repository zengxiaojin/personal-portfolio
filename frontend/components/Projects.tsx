import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section className="section" id="projects">
            <h2>Projects</h2>

            <p className="sectionLead">
                学習した技術を、実際に動くWebアプリケーションとして形にすることを重視しています。
                以下は、現在制作中・制作予定のプロジェクトです。
            </p>

            <div className="projectGrid">
                {projects.map((project) => (
                    <article className="projectCard" key={project.title}>
                        <div className="projectHeader">
                            <span className="projectStatus">{project.status}</span>
                            <span className="projectType">{project.type}</span>
                        </div>

                        <h3>{project.title}</h3>

                        <p className="projectDescription">{project.description}</p>

                        <ul className="projectList">
                            {project.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>

                        <div className="techList">
                            {project.techs.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}