"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Filter, FileText, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "O que é o Payload CMS e por que ele está a ganhar destaque entre os developers",
    excerpt: "Nos últimos anos, a forma como desenvolvemos aplicações web mudou bastante. Os CMS tradicionais já não acompanham a velocidade e flexibilidade que os projetos modernos exigem.",
    date: "16 Set 2025",
    readTime: "5 min read",
    link: "https://www.linkedin.com/pulse/o-que-%C3%A9-payload-cms-e-por-ele-est%C3%A1-ganhar-destaque-entre-moniz-k4ocf/?trackingId=2bXeoRJ%2FRp%2Bo0L6NHtdNKw%3D%3D",
    tags: ["Payload CMS", "Headless CMS", "Development"],
  },
  {
    id: 2,
    title: "Call Embarcadero System",
    excerpt: "Sistema de gestão de filas projetado para ambientes bancários. Permite que clientes selecionem serviços e obtenham senhas numeradas, enquanto os caixas chamam os clientes de forma eficiente.",
    date: "02 Mai 2025",
    readTime: "6 min read",
    link: "https://www.linkedin.com/pulse/call-embarcadero-system-sebasti%C3%A3o-de-sousa-moniz-f5itf/?trackingId=2bXeoRJ%2FRp%2Bo0L6NHtdNKw%3D%3D",
    tags: ["System", "Queue Management", "Banking"],
  },
  {
    id: 3,
    title: "What's new in ASP.NET Core 8.0 - Blazor",
    excerpt: "Com o lançamento do .NET 8, Blazor é um framework full-stack para desenvolvimento de aplicações web com renderização estática e interativa.",
    date: "05 Dez 2023",
    readTime: "7 min read",
    link: "https://www.linkedin.com/pulse/whats-new-aspnet-core-80-blazor-sebasti%C3%A3o-de-sousa-moniz-70kxf/?trackingId=2bXeoRJ%2FRp%2Bo0L6NHtdNKw%3D%3D",
    tags: ["ASP.NET", "Blazor", ".NET 8"],
  },
  {
    id: 4,
    title: "TypeScript 4.9: satisfies operator",
    excerpt: "Explorando o novo operador satisfies do TypeScript 4.9 para validação de tipos com inferência.",
    date: "2023",
    readTime: "4 min read",
    link: "https://www.linkedin.com/pulse/typescript-49-satisfies-operator-sebasti%C3%A3o-de-sousa-moniz/?trackingId=2bXeoRJ%2FRp%2Bo0L6NHtdNKw%3D%3D",
    tags: ["TypeScript", "Programming"],
  },
  {
    id: 5,
    title: "Python Cardápio",
    excerpt: "Desenvolvimento de aplicações com Python para gestão de cardápios.",
    date: "2023",
    readTime: "4 min read",
    link: "https://www.linkedin.com/pulse/python-card%C3%A1pio-cientista-f%C3%AAnix/?trackingId=2bXeoRJ%2FRp%2Bo0L6NHtdNKw%3D%3D",
    tags: ["Python", "Development"],
  },
];

const allTags = ["Payload CMS", "Headless CMS", "System", "Queue Management", "Banking", "ASP.NET", "Blazor", ".NET 8", "TypeScript", "Python"];

export function Articles({ showAll = false }: { showAll?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredArticles = selectedTag
    ? articles.filter(a => a.tags.includes(selectedTag))
    : articles;

  const displayedArticles = showAll ? filteredArticles : articles.slice(0, 3);

  return (
    <section id="articles" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">
            {showAll ? "08 — ALL ARTICLES" : "08 — ARTICLES"}
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-50">
                {showAll ? "LinkedIn Articles" : "Articles & Insights"}
              </h2>
              <p className="text-zinc-400 mt-4 max-w-xl">
                {showAll 
                  ? `${filteredArticles.length} articles published on LinkedIn`
                  : "Thoughts on technology, development, and the tech scene."}
              </p>
            </div>
            {!showAll && (
              <a
                href="/articles"
                className="group inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors text-sm md:text-base"
              >
                View All Articles
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>
        </motion.div>

        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Filter size={18} className="text-emerald-400" />
              <span className="text-sm text-zinc-400 font-medium">Filter by topic:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                  !selectedTag
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                    : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                    selectedTag === tag
                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                      : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedArticles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="group"
            >
              <div className="h-full rounded-xl sm:rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 p-5 sm:p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <FileText size={18} className="text-emerald-400" />
                  <span className="text-xs text-zinc-500">{article.date}</span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Clock size={12} />
                    {article.readTime}
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                    Read
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {displayedArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500">No articles found with the selected topic.</p>
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-4 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Clear filter
            </button>
          </div>
        )}

        {!showAll && articles.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a
              href="https://linkedin.com/in/sebastiao-de-sousa-moniz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-full transition-all duration-300"
            >
              View All on LinkedIn
              <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
