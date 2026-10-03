"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

// The modal pulls in @react-pdf/renderer: keep it out of the initial bundle.
const CVModal = dynamic(() => import("./CVModal"));

/**
 * Quiet fixed entry point for the downloadable CV. The heavy document
 * rendering code only loads once the visitor opens the dialog.
 */
export function CVDownload() {
  const t = useTranslations("cv");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 border border-ink bg-paper px-4 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-paper"
        aria-label={t("title")}
      >
        CV
      </button>

      {isOpen && <CVModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
