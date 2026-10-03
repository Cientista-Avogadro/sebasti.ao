"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

type Course = {
  nameKey: string;
  institution: string;
  period: string;
  grade: string;
  descriptionKey: string;
  link: string;
  categoryKey: string;
};

const courses: Course[] = [
  { nameKey: "name1", institution: "DIO", period: "14/11/2021", grade: "100%", descriptionKey: "desc1", link: "https://www.dio.me/certificate/50549954/share", categoryKey: "categoryFrontend" },
  { nameKey: "name2", institution: "DIO", period: "16/11/2021", grade: "100%", descriptionKey: "desc2", link: "https://www.dio.me/certificate/424E4986/share", categoryKey: "categoryFrontend" },
  { nameKey: "name3", institution: "DIO", period: "20/11/2021", grade: "100%", descriptionKey: "desc3", link: "https://www.dio.me/certificate/7452BF4C/share", categoryKey: "categoryFrontend" },
  { nameKey: "name4", institution: "DIO", period: "20/11/2021", grade: "100%", descriptionKey: "desc4", link: "https://www.dio.me/certificate/2D7B1EB5/share", categoryKey: "categoryFrontend" },
  { nameKey: "name5", institution: "DIO", period: "20/11/2021", grade: "100%", descriptionKey: "desc5", link: "https://www.dio.me/certificate/6A3E5C03/share", categoryKey: "categoryFrontend" },
  { nameKey: "name6", institution: "DIO", period: "22/11/2021", grade: "100%", descriptionKey: "desc6", link: "https://www.dio.me/certificate/4308725E/share", categoryKey: "categoryFrontend" },
  { nameKey: "name7", institution: "DIO", period: "22/11/2021", grade: "100%", descriptionKey: "desc7", link: "https://www.dio.me/certificate/AD5AE8FE/share", categoryKey: "categoryFrontend" },
  { nameKey: "name8", institution: "DIO", period: "22/11/2021", grade: "100%", descriptionKey: "desc8", link: "https://www.dio.me/certificate/F653B736/share", categoryKey: "categoryFrontend" },
  { nameKey: "name9", institution: "DIO", period: "26/11/2021", grade: "100%", descriptionKey: "desc9", link: "https://www.dio.me/certificate/B48A69DD/share", categoryKey: "categoryFrontend" },
  { nameKey: "name10", institution: "DIO", period: "29/11/2021", grade: "100%", descriptionKey: "desc10", link: "https://www.dio.me/certificate/F208E4AD/share", categoryKey: "categoryBootcamp" },
  { nameKey: "name11", institution: "DIO", period: "29/11/2021", grade: "100%", descriptionKey: "desc11", link: "https://www.dio.me/certificate/61DB553D/share", categoryKey: "categoryBootcamp" },
  { nameKey: "name12", institution: "DIO", period: "30/11/2021", grade: "100%", descriptionKey: "desc12", link: "https://www.dio.me/certificate/2E2A154D/share", categoryKey: "categoryFrontend" },
  { nameKey: "name13", institution: "DIO", period: "30/12/2021", grade: "100%", descriptionKey: "desc13", link: "https://www.dio.me/certificate/AF675FEA/share", categoryKey: "categoryBootcamp" },
  { nameKey: "name14", institution: "Coodesh", period: "Dez 2021", grade: "Verified", descriptionKey: "desc14", link: "https://coodesh.com/share/certificate/806fcf10-5911-11ec-9234-3b58449a3098", categoryKey: "categoryFrontend" },
  { nameKey: "name15", institution: "Udemy", period: "Nov 2021", grade: "90%", descriptionKey: "desc15", link: "https://www.udemy.com/certificate/UC-bc7bce5c-6980-49f3-bbac-6f0a502a0ce6/", categoryKey: "categoryBackend" },
];

const allCategories: Course["categoryKey"][] = ["categoryFrontend", "categoryBackend", "categoryBootcamp"];
const allPlatforms = ["DIO", "Coodesh", "Udemy"];

export function Courses({ showAll = false }) {
  const t = useTranslations("courses");
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

  return (
    <section id="courses" className="scroll-mt-24 border-t border-line">
      <div className="container-site py-24">
        <SectionHeader
          index={showAll ? "" : "10"}
          label={showAll ? t("allLabel") : t("label")}
          title={showAll ? t("allTitle") : t("title")}
          subtitle={showAll ? t("allSubtitle", { count: filteredCourses.length, total: courses.length }) : t("subtitle")}
        />

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="label">{t("filter")}</span>
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              aria-pressed={selectedCategories.includes(category)}
              className={cn(
                "font-mono text-xs transition-colors",
                selectedCategories.includes(category)
                  ? "text-accent underline underline-offset-4"
                  : "text-soft hover:text-ink"
              )}
            >
              {t(category)}
            </button>
          ))}
          <span className="text-faint" aria-hidden="true">|</span>
          {allPlatforms.map((platform) => (
            <button
              key={platform}
              onClick={() => togglePlatform(platform)}
              aria-pressed={selectedPlatforms.includes(platform)}
              className={cn(
                "font-mono text-xs transition-colors",
                selectedPlatforms.includes(platform)
                  ? "text-accent underline underline-offset-4"
                  : "text-soft hover:text-ink"
              )}
            >
              {platform}
            </button>
          ))}
          {hasActiveFilters && (
            <button onClick={clearFilters} className="font-mono text-xs text-accent underline underline-offset-4">
              {t("clearFilters")}
            </button>
          )}
        </div>

        <ol className="mt-10">
          {filteredCourses.map((course) => (
            <li key={course.link} className="grid gap-2 md:grid-cols-[110px_1fr_170px] md:gap-10 py-5 border-t border-line">
              <p className="font-mono text-xs text-soft pt-1">{course.period}</p>
              <div>
                <h3 className="font-display text-lg leading-snug">{t(course.nameKey)}</h3>
                <p className="text-soft text-sm mt-1">{t(course.descriptionKey)}</p>
              </div>
              <div className="font-mono text-xs text-soft md:text-right md:pt-1 space-y-1">
                <p>{course.institution} · {course.grade}</p>
                <p className="text-faint">{t(course.categoryKey)}</p>
                <a href={course.link} target="_blank" rel="noopener noreferrer" className="link block mt-1">
                  {t("viewCertificate")}
                </a>
              </div>
            </li>
          ))}
        </ol>

        {filteredCourses.length === 0 && (
          <p className="text-soft py-10 border-t border-line">{t("empty")}</p>
        )}
      </div>
    </section>
  );
}
