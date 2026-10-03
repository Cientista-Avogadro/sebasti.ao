import { Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";

// Snapshot of live GitHub data verified on 2026-10-03; refresh periodically.
const githubStats = {
  username: "Cientista-Avogadro",
  contributions: 411,
  repositories: 121,
  stars: 12,
  followers: 19,
  following: 15,
};

const topLanguages = [
  { name: "TypeScript", percentage: 47 },
  { name: "JavaScript", percentage: 27 },
  { name: "Other", percentage: 22 },
  { name: "C#", percentage: 4 },
];

const contributionBreakdown = [
  { labelKey: "commits", percentage: 82, shade: "bg-ink" },
  { labelKey: "prs", percentage: 12, shade: "bg-soft" },
  { labelKey: "reviews", percentage: 6, shade: "bg-line" },
];

export function GitHubStats() {
  const t = useTranslations("github");

  const stats = [
    { label: t("contribShort"), value: githubStats.contributions },
    { label: t("reposShort"), value: githubStats.repositories },
    { label: t("starsShort"), value: githubStats.stars },
    { label: t("followersShort"), value: githubStats.followers },
    { label: t("followingShort"), value: githubStats.following },
  ];

  return (
    <section id="github" className="scroll-mt-24 border-t border-line">
      <div className="container-site py-24">
        <SectionHeader
          index="08"
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
          action={
            <a
              href={`https://github.com/${githubStats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-1.5 text-sm whitespace-nowrap"
            >
              <Github size={14} aria-hidden="true" />
              {t("viewProfile")}
            </a>
          }
        />

        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div>
            <dl className="grid grid-cols-2 sm:grid-cols-5 gap-6 border-t-2 border-ink pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="label">{stat.label}</dt>
                  <dd className="font-display text-3xl mt-2">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="label mt-12">{t("breakdown")}</h3>
            <div className="flex h-1.5 mt-4" role="presentation">
              {contributionBreakdown.map((item) => (
                <div key={item.labelKey} className={item.shade} style={{ width: `${item.percentage}%` }} />
              ))}
            </div>
            <p className="font-mono text-xs text-soft mt-3">
              {contributionBreakdown.map((item) => `${t(item.labelKey)} ${item.percentage}%`).join("  ·  ")}
            </p>

            <h3 className="label mt-12">{t("topLanguages")}</h3>
            <p className="font-mono text-xs text-soft mt-3">
              {topLanguages.map((lang) => `${lang.name} ${lang.percentage}%`).join("  ·  ")}
            </p>
          </div>

          <aside className="self-start">
            <h3 className="label">{t("achievementTitle")}</h3>
            <ul className="mt-4">
              <li className="flex items-baseline justify-between py-3 border-t border-line">
                <span className="text-sm text-ink/85">{t("pullShark")}</span>
                <span className="font-mono text-xs text-accent">x3</span>
              </li>
              <li className="flex items-baseline justify-between py-3 border-t border-line">
                <span className="text-sm text-ink/85">{t("pairExtra")}</span>
                <span className="font-mono text-xs text-accent">x3</span>
              </li>
              <li className="flex items-baseline justify-between py-3 border-t border-line">
                <span className="text-sm text-ink/85">{t("trophies")}</span>
                <span className="font-mono text-xs text-accent">4</span>
              </li>
            </ul>

            <h3 className="label mt-10">{t("activityTitle")}</h3>
            <p className="text-sm text-soft leading-relaxed mt-3">{t("activityDesc")}</p>

            <h3 className="label mt-10">{t("featuredWork")}</h3>
            <p className="text-sm text-soft leading-relaxed mt-3">{t("featuredDesc")}</p>
            <a
              href={`https://github.com/${githubStats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-1.5 mt-4 text-sm"
            >
              {t("viewAll")}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
