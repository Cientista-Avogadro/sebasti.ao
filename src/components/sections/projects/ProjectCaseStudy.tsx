"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, TrendingUp, Users, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCaseStudyProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export function ProjectCaseStudy({ project, index, isInView }: ProjectCaseStudyProps) {
  const t = useTranslations("projects");
  const isEven = index % 2 === 0;

  const getMetricIcon = (index: number) => {
    switch (index) {
      case 0: return <Users size={16} className="text-emerald-400" />;
      case 1: return <TrendingUp size={16} className="text-emerald-400" />;
      case 2: return <ShieldCheck size={16} className="text-emerald-400" />;
      default: return <CheckCircle2 size={16} className="text-emerald-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative mb-24 last:mb-0"
    >
      <div className={`flex flex-col lg:items-center gap-12 lg:gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        
        {/* Content Side */}
        <div className="flex-1 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Case Study 0{index + 1}
              </span>
              {project.status === "Live" && (
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t("live")}
                </span>
              )}
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl font-bold text-zinc-50 mb-4 group-hover:text-emerald-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-emerald-400/90 text-lg font-medium mb-6">
              {t(project.taglineKey)}
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              {t(project.descriptionKey)}
            </p>
          </div>

          {/* Proof / Stats Summary */}
          {project.stats && (
            <div className="p-6 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/10 backdrop-blur-sm">
              <p className="text-zinc-300 font-medium italic">
                "{t(project.stats)}"
              </p>
            </div>
          )}

          {/* Key Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/20 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    {getMetricIcon(idx)}
                    <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500">
                      {t(metric.labelKey)}
                    </span>
                  </div>
                  <div className="text-xl font-bold text-zinc-100">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-4">
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-zinc-50 hover:text-emerald-400 transition-all group/link"
              >
                <span>{t("viewProject")}</span>
                <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            )}
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-zinc-100 transition-all"
              >
                <Github size={16} />
                <span>{t("source")}</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual Side */}
        <div className="flex-1 relative group/image">
          <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-700" />
          
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 aspect-video">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-top group-hover/image:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                <span className="text-zinc-700 font-display text-4xl font-bold opacity-20 uppercase tracking-widest">
                  {project.name}
                </span>
              </div>
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 via-transparent to-transparent" />
          </div>

          {/* Floating Badge (Visual Proof) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} hidden md:flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl backdrop-blur-xl`}
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <ShieldCheck className="text-emerald-400" size={20} />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Platform Status</div>
              <div className="text-sm font-bold text-zinc-100">Production Ready</div>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
