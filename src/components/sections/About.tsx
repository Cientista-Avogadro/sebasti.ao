import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="scroll-mt-24">
      <div className="container-site py-24">
        <SectionHeader
          index="01"
          label={t("label")}
          title={t("title")}
        />

        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div className="space-y-6 text-[1.05rem] leading-[1.75] text-ink/90">
            <p className="lede">{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
            <p>{t("p4")}</p>

            <dl className="grid grid-cols-3 gap-6 border-t-2 border-ink pt-6 mt-10">
              <div>
                <dt className="label">{t("years")}</dt>
                <dd className="font-display text-3xl mt-2">6+</dd>
              </div>
              <div>
                <dt className="label">{t("projects")}</dt>
                <dd className="font-display text-3xl mt-2">23</dd>
              </div>
              <div>
                <dt className="label">{t("companies")}</dt>
                <dd className="font-display text-3xl mt-2">9</dd>
              </div>
            </dl>
          </div>

          <aside className="border border-ink/25 bg-raised p-7 self-start">
            <p className="label">{t("proofLabel")}</p>
            <h3 className="font-display text-xl mt-3 leading-snug">{t("proofTitle")}</h3>

            <div className="mt-6 pt-6 border-t border-line">
              <h4 className="font-medium">{t("proofItemATitle")}</h4>
              <p className="text-sm text-soft mt-2 leading-relaxed">{t("proofItemADesc")}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-line">
              <h4 className="font-medium">{t("proofItemBTitle")}</h4>
              <p className="text-sm text-soft mt-2 leading-relaxed">{t("proofItemBDesc")}</p>
            </div>

            <a href="#work" className="link inline-flex items-center gap-1.5 mt-7 text-sm">
              {t("proofCta")}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
