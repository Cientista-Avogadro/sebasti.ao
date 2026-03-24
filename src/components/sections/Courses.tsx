"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { ExternalLink, Award, Filter, X, GraduationCap, BookOpen, CheckCircle } from "lucide-react";

const courses = [
  {
    name: "Sintaxe Básica em JavaScript",
    institution: "DIO",
    period: "14/11/2021",
    grade: "100%",
    description: "Fundamentos da linguagem JavaScript",
    link: "https://www.dio.me/certificate/50549954/share",
    category: "Frontend",
    tech: ["JavaScript"],
  },
  {
    name: "Programação para internet com JavaScript",
    institution: "DIO",
    period: "16/11/2021",
    grade: "100%",
    description: "Desenvolvimento web com JavaScript",
    link: "https://www.dio.me/certificate/424E4986/share",
    category: "Frontend",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "JavaScript ES6 essencial",
    institution: "DIO",
    period: "20/11/2021",
    grade: "100%",
    description: "Conceitos essenciais do ECMAScript 6",
    link: "https://www.dio.me/certificate/7452BF4C/share",
    category: "Frontend",
    tech: ["JavaScript", "ES6"],
  },
  {
    name: "Desenvolvimento avançado com JavaScript ES6",
    institution: "DIO",
    period: "20/11/2021",
    grade: "100%",
    description: "Técnicas avançadas com JavaScript ES6",
    link: "https://www.dio.me/certificate/2D7B1EB5/share",
    category: "Frontend",
    tech: ["JavaScript", "ES6"],
  },
  {
    name: "Introdução à biblioteca jQuery",
    institution: "DIO",
    period: "20/11/2021",
    grade: "100%",
    description: "Introdução ao jQuery para manipulação DOM",
    link: "https://www.dio.me/certificate/6A3E5C03/share",
    category: "Frontend",
    tech: ["jQuery", "JavaScript"],
  },
  {
    name: "Introdução ao ReactJS",
    institution: "DIO",
    period: "22/11/2021",
    grade: "100%",
    description: "Conceitos fundamentais do ReactJS",
    link: "https://www.dio.me/certificate/4308725E/share",
    category: "Frontend",
    tech: ["React", "ReactJS"],
  },
  {
    name: "Trabalhando com Componentes em React",
    institution: "DIO",
    period: "22/11/2021",
    grade: "100%",
    description: "Estrutura e ciclo de vida dos componentes React",
    link: "https://www.dio.me/certificate/AD5AE8FE/share",
    category: "Frontend",
    tech: ["React", "ReactJS"],
  },
  {
    name: "Práticas avançadas em projetos com ReactJS",
    institution: "DIO",
    period: "22/11/2021",
    grade: "100%",
    description: "Técnicas avançadas para projetos com ReactJS",
    link: "https://www.dio.me/certificate/F653B736/share",
    category: "Frontend",
    tech: ["React", "ReactJS"],
  },
  {
    name: "Introdução ao TypeScript: Classes, Tipos e Interfaces",
    institution: "DIO",
    period: "26/11/2021",
    grade: "100%",
    description: "TypeScript: classes, tipos e interfaces",
    link: "https://www.dio.me/certificate/B48A69DD/share",
    category: "Frontend",
    tech: ["TypeScript"],
  },
  {
    name: "Boas-vindas ao Decola Tech 2a edição",
    institution: "DIO",
    period: "29/11/2021",
    grade: "100%",
    description: "Bootcamp Decola Tech - Imersão profissional",
    link: "https://www.dio.me/certificate/F208E4AD/share",
    category: "Bootcamp",
    tech: ["Geral"],
  },
  {
    name: "Boas-vindas ao Bootcamp Eduzz Fullstack Developer #2",
    institution: "DIO",
    period: "29/11/2021",
    grade: "100%",
    description: "Bootcamp Eduzz Fullstack Developer",
    link: "https://www.dio.me/certificate/61DB553D/share",
    category: "Bootcamp",
    tech: ["Fullstack"],
  },
  {
    name: "Desenvolvimento de aplicações para internet com ReactJS",
    institution: "DIO",
    period: "30/11/2021",
    grade: "100%",
    description: "Desenvolvimento de apps web com ReactJS",
    link: "https://www.dio.me/certificate/2E2A154D/share",
    category: "Frontend",
    tech: ["React", "Redux"],
  },
  {
    name: "Boas-vindas ao Bootcamp Cognizant Java Developer",
    institution: "DIO",
    period: "30/12/2021",
    grade: "100%",
    description: "Bootcamp Cognizant Java Developer",
    link: "https://www.dio.me/certificate/AF675FEA/share",
    category: "Bootcamp",
    tech: ["Java"],
  },
  {
    name: "ReactJS",
    institution: "Coodesh",
    period: "Dez 2021",
    grade: "Verified",
    description: "Certificação verificada em ReactJS",
    link: "https://coodesh.com/share/certificate/806fcf10-5911-11ec-9234-3b58449a3098",
    category: "Frontend",
    tech: ["React", "ReactJS"],
  },
  {
    name: "Curso Fullstack Blazor .NET",
    institution: "Udemy",
    period: "Nov 2021",
    grade: "90%",
    description: "Desenvolvimento fullstack com Blazor e .NET",
    link: "https://www.udemy.com/certificate/UC-bc7bce5c-6980-49f3-bbac-6f0a502a0ce6/",
    category: "Backend",
    tech: ["Blazor", ".NET", "C#"],
  },
];

