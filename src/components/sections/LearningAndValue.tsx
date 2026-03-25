"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cloud, Code2, CheckCircle, BookOpen, Target, Zap, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export function LearningAndValue() {
  const t = useTranslations("learning");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">{t("label")}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-zinc-50">{t("title")}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold text-zinc-100 mb-8 flex items-center gap-3">
              <Brain className="text-emerald-400" size={28} />
              {t("currentlyLearning")}
            </h3>
            <p className="text-zinc-400 mb-8">{t("learningSubtitle")}</p>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Brain size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-100">{t("aiLearning")}</h4>
                    <p className="text-xs text-zinc-500">65% {t("complete")}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "65%" } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  {["LLM Integration & Fine-tuning", "Prompt Engineering Advanced", "AI Agents Development"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                      <CheckCircle size={14} className="text-emerald-500" />{item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Cloud size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-100">{t("cloudLearning")}</h4>
                    <p className="text-xs text-zinc-500">40% {t("complete")}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "40%" } : {}}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  {["AWS Solutions Architect", "Azure Fundamentals", "Kubernetes & Docker"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                      <CheckCircle size={14} className="text-emerald-500" />{item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <Code2 size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-100">{t("modernStack")}</h4>
                    <p className="text-xs text-zinc-500">50% {t("complete")}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "50%" } : {}}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  {["Blazor & .NET 8+", "React & Next.js Advanced", "Rust Programming"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                      <CheckCircle size={14} className="text-emerald-500" />{item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-bold text-zinc-100 mb-8 flex items-center gap-3">
              <Target className="text-emerald-400" size={28} />
              {t("valueProposition")}
            </h3>
            <p className="text-zinc-400 mb-8">{t("valueSubtitle")}</p>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Zap size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-100 mb-2">{t("endToEnd")}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{t("endToEndDesc")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Globe size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-100 mb-2">{t("international")}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{t("internationalDesc")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Target size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-100 mb-2">{t("business")}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{t("businessDesc")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-100 mb-2">{t("learner")}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{t("learnerDesc")}</p>
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
