"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, ExternalLink, ArrowRight } from "lucide-react";

const education = [
  {
    institution: "Faculdade AIEC",
    degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    period: "Fev 2026",
    description: "Análise, modelagem e desenvolvimento de sistemas de informação, com ênfase em programação, banco de dados, engenharia de software e metodologias ágeis.",
    type: "Bachelor",
  },
  {
    institution: "Instituto Superior Politécnico Metropolitano de Angola",
    degree: "Licenciatura em Ciência da Computação",
    period: "Out 2023 - Jul 2028",
    description: "Estudos avançados em ciência da computação. Nota: 18-20 Valores.",
    type: "Degree",
    grade: "18-20 Valores",
  },
  {
    institution: "IPIL (Makarenco)",
    degree: "Ensino Médio - Informática",
    period: "Fev 2018 - Jun 2022",
    description: "Formação secundária com foco em informática. Nota: 17 Valores. Projeto: Sistema de Publicação e Agendamento de Eventos.",
    type: "High School",
    grade: "17 Valores",
  },
];

const featuredCertifications = [
  {
    name: "ReactJS",
    institution: "Coodesh",
    period: "Dez 2021",
    grade: "Verified",
    link: "https://coodesh.com/share/certificate/806fcf10-5911-11ec-9234-3b58449a3098",
  },
  {
    name: "JavaScript ES6",
    institution: "DIO",
    period: "Nov 2021",
    grade: "100%",
    link: "https://www.dio.me/certificate/2D7B1EB5/share",
  },
  {
    name: "TypeScript",
    institution: "DIO",
    period: "Nov 2021",
    grade: "100%",
    link: "https://www.dio.me/certificate/B48A69DD/share",
  },
  {
    name: "React Advanced",
    institution: "DIO",
    period: "Nov 2021",
    grade: "100%",
    link: "https://www.dio.me/certificate/F653B736/share",
  },
  {
    name: "Blazor .NET",
    institution: "Udemy",
    period: "Nov 2021",
    grade: "90%",
    link: null,
  },
];

const totalCertifications = 15;

export function Education() {
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
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">06 — EDUCATION</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-50">
            Education & Certifications
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl">
            Academic background and professional certifications in software development.
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
              <h3 className="font-display text-2xl font-bold text-zinc-100">Academic Background</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-display text-lg font-semibold text-zinc-100">
                        {edu.institution}
                      </h4>
                      <p className="text-emerald-400/80 text-sm font-medium">
                        {edu.degree}
                      </p>
                    </div>
                    {edu.grade && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 mb-3">{edu.period}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Award size={24} className="text-emerald-400" />
                <h3 className="font-display text-2xl font-bold text-zinc-100">Certifications</h3>
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {totalCertifications} Total
              </span>
            </div>

            <div className="space-y-3">
              {featuredCertifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Award size={18} className="text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-100 text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-zinc-500">
                        {cert.institution} • {cert.period}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {cert.grade}
                    </span>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/courses"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group flex items-center justify-center gap-2 mt-6 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
            >
              <span className="text-emerald-400 font-medium">View all {totalCertifications} certifications</span>
              <ArrowRight size={18} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="mt-8 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={20} className="text-emerald-400" />
                <h4 className="font-display text-lg font-semibold text-zinc-100">
                  Technical Course
                </h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">Ensino Técnico - Electrónica Geral</span>
                  <span className="text-xs text-emerald-400">Nota: 19</span>
                </div>
                <p className="text-xs text-zinc-500">Mapess (Inefop)</p>
                <p className="text-xs text-zinc-400">
                  Criação de Circuitos, Multivibradores, Foto Células, Sistemas de Alarmes, Sensores
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
