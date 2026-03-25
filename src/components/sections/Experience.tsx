"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { MapPin, Calendar, Building2, ChevronDown, ExternalLink, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";

function calculateDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate + "-01");
  const end = endDate ? new Date(endDate + "-01") : new Date();
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  if (years === 0) {
    return `${months} ${months === 1 ? 'mês' : 'meses'}`;
  } else if (months === 0) {
    return `${years} ${years === 1 ? 'ano' : 'anos'}`;
  } else {
    return `${years} ${years === 1 ? 'ano' : 'anos'} ${months} ${months === 1 ? 'mês' : 'meses'}`;
  }
}

const projects = [
  { name: "ROKIZ Forum", company: "DevTest", link: "https://rokiz-forum.com/" },
  { name: "NGOLA SMART", company: "DevTest", link: "https://ngolasmart.co.ao/" },
  { name: "UAU SHOW", company: "DevTest", link: "https://uaushow.co.ao/" },
  { name: "ISTO É TERAPIA", company: "DevTest", link: "https://istoeterapia.co.ao/" },
  { name: "PENTTINALI", company: "DevTest", link: "https://penttinali.com/" },
  { name: "AYONAS Transportes", company: "DevTest", link: "https://ayonas.co.ao/" },
  { name: "OZUNA", company: "DevTest", link: "https://ozuna.ao/" },
  { name: "Elizandra Santos", company: "DevTest", link: "https://elizandrasantos.com/" },
  { name: "CAFÊ Platform", company: "DevTest", link: "https://cafe.devtest.co.ao/en" },
  { name: "Kibera", company: "DevTest", link: "#" },
  { name: "SIKOLASOFT", company: "GC-LUCAN", link: "#" },
  { name: "KITANDASOFT Suite", company: "GC-LUCAN", link: "#" },
  { name: "Hotel Management", company: "GC-LUCAN", link: "https://hotel-management-v1.netlify.app/" },
  { name: "DealBusinessHub", company: "TailorDeal", link: "#" },
  { name: "ECO Estuda Comigo", company: "ECO Estuda Comigo", link: "#" },
  { name: "Kiari Events", company: "Kiari Code", link: "https://kiarieventos.netlify.app/" },
  { name: "Kiari Website", company: "Kiari Code", link: "#" },
  { name: "International Insurance", company: "SNIR", link: "#" },
  { name: "NZIMBUPAY", company: "SNIR", link: "#" },
  { name: "SADOC", company: "Tecla T", link: "https://sadoc-front.netlify.app/" },
  { name: "XGrow", company: "XGrow", link: "https://www.xgrow.com/" },
  { name: "Aligner-Flix", company: "Zeni Tech", link: "https://alignerplay.com.br/" },
  { name: "FEMB Website", company: "Freelance", link: "https://femb.ao" },
  { name: "FEMB Farmácia", company: "Freelance", link: "https://farmacia.femb.ao" },
  { name: "Macovi Sport Club", company: "Freelance", link: "https://macovi-sport-club.vercel.app/" },
  { name: "Docampo", company: "Freelance", link: "https://docampo.vercel.app/" },
  { name: "St Maze Love", company: "Freelance", link: "https://st-maze-love.vercel.app/" },
  { name: "Mambo Weather", company: "Freelance", link: "https://mambo-weather-app.vercel.app/" },
];

