"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

export function About() {
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
            <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">01 — ABOUT</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-zinc-50">
              Engineering production systems that 
              <span className="text-zinc-500"> scale internationally</span>
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                I'm a <span className="text-zinc-200 font-medium">Senior Software Engineer</span> with 6+ years of experience building enterprise-grade systems. I specialize in <span className="text-emerald-400 font-medium">Frontend Engineering</span> and <span className="text-emerald-400 font-medium">Full-Stack Development</span>, delivering production-ready applications for businesses across Angola, Europe, and Brazil.
              </p>
              <p>
                As a <span className="text-emerald-400 font-medium">Tech Lead</span>, I've architected and shipped complex systems including ERP, CRM, POS, hotel management, and education platforms. My expertise in <span className="text-emerald-400 font-medium">C#/.NET</span> and <span className="text-emerald-400 font-medium">React/Next.js</span> enables me to build complete solutions end-to-end.
              </p>
              <p>
                I'm passionate about <span className="text-emerald-400 font-medium">AI Integration</span>, bringing intelligent features to production systems through LLM integration, prompt engineering, and AI-powered automation.
              </p>
              <p>
                Currently pursuing my <span className="text-emerald-400 font-medium">Bachelor's in Computer Science</span> at ISPM Angola. Based in Luanda, Angola — available for remote opportunities worldwide.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="px-6 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl font-display font-bold text-emerald-400">6+</div>
                <div className="text-sm text-zinc-500">Years Experience</div>
              </div>
              <div className="px-6 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl font-display font-bold text-emerald-400">30+</div>
                <div className="text-sm text-zinc-500">Projects Delivered</div>
              </div>
              <div className="px-6 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl font-display font-bold text-emerald-400">9</div>
                <div className="text-sm text-zinc-500">Companies Served</div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap size={20} className="text-emerald-400" />
                  <h4 className="font-display font-semibold text-zinc-100">Education</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-zinc-300 text-sm font-medium">
                      Bachelor's in Computer Science
                    </p>
                    <p className="text-zinc-500 text-xs">
                      Instituto Superior Politécnico Metropolitano de Angola (2023 - 2028)
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-300 text-sm font-medium">
                      Systems Analysis & Development
                    </p>
                    <p className="text-zinc-500 text-xs">
                      Faculdade AIEC (Expected: Feb 2026)
                    </p>
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
