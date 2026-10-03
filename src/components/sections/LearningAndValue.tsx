"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";

export function LearningAndValue() {
  const t = useTranslations("learning");

  const principles = [
    { title: t("principleA"), description: t("principleADesc") },
    { title: t("principleB"), description: t("principleBDesc") },
    { title: t("principleC"), description: t("principleCDesc") },
    { title: t("principleD"), description: t("principleDDesc") },
  ];

  const valueProps = [
    { title: t("endToEnd"), description: t("endToEndDesc") },
    { title: t("business"), description: t("businessDesc") },
    { title: t("international"), description: t("internationalDesc") },
    { title: t("learner"), description: t("learnerDesc") },
  ];

  return (
    <section id="learning" className="scroll-mt-24 border-t border-line">
      <div className="container-site py-24">
        <SectionHeader
          index="07"
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="font-display text-2xl">{t("valueProposition")}</h3>
            <p className="text-soft mt-2">{t("valueSubtitle")}</p>

            <dl className="mt-8">
              {valueProps.map((item, i) => (
                <div key={item.title} className={`py-5 ${i > 0 ? "border-t border-line" : ""}`}>
                  <dt className="font-medium">{item.title}</dt>
                  <dd className="text-soft text-sm leading-relaxed mt-1.5">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="font-display text-2xl">{t("currentlyLearning")}</h3>
            <p className="text-soft mt-2">{t("learningSubtitle")}</p>

            <ol className="mt-8">
              {principles.map((principle, i) => (
                <li key={principle.title} className={`grid gap-2 md:grid-cols-[48px_1fr] md:gap-6 py-5 ${i > 0 ? "border-t border-line" : ""}`}>
                  <span className="font-mono text-sm text-accent pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display text-lg leading-snug">{principle.title}</h4>
                    <p className="text-soft text-sm leading-relaxed mt-1.5">{principle.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <a href="#contact" className="link inline-flex items-center gap-1.5 mt-7 text-sm">
              {t("cta")}
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
