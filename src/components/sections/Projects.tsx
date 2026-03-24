"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { ExternalLink, Github, ArrowUpRight, Filter, X } from "lucide-react";

const projects = [
  {
    name: "ROKIZ Forum",
    company: "DevTest",
    tagline: "Personal Development Forum",
    description: "The Forum of Personal and Professional Development, in its 4th edition, stands as one of the main platforms for sharing experiences, connecting and inspiring leaders in Angola.",
    role: "Senior Software Engineer",
    impact: "Inspiring leaders across Angola",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://rokiz-forum.com/",
    github: "#",
    featured: false,
  },
  {
    name: "NGOLA SMART",
    company: "DevTest",
    tagline: "Smart Cities Platform",
    description: "Passionate about smart cities. Uniting technology, innovation and commitment to transform urban environments into more efficient, safe and sustainable places.",
    role: "Senior Software Engineer",
    impact: "Transforming urban environments in Angola",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://ngolasmart.co.ao/",
    github: "#",
    featured: false,
  },
  {
    name: "UAU SHOW",
    company: "DevTest",
    tagline: "Entertainment Platform",
    description: "Entertainment and events platform showcasing the best shows and cultural events in Angola.",
    role: "Senior Software Engineer",
    impact: "Entertainment events in Angola",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://uaushow.co.ao/",
    github: "#",
    featured: false,
  },
  {
    name: "ISTO É TERAPIA",
    company: "DevTest",
    tagline: "Special Education Center",
    description: "Development center dedicated to serving children with special educational needs, speech disorders and neurodevelopmental disorders.",
    role: "Senior Software Engineer",
    impact: "Supporting children with special needs",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://istoeterapia.co.ao/",
    github: "#",
    featured: false,
  },
  {
    name: "PENTTINALI",
    company: "DevTest",
    tagline: "Cybersecurity Services",
    description: "Wide range of services designed to protect your company against cyber threats, ensure regulatory compliance and strengthen your operational security.",
    role: "Senior Software Engineer",
    impact: "Cybersecurity solutions",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://penttinali.com/",
    github: "#",
    featured: false,
  },
  {
    name: "AYONAS Transportes",
    company: "DevTest",
    tagline: "Urban Transport Company",
    description: "Urban transport company based in Luanda, Angola, operating as a fleet of automobiles in urban zones.",
    role: "Senior Software Engineer",
    impact: "Urban transport in Luanda",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://ayonas.co.ao/",
    github: "#",
    featured: false,
  },
  {
    name: "OZUNA",
    company: "DevTest",
    tagline: "Engineering & Infrastructure",
    description: "Angolan company acting for almost 10 years in Engineering and Infrastructure areas with high technical rigor.",
    role: "Senior Software Engineer",
    impact: "Engineering solutions in Angola",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://ozuna.ao/",
    github: "#",
    featured: false,
  },
  {
    name: "Elizandra Santos",
    company: "DevTest",
    tagline: "Human Development Specialist",
    description: "Specialist in human development focused on self-knowledge, emotional intelligence and mental health.",
    role: "Senior Software Engineer",
    impact: "Empowering women leaders",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://elizandrasantos.com/",
    github: "#",
    featured: false,
  },
  {
    name: "CAFÊ Platform",
    company: "DevTest",
    tagline: "Agricultural Management",
    description: "Digital platform for modern agricultural management designed for small and medium properties.",
    role: "Senior Software Engineer",
    impact: "Agricultural management in Angola",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://cafe.devtest.co.ao/en",
    github: "#",
    featured: false,
  },
  {
    name: "Kibera",
    company: "DevTest",
    tagline: "Billing & Commerce Platform",
    description: "Invoicing and commercial management platform for the Angolan context. Allows SMEs to automate billing and more.",
    role: "Senior Software Engineer",
    impact: "SME management across Angola",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    name: "SIKOLASOFT",
    company: "GC-LUCAN",
    tagline: "Educational Management System",
    description: "The most complete Angolan software for managing administrative, pedagogical, academic and financial routines.",
    role: "Senior Software Developer",
    impact: "Managing educational institutions across Angola",
    tech: ["C#", "ASP.NET", "WebForms", "MariaDB", "DevExpress"],
    status: "Live",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    name: "KITANDASOFT Suite",
    company: "GC-LUCAN",
    tagline: "Business Management Suite",
    description: "Complete suite of business management solutions including ERP, POS, restaurant management, invoicing, and CRM.",
    role: "Senior Developer & Tech Lead",
    impact: "Powering 50+ businesses across Angola",
    tech: ["C#", "ASP.NET", "WebForms", "MariaDB", "XtraReports", "Blazor"],
    status: "Live",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    name: "DealBusinessHub",
    company: "TailorDeal",
    tagline: "European Marketplace Platform",
    description: "Europe's leading online marketplace for buying and selling real estate and businesses.",
    role: "Senior Developer & Tech Lead",
    impact: "Connecting European real estate and business markets",
    tech: ["C#", "Blazor", ".NET 8", "Bootstrap", "Blazorise"],
    status: "Live",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    name: "Kiari Events",
    company: "Kiari Code",
    tagline: "Event Management Platform",
    description: "Comprehensive event application with features for event organizers and attendees.",
    role: "Frontend Developer",
    impact: "Managing events across Angola",
    tech: ["React", "Next.js", "Redux", "GraphQL", "Chakra UI"],
    status: "Live",
    link: "https://kiarieventos.netlify.app/",
    github: "#",
    featured: false,
  },
  {
    name: "ECO Estuda Comigo",
    company: "ECO Estuda Comigo",
    tagline: "Online Education Platform",
    description: "Leading platform in the education and technology sector providing high-quality online educational services.",
    role: "Senior Developer & Tech Lead",
    impact: "Delivering online education across Angola",
    tech: ["C#", "ASP.NET Core", "Bootstrap", "MariaDB", "Jira"],
    status: "Live",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    name: "NZIMBUPAY",
    company: "SNIR",
    tagline: "Banking Application",
    description: "Banking application for financial transactions with senior report development and database administration.",
    role: "Full-Stack Developer",
    impact: "Processing banking transactions in Angola",
    tech: ["React", "Next.js", "C#", "ASP.NET", "SQL Server", "Docker"],
    status: "Live",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    name: "International Insurance",
    company: "SNIR",
    tagline: "Insurance Management System",
    description: "Comprehensive insurance management system with database administration and DevOps implementation.",
    role: "Full-Stack Developer",
    impact: "Managing insurance operations",
    tech: ["React", "Next.js", "C#", "ASP.NET", "SQL Server", "DevExpress"],
    status: "Live",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    name: "Hotel Management System",
    company: "GC-LUCAN",
    tagline: "Hospitality Management",
    description: "Complete hotel management system with reservations, guest management, billing, and operational features.",
    role: "Frontend Developer",
    impact: "Managing hotel operations",
    tech: ["React", "Node.js", "TailwindCSS", "Chakra UI", "Git"],
    status: "Live",
    link: "https://hotel-management-v1.netlify.app/",
    github: "#",
    featured: false,
  },
  {
    name: "SADOC",
    company: "Tecla T",
    tagline: "Currency Exchange Platform",
    description: "Application for international transaction of currencies and remittance of values.",
    role: "Frontend Developer",
    impact: "International currency transactions",
    tech: ["React", "Redux", "Formik", "Yup", "ViteJS"],
    status: "Live",
    link: "https://sadoc-front.netlify.app/",
    github: "#",
    featured: true,
  },
  {
    name: "XGrow",
    company: "XGrow",
    tagline: "Education Platform",
    description: "Education platform development including calendar features and live sessions.",
    role: "Frontend Developer",
    impact: "Online education in Brazil",
    tech: ["React", "Next.js", "Node.js", "Chakra UI", "GitFlow"],
    status: "Live",
    link: "https://www.xgrow.com/",
    github: "#",
    featured: true,
  },
  {
    name: "Aligner-Flix",
    company: "Zeni Tech",
    tagline: "Landing Page",
    description: "Landing page development for a Brazilian ed-tech platform with modern design.",
    role: "Full-Stack Developer",
    impact: "Brazilian ed-tech platform",
    tech: ["React", "Angular", "PHP", "Node.js", "WordPress"],
    status: "Live",
    link: "https://alignerplay.com.br/",
    github: "#",
    featured: true,
  },
  {
    name: "Macovi Sport Club",
    company: "Freelance",
    tagline: "Sports Club Website",
    description: "Modern and responsive website for a sports club featuring event management and team information.",
    role: "Frontend Developer",
    impact: "Sports club digital presence",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://macovi-sport-club.vercel.app/",
    github: "#",
    featured: true,
  },
  {
    name: "FEMB",
    company: "Freelance",
    tagline: "Corporate Website",
    description: "Corporate website for FEMB consulting company showcasing services and business solutions.",
    role: "Frontend Developer",
    impact: "Corporate digital presence",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://femb.ao",
    github: "#",
    featured: true,
  },
  {
    name: "FEMB Farmácia",
    company: "Freelance",
    tagline: "Pharmacy Management System",
    description: "Complete pharmacy management system with inventory control and sales management.",
    role: "Full-Stack Developer",
    impact: "Managing pharmacy operations",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    status: "Live",
    link: "https://farmacia.femb.ao/",
    github: "#",
    featured: true,
  },
  {
    name: "Docampo",
    company: "Freelance",
    tagline: "Document Management Platform",
    description: "Digital document management platform for organizing and sharing documents securely.",
    role: "Frontend Developer",
    impact: "Document management solutions",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://docampo.vercel.app/",
    github: "#",
    featured: true,
  },
  {
    name: "St Maze Love",
    company: "Freelance",
    tagline: "Interactive Game",
    description: "Interactive maze game with engaging gameplay and modern design.",
    role: "Frontend Developer",
    impact: "Interactive gaming experience",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://st-maze-love.vercel.app/",
    github: "#",
    featured: true,
  },
  {
    name: "Mambo Weather App",
    company: "Freelance",
    tagline: "Weather Application",
    description: "Modern weather application with real-time forecasts and beautiful UI.",
    role: "Frontend Developer",
    impact: "Weather information platform",
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"],
    status: "Live",
    link: "https://mambo-weather-app.vercel.app/",
    github: "#",
    featured: false,
  },
];

