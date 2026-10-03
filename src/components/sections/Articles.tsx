"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const articles = [
  {
    id: 1,
    title: "O que é o Payload CMS e por que ele está a ganhar destaque entre os developers",
    excerpt: "Nos últimos anos, a forma como desenvolvemos aplicações web mudou bastante. Os CMS tradicionais já não acompanham a velocidade e flexibilidade que os projetos modernos exigem.",
    date: "16 Set 2025",
    link: "https://www.linkedin.com/pulse/o-que-%C3%A9-payload-cms-e-por-ele-est%C3%A1-ganhar-destaque-entre-moniz-k4ocf/?trackingId=2bXeoRJ%2FRp%2Bo0L6NHtdNKw%3D%3D",
    tags: ["Payload CMS", "Headless CMS", "Development"],
  },
  {
    id: 2,
    title: "Call Embarcadero System",
    excerpt: "Sistema de gestão de filas projetado para ambientes bancários. Permite que clientes selecionem serviços e obtenham senhas numeradas, enquanto os caixas chamam os clientes de forma eficiente.",
    date: "02 Mai 2025",
    link: "https://www.linkedin.com/pulse/call-embarcadero-system-sebasti%C3%A3o-de-sousa-moniz-f5itf/?trackingId=2bXeoRJ%2FRp%2Bo0L6NHtdNKw%3D%3D",
    tags: ["System", "Queue Management", "Banking"],
  },
  {
    id: 3,
    title: "What's new in ASP.NET Core 8.0 - Blazor",
    excerpt: "Com o lançamento do .NET 8, Blazor é um framework full-stack para desenvolvimento de aplicações web com renderização estática e interativa.",
    date: "05 Dez 2023",
    link: "https://www.linkedin.com/pulse/whats-new-aspnet-core-80-blazor-sebasti%C3%A3o-de-sousa-moniz-70kxf/?trackingId=2bXeoRJ%2FRp%2Bo0L6NHtdNKw%3D%3D",
    tags: ["ASP.NET", "Blazor", ".NET 8"],
  },
  {
    id: 4,
    title: "TypeScript 4.9: satisfies operator",
    excerpt: "Explorando o novo operador satisfies do TypeScript 4.9 para validação de tipos com inferência.",
    date: "2023",
    link: "https://www.linkedin.com/pulse/typescript-49-satisfies-operator-sebasti%C3%A3o-de-sousa-moniz/?trackingId=2bXeoRJ%2FRp%2Bo0L6NHtdNKw%3D%3D",
    tags: ["TypeScript", "Programming"],
  },
  {
    id: 5,
    title: "Python Cardápio",
    excerpt: "Desenvolvimento de aplicações com Python para gestão de cardápios.",
    date: "2023",
    link: "https://www.linkedin.com/pulse/python-card%C3%A1pio-cientista-f%C3%AAnix/?trackingId=2bXeoRJ%2FRp%2Bo0L6NHtdNKw%3D%3D",
    tags: ["Python", "Development"],
  },
];

const allTags = ["Payload CMS", "Headless CMS", "System", "Queue Management", "Banking", "ASP.NET", "Blazor", ".NET 8", "TypeScript", "Python"];

export function Articles({ showAll = false }: { showAll?: boolean }) {
  const t = useTranslations("articles");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredArticles = selectedTag
    ? articles.filter((a) => a.tags.includes(selectedTag))
    : articles;

  const displayedArticles = showAll ? filteredArticles : articles.slice(0, 3);

  return (
    <section id="articles" className="scroll-mt-24 border-t border-line">
      <div className="container-site py-24">
        <SectionHeader
          index={showAll ? "" : "11"}
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {showAll && (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={cn(
                "font-mono text-xs transition-colors",
                selectedTag === null ? "text-accent underline underline-offset-4" : "text-soft hover:text-ink"
              )}
            >
              {t("all")}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                aria-pressed={selectedTag === tag}
                className={cn(
                  "font-mono text-xs transition-colors",
                  selectedTag === tag ? "text-accent underline underline-offset-4" : "text-soft hover:text-ink"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <ol className="mt-8">
          {displayedArticles.map((article) => (
            <li key={article.id} className="grid gap-2 md:grid-cols-[110px_1fr] md:gap-12 py-7 border-t border-line">
              <p className="font-mono text-xs text-soft pt-1.5">{article.date}</p>
              <div>
                <h3 className="font-display text-xl leading-snug max-w-2xl">{article.title}</h3>
                <p className="text-soft text-sm leading-relaxed mt-2 max-w-2xl">{article.excerpt}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3">
                  <span className="font-mono text-xs text-faint">{article.tags.join(" · ")}</span>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 text-sm">
                    {t("readMore")}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {showAll && filteredArticles.length === 0 && (
          <p className="text-soft py-10 border-t border-line">{t("noResults")}</p>
        )}

        {!showAll && (
          <Link href="/articles" className="link inline-flex items-center gap-1.5 mt-8 text-sm">
            {t("viewAll")}
            <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}
