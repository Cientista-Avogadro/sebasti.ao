"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";

export function Education() {
  const t = useTranslations("education");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-emerald-500/[0.02] to-transparent" />

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

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={24} className="text-emerald-400" />
              <h3 className="font-display text-2xl font-bold text-zinc-100">{t("academic")}</h3>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-zinc-100">Instituto Superior Politécnico Metropolitano de Angola</h4>
                    <p className="text-emerald-400/80 text-sm font-medium">Licenciatura em Ciência da Computação</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    18-20 Valores
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mb-3">Out 2023 - Jul 2028</p>
                <p className="text-sm text-zinc-400 leading-relaxed">Formação superior centrada em algoritmos, estruturas de dados, arquitetura de software, bases de dados e engenharia de sistemas.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-zinc-100">Faculdade AIEC</h4>
                    <p className="text-emerald-400/80 text-sm font-medium">Tecnologia em Análise e Desenvolvimento de Sistemas</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Fev 2026
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mb-3">Previsto: Fev 2026</p>
                <p className="text-sm text-zinc-400 leading-relaxed">Curso orientado para levantamento de requisitos, modelagem de processos, desenvolvimento de aplicações e manutenção de sistemas usados em contexto empresarial.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-zinc-100">IPIL (Makarenco)</h4>
                    <p className="text-emerald-400/80 text-sm font-medium">Ensino Médio - Informática</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    17 Valores
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mb-3">Fev 2018 - Jun 2022</p>
                <p className="text-sm text-zinc-400 leading-relaxed">Base técnica em programação, redes, hardware e fundamentos de sistemas, com foco prático em resolução de problemas e uso profissional da informática.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={20} className="text-emerald-400" />
                <h3 className="font-display text-lg font-semibold text-zinc-100">{t("technical")}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">Ensino Técnico - Electrónica Geral</span>
                  <span className="text-xs text-emerald-400">Nota: 19</span>
                </div>
                <p className="text-xs text-zinc-500">Mapess (Inefop)</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="font-display text-lg font-semibold text-zinc-100 mb-4">{t("focusTitle")}</h3>
              <div className="space-y-3 text-sm text-zinc-400">
                <p>{t("focusA")}</p>
                <p>{t("focusB")}</p>
                <p>{t("focusC")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
