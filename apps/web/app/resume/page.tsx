"use client";

import Link from "next/link";
import { SectionHeader } from "@/src/components/section-header";
import { SkillGrid } from "@/src/components/skill-grid";
import { Timeline } from "@/src/components/timeline";
import { useLocale } from "@/src/context/locale-context";

export default function ResumePage() {
  const { content } = useLocale();

  return (
    <div className="container">
      <SectionHeader title={content.resume.heading} subtitle={content.resume.body} />
      <div className="card reveal resume-actions">
        <Link href="/resume/KittipitChanthataweesup_Resume.pdf" className="glow-btn" target="_blank">
          {content.resume.download}
        </Link>
      </div>

      <SectionHeader title={content.sections.experience} />
      <Timeline items={content.experience} />

      <SectionHeader title={content.sections.skills} />
      <SkillGrid groups={content.skills} />

      <SectionHeader title={content.sections.projects} />
      <div className="grid projects-grid">
        {content.projects.map((project) => (
          <article className="card reveal" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>

      <SectionHeader title={content.sections.education} />
      <div className="grid">
        {content.education.map((item) => (
          <article className="card reveal" key={`${item.institution}-${item.period}`}>
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
            <p className="role">{item.period}</p>
          </article>
        ))}
      </div>

      <SectionHeader title={content.sections.certifications} />
      <article className="card reveal">
        <ul>
          {content.certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <SectionHeader title={content.sections.onlineProfiles} />
      <article className="card reveal">
        <ul>
          {content.onlineProfiles.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
