"use client";

import { ExternalLink, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("projects");

  return (
    <article className="border-t border-line py-7">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl">{project.name}</h3>
        <span className="font-mono text-xs text-accent shrink-0">{t(project.status.toLowerCase())}</span>
      </div>
      <p className="text-accent text-sm mt-1">{t(project.taglineKey)}</p>
      <p className="text-soft text-sm leading-relaxed mt-3">{t(project.descriptionKey)}</p>

      <dl className="grid gap-3 sm:grid-cols-2 mt-4 text-xs">
        <div>
          <dt className="label">{t("scope")}</dt>
          <dd className="text-ink/80 mt-1 leading-relaxed">{t(project.roleKey)}</dd>
        </div>
        <div>
          <dt className="label">{t("outcome")}</dt>
          <dd className="text-ink/80 mt-1 leading-relaxed">{t(project.impactKey)}</dd>
        </div>
      </dl>

      <p className="font-mono text-xs text-faint mt-4">{project.tech.join(" · ")}</p>

      <div className="flex items-center gap-5 mt-4">
        {project.link !== "#" && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 text-sm">
            {t("viewProject")}
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        )}
        {project.github !== "#" && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 text-sm">
            <Github size={13} aria-hidden="true" />
            {t("source")}
          </a>
        )}
      </div>
    </article>
  );
}
