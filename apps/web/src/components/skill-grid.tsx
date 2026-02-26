import type { ResumeSkillGroup } from "@portfolio/shared";

export function SkillGrid({ groups }: { groups: ResumeSkillGroup[] }) {
  return (
    <div className="grid skills-grid">
      {groups.map((group) => (
        <article className="card reveal" key={group.category}>
          <h3>{group.category}</h3>
          <div className="chips">
            {group.items.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
