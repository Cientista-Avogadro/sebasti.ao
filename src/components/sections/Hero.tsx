"use client";

import { motion } from "framer-motion";
import { ArrowRight, Dot, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  const proofPoints = [
    t.raw("proofA") ? t("proofA") : "Multi-tenant SaaS",
    t.raw("proofB") ? t("proofB") : "Agricultural operations platform",
    t.raw("proofC") ? t("proofC") : "Production systems"
  ];
  const capabilityTags = [
    t.raw("capabilityA") ? t("capabilityA") : "SaaS",
    t.raw("capabilityB") ? t("capabilityB") : "Billing",
    t.raw("capabilityC") ? t("capabilityC") : "Design",
    t.raw("capabilityD") ? t("capabilityD") : "Next.js",
    t.raw("capabilityE") ? t("capabilityE") : "PostgreSQL",
    t.raw("capabilityF") ? t("capabilityF") : "Product"
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_24%)]" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t("badge")}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-400">
            <MapPin size={14} className="text-emerald-400" />
            {t("location")}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end"
        >
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
              {t("eyebrow")}
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-zinc-50 sm:text-6xl md:text-7xl">
              {t("headline")}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-300">
              {t("description")}
            </p>
            <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-emerald-300">
              {t.raw("authorityLine") ? t("authorityLine") : "Built production systems including a multi-tenant billing platform and agricultural management system."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-400">
              {proofPoints.map((point) => (
                <span key={point} className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2">
                  <Dot size={16} className="text-emerald-400" />
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-zinc-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                {t("primaryCta")}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-8 py-4 font-medium text-zinc-200 transition-all duration-300 hover:border-zinc-500 hover:text-white"
              >
                {t("secondaryCta")}
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="rounded-[24px] border border-zinc-800 bg-zinc-900/80 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                {t("summaryLabel")}
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-4xl font-display font-bold text-zinc-50">6+</div>
                  <div className="text-sm text-zinc-400">{t("yearsExp")}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
                    <div className="text-2xl font-display font-bold text-zinc-50">Multi-tenant</div>
                    <div className="mt-1 text-sm text-zinc-400">{t("summaryA")}</div>
                  </div>
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
                    <div className="text-2xl font-display font-bold text-zinc-50">Production</div>
                    <div className="mt-1 text-sm text-zinc-400">{t("summaryB")}</div>
                  </div>
                </div>
                <div>
                  <div className="mb-3 text-sm font-medium text-zinc-300">{t("capabilitiesLabel")}</div>
                  <div className="flex flex-wrap gap-2">
                    {capabilityTags.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1.5 text-xs font-medium text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
