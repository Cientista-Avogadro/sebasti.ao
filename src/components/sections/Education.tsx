"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";

export function Education() {
  const t = useTranslations("education");

  interface EducationEntry {
    degree: string;
    school: string;
    period: string;
    status: string;
    project?: string;
  }

  const academic: EducationEntry[] = [
    {
      degree: "BSc, Computer Science",
      school: "Instituto Superior Politécnico Metropolitano de Angola (ISPM), Luanda",
      period: "2023 - 2028",
      status: t("inProgress"),
    },
    {
      degree: "Technologist, Systems Analysis and Development",
      school: "Faculdade AIEC, Brazil (online)",
      period: "2026 - Present",
      status: t("inProgress"),
    },
  ];

  const technical: EducationEntry[] = [
    {
      degree: "Technical Diploma, Computer Systems Management",
      school: "IPIL Makarenco, Luanda",
      period: "2018 - 2022",
      status: `${t("grade")}: 17/20`,
      project: t("ipilProject"),
    },
    {
      degree: "Technical Course, General Electronics and Home Appliance Repair",
      school: "Mapess (INEFOP), Luanda",
      period: "",
      status: `${t("grade")}: 19/20`,
    },
  ];

  return (
    <section id="education" className="scroll-mt-24 border-t border-line">
      <div className="container-site py-24">
        <SectionHeader
          index="05"
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div>
            <h3 className="label">{t("academic")}</h3>
            <ul className="mt-4">
              {academic.map((entry) => (
                <li key={entry.degree} className="grid gap-1 md:grid-cols-[1fr_150px] md:gap-8 py-5 border-t border-line">
                  <div>
                    <p className="font-display text-lg leading-snug">{entry.degree}</p>
                    <p className="text-soft text-sm mt-1">{entry.school}</p>
                    {entry.project && <p className="text-faint text-xs mt-1">{entry.project}</p>}
                  </div>
                  <div className="font-mono text-xs text-soft md:text-right md:pt-1.5">
                    <p>{entry.period}</p>
                    <p className="text-accent mt-1">{entry.status}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="label mt-10">{t("technical")}</h3>
            <ul className="mt-4">
              {technical.map((entry) => (
                <li key={entry.degree} className="grid gap-1 md:grid-cols-[1fr_150px] md:gap-8 py-5 border-t border-line">
                  <div>
                    <p className="font-display text-lg leading-snug">{entry.degree}</p>
                    <p className="text-soft text-sm mt-1">{entry.school}</p>
                    {entry.project && <p className="text-faint text-xs mt-1">{entry.project}</p>}
                  </div>
                  <div className="font-mono text-xs text-soft md:text-right md:pt-1.5">
                    <p>{entry.period}</p>
                    <p className="text-accent mt-1">{entry.status}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link href="/courses" className="link inline-flex items-center gap-1.5 mt-9 text-sm">
              {t("certifications")}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <aside className="border border-ink/25 bg-raised p-7 self-start">
            <h3 className="font-display text-xl leading-snug">{t("focusTitle")}</h3>
            <p className="text-sm text-soft mt-4 leading-relaxed">{t("focusA")}</p>
            <p className="text-sm text-soft mt-3 leading-relaxed">{t("focusB")}</p>
            <p className="text-sm text-soft mt-3 leading-relaxed">{t("focusC")}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
