"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";

const techCategories = [
  {
    titleKey: "frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Blazor", "React Native"],
  },
  {
    titleKey: "backend",
    skills: ["C# / .NET", "ASP.NET Core", "Java Spring Boot", "Node.js", "PHP", "GraphQL"],
  },
  {
    titleKey: "ai",
    skills: ["Prompt Engineering", "LLM Integration", "AI Automation", "Chatbot Development"],
  },
  {
    titleKey: "deployment",
    skills: ["Vercel / Netlify", "IIS", "CPanel", "Domain & DNS Management", "SSL Configuration"],
  },
  {
    titleKey: "database",
    skills: ["Microsoft SQL Server", "PostgreSQL", "MariaDB", "Entity Framework Core", "Prisma"],
  },
  {
    titleKey: "tools",
    skills: ["Git / GitFlow", "Docker", "JIRA", "Redux / Redux Toolkit", "DevExpress / XtraReports"],
  },
];

export function TechStack() {
  const t = useTranslations("techStack");

  return (
    <section id="stack" className="scroll-mt-24 border-t border-line">
      <div className="container-site py-24">
        <SectionHeader
          index="06"
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <dl>
          {techCategories.map((category) => (
            <div key={category.titleKey} className="grid gap-1 md:grid-cols-[260px_1fr] md:gap-12 py-5 border-t border-line">
              <dt className="label md:pt-1">{t(category.titleKey)}</dt>
              <dd className="text-[0.95rem] text-ink/85 leading-relaxed">
                {category.skills.join(" · ")}
              </dd>
            </div>
          ))}
          <div className="grid gap-1 md:grid-cols-[260px_1fr] md:gap-12 py-5 border-t border-line">
            <dt className="label md:pt-1">{t("languages")}</dt>
            <dd className="text-[0.95rem] text-ink/85">
              {t("portuguese")} <span className="text-faint">({t("native")})</span> · {t("english")}{" "}
              <span className="text-faint">({t("professional")})</span>
            </dd>
          </div>
          <div className="grid gap-1 md:grid-cols-[260px_1fr] md:gap-12 py-5 border-t border-line">
            <dt className="label md:pt-1">{t("softSkills")}</dt>
            <dd className="text-[0.95rem] text-ink/85">
              {[t("softSkillA"), t("softSkillB"), t("softSkillC"), t("softSkillD"), t("softSkillE"), t("softSkillF")].join(" · ")}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
