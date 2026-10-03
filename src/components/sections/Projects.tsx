"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { projects, filterCategories } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "./projects/ProjectCard";
import { CaseStudy } from "./projects/CaseStudy";

interface ProjectsProps { showAll?: boolean; }

// Curated order for the home page: strongest, verifiable stories first.
const HOME_CASE_STUDY_ORDER = ["SADOC", "KITANDASOFT Suite", "CAFÉ Platform", "Kibera", "DealBusinessHub", "Docampo", "XGrow"];

export function Projects({ showAll = false }: ProjectsProps) {
  const t = useTranslations("projects");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const homeCaseStudies = HOME_CASE_STUDY_ORDER.flatMap((name) => {
    const found = projects.find((p) => p.name === name);
    return found ? [found] : [];
  });

  const filteredProjects = useMemo(() => {
    let filtered = showAll ? projects : projects.filter((p) => p.featured);
    if (selectedTechs.length > 0) {
      filtered = filtered.filter((project) => selectedTechs.some((tech) => project.tech.includes(tech)));
    }
    return filtered;
  }, [showAll, selectedTechs]);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]));
  };

  return (
    <section id="work" className="scroll-mt-24 border-t border-line">
      <div className="container-site py-24">
        <SectionHeader
          index="03"
          label={t("label")}
          title={showAll ? t("allProjects") : t("title")}
          subtitle={showAll ? t("countOf", { shown: filteredProjects.length, total: projects.length }) : t("subtitle")}
          action={
            !showAll ? (
              <Link href="/projects" className="link inline-flex items-center gap-1.5 text-sm whitespace-nowrap">
                {t("viewAll")} ({projects.length})
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            ) : undefined
          }
        />

        {showAll && (
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="label">{t("filterBy")}</span>
              {selectedTechs.length > 0 && (
                <button
                  onClick={() => setSelectedTechs([])}
                  className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:text-accent-deep transition-colors"
                  aria-label={t("clear")}
                >
                  <X size={12} aria-hidden="true" /> {t("clear")}
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4">
              {filterCategories.map((category) => (
                <div key={category.name} className="flex flex-wrap gap-x-4 gap-y-2">
                  {category.techs.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => toggleTech(tech)}
                      aria-pressed={selectedTechs.includes(tech)}
                      className={`font-mono text-xs transition-colors ${
                        selectedTechs.includes(tech)
                          ? "text-accent underline underline-offset-4"
                          : "text-soft hover:text-ink"
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {!showAll && (
          <div className="space-y-20">
            {homeCaseStudies.map((project, index) => (
              <CaseStudy key={project.name} project={project} index={index} />
            ))}
          </div>
        )}

        {showAll && (
          <>
            {filteredProjects.filter((p) => p.link && p.link !== "#").length > 0 && (
              <div className="mb-16">
                <h3 className="label mb-8">{t("caseStudies")}</h3>
                <div className="space-y-20">
                  {filteredProjects
                    .filter((p) => p.link && p.link !== "#")
                    .map((project, index) => (
                      <CaseStudy key={project.name} project={project} index={index} />
                    ))}
                </div>
              </div>
            )}

            {filteredProjects.filter((p) => !p.link || p.link === "#").length > 0 && (
              <div>
                <h3 className="label mb-8">{t("otherProjects")}</h3>
                <div className="grid lg:grid-cols-2 gap-x-14 gap-y-4">
                  {filteredProjects
                    .filter((p) => !p.link || p.link === "#")
                    .map((project, index) => (
                      <ProjectCard key={project.name} project={project} index={index} />
                    ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
