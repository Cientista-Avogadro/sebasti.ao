"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const t = useTranslations("projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-500 hover-lift">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-2xl font-bold text-zinc-100">{project.name}</h3>
                {project.featured && (
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {t("featured")}
                  </span>
                )}
              </div>
              <p className="text-emerald-400/80 text-sm font-medium">{t(project.taglineKey)}</p>
            </div>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {t("live")}
            </span>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">{t(project.descriptionKey)}</p>

          <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-zinc-800/30">
            <div>
              <div className="text-xs text-zinc-500 mb-1">{t("role")}</div>
              <div className="text-sm text-zinc-300 font-medium">{t(project.roleKey)}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">{t("impact")}</div>
              <div className="text-sm text-zinc-300 font-medium">{t(project.impactKey)}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("viewProject")}: ${project.name}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <ExternalLink size={16} />
                {t("viewProject")}
              </a>
            )}
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("source")}: ${project.name}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <Github size={16} />
                {t("source")}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
