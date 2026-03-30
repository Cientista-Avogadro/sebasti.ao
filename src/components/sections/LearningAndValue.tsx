"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle, Globe, ShieldCheck, Waypoints, Wrench, Zap } from "lucide-react";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export function LearningAndValue() {
  const t = useTranslations("learning");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    { icon: Waypoints, title: t("principleA"), description: t("principleADesc") },
    { icon: ShieldCheck, title: t("principleB"), description: t("principleBDesc") },
    { icon: Wrench, title: t("principleC"), description: t("principleCDesc") },
    { icon: Zap, title: t("principleD"), description: t("principleDDesc") },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 block font-mono text-sm tracking-wider text-emerald-400">{t("label")}</span>
          <h2 className="mb-6 font-display text-4xl font-bold text-zinc-50 md:text-5xl">{t("title")}</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">{t("subtitle")}</p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-bold text-zinc-100">
              <Waypoints className="text-emerald-400" size={28} />
              {t("currentlyLearning")}
            </h3>
            <p className="mb-8 text-zinc-400">{t("learningSubtitle")}</p>

            <div className="space-y-4">
              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-emerald-500/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                        <Icon size={22} className="text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-100">{item.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-bold text-zinc-100">
              <Globe className="text-emerald-400" size={28} />
              {t("valueProposition")}
            </h3>
            <p className="mb-8 text-zinc-400">{t("valueSubtitle")}</p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-emerald-500/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Zap size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-zinc-100">{t("endToEnd")}</h4>
                    <p className="text-sm leading-relaxed text-zinc-400">{t("endToEndDesc")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-emerald-500/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Globe size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-zinc-100">{t("international")}</h4>
                    <p className="text-sm leading-relaxed text-zinc-400">{t("internationalDesc")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-emerald-500/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                    <CheckCircle size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-zinc-100">{t("business")}</h4>
                    <p className="text-sm leading-relaxed text-zinc-400">{t("businessDesc")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-950/70">
                    <Globe size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-zinc-100">{t("learner")}</h4>
                    <p className="text-sm leading-relaxed text-zinc-300">{t("learnerDesc")}</p>
                    <div className="mt-4">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-emerald-300 transition-colors hover:text-white"
                      >
                        {t("cta")}
                        <Zap size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
