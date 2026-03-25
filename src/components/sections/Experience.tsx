"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { experiences, projects } from "@/data/experience";
import { ExperienceCard } from "./experience/ExperienceCard";

export function Experience() {
  const t = useTranslations("experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCompany, setExpandedCompany] = useState<string | null>(experiences[0].company);

  const getCompanyProjects = (company: string) => {
    return projects.filter(p => p.company === company);
  };

  const toggleCompany = (company: string) => {
    setExpandedCompany(expandedCompany === company ? null : company);
  };

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-transparent via-zinc-900/50 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">{t("label")}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-50">
            {t("title")}
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-emerald-500/50 via-emerald-500/30 to-transparent" />

          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.company}
              experience={exp}
              index={index}
              isExpanded={expandedCompany === exp.company}
              onToggle={() => toggleCompany(exp.company)}
              companyProjects={getCompanyProjects(exp.company)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
