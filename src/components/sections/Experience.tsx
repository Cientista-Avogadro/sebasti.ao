"use client";

import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";
import { experiences, projects } from "@/data/experience";
import { calculateDuration } from "@/lib/utils";

export function Experience() {
  const t = useTranslations("experience");

  const getCompanyProjects = (company: string) =>
    projects.filter((project) => project.company === company);

  return (
    <section id="experience" className="scroll-mt-24 border-t border-line">
      <div className="container-site py-24">
        <SectionHeader
          index="04"
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <ol>
          {experiences.map((experience, index) => {
            const duration = calculateDuration(experience.startDate, experience.endDate);
            const companyProjects = getCompanyProjects(experience.company);

            return (
              <li
                key={experience.company}
                className={`grid gap-4 md:grid-cols-[190px_1fr] md:gap-12 py-10 ${index > 0 ? "border-t border-line" : ""}`}
              >
                <div className="font-mono text-xs text-soft space-y-1.5 md:pt-1.5">
                  <p>{experience.period}</p>
                  <p>
                    {duration.years > 0 && `${duration.years} ${duration.years === 1 ? t("yearsShort") : t("years")} `}
                    {duration.months > 0 && `${duration.months} ${duration.months === 1 ? t("monthsShort") : t("months")}`}
                  </p>
                  <p className="text-accent">{t(experience.workType)}</p>
                  <p className="text-faint">{experience.location}</p>
                </div>

                <div>
                  <h3 className="font-display text-2xl">{experience.company}</h3>
                  <p className="text-accent font-medium mt-1">{experience.role}</p>
                  <p className="text-soft mt-4 leading-relaxed max-w-3xl">
                    {t(experience.descriptionKey)}
                  </p>

                  <h4 className="label mt-6">{t("keyHighlights")}</h4>
                  <ul className="mt-3 space-y-2 max-w-3xl">
                    {Array.from({ length: experience.highlightsCount }).map((_, i) => (
                      <li key={i} className="flex items-start gap-3 text-[0.95rem] text-ink/85">
                        <span className="mt-[0.55rem] h-px w-4 bg-accent shrink-0" aria-hidden="true" />
                        {t(`${experience.highlightsKey}.${i + 1}`)}
                      </li>
                    ))}
                  </ul>

                  {companyProjects.length > 0 && (
                    <div className="mt-6">
                      <h4 className="label">{t("projects")}</h4>
                      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                        {companyProjects.map((project, i) => (
                          <li key={i}>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-ink/85 hover:text-accent transition-colors"
                            >
                              {project.name}
                              {project.link !== "#" && <ExternalLink size={12} aria-hidden="true" />}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
