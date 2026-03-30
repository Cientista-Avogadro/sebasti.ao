"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "pt") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-zinc-400" />
      <div className="flex rounded-lg overflow-hidden border border-zinc-700">
        <button
          onClick={() => switchLocale("en")}
          aria-label="Switch to English"
          aria-pressed={locale === "en"}
          className={`px-3 py-1 text-sm font-medium transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
            locale === "en"
              ? "bg-emerald-500 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => switchLocale("pt")}
          aria-label="Mudar para Português"
          aria-pressed={locale === "pt"}
          className={`px-3 py-1 text-sm font-medium transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
            locale === "pt"
              ? "bg-emerald-500 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          PT
        </button>
      </div>
    </div>
  );
}
