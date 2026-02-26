import type { ResumeProject } from "@portfolio/shared";

export function ProjectCard({ project }: { project: ResumeProject }) {
  return (
    <article className="card reveal">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="chips">
        {project.stack.map((tech) => (
          <span className="chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
