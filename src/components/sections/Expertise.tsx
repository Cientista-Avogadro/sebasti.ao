"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Code2, GitBranch, Database, Box, Brain, Server } from "lucide-react";

const expertiseItems = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Crafting pixel-perfect, performant user interfaces with React, Next.js, TypeScript, and Blazor. Building responsive, accessible, and maintainable frontend architectures.",
    skills: ["React", "Next.js", "TypeScript", "Blazor", "Tailwind CSS", "Chakra UI"],
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "End-to-end product development from database design to API architecture. Delivering complete, production-ready applications with modern tech stacks.",
    skills: [".NET", "C#", "Node.js", "React Native", "Payload CMS"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "AI Enthusiast specializing in Prompt Engineering, VideoCoding, and Process Automation with AI. Building intelligent solutions that streamline workflows.",
    skills: ["Prompt Engineering", "VideoCoding", "AI Automation", "LLM Integration", "Chatbots"],
  },
  {
    icon: Server,
    title: "Deployment & Hosting",
    description: "Expert in domain management, CPanel administration, and server configuration. Ensuring applications run smoothly in production environments.",
    skills: ["CPanel", "Domain Management", "Vercel", "Hosting", "SSL", "DNS"],
  },
  {
    icon: GitBranch,
    title: "System Analysis & Reports",
    description: "Translating business requirements into technical specifications. Creating dynamic reports with DevExpress and XtraReports for enterprise systems.",
    skills: ["Requirements Analysis", "DevExpress", "XtraReports", "System Design"],
  },
  {
    icon: Database,
    title: "Business Systems",
    description: "Building enterprise-grade management systems for operations, finance, and administration. ERP, POS, invoicing, and CRM solutions.",
    skills: ["ERP", "CRM", "POS", "Invoicing", "Inventory Management"],
  },
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-zinc-900/50 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">02 — EXPERTISE</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-zinc-50">
            What I Do
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Specialized in building complete digital solutions, from user-facing interfaces to robust backend systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-500 hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon className="w-7 h-7 text-emerald-400" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-4 text-zinc-100">
                  {item.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 group-hover:border-emerald-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
