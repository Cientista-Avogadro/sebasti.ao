"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Project } from "@/data/projects";

interface CaseStudyProps {
  project: Project;
  index: number;
}

export function CaseStudy({ project, index }: CaseStudyProps) {
  const t = useTranslations("projects");
  const isEvenIndex = index % 2 === 0;

  return (
    <article className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
      <div className={`${isEvenIndex ? "lg:order-1" : "lg:order-2"}`}>
        <p className="font-mono text-xs text-soft">
          {String(index + 1).padStart(2, "0")} · {t(project.status.toLowerCase())}
        </p>
        <h3 className="font-display text-3xl mt-3">{project.name}</h3>
        <p className="text-accent mt-1.5">{t(project.taglineKey)}</p>

        <p className="text-ink/85 leading-relaxed mt-6">{t(project.descriptionKey)}</p>

        {project.metrics && project.metrics.length > 0 && (
          <dl className="grid grid-cols-2 gap-x-10 gap-y-5 border-y border-line py-6 mt-7">
            {project.metrics.map((metric) => (
              <div key={metric.labelKey}>
                <dt className="label">{t(metric.labelKey)}</dt>
                <dd className="font-display text-2xl mt-1.5">{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-7 space-y-5">
          <div>
            <h4 className="label">{t("scope")}</h4>
            <p className="text-sm text-ink/80 leading-relaxed mt-1.5">{t(project.roleKey)}</p>
          </div>
          <div>
            <h4 className="label">{t("outcome")}</h4>
            <p className="text-sm text-ink/80 leading-relaxed mt-1.5">{t(project.impactKey)}</p>
          </div>
          <div>
            <h4 className="label">{t("builtWith")}</h4>
            <p className="font-mono text-xs text-soft mt-1.5 leading-relaxed">{project.tech.join(" · ")}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-8">
          {project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 text-sm">
              {t("viewLive")}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
          {project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 text-sm">
              <Github size={14} aria-hidden="true" />
              {t("source")}
            </a>
          )}
        </div>
      </div>

      <div className={`${isEvenIndex ? "lg:order-2" : "lg:order-1"}`}>
        <figure className="border border-ink/25 bg-raised p-2">
          <div className="relative aspect-video overflow-hidden">
            {(project.image || project.link !== "#") ? (
              <Image
                src={project.image || `https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`}
                alt={project.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={!project.image}
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="font-display text-3xl text-faint">{project.name}</p>
              </div>
            )}
          </div>
        </figure>
      </div>
    </article>
  );
}
