"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Star, GitFork, BookOpen } from "lucide-react";

const repositories = [
  {
    name: "interest-destinations",
    description: "Aplicação para marcações de destinos de interesses. Built with TypeScript.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 3,
    forks: 0,
    updatedAt: "2022-11-21",
  },
  {
    name: "events-kiari-web",
    description: "Events Management system. Modern web application for event organization.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1,
    forks: 0,
    updatedAt: "2024-07-09",
  },
  {
    name: "Uno-Platform-Succinctly",
    description: "Uno Platform tutorial and examples. Cross-platform development with C# and XAML.",
    language: "C#",
    languageColor: "#178600",
    stars: 0,
    forks: 0,
    updatedAt: "Recently",
  },
  {
    name: "Cientista",
    description: "Java project. Learning and experimentation with Java fundamentals.",
    language: "Java",
    languageColor: "#b07219",
    stars: 1,
    forks: 0,
    updatedAt: "2021-05-11",
  },
];

export function GitHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-zinc-900/50 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">06 — OPEN SOURCE</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-50">
                GitHub Activity
              </h2>
              <p className="text-zinc-400 mt-4 max-w-xl">
                Building in public, sharing knowledge, and contributing to the developer community.
              </p>
            </div>
            <a
              href="https://github.com/Cientista-Avogadro"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 hover:border-emerald-500/30 text-zinc-300 hover:text-emerald-400 transition-all duration-300"
            >
              <Github size={18} />
              @Cientista-Avogadro
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-zinc-100">75</div>
                  <div className="text-sm text-zinc-500">Repositories</div>
                </div>
              </div>
            </div>
            <div className="h-16 flex items-end gap-1">
              {[40, 60, 45, 80, 65, 90, 75, 55, 70, 85, 95, 50].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${height}%` } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                  className="flex-1 bg-emerald-500/20 rounded-t hover:bg-emerald-500/40 transition-colors"
                />
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-zinc-100">36</div>
                <div className="text-sm text-zinc-500">GitHub Stars</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                <div className="text-xl font-bold text-zinc-100">17</div>
                <div className="text-xs text-zinc-500">Followers</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-zinc-800/50">
                <div className="text-xl font-bold text-zinc-100">20</div>
                <div className="text-xs text-zinc-500">Following</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          {repositories.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/Cientista-Avogadro/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="group flex items-center justify-between p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-display font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                    {repo.name}
                  </h4>
                  <ExternalLink size={14} className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-zinc-400 mb-3 max-w-xl">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    {repo.language}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks}
                  </div>
                  <span>Updated {repo.updatedAt}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
