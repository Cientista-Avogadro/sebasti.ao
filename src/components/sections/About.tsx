"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">{t("label")}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-zinc-50">
              {t("title")} 
              <span className="text-emerald-400"> {t("titleHighlight")}</span>
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t("p1")
                .replace(/Frontend Engineering/g, '<span class="text-emerald-400">Frontend Engineering</span>')
                .replace(/Engenharia Frontend/g, '<span class="text-emerald-400">Engenharia Frontend</span>')
                .replace(/Full-Stack Development/g, '<span class="text-emerald-400">Full-Stack Development</span>')
                .replace(/Desenvolvimento Full-Stack/g, '<span class="text-emerald-400">Desenvolvimento Full-Stack</span>')
              }} />
              <p dangerouslySetInnerHTML={{ __html: t("p2")
                .replace(/Tech Lead/g, '<span class="text-emerald-400">Tech Lead</span>')
                .replace(/ERP, CRM, POS/g, '<span class="text-emerald-400">ERP, CRM, POS</span>')
                .replace(/C#\/.NET/g, '<span class="text-emerald-400">C#/.NET</span>')
                .replace(/React\/Next\.js/g, '<span class="text-emerald-400">React/Next.js</span>')
              }} />
              <p dangerouslySetInnerHTML={{ __html: t("p3")
                .replace(/AI Integration/g, '<span class="text-emerald-400">AI Integration</span>')
                .replace(/Integração de IA/g, '<span class="text-emerald-400">Integração de IA</span>')
                .replace(/LLM/g, '<span class="text-emerald-400">LLM</span>')
                .replace(/prompt engineering/g, '<span class="text-emerald-400">prompt engineering</span>')
                .replace(/engenharia de prompts/g, '<span class="text-emerald-400">engenharia de prompts</span>')
              }} />
              <p dangerouslySetInnerHTML={{ __html: t("p4")
                .replace(/Ciências da Computação/g, '<span class="text-emerald-400">Ciências da Computação</span>')
                .replace(/Análise e Desenvolvimento de Sistemas/g, '<span class="text-emerald-400">Análise e Desenvolvimento de Sistemas</span>')
                .replace(/AIEC/g, '<span class="text-emerald-400">AIEC</span>')
              }} />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="px-6 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl font-display font-bold text-emerald-400">6+</div>
                <div className="text-sm text-zinc-500">{t("years")}</div>
              </div>
              <div className="px-6 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl font-display font-bold text-emerald-400">30+</div>
                <div className="text-sm text-zinc-500">{t("projects")}</div>
              </div>
              <div className="px-6 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl font-display font-bold text-emerald-400">9</div>
                <div className="text-sm text-zinc-500">{t("companies")}</div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap size={20} className="text-emerald-400" />
                  <h4 className="font-display font-semibold text-zinc-100">{t("education")}</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-zinc-300 text-sm font-medium">{t("ipil")}</p>
                    <p className="text-zinc-500 text-xs">{t("ipilSchool")}</p>
                    <p className="text-zinc-600 text-xs">Nota: {t("ipilGrade")}</p>
                    <p className="text-emerald-400/70 text-xs mt-1">Projecto: {t("ipilProject")}</p>
                  </div>
                  <div>
                    <p className="text-zinc-300 text-sm font-medium">{t("bachelor")}</p>
                    <p className="text-zinc-500 text-xs">{t("bachelorSchool")}</p>
                  </div>
                  <div>
                    <p className="text-zinc-300 text-sm font-medium">{t("systems")}</p>
                    <p className="text-zinc-500 text-xs">{t("systemsSchool")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-emerald-500/10" />
              <img
                src="/myphoto.jpg"
                alt="Sebastião de Sousa Moniz"
                className="w-full aspect-[4/5] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-900/90 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <span className="text-lg font-bold text-emerald-400">SM</span>
                  </div>
                  <div>
                    <p className="text-zinc-100 font-semibold">Sebastião de Sousa Moniz</p>
                    <p className="text-emerald-400 text-sm">Senior Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
