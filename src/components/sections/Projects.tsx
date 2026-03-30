"use client";
// Force rebuild - v0 update

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { ArrowUpRight, Filter, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { projects, filterCategories } from "@/data/projects";
import { ProjectCard } from "./projects/ProjectCard";
import { CaseStudy } from "./projects/CaseStudy";

interface ProjectsProps { showAll?: boolean; }

export function Projects({ showAll = false }: ProjectsProps) {
  const t = useTranslations("projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    let filtered = showAll ? projects : projects.filter(p => p.featured);
    if (selectedTechs.length > 0) {
      filtered = filtered.filter(project => selectedTechs.some(tech => project.tech.includes(tech)));
    }
    return filtered;
  }, [showAll, selectedTechs]);

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]);
  };

  return (
    <section id="work" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-12">
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">{t("label")}</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-50">{showAll ? t("allProjects") : t("title")}</h2>
              <p className="text-zinc-400 mt-4 max-w-xl">
                {showAll ? `${filteredProjects.length} of ${projects.length} projects` : t("subtitle")}
              </p>
            </div>
            {!showAll && (
              <Link href="/projects" className="group inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-full transition-all" aria-label={`${t("viewAll")} (${projects.length})`}>
                {t("viewAll")} ({projects.length})
                <ArrowUpRight size={18} />
              </Link>
            )}
          </div>
        </motion.div>

        {showAll && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Filter size={18} className="text-emerald-400" />
              <span className="text-sm text-zinc-400 font-medium">{t("filterBy")}</span>
              {selectedTechs.length > 0 && (
                <button onClick={() => setSelectedTechs([])} className="ml-2 text-xs text-zinc-500 hover:text-emerald-400 flex items-center gap-1" aria-label={t("clear")}>
                  <X size={14} /> {t("clear")}
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((category) => (
                <div key={category.name} className="flex flex-wrap gap-2 mr-4">
                  <span className="text-xs text-zinc-600 self-center">{category.name}:</span>
                  {category.techs.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => toggleTech(tech)}
                      aria-pressed={selectedTechs.includes(tech)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${selectedTechs.includes(tech) ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600"}`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {!showAll && (
          <div className="space-y-24 mb-24">
            {projects.filter(p => p.link && p.link !== "#").map((project, index) => (
              <CaseStudy
                key={project.name}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        )}

        {showAll && (
          <>
            {/* Case Studies Section - Projects with live links */}
            {filteredProjects.filter(p => p.link && p.link !== "#").length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="mb-20">
                <h3 className="text-2xl font-bold text-zinc-100 mb-12">{t("caseStudies")}</h3>
                <div className="space-y-24">
                  {filteredProjects.filter(p => p.link && p.link !== "#").map((project, index) => (
                    <CaseStudy
                      key={project.name}
                      project={project}
                      index={index}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Grid Projects Section - Projects without live links */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
              {filteredProjects.filter(p => !p.link || p.link === "#").length > 0 && (
                <>
                  <h3 className="text-2xl font-bold text-zinc-100 mb-8">{t("otherProjects")}</h3>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {filteredProjects.filter(p => !p.link || p.link === "#").map((project, index) => (
                      <ProjectCard
                        key={project.name}
                        project={project}
                        index={index}
                        isInView={isInView}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