const experiences = [
  {
    company: "DevTest",
    role: "Senior Software Engineer",
    period: "Out 2024 — Presente",
    startDate: "2024-10",
    endDate: null,
    location: "Luanda, Angola",
    workType: "Híbrida",
    description: "Team Lead responsável por todo o departamento de desenvolvimento. Construindo aplicações web, desktop e mobile empresariais usando tecnologias de ponta. Desenvolvimento Full-Stack com foco em Excelência Frontend, otimização SEO e experiência do utilizador.",
    highlights: [
      "10+ websites e plataformas empresariais entregues",
      "Team Lead: Gestão e mentoria da equipa de desenvolvimento",
      "Frontend & Full-Stack em projectos usando Next.js, PayloadCMS, Hasura Cloud",
      "Aplicações otimizadas para SEO, mobile-first e user-friendly",
      "Apps desktop com Tauri & Electron (CAFÉ Platform)",
      "React Native para projectos mobile internos",
      "Integração de analytics com Microsoft Clarity para insights de performance",
      "Setores: smart cities, cibersegurança, educação e transporte",
    ],
  },
  {
    company: "TailorDeal",
    role: "Senior Developer | Tech Lead",
    period: "Jan 2024 — Jan 2025",
    startDate: "2024-01",
    endDate: "2025-01",
    location: "Lisbon, Portugal",
    workType: "Remota",
    description: "Tech Lead para o maior marketplace online da Europa para transacções imobiliárias e empresariais. Arquitetou soluções escaláveis usando Blazor e .NET 8.",
    highlights: [
      "Tech Lead do DealBusinessHub - maior marketplace da Europa",
      "Plataforma Blazor/.NET 8 escalável para o mercado europeu",
      "Stack: C#, Blazor, .NET 8, Blazorise, PostgreSQL",
    ],
  },
  {
    company: "ECO Estuda Comigo",
    role: "Senior Developer | Tech Lead",
    period: "Nov 2023 — Jan 2025",
    startDate: "2023-11",
    endDate: "2025-01",
    location: "Luanda, Angola",
    workType: "Remota",
    description: "Frontend Tech Lead da plataforma angolana de tecnologia educacional inovadora. Entregando serviços educacionais online de alta qualidade para estudantes em todo o país.",
    highlights: [
      "Frontend Tech Lead da plataforma de educação online",
      "Construção de dashboards responsivos e interfaces de aprendizagem",
      "Stack: React, C#, ASP.NET Core, MariaDB, Bootstrap",
    ],
  },
  {
    company: "GC-LUCAN",
    role: "Senior Software Engineer | Tech Lead",
    period: "Jul 2022 — Set 2024",
    startDate: "2022-07",
    endDate: "2024-09",
    location: "Belas, Luanda, Angola",
    workType: "Híbrido",
    description: "Liderou o desenvolvimento de soluções de software de nível empresarial servindo mais de 300 empresas em Angola. Arquitetou e entregou sistemas completos de gestão gerando mais de 50M Kz de receita anual dos clientes.",
    highlights: [
      "300+ empresas activas usando as nossas soluções de software",
      "50M+ Kz de receita anual dos clientes processada pelos nossos sistemas",
      "Hotel System: Gestão hoteleira completa com React, Node.js, Chakra UI",
      "SIKOLASOFT: Software de gestão educacional angolano mais completo",
      "KITANDASOFT Suite: ERP, POS, restaurante, faturação, CRM",
      "Stack: C#, ASP.NET, WebForms, Blazor, .NET 6-8, MariaDB",
    ],
  },
  {
    company: "Zeni Tech",
    role: "Full-Stack Developer",
    period: "Jun 2022 — Set 2022",
    startDate: "2022-06",
    endDate: "2022-09",
    location: "Brasil",
    workType: "Remoto",
    description: "Desenvolvedor Full-Stack para empresa de software brasileira. Construiu landing pages e aplicações web para clientes ed-tech.",
    highlights: [
      "Aligner-Flix: Landing page de produção para ed-tech brasileira",
      "Desenvolvimento full-stack: do frontend ao backend",
      "Stack: ReactJS, Angular, PHP, Node.js, WordPress, Chakra UI",
    ],
  },
  {
    company: "XGrow",
    role: "Front-End Developer",
    period: "Jan 2022 — Jul 2022",
    startDate: "2022-01",
    endDate: "2022-07",
    location: "Brasil",
    workType: "Remoto",
    description: "Desenvolvedor Frontend para fábrica de software brasileira. Construiu e manteve funcionalidades da plataforma educacional para milhares de estudantes.",
    highlights: [
      "Plataforma Educacional: Calendário, Página de Lives e funcionalidades principais",
      "Resolução de bugs e implementação de funcionalidades",
      "Stack: React, Next.js, Chakra UI, GitFlow, Jira, BitBucket",
    ],
  },
  {
    company: "Tecla T",
    role: "Front-End Developer",
    period: "Jan 2022 — Jul 2022",
    startDate: "2022-01",
    endDate: "2022-07",
    location: "Brasil",
    workType: "Remoto",
    descriptionKey: "sadoc.description",
    highlightsKey: "sadoc.highlights",
    highlights: [
      "sadoc.highlight1",
      "sadoc.highlight2",
      "Stack: React, ViteJS, Redux, Formik, Yup, Axios, Adobe XD",
    ],
  },
  {
    company: "Kiari Code",
    role: "Frontend Developer",
    period: "Set 2021 — Fev 2024",
    startDate: "2021-09",
    endDate: "2024-02",
    location: "Luanda, Angola",
    workType: "Presencial",
    description: "Desenvolvedor Frontend a construir plataforma de gestão de eventos para o mercado angolano. Desenvolveu aplicação web completa com ecossistema React moderno.",
    highlights: [
      "Desenvolvimento completo do website da empresa",
      "Kiari Events: Organizador de eventos e app para clientes com React, Redux, GraphQL",
      "Stack: React, Next.js, Redux, GraphQL, Chakra UI",
    ],
  },
  {
    company: "SNIR",
    role: "Software Developer",
    period: "Fev 2021 — Fev 2024",
    startDate: "2021-02",
    endDate: "2024-02",
    location: "Luanda, Angola",
    workType: "Presencial",
    description: "Desenvolvedor Full-Stack para empresa angolana de serviços financeiros. Construiu sistemas de seguros e banca empresariais lidando com dados financeiros sensíveis.",
    highlights: [
      "International Insurance: Sistema completo de gestão de seguros - DBA, Backend, DevOps",
      "NZIMBUPAY: Aplicação bancária com desenvolvimento de relatórios seniores",
      "Stack: React, Next.js, C#, ASP.NET, SQL Server, Docker, DevExpress, Python, GraphQL",
    ],
  },
];

