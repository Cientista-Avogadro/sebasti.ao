import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const lastUpdated = new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" });

  return (
    <footer className="border-t-2 border-ink">
      <div className="container-site py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div>
            <p className="font-display text-lg">Sebastião de Sousa Moniz</p>
            <p className="text-soft text-sm mt-1">{t("tagline")}</p>
            <p className="text-faint text-xs mt-3 font-mono">Next.js · {t("updated")} {lastUpdated}</p>
          </div>
          <div className="font-mono text-xs text-soft space-y-1.5 md:text-right">
            <p>Luanda, Angola · 8.8383° S, 13.2344° E · UTC+1</p>
            <p>
              <a className="link" href="https://github.com/Cientista-Avogadro" target="_blank" rel="noopener noreferrer">GitHub</a>
              {" · "}
              <a className="link" href="https://www.linkedin.com/in/sebasti%C3%A3o-de-sousa-moniz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {" · "}
              <a className="link" href="mailto:moniz.techs@gmail.com">moniz.techs@gmail.com</a>
            </p>
            <p>{t("rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
