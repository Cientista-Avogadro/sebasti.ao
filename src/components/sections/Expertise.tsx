import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";

export function Expertise() {
  const t = useTranslations("expertise");

  const areas = [
    { title: t("frontendTitle"), description: t("frontendDesc") },
    { title: t("fullstackTitle"), description: t("fullstackDesc") },
    { title: t("systemTitle"), description: t("systemDesc") },
    { title: t("aiTitle"), description: t("aiDesc") },
  ];

  return (
    <section id="expertise" className="scroll-mt-24 border-t border-line">
      <div className="container-site py-24">
        <SectionHeader
          index="02"
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <dl>
          {areas.map((area, i) => (
            <div
              key={area.title}
              className={`grid gap-2 md:grid-cols-[56px_260px_1fr] md:gap-8 py-7 ${i > 0 ? "border-t border-line" : ""}`}
            >
              <dt className="font-mono text-sm text-accent pt-1">
                {String(i + 1).padStart(2, "0")}
              </dt>
              <dt className="font-display text-xl leading-snug">{area.title}</dt>
              <dd className="text-soft leading-relaxed">{area.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
