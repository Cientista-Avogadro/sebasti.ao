"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Project } from "@/data/projects";

interface CaseStudyProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export function CaseStudy({ project, index, isInView }: CaseStudyProps) {
  const t = useTranslations("projects");
  const isEvenIndex = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content side */}
        <div className={`order-2 ${isEvenIndex ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative">
            {/* Background accent */}
            <div className="absolute -inset-4 bg-linear-to-br from-emerald-500/10 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative space-y-6">
              <div>
                <span className="text-emerald-400 font-mono text-sm tracking-wider">Case Study {String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-zinc-50 mt-3">{project.name}</h3>
                <p className="text-lg text-emerald-400/90 font-medium mt-2">{t(project.taglineKey)}</p>
              </div>

              <p className="text-zinc-400 leading-relaxed text-base max-w-lg">
                {t(project.descriptionKey)}
              </p>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-zinc-800">
                  {project.metrics.map((metric) => (
                    <div key={metric.labelKey} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-emerald-400" />
                        <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{t(metric.labelKey)}</span>
                      </div>
                      <p className="text-2xl font-bold text-zinc-100">{metric.value}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-3 pt-2">
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider mb-2 block">Scope</span>
                  <p className="text-sm text-zinc-300">{t(project.roleKey)}</p>
                </div>
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider mb-2 block">Impact</span>
                  <p className="text-sm text-zinc-300">{t(project.impactKey)}</p>
                </div>
              </div>

              {/* Tech Stack */}
              {project.tech && Array.isArray(project.tech) && project.tech.length > 0 && (
                <div className="pt-4">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider mb-3 block">Built With</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex items-center gap-4 pt-4">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    <ExternalLink size={18} />
                    View Live
                  </a>
                )}
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold rounded-lg transition-all border border-zinc-700 hover:border-zinc-600"
                  >
                    <Github size={18} />
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Visual side - Screenshot/Image placeholder */}
        <div className={`order-1 ${isEvenIndex ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative group/image">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500 via-emerald-500 to-transparent rounded-2xl opacity-20 blur-3xl group-hover/image:opacity-30 transition-opacity duration-700" />
            
            <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-zinc-800 to-zinc-900 border border-zinc-700 group-hover/image:border-emerald-500/30 transition-all duration-500 shadow-2xl aspect-video">
              {(project.image || (project.link !== "#")) ? (
                <Image
                  src={project.image || `https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={project.name}
                  fill
                  className="object-cover object-top group-hover/image:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized={!project.image}
                />
              ) : (
                <div className="aspect-video flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="text-4xl font-bold text-emerald-400/20">{project.name}</div>
                    <p className="text-sm text-zinc-500">Screenshot coming soon</p>
                    <div className="pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
                      >
                        Visit Project
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
