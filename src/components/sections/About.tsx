"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          <div>
            <span className="mb-4 block font-mono text-sm tracking-wider text-emerald-400">{t("label")}</span>
            <h2 className="mb-8 font-display text-4xl font-bold text-zinc-50 md:text-5xl">
              {t("title")}
              <span className="text-emerald-400"> {t("titleHighlight")}</span>
            </h2>

            <div className="space-y-6 leading-relaxed text-zinc-400">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
              <p>{t("p4")}</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-emerald-500/30">
                <div className="text-3xl font-display font-bold text-emerald-400">6+</div>
                <div className="text-sm text-zinc-500">{t("years")}</div>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-emerald-500/30">
                <div className="text-3xl font-display font-bold text-emerald-400">Multi-domain</div>
                <div className="text-sm text-zinc-500">{t("projects")}</div>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-emerald-500/30">
                <div className="text-3xl font-display font-bold text-emerald-400">Remote-ready</div>
                <div className="text-sm text-zinc-500">{t("companies")}</div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                    {t("proofLabel")}
                  </p>
                  <h4 className="mt-2 font-display text-2xl font-semibold text-zinc-100">
                    {t("proofTitle")}
                  </h4>
                </div>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  {t("proofCta")}
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5">
                  <div className="text-sm font-medium text-zinc-300">{t("proofItemATitle")}</div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{t("proofItemADesc")}</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5">
                  <div className="text-sm font-medium text-zinc-300">{t("proofItemBTitle")}</div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{t("proofItemBDesc")}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-emerald-500/10" />
              <Image
                src="/myphoto.jpg"
                alt="Sebastião de Sousa Moniz"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-900/90 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/20">
                    <span className="text-lg font-bold text-emerald-400">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-100">Sebastião de Sousa Moniz</p>
                    <p className="text-sm text-emerald-400">Senior Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
