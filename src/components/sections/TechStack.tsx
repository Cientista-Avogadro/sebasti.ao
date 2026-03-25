"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Palette, Wrench, Globe, Brain, Server } from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Blazor", level: 88 },
      { name: "React Native", level: 82 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Code2,
    skills: [
      { name: "C# / .NET", level: 88 },
      { name: "ASP.NET Core", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "PHP", level: 72 },
      { name: "Java", level: 70 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "AI & Automation",
    icon: Brain,
    skills: [
      { name: "Prompt Engineering", level: 92 },
      { name: "VideoCoding AI", level: 88 },
      { name: "LLM Integration", level: 85 },
      { name: "AI Automation", level: 90 },
      { name: "Chatbot Development", level: 85 },
    ],
  },
  {
    title: "Deployment & Hosting",
    icon: Server,
    skills: [
      { name: "CPanel", level: 95 },
      { name: "Domain Management", level: 95 },
      { name: "SSL Configuration", level: 90 },
      { name: "Vercel / Netlify", level: 92 },
      { name: "DNS Management", level: 88 },
    ],
  },
  {
    title: "Database & ORM",
    icon: Database,
    skills: [
      { name: "Microsoft SQL Server", level: 85 },
      { name: "Entity Framework Core", level: 82 },
      { name: "MariaDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Prisma", level: 78 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git / GitFlow", level: 95 },
      { name: "Docker", level: 82 },
      { name: "JIRA", level: 90 },
      { name: "Redux / Redux Toolkit", level: 88 },
      { name: "DevExpress / XtraReports", level: 85 },
    ],
  },
];

const softSkills = [
  "Agile Methodologies",
  "Team Leadership",
  "Problem Solving",
  "Communication",
  "Research & Training",
  "Data Analysis",
];

const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Professional" },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-emerald-500/[0.02] to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">05 — STACK</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-50">
            Technical Proficiency
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl">
            Production-proven skills across the full development lifecycle — from frontend to backend, from database to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
            >
              <div className="flex items-center gap-3 mb-5">
                <category.icon size={20} className="text-emerald-400" />
                <h3 className="font-display text-lg font-semibold text-zinc-100">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-zinc-300">{skill.name}</span>
                      <span className="text-xs text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05, ease: [0.4, 0, 0.2, 1] }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
          >
            <h3 className="font-display text-lg font-semibold text-zinc-100 mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
          >
            <h3 className="font-display text-lg font-semibold text-zinc-100 mb-4">
              Languages
            </h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">{lang.name}</span>
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
          >
            <h3 className="font-display text-lg font-semibold text-zinc-100 mb-4">
              Other Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {["HTML5", "CSS3", "TailwindCSS", "Chakra UI", "WordPress", "Genesis Framework", "Payload CMS", "Payment Gateways"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium rounded bg-zinc-800/50 text-zinc-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
