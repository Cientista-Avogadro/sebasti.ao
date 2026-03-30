"use client";

import { motion, useInView } from "framer-motion";
import { Boxes, LandPlot, ReceiptText, Workflow } from "lucide-react";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const icons = {
  Boxes,
  LandPlot,
  ReceiptText,
  Workflow,
};

export function Expertise() {
  const t = useTranslations("expertise");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expertiseItems = [
    {
      icon: "Boxes",
      title: t("frontendTitle"),
      description: t("frontendDesc"),
      skills: ["Tenant isolation", "Role-based access", "Operational workflows"],
    },
    {
      icon: "ReceiptText",
      title: t("fullstackTitle"),
      description: t("fullstackDesc"),
      skills: ["Invoicing", "POS", "Receivables", "Reporting"],
    },
    {
      icon: "LandPlot",
      title: t("aiTitle"),
      description: t("aiDesc"),
      skills: ["Crop planning", "Irrigation tracking", "Inventory", "Field data"],
    },
    {
      icon: "Workflow",
      title: t("systemTitle"),
      description: t("systemDesc"),
      skills: ["Internal tools", "Admin platforms", "Business automation"],
    },
  ];

  return (
    <section id="expertise" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-zinc-900/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-20 text-center"
        >
          <span className="mb-4 block font-mono text-sm tracking-wider text-emerald-400">{t("label")}</span>
          <h2 className="mb-6 font-display text-4xl font-bold text-zinc-50 md:text-5xl">{t("title")}</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">{t("subtitle")}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {expertiseItems.map((item, index) => {
            const IconComponent = icons[item.icon as keyof typeof icons];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-500 hover-lift hover:border-emerald-500/30"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 transition-colors group-hover:bg-emerald-500/20">
                    {IconComponent ? <IconComponent className="h-7 w-7 text-emerald-400" /> : null}
                  </div>

                  <h3 className="mb-4 font-display text-xl font-semibold text-zinc-100">{item.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-400">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400 transition-colors group-hover:border-emerald-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
