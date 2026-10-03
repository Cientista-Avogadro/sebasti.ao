import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("hero");
  const proofPoints = [t("proofA"), t("proofB"), t("proofC")];
  const capabilities = [
    t("capabilityA"),
    t("capabilityB"),
    t("capabilityC"),
    t("capabilityD"),
    t("capabilityE"),
    t("capabilityF"),
  ];

  return (
    <section className="border-b-2 border-ink">
      <div className="container-site pt-14 pb-20">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:items-start">
          <div>
            <p className="label">{t("eyebrow")}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] mt-6 max-w-2xl text-balance">
              {t("headline")}
            </h1>
            <p className="lede mt-8 max-w-xl">{t("description")}</p>
            <p className="mt-5 text-accent max-w-xl">{t("authorityLine")}</p>

            <p className="mt-10 font-mono text-xs text-soft leading-relaxed max-w-xl">
              {proofPoints.join("  ·  ")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#work" className="btn">
                {t("primaryCta")}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#contact" className="link text-[0.95rem]">
                {t("secondaryCta")}
              </a>
            </div>
          </div>

          <aside className="border border-ink/25 bg-raised">
            <div className="border-b border-line">
              <div className="relative aspect-[6/7] overflow-hidden">
                <Image
                  src="/myphoto.jpg"
                  alt={t("profileName")}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="p-6">
              <p className="font-display text-lg leading-snug">{t("profileName")}</p>
              <p className="text-soft text-sm mt-1">{t("roleLine")}</p>

              <div className="mt-5 pt-5 border-t border-line">
                <div className="font-display text-3xl">6+</div>
                <div className="label mt-1">{t("yearsExp")}</div>
              </div>

              <div className="mt-5 pt-5 border-t border-line">
                <div className="label">{t("capabilitiesLabel")}</div>
                <p className="text-sm text-ink/85 mt-2 leading-relaxed">
                  {capabilities.join(", ")}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