interface ProjectsProps {
  showAll?: boolean;
}

const allTechs = [
  "React", "Next.js", "TypeScript", "C#", ".NET", "ASP.NET", "Blazor",
  "Node.js", "MariaDB", "PostgreSQL", "SQL Server", "TailwindCSS", "Chakra UI",
  "Redux", "GraphQL", "Docker", "DevExpress", "Vercel"
];

const filterCategories = [
  {
    name: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "TailwindCSS", "Chakra UI", "Redux"]
  },
  {
    name: "Backend",
    techs: ["C#", ".NET", "ASP.NET", "Blazor", "Node.js", "GraphQL"]
  },
  {
    name: "Database",
    techs: ["MariaDB", "PostgreSQL", "SQL Server"]
  },
  {
    name: "Tools",
    techs: ["Docker", "DevExpress", "Vercel"]
  }
];

export function Projects({ showAll = false }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    let filtered = showAll ? projects : projects.filter(p => p.featured);
    
    if (selectedTechs.length > 0) {
      filtered = filtered.filter(project => 
        selectedTechs.some(tech => project.tech.includes(tech))
      );
    }
    
    return filtered;
  }, [showAll, selectedTechs]);

  const featuredCount = projects.filter(p => p.featured).length;

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTechs([]);
  };

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">
            {showAll ? "03 — ALL PROJECTS" : "03 — WORK"}
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-50">
                {showAll ? "All Projects" : "Featured Projects"}
              </h2>
              <p className="text-zinc-400 mt-4 max-w-xl">
                {showAll 
                  ? `${filteredProjects.length} of ${projects.length} projects`
                  : "A selection of production systems that solve real business challenges and deliver measurable impact."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {!showAll && (
                <a
                  href="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-full transition-all duration-300"
                >
                  View All ({projects.length})
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
              <a
                href="https://github.com/Cientista-Avogadro"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                GitHub
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Filter size={18} className="text-emerald-400" />
              <span className="text-sm text-zinc-400 font-medium">Filter by technology:</span>
              {selectedTechs.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="ml-2 text-xs text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <X size={14} />
                  Clear filters
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((category) => (
                <div key={category.name} className="flex flex-wrap gap-2 mr-4">
                  <span className="text-xs text-zinc-600 self-center">{category.name}:</span>
                  {category.techs.map((tech) => {
                    const isSelected = selectedTechs.includes(tech);
                    const hasTech = allTechs.includes(tech);
                    if (!hasTech) return null;
                    return (
                      <button
                        key={tech}
                        onClick={() => toggleTech(tech)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                          isSelected
                            ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                            : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                        }`}
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.length === 0 ? (
            <div className="col-span-2 text-center py-20">
              <p className="text-zinc-500">No projects match the selected filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-500 hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-2xl font-bold text-zinc-100">
                          {project.name}
                        </h3>
                        {project.featured && (
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-emerald-400/80 text-sm font-medium mb-1">
                        {project.tagline}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
                          {project.company}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-zinc-800/30">
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">Role</div>
                      <div className="text-sm text-zinc-300 font-medium">{project.role}</div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">Impact</div>
                      <div className="text-sm text-zinc-300 font-medium">{project.impact}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        View Project
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )))}
        </div>
      </div>
    </section>
  );
}
