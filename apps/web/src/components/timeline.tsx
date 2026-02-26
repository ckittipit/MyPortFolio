import type { ResumeExperience } from "@portfolio/shared";

export function Timeline({ items }: { items: ResumeExperience[] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={`${item.company}-${item.period}`} className="card reveal">
          <div className="card-head">
            <h3>{item.company}</h3>
            <span>{item.period}</span>
          </div>
          <p className="role">{item.role}</p>
          <ul>
            {item.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
