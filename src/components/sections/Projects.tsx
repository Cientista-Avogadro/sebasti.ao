"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { ExternalLink, Github, ArrowUpRight, Filter, X } from "lucide-react";
import { useTranslations } from "next-intl";

const projects = [
  { name: "ROKIZ Forum", tagline: "Fórum de Desenvolvimento Pessoal", description: "O Fórum de Desenvolvimento Pessoal e Profissional, na sua 4ª edição, destaca-se como uma das principais plataformas para partilhar experiências, conectar e inspirar líderes em Angola.", role: "Senior Software Engineer", impact: "Inspirando líderes em Angola", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://rokiz-forum.com/", github: "#", featured: false },
  { name: "NGOLA SMART", tagline: "Plataforma de Cidades Inteligentes", description: "Apaixonado por cidades inteligentes. Unindo tecnologia, inovação e compromisso para transformar ambientes urbanos em lugares mais eficientes, seguros e sustentáveis.", role: "Senior Software Engineer", impact: "Transformando ambientes urbanos", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://ngolasmart.co.ao/", github: "#", featured: false },
  { name: "UAU SHOW", tagline: "Plataforma de Entretenimento", description: "Plataforma de entretenimento e eventos a mostrar os melhores espectáculos e eventos culturais em Angola.", role: "Senior Software Engineer", impact: "Eventos de entretenimento em Angola", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://uaushow.co.ao/", github: "#", featured: false },
  { name: "ISTO É TERAPIA", tagline: "Centro de Educação Especial", description: "Centro de desenvolvimento dedicado a servir crianças com necessidades educativas especiais, perturbações da fala e perturbações do neurodesenvolvimento.", role: "Senior Software Engineer", impact: "Apoiando crianças com necessidades especiais", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://istoeterapia.co.ao/", github: "#", featured: false },
  { name: "PENTTINALI", tagline: "Serviços de Cibersegurança", description: "Ampla gama de serviços concebidos para proteger a sua empresa contra ameaças cibernéticas, garantir conformidade regulatória e fortalecer a sua segurança operacional.", role: "Senior Software Engineer", impact: "Soluções de cibersegurança", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://penttinali.com/", github: "#", featured: false },
  { name: "AYONAS Transportes", tagline: "Empresa de Transporte Urbano", description: "Empresa de transporte urbano sediada em Luanda, Angola, operando como frota de automóveis em zonas urbanas.", role: "Senior Software Engineer", impact: "Transporte urbano em Luanda", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://ayonas.co.ao/", github: "#", featured: false },
  { name: "OZUNA", tagline: "Engenharia & Infraestrutura", description: "Empresa angolana a actuar há quase 10 anos nas áreas de Engenharia e Infraestrutura com elevado rigor técnico.", role: "Senior Software Engineer", impact: "Soluções de engenharia em Angola", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://ozuna.ao/", github: "#", featured: false },
  { name: "Elizandra Santos", tagline: "Especialista em Desenvolvimento Humano", description: "Especialista em desenvolvimento humano focada em autoconhecimento, inteligência emocional e saúde mental.", role: "Senior Software Engineer", impact: "Capacitando mulheres líderes", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://elizandrasantos.com/", github: "#", featured: false },
  { name: "CAFÊ Platform", tagline: "Gestão Agrícola", description: "Plataforma digital para gestão agrícola moderna concebida para pequenas e médias propriedades.", role: "Senior Software Engineer", impact: "Gestão agrícola", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://cafe.devtest.co.ao/en", github: "#", featured: false },
  { name: "SIKOLASOFT", tagline: "Sistema de Gestão Educacional", description: "O software angolano mais completo para gestão de rotinas administrativas, pedagógicas, académicas e financeiras.", role: "Senior Software Developer", impact: "Gestão de instituições educacionais", tech: ["C#", "ASP.NET", "MariaDB", "DevExpress"], status: "Live", link: "#", github: "#", featured: false },
  { name: "KITANDASOFT Suite", tagline: "Suite de Gestão Empresarial", description: "Suite completa de soluções de gestão empresarial incluindo ERP, POS, gestão de restaurante, faturação e CRM.", role: "Senior Developer & Tech Lead", impact: "Potencializando 50+ empresas", tech: ["C#", "ASP.NET", "MariaDB", "Blazor"], status: "Live", link: "#", github: "#", featured: false },
  { name: "DealBusinessHub", tagline: "Plataforma de Marketplace Europeu", description: "O maior marketplace online da Europa para compra e venda de imóveis e negócios.", role: "Senior Developer & Tech Lead", impact: "Conectando mercados europeus", tech: ["C#", "Blazor", ".NET 8"], status: "Live", link: "#", github: "#", featured: false },
  { name: "Kiari Events", tagline: "Plataforma de Gestão de Eventos", description: "Aplicação completa de eventos com funcionalidades para organizadores e participantes.", role: "Frontend Developer", impact: "Gestão de eventos em Angola", tech: ["React", "Next.js", "Redux", "GraphQL", "Chakra UI"], status: "Live", link: "https://kiarieventos.netlify.app/", github: "#", featured: false },
  { name: "ECO Estuda Comigo", tagline: "Plataforma de Educação Online", description: "Plataforma líder no sector de educação e tecnologia a fornecer serviços educacionais online de alta qualidade.", role: "Senior Developer & Tech Lead", impact: "Educação online em Angola", tech: ["C#", "ASP.NET Core", "MariaDB"], status: "Live", link: "#", github: "#", featured: false },
  { name: "NZIMBUPAY", tagline: "Aplicação Bancária", description: "Aplicação bancária para transacções financeiras com desenvolvimento de relatórios seniores e administração de base de dados.", role: "Full-Stack Developer", impact: "Processamento de transacções bancárias", tech: ["React", "Next.js", "C#", "ASP.NET", "SQL Server"], status: "Live", link: "#", github: "#", featured: false },
  { name: "Hotel Management System", tagline: "Gestão Hoteleira", description: "Sistema completo de gestão hoteleira com reservas, gestão de hóspedes, facturação e funcionalidades operacionais.", role: "Frontend Developer", impact: "Gestão de operações hoteleiras", tech: ["React", "Node.js", "TailwindCSS", "Chakra UI"], status: "Live", link: "https://hotel-management-v1.netlify.app/", github: "#", featured: false },
  { name: "SADOC", tagline: "Plataforma de Câmbios", description: "Aplicação para transacções cambiais internacionais e remessas de valores.", role: "Frontend Developer", impact: "Transacções cambiais internacionais", tech: ["React", "Redux", "Formik", "ViteJS"], status: "Live", link: "https://sadoc-front.netlify.app/", github: "#", featured: true },
  { name: "XGrow", tagline: "Plataforma de Educação", description: "Desenvolvimento de plataforma educacional incluindo funcionalidades de calendário e sessões ao vivo.", role: "Frontend Developer", impact: "Educação online no Brasil", tech: ["React", "Next.js", "Chakra UI", "GitFlow"], status: "Live", link: "https://www.xgrow.com/", github: "#", featured: true },
  { name: "Macovi Sport Club", tagline: "Website de Clube Desportivo", description: "Website moderno e responsivo para um clube desportivo com gestão de eventos e informação de equipas.", role: "Frontend Developer", impact: "Presença digital de clube desportivo", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://macovi-sport-club.vercel.app/", github: "#", featured: true },
  { name: "FEMB", tagline: "Website Corporativo", description: "Website corporativo para empresa de consultoria FEMB a mostrar serviços e soluções empresariais.", role: "Frontend Developer", impact: "Presença digital corporativa", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://femb.ao", github: "#", featured: true },
  { name: "Docampo", tagline: "Plataforma de Gestão de Documentos", description: "Plataforma digital de gestão de documentos para organizar e partilhar documentos de forma segura.", role: "Frontend Developer", impact: "Gestão de documentos", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://docampo.vercel.app/", github: "#", featured: true },
  { name: "St Maze Love", tagline: "Jogo Interactivo", description: "Jogo de labirinto interactivo com jogabilidade envolvente e design moderno.", role: "Frontend Developer", impact: "Experiência de jogo interactiva", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://st-maze-love.vercel.app/", github: "#", featured: true },
  { name: "Mambo Weather App", tagline: "Aplicação Meteorológica", description: "Aplicação meteorológica moderna com previsões em tempo real e interface atractiva.", role: "Frontend Developer", impact: "Plataforma de informação meteorológica", tech: ["React", "Next.js", "TailwindCSS", "Vercel"], status: "Live", link: "https://mambo-weather-app.vercel.app/", github: "#", featured: false },
];

interface ProjectsProps { showAll?: boolean; }
const filterCategories = [
  { name: "Frontend", techs: ["React", "Next.js", "TailwindCSS", "Chakra UI", "Redux"] },
  { name: "Backend", techs: ["C#", ".NET", "ASP.NET", "Blazor", "Node.js"] },
  { name: "Database", techs: ["MariaDB", "SQL Server"] },
  { name: "Tools", techs: ["Vercel"] }
];

export function Projects({ showAll = false }: ProjectsProps) {
  const t = useTranslations("projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    let filtered = showAll ? projects : projects.filter(p => p.featured);
    if (selectedTechs.length > 0) {
      filtered = filtered.filter(project => selectedTechs.some(tech => project.tech.includes(tech)));
    }
    return filtered;
  }, [showAll, selectedTechs]);

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]);
  };

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-12">
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">{t("label")}</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-50">{showAll ? t("allProjects") : t("title")}</h2>
              <p className="text-zinc-400 mt-4 max-w-xl">{showAll ? `${filteredProjects.length} of ${projects.length} projects` : t("subtitle")}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {!showAll && (
                <a href="/projects" className="group inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-full transition-all">
                  {t("viewAll")} ({projects.length})
                  <ArrowUpRight size={18} />
                </a>
              )}
              <a href="https://github.com/Cientista-Avogadro" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium">
                GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {showAll && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Filter size={18} className="text-emerald-400" />
              <span className="text-sm text-zinc-400 font-medium">{t("filterBy")}</span>
              {selectedTechs.length > 0 && (
                <button onClick={() => setSelectedTechs([])} className="ml-2 text-xs text-zinc-500 hover:text-emerald-400 flex items-center gap-1">
                  <X size={14} /> {t("clear")}
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((category) => (
                <div key={category.name} className="flex flex-wrap gap-2 mr-4">
                  <span className="text-xs text-zinc-600 self-center">{category.name}:</span>
                  {category.techs.map((tech) => (
                    <button key={tech} onClick={() => toggleTech(tech)} className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${selectedTechs.includes(tech) ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600"}`}>
                      {tech}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div key={project.name} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="group relative">
              <div className="relative rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-500 hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-2xl font-bold text-zinc-100">{project.name}</h3>
                        {project.featured && <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">{t("featured") || "Featured"}</span>}
                      </div>
                      <p className="text-emerald-400/80 text-sm font-medium">{project.tagline}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{t("live")}</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-6">{project.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-zinc-800/30">
                    <div><div className="text-xs text-zinc-500 mb-1">{t("role")}</div><div className="text-sm text-zinc-300 font-medium">{project.role}</div></div>
                    <div><div className="text-xs text-zinc-500 mb-1">{t("impact")}</div><div className="text-sm text-zinc-300 font-medium">{project.impact}</div></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">{project.tech.map((tech) => (<span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400">{tech}</span>))}</div>
                  <div className="flex items-center gap-4">
                    {project.link !== "#" && (<a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-emerald-400"><ExternalLink size={16} />{t("viewProject")}</a>)}
                    {project.github !== "#" && (<a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-emerald-400"><Github size={16} />{t("source")}</a>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