export function Experience() {
  const t = useTranslations("experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  const getCompanyProjects = (company: string) => {
    return projects.filter(p => p.company === company);
  };

  const toggleCompany = (company: string) => {
    setExpandedCompany(expandedCompany === company ? null : company);
  };

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-zinc-900/50 to-transparent" />
      
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
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/30 to-transparent" />

          {experiences.map((exp, index) => {
            const companyProjects = getCompanyProjects(exp.company);
            const isExpanded = expandedCompany === exp.company;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
                className="relative mb-12 md:mb-16 last:mb-0"
              >
                <div className={`relative flex flex-col md:flex-row items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className={`p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 ${isLeft ? 'md:ml-8' : 'md:mr-8'}`}>
                      <button
                        onClick={() => toggleCompany(exp.company)}
                        className="w-full text-left"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                              <Briefcase size={20} className="text-emerald-400" />
                            </div>
                            <div>
                              <h3 className="font-display text-xl font-bold text-zinc-100">
                                {exp.company}
                              </h3>
                              <p className="text-emerald-400/80 text-sm font-medium">{exp.role}</p>
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

                        <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-zinc-500 ml-16">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {exp.period}
                          </div>
                          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                            {calculateDuration(exp.startDate, exp.endDate)}
                          </span>
                          <span className={`px-2 py-0.5 rounded ${
                            exp.workType === 'Remota' ? 'bg-blue-500/20 text-blue-400' :
                            exp.workType === 'Híbrida' ? 'bg-amber-500/20 text-amber-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {exp.workType}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={12} />
                            {exp.location}
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
                          <p className="text-zinc-400 text-sm leading-relaxed mb-4 ml-16">
                            {exp.descriptionKey ? t(exp.descriptionKey) : exp.description}
                          </p>

                          <div className="space-y-4 ml-16">
                            <div>
                              <h4 className="text-xs text-zinc-500 uppercase tracking-wider mb-3">{t("keyHighlights")}</h4>
                              <div className="space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                  <div key={i} className="flex items-start gap-2.5">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 flex-shrink-0" />
                                    <span className="text-sm text-zinc-400">
                                      {highlight.startsWith('sadoc.') ? t(highlight) : highlight}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {companyProjects.length > 0 && (
                              <div>
                                <h4 className="text-xs text-zinc-500 uppercase tracking-wider mb-3">{t("projects")}</h4>
                                <div className="flex flex-wrap gap-2">
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
                      animate={isInView ? { scale: 1 } : {}}
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
          })}
        </div>
      </div>
    </section>
  );
}
