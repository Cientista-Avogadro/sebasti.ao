"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "pt") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-zinc-400" />
      <div className="flex overflow-hidden rounded-lg border border-zinc-700">
        <button
          onClick={() => switchLocale("en")}
          aria-label={t("switchToEnglish")}
          aria-pressed={locale === "en"}
          className={`flex min-h-[44px] min-w-[44px] items-center justify-center px-3 py-1 text-sm font-medium transition-colors ${
            locale === "en" ? "bg-emerald-500 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => switchLocale("pt")}
          aria-label={t("switchToPortuguese")}
          aria-pressed={locale === "pt"}
          className={`flex min-h-[44px] min-w-[44px] items-center justify-center px-3 py-1 text-sm font-medium transition-colors ${
            locale === "pt" ? "bg-emerald-500 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          PT
        </button>
      </div>
    </div>
  );
}
