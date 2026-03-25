"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-zinc-400" />
      <div className="flex rounded-lg overflow-hidden border border-zinc-700">
        <button
          onClick={() => switchLocale("en")}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
            locale === "en"
              ? "bg-emerald-500 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => switchLocale("pt")}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
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