const allCategories = ["Frontend", "Backend", "Bootcamp"];
const allPlatforms = ["DIO", "Coodesh", "Udemy"];
const allTechs = ["React", "ReactJS", "JavaScript", "ES6", "TypeScript", "jQuery", "Redux", "Blazor", ".NET", "C#", "Java", "Fullstack", "HTML", "CSS"];

export function Courses({ showAll = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const filteredCourses = useMemo(() => {
    let filtered = showAll ? courses : courses.slice(0, 6);
    
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(course => selectedCategories.includes(course.category));
    }
    
    if (selectedPlatforms.length > 0) {
      filtered = filtered.filter(course => selectedPlatforms.includes(course.institution));
    }
    
    return filtered;
  }, [showAll, selectedCategories, selectedPlatforms]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPlatforms([]);
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPlatforms.length > 0;

  const getInstitutionColor = (institution: string) => {
    switch (institution) {
      case "DIO": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Coodesh": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Udemy": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-zinc-500/20 text-zinc-400 border-zinc-500/30";
    }
  };

  return (
    <section id="courses" className="relative py-32 overflow-hidden">
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
            {showAll ? "06 — ALL CERTIFICATIONS" : "06 — EDUCATION"}
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-50">
                {showAll ? "All Certifications" : "Education & Certifications"}
              </h2>
              <p className="text-zinc-400 mt-4 max-w-xl">
                {showAll 
                  ? `${filteredCourses.length} of ${courses.length} certifications`
                  : "Academic background and professional certifications in software development."}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Award size={16} className="text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">{courses.length} Certifications</span>
              </div>
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
              <span className="text-sm text-zinc-400 font-medium">Filter:</span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="ml-2 text-xs text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <X size={14} />
                  Clear filters
                </button>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-zinc-600 self-center mr-2">Platform:</span>
                {allPlatforms.map((platform) => {
                  const isSelected = selectedPlatforms.includes(platform);
                  return (
                    <button
                      key={platform}
                      onClick={() => togglePlatform(platform)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                        isSelected
                          ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                          : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                      }`}
                    >
                      {platform}
                    </button>
                  );
                })}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-zinc-600 self-center mr-2">Category:</span>
                {allCategories.map((category) => {
                  const isSelected = selectedCategories.includes(category);
                  return (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                        isSelected
                          ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                          : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-zinc-500">No certifications match the selected filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredCourses.map((course, index) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 text-xs font-medium rounded-full border ${getInstitutionColor(course.institution)}`}>
                      {course.institution}
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle size={12} />
                      {course.grade}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Award size={18} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-display text-lg font-bold text-zinc-100 leading-tight">
                          {course.name}
                        </h3>
                        <p className="text-xs text-zinc-500 mt-1">
                          {course.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${course.category === 'Frontend' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : course.category === 'Backend' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : 'bg-pink-500/20 text-pink-400 border-pink-500/30'}`}>
                        {course.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {course.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-medium rounded-md bg-zinc-800 text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {course.link && (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors mt-auto"
                    >
                      View Certificate
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="/courses"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-full transition-all duration-300"
            >
              View All Certifications ({courses.length})
              <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
