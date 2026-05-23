import type { Project } from "../data/projects";

type ProjectCardProps = {
    project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="projectCard">
            <div className="projectHeader">
                <span className="projectStatus">{project.status}</span>
                <span className="projectType">{project.type}</span>
            </div>

            <h3>{project.title}</h3>

            <p className="projectDescription">{project.description}</p>

            <div className="projectDetailGrid">
                <div>
                    <h4>Problem</h4>
                    <p>{project.problem}</p>
                </div>

                <div>
                    <h4>Solution</h4>
                    <p>{project.solution}</p>
                </div>

                <div>
                    <h4>Result</h4>
                    <p>{project.result}</p>
                </div>
            </div>

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

            {(project.links.github || project.links.demo) && (
                <div className="projectActions">
                    {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    )}

                    {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer">
                            Demoを見る
                        </a>
                    )}
                </div>
            )}
        </article>
    );
}

export default ProjectCard;