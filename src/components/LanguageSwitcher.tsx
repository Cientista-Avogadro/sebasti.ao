"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (next: "en" | "pt") => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <div className="flex items-center gap-1 font-mono text-xs" role="group">
      <button
        onClick={() => switchTo("en")}
        aria-label={t("switchToEnglish")}
        aria-pressed={locale === "en"}
        className={cn(
          "px-2 py-2 transition-colors",
          locale === "en" ? "text-accent underline underline-offset-4" : "text-soft hover:text-ink"
        )}
      >
        EN
      </button>
      <span className="text-faint" aria-hidden="true">/</span>
      <button
        onClick={() => switchTo("pt")}
        aria-label={t("switchToPortuguese")}
        aria-pressed={locale === "pt"}
        className={cn(
          "px-2 py-2 transition-colors",
          locale === "pt" ? "text-accent underline underline-offset-4" : "text-soft hover:text-ink"
        )}
      >
        PT
      </button>
    </div>
  );
}
