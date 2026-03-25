"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, ChevronDown, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { Experience, Project as ProjectType } from "@/data/experience";
import { calculateDuration, cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  companyProjects: ProjectType[];
}

export function ExperienceCard({ experience, index, isExpanded, onToggle, companyProjects }: ExperienceCardProps) {
  const t = useTranslations("experience");
  const isLeft = index % 2 === 0;

  const duration = calculateDuration(experience.startDate, experience.endDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className="relative mb-12 md:mb-16 last:mb-0"
    >
      <div className={`relative flex flex-col md:flex-row items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
          <div className={`p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 ${isLeft ? 'md:ml-8' : 'md:mr-8'}`}>
            <button
              onClick={onToggle}
              className="w-full text-left"
              aria-expanded={isExpanded}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Briefcase size={20} className="text-emerald-400" />
                  </div>
                  <div className={isLeft ? 'md:text-right' : 'md:text-left'}>
                    <h3 className="font-display text-xl font-bold text-zinc-100">
                      {experience.company}
                    </h3>
                    <p className="text-emerald-400/80 text-sm font-medium">{experience.role}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-2 rounded-lg bg-zinc-800/50"
                >
                  <ChevronDown size={18} className="text-zinc-400" />
                </motion.div>
              </div>

              <div className={cn(
                "flex flex-wrap items-center gap-3 mb-4 text-xs text-zinc-500",
                isLeft ? "md:justify-end md:mr-16 ml-16 md:ml-0" : "ml-16"
              )}>
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {experience.period}
                </div>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                  {duration.years > 0 && `${duration.years} ${duration.years === 1 ? t('yearsShort') : t('years')} `}
                  {duration.months > 0 && `${duration.months} ${duration.months === 1 ? t('monthsShort') : t('months')}`}
                </span>
                <span className={cn(
                  "px-2 py-0.5 rounded",
                  experience.workType === 'remote' ? 'bg-blue-500/20 text-blue-400' :
                  experience.workType === 'hybrid' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-green-500/20 text-green-400'
                )}>
                  {t(experience.workType)}
                </span>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  {experience.location}
                </div>
              </div>
            </button>

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-zinc-800">
                <p className={cn(
                  "text-zinc-400 text-sm leading-relaxed mb-4",
                  isLeft ? "md:text-right md:mr-16 ml-16 md:ml-0" : "ml-16"
                )}>
                  {t(`${experience.descriptionKey}`)}
                </p>

                <div className={cn(
                  "space-y-4",
                  isLeft ? "md:mr-16 ml-16 md:ml-0" : "ml-16"
                )}>
                  <div>
                    <h4 className={cn(
                      "text-xs text-zinc-500 uppercase tracking-wider mb-3",
                      isLeft ? "md:text-right" : ""
                    )}>{t("keyHighlights")}</h4>
                    <div className="space-y-2">
                      {Array.from({ length: experience.highlightsCount }).map((_, i) => (
                        <div key={i} className={cn(
                          "flex items-start gap-2.5",
                          isLeft ? "md:flex-row-reverse" : ""
                        )}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0" />
                          <span className={cn(
                            "text-sm text-zinc-400",
                            isLeft ? "md:text-right" : ""
                          )}>
                            {t(`${experience.highlightsKey}.${i + 1}`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {companyProjects.length > 0 && (
                    <div>
                      <h4 className={cn(
                        "text-xs text-zinc-500 uppercase tracking-wider mb-3",
                        isLeft ? "md:text-right" : ""
                      )}>{t("projects")}</h4>
                      <div className={cn(
                        "flex flex-wrap gap-2",
                        isLeft ? "md:justify-end" : ""
                      )}>
                        {companyProjects.map((project, i) => (
                          <a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800/50 text-zinc-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all border border-zinc-700/50 hover:border-emerald-500/30"
                          >
                            {project.name}
                            <ExternalLink size={12} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute left-8 md:left-1/2 top-8 transform -translate-x-1/2 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 + 0.2 }}
            className="w-4 h-4 rounded-full bg-zinc-900 border-2 border-emerald-500 z-10"
          >
            <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
          </motion.div>
        </div>

        <div className="hidden md:block flex-1" />
      </div>
    </motion.div>
  );
}
