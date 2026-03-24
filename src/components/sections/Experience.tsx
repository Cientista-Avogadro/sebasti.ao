"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, Building2, ChevronDown, ExternalLink, Briefcase } from "lucide-react";

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
    location: "Luanda, Angola",
    description: "Developing web and mobile applications using React, Next.js, and Node.js. Creating functional and innovative solutions that prioritize user experience for various clients.",
    highlights: [
      "10+ corporate websites and platforms delivered",
      "Smart cities, cybersecurity, education, and transport sectors",
      "Modern tech stack: React, Next.js, TailwindCSS, Vercel",
    ],
  },
  {
    company: "Freelance",
    role: "Senior Frontend Developer",
    period: "Jan 2018 — Presente",
    location: "Remote / Angola",
    description: "Independent development work delivering websites, web apps, mobile apps, desktop applications, and professional reports/invoices.",
    highlights: [
      "HTML5+CSS3+JS Front-End Development (7 years)",
      "React + Next.js Front-End Development (4 years)",
      "Mobile Apps, Desktop Apps, Reports & Invoices",
    ],
  },
  {
    company: "TailorDeal",
    role: "Senior Software Developer | Tech Lead",
    period: "Jan 2024 — Jan 2025",
    location: "Lisbon, Portugal",
    description: "Led strategic technology projects using Blazor and .NET. Developed DealBusinessHub, Europe's leading online marketplace.",
    highlights: [
      "Tech Lead for DealBusinessHub marketplace platform",
      "Technologies: C#, Blazor, .NET 8, Blazorise",
    ],
  },
  {
    company: "ECO Estuda Comigo",
    role: "Senior Software Developer | Tech Lead",
    period: "Nov 2023 — Jan 2025",
    location: "Luanda, Angola",
    description: "Led frontend development for an innovative education technology platform providing high-quality online educational services.",
    highlights: [
      "Frontend Lead for online education platform",
      "Technologies: C#, ASP.NET, MariaDB, Bootstrap",
    ],
  },
  {
    company: "GC-LUCAN",
    role: "Senior Software Engineer | Tech Lead",
    period: "Jul 2022 — Set 2024",
    location: "Belas, Luanda, Angola",
    description: "Led development of multiple enterprise systems including hotel management, ERP solutions, and restaurant management platforms.",
    highlights: [
      "Developed KITANDASOFT suite (ERP, POS, Invoicing)",
      "Hotel Management System with React and Node.js",
      "CRM development with Blazor and .NET 6-8",
    ],
  },
  {
    company: "Kiari Code",
    role: "Frontend Developer",
    period: "Set 2021 — Fev 2024",
    location: "Luanda, Angola",
    description: "Developed company website and Kiari Events application for event management. Modern stack with React, Next.js, and state management.",
    highlights: [
      "Full company website development",
      "Kiari Events: Event organizer and customer app",
    ],
  },
  {
    company: "SNIR",
    role: "Software Developer",
    period: "Fev 2021 — Fev 2024",
    location: "Luanda, Angola",
    description: "Full-stack development for insurance and banking systems. Responsible for backend, reports, and database administration.",
    highlights: [
      "International Insurance System: DBA, Backend, DevOps",
      "NZIMBUPAY Banking Application: Senior Reports, DBA",
    ],
  },
  {
    company: "Zeni Tech",
    role: "Full-Stack Developer",
    period: "Jun 2022 — Set 2022",
    location: "Brasil",
    description: "Worked on website creation, computer systems, landing pages, and bug fixes for Brazilian software company.",
    highlights: [
      "Aligner-Flix Landing Page development",
      "Technologies: React, Angular, PHP, Node.js",
    ],
  },
  {
    company: "XGrow",
    role: "Frontend Developer",
    period: "Jan 2022 — Jul 2022",
    location: "Brasil",
    description: "Frontend development for education platform at Brazilian software factory. Worked on calendar, lives page, and bug fixes.",
    highlights: [
      "Education Platform: Calendar and Lives Page",
      "Technologies: React, Next.js, Chakra UI",
    ],
  },
  {
    company: "Tecla T",
    role: "Frontend Developer",
    period: "Jan 2022 — Jul 2022",
    location: "Brasil",
    description: "Frontend development for international currency transaction application. Developed login flow, exchange calculator, and responsive pages.",
    highlights: [
      "SADOC: Currency exchange and remittance app",
      "Login Flow, Exchange Calculator, Registration forms",
    ],
  },
];

export function Experience() {
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
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">04 — EXPERIENCE</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-50">
            Professional Journey
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl">
            6+ years of experience building production systems across multiple industries and technologies.
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

                        <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-zinc-500 ml-16">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {exp.period}
                          </div>
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
                            {exp.description}
                          </p>

                          <div className="space-y-4 ml-16">
                            <div>
                              <h4 className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Key Highlights</h4>
                              <div className="space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                  <div key={i} className="flex items-start gap-2.5">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 flex-shrink-0" />
                                    <span className="text-sm text-zinc-400">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {companyProjects.length > 0 && (
                              <div>
                                <h4 className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Projects</h4>
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
