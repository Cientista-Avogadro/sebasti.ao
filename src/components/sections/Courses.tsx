"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Award, CheckCircle, ExternalLink, Filter, X } from "lucide-react";
import { useTranslations } from "next-intl";

type Course = {
  nameKey: string;
  institution: string;
  period: string;
  grade: string;
  descriptionKey: string;
  link: string;
  categoryKey: "categoryFrontend" | "categoryBackend" | "categoryBootcamp";
  tech: string[];
};

const courses: Course[] = [
  { nameKey: "name1", institution: "DIO", period: "14/11/2021", grade: "100%", descriptionKey: "desc1", link: "https://www.dio.me/certificate/50549954/share", categoryKey: "categoryFrontend", tech: ["JavaScript"] },
  { nameKey: "name2", institution: "DIO", period: "16/11/2021", grade: "100%", descriptionKey: "desc2", link: "https://www.dio.me/certificate/424E4986/share", categoryKey: "categoryFrontend", tech: ["JavaScript", "HTML", "CSS"] },
  { nameKey: "name3", institution: "DIO", period: "20/11/2021", grade: "100%", descriptionKey: "desc3", link: "https://www.dio.me/certificate/7452BF4C/share", categoryKey: "categoryFrontend", tech: ["JavaScript", "ES6"] },
  { nameKey: "name4", institution: "DIO", period: "20/11/2021", grade: "100%", descriptionKey: "desc4", link: "https://www.dio.me/certificate/2D7B1EB5/share", categoryKey: "categoryFrontend", tech: ["JavaScript", "ES6"] },
  { nameKey: "name5", institution: "DIO", period: "20/11/2021", grade: "100%", descriptionKey: "desc5", link: "https://www.dio.me/certificate/6A3E5C03/share", categoryKey: "categoryFrontend", tech: ["jQuery", "JavaScript"] },
  { nameKey: "name6", institution: "DIO", period: "22/11/2021", grade: "100%", descriptionKey: "desc6", link: "https://www.dio.me/certificate/4308725E/share", categoryKey: "categoryFrontend", tech: ["React", "ReactJS"] },
  { nameKey: "name7", institution: "DIO", period: "22/11/2021", grade: "100%", descriptionKey: "desc7", link: "https://www.dio.me/certificate/AD5AE8FE/share", categoryKey: "categoryFrontend", tech: ["React", "ReactJS"] },
  { nameKey: "name8", institution: "DIO", period: "22/11/2021", grade: "100%", descriptionKey: "desc8", link: "https://www.dio.me/certificate/F653B736/share", categoryKey: "categoryFrontend", tech: ["React", "ReactJS"] },
  { nameKey: "name9", institution: "DIO", period: "26/11/2021", grade: "100%", descriptionKey: "desc9", link: "https://www.dio.me/certificate/B48A69DD/share", categoryKey: "categoryFrontend", tech: ["TypeScript"] },
  { nameKey: "name10", institution: "DIO", period: "29/11/2021", grade: "100%", descriptionKey: "desc10", link: "https://www.dio.me/certificate/F208E4AD/share", categoryKey: "categoryBootcamp", tech: ["General"] },
  { nameKey: "name11", institution: "DIO", period: "29/11/2021", grade: "100%", descriptionKey: "desc11", link: "https://www.dio.me/certificate/61DB553D/share", categoryKey: "categoryBootcamp", tech: ["Fullstack"] },
  { nameKey: "name12", institution: "DIO", period: "30/11/2021", grade: "100%", descriptionKey: "desc12", link: "https://www.dio.me/certificate/2E2A154D/share", categoryKey: "categoryFrontend", tech: ["React", "Redux"] },
  { nameKey: "name13", institution: "DIO", period: "30/12/2021", grade: "100%", descriptionKey: "desc13", link: "https://www.dio.me/certificate/AF675FEA/share", categoryKey: "categoryBootcamp", tech: ["Java"] },
  { nameKey: "name14", institution: "Coodesh", period: "Dez 2021", grade: "Verified", descriptionKey: "desc14", link: "https://coodesh.com/share/certificate/806fcf10-5911-11ec-9234-3b58449a3098", categoryKey: "categoryFrontend", tech: ["React", "ReactJS"] },
  { nameKey: "name15", institution: "Udemy", period: "Nov 2021", grade: "90%", descriptionKey: "desc15", link: "https://www.udemy.com/certificate/UC-bc7bce5c-6980-49f3-bbac-6f0a502a0ce6/", categoryKey: "categoryBackend", tech: ["Blazor", ".NET", "C#"] },
];

