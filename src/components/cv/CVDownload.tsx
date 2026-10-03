"use client";

import { useState } from "react";
import { Briefcase, Check, Crown, Download, FileText, Layout, Loader2, User, UserX, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { CVStandard, CVModern, CVExecutive } from "./templates";
import { cn } from "@/lib/utils";

type Template = "standard" | "modern" | "executive";
type Locale = "en" | "pt";
type PhotoOption = "with" | "without";

const templates: { key: Template; name: string; icon: typeof FileText }[] = [
  { key: "standard", name: "Standard", icon: FileText },
  { key: "modern", name: "Modern", icon: Briefcase },
  { key: "executive", name: "Executive", icon: Crown },
];

export function CVDownload() {
  const t = useTranslations("cv");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Locale>(locale === "pt" ? "pt" : "en");
  const [selectedTemplate, setSelectedTemplate] = useState<Template>("standard");
  const [photoOption, setPhotoOption] = useState<PhotoOption>("without");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);

    try {
      const { pdf } = await import("@react-pdf/renderer");

      const documentComponent =
        selectedTemplate === "modern" ? (
          <CVModern locale={selectedLang} withPhoto={photoOption === "with"} />
        ) : selectedTemplate === "executive" ? (
          <CVExecutive locale={selectedLang} withPhoto={photoOption === "with"} />
        ) : (
          <CVStandard locale={selectedLang} withPhoto={photoOption === "with"} />
        );

      const blob = await pdf(documentComponent).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Sebastiao-Moniz-CV-${selectedTemplate}-${photoOption === "with" ? "photo" : "nophoto"}-${selectedLang.toUpperCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setIsOpen(false);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const templateDescriptions: Record<Template, string> = {
    standard: t("standardDesc"),
    modern: t("modernDesc"),
    executive: t("executiveDesc"),
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 border border-ink bg-paper px-4 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-paper"
        aria-label={t("title")}
      >
        CV
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={t("title")}>
          <div className="absolute inset-0 bg-ink/40" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div className="relative w-full max-w-lg border border-ink bg-paper">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h3 className="font-display text-lg">{t("title")}</h3>
              <button
                onClick={() => setIsOpen(false)}
                aria-label={t("close")}
                className="p-1.5 text-soft hover:text-ink transition-colors"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-6 space-y-8">
              <fieldset>
                <legend className="label mb-3">{t("template")}</legend>
                <div className="grid grid-cols-3 gap-3">
                  {templates.map(({ key, name, icon: Icon }) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTemplate(key)}
                      aria-pressed={selectedTemplate === key}
                      className={cn(
                        "flex flex-col items-center gap-2 p-3 border transition-colors",
                        selectedTemplate === key
                          ? "border-accent text-accent bg-accent/5"
                          : "border-line text-soft hover:border-ink hover:text-ink"
                      )}
                    >
                      <Icon size={18} aria-hidden="true" />
                      <span className="text-xs font-medium">{name}</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-soft mt-2">{templateDescriptions[selectedTemplate]}</p>
              </fieldset>

              <fieldset>
                <legend className="label mb-3">{t("photo")}</legend>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPhotoOption("with")}
                    aria-pressed={photoOption === "with"}
                    className={cn(
                      "flex items-center justify-center gap-2 px-4 py-3 border text-sm transition-colors",
                      photoOption === "with"
                        ? "border-accent text-accent bg-accent/5"
                        : "border-line text-soft hover:border-ink hover:text-ink"
                    )}
                  >
                    <User size={16} aria-hidden="true" />
                    {t("withPhoto")}
                    {photoOption === "with" && <Check size={14} aria-hidden="true" />}
                  </button>
                  <button
                    onClick={() => setPhotoOption("without")}
                    aria-pressed={photoOption === "without"}
                    className={cn(
                      "flex items-center justify-center gap-2 px-4 py-3 border text-sm transition-colors",
                      photoOption === "without"
                        ? "border-accent text-accent bg-accent/5"
                        : "border-line text-soft hover:border-ink hover:text-ink"
                    )}
                  >
                    <UserX size={16} aria-hidden="true" />
                    {t("withoutPhoto")}
                    {photoOption === "without" && <Check size={14} aria-hidden="true" />}
                  </button>
                </div>
                <p className="text-xs text-soft mt-2">
                  {photoOption === "with" ? t("withPhotoDesc") : t("withoutPhotoDesc")}
                </p>
              </fieldset>

              <fieldset>
                <legend className="label mb-3">{t("language")}</legend>
                <div className="grid grid-cols-2 gap-3">
                  {(["en", "pt"] as Locale[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedLang(key)}
                      aria-pressed={selectedLang === key}
                      className={cn(
                        "flex items-center justify-center gap-2 px-4 py-3 border font-mono text-sm transition-colors",
                        selectedLang === key
                          ? "border-accent text-accent bg-accent/5"
                          : "border-line text-soft hover:border-ink hover:text-ink"
                      )}
                    >
                      {key.toUpperCase()}
                      {selectedLang === key && <Check size={14} aria-hidden="true" />}
                    </button>
                  ))}
                </div>
              </fieldset>

              <button onClick={handleDownload} disabled={isGenerating} className="btn w-full justify-center disabled:opacity-60">
                {isGenerating ? (
                  <>
                    <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                    {t("generating")}
                  </>
                ) : (
                  <>
                    <Download size={16} aria-hidden="true" />
                    {t("generate")}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
