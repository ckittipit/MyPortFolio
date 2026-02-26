"use client";

import Link from "next/link";
import { ProfilePhotoCard } from "@/src/components/profile-photo-card";
import { ProjectCard } from "@/src/components/project-card";
import { SectionHeader } from "@/src/components/section-header";
import { SkillGrid } from "@/src/components/skill-grid";
import { Timeline } from "@/src/components/timeline";
import { useLocale } from "@/src/context/locale-context";

export default function HomePage() {
  const { content } = useLocale();

  return (
    <div className="container">
      <section className="hero reveal">
        <div>
          <p className="eyebrow">{content.profile.title}</p>
          <h1>{content.hero.heading}</h1>
          <p className="lead">{content.hero.subheading}</p>
          <div className="hero-actions">
            <Link href="/resume" className="glow-btn">
              {content.hero.ctaPrimary}
            </Link>
            <Link href="/contact" className="ghost-btn">
              {content.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="about-grid">
        <div>
          <SectionHeader title={content.about.heading} />
          <p className="card reveal">{content.about.body}</p>
          <div className="card reveal identity">
            <p>{content.profile.fullName}</p>
            <p>{content.profile.email}</p>
            <p>{content.profile.phone}</p>
            <p>{content.profile.location}</p>
          </div>
        </div>
        <ProfilePhotoCard />
      </section>

      <section>
        <SectionHeader title={content.sections.experience} />
        <Timeline items={content.experience} />
      </section>

      <section>
        <SectionHeader title={content.sections.skills} />
        <SkillGrid groups={content.skills} />
      </section>

      <section>
        <SectionHeader title={content.sections.projects} />
        <div className="grid projects-grid">
          {content.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