const allCategories: Course["categoryKey"][] = ["categoryFrontend", "categoryBackend", "categoryBootcamp"];
const allPlatforms = ["DIO", "Coodesh", "Udemy"];

export function Courses({ showAll = false }) {
  const t = useTranslations("courses");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategories, setSelectedCategories] = useState<Course["categoryKey"][]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const filteredCourses = useMemo(() => {
    let filtered = showAll ? courses : courses.slice(0, 6);

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((course) => selectedCategories.includes(course.categoryKey));
    }

    if (selectedPlatforms.length > 0) {
      filtered = filtered.filter((course) => selectedPlatforms.includes(course.institution));
    }

    return filtered;
  }, [showAll, selectedCategories, selectedPlatforms]);

  const toggleCategory = (category: Course["categoryKey"]) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    );
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((item) => item !== platform) : [...prev, platform]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPlatforms([]);
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPlatforms.length > 0;

  const getInstitutionColor = (institution: string) => {
    switch (institution) {
      case "DIO":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Coodesh":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Udemy":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-zinc-500/20 text-zinc-400 border-zinc-500/30";
    }
  };

  return (
    <section id="courses" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <span className="mb-4 block font-mono text-sm tracking-wider text-emerald-400">
            {showAll ? t("allLabel") : t("label")}
          </span>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-4xl font-bold text-zinc-50 md:text-5xl">
                {showAll ? t("allTitle") : t("title")}
              </h2>
              <p className="mt-4 max-w-xl text-zinc-400">
                {showAll ? t("allSubtitle", { count: filteredCourses.length, total: courses.length }) : t("subtitle")}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
                <Award size={16} className="text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">{t("countLabel", { count: courses.length })}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="mb-4 flex items-center gap-3">
              <Filter size={18} className="text-emerald-400" />
              <span className="text-sm font-medium text-zinc-400">{t("filter")}</span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="ml-2 flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-emerald-400"
                >
                  <X size={14} />
                  {t("clearFilters")}
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="mr-2 self-center text-xs text-zinc-600">{t("platform")}</span>
                {allPlatforms.map((platform) => {
                  const isSelected = selectedPlatforms.includes(platform);
                  return (
                    <button
                      key={platform}
                      onClick={() => togglePlatform(platform)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                          : "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                      }`}
                    >
                      {platform}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="mr-2 self-center text-xs text-zinc-600">{t("category")}</span>
                {allCategories.map((category) => {
                  const isSelected = selectedCategories.includes(category);
                  return (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                          : "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                      }`}
                    >
                      {t(category)}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.length === 0 ? (
            <div className="col-span-full py-20 text-center">
              <p className="text-zinc-500">{t("empty")}</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-emerald-400 transition-colors hover:text-emerald-300"
              >
                {t("clearFilters")}
              </button>
            </div>
          ) : (
            filteredCourses.map((course, index) => (
              <motion.div
                key={course.nameKey}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 transition-all duration-300 group-hover:border-emerald-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-full flex-col p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div className={`rounded-full border px-3 py-1 text-xs font-medium ${getInstitutionColor(course.institution)}`}>
                        {course.institution}
                      </div>
                      <span className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                        <CheckCircle size={12} />
                        {course.grade}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="mb-3 flex items-start gap-3">
                        <Award size={18} className="mt-1 shrink-0 text-emerald-400" />
                        <div>
                          <h3 className="font-display text-lg font-bold leading-tight text-zinc-100">
                            {t(course.nameKey)}
                          </h3>
                          <p className="mt-1 text-xs text-zinc-500">{course.period}</p>
                        </div>
                      </div>

                      <p className="mb-4 text-sm leading-relaxed text-zinc-400">{t(course.descriptionKey)}</p>

                      <div className="mb-4 flex flex-wrap gap-2">
                        <span
                          className={`rounded-full border px-2 py-0.5 text-xs font-medium ${
                            course.categoryKey === "categoryFrontend"
                              ? "border-blue-500/30 bg-blue-500/20 text-blue-400"
                              : course.categoryKey === "categoryBackend"
                                ? "border-orange-500/30 bg-orange-500/20 text-orange-400"
                                : "border-pink-500/30 bg-pink-500/20 text-pink-400"
                          }`}
                        >
                          {t(course.categoryKey)}
                        </span>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {course.tech.map((tech) => (
                          <span key={tech} className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {course.link && (
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                      >
                        {t("viewCertificate")}
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="/courses"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-zinc-900 transition-all duration-300 hover:bg-emerald-400"
            >
              {t("viewAll", { count: courses.length })}
              <ExternalLink size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
