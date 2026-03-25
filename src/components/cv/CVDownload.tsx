"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, X, Check, Layout, Briefcase, Crown, User, UserX } from "lucide-react";
import { CVStandard, CVModern, CVExecutive } from "./templates";

type Template = "standard" | "modern" | "executive";
type Locale = "en" | "pt";
type PhotoOption = "with" | "without";

interface CVDownloadProps {
  currentLocale: Locale;
}

const templates = {
  standard: {
    name: "Standard",
    description: "Classic Europass-style, ATS-friendly",
    icon: Layout,
  },
  modern: {
    name: "Modern",
    description: "Two-column with sidebar, tech-focused",
    icon: Briefcase,
  },
  executive: {
    name: "Executive",
    description: "Elegant, traditional corporate style",
    icon: Crown,
  },
};

const languages = {
  en: { name: "English", flag: "🇬🇧" },
  pt: { name: "Português", flag: "🇦🇴" },
};

const photoOptions = {
  with: { name: "Com foto", description: "Inclui sua foto profissional" },
  without: { name: "Sem foto", description: "ATS-friendly, sem foto" },
};

export function CVDownload({ currentLocale }: CVDownloadProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Locale>(currentLocale);
  const [selectedTemplate, setSelectedTemplate] = useState<Template>("standard");
  const [photoOption, setPhotoOption] = useState<PhotoOption>("without");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);

    try {
      const { pdf } = await import("@react-pdf/renderer");

      let DocumentComponent;
      switch (selectedTemplate) {
        case "modern":
          DocumentComponent = <CVModern locale={selectedLang} withPhoto={photoOption === "with"} />;
          break;
        case "executive":
          DocumentComponent = <CVExecutive locale={selectedLang} withPhoto={photoOption === "with"} />;
          break;
        default:
          DocumentComponent = <CVStandard locale={selectedLang} withPhoto={photoOption === "with"} />;
      }

      const blob = await pdf(DocumentComponent).toBlob();

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

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/25 transition-all hover:scale-110"
        aria-label="Download CV"
      >
        <FileText size={24} className="text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-zinc-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
                    <Download size={20} className="text-emerald-400" />
                    Download CV
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <X size={20} className="text-zinc-400" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Template Selection */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-3">
                    Template
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(Object.keys(templates) as Template[]).map((key) => {
                      const template = templates[key];
                      const Icon = template.icon;
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedTemplate(key)}
                          className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
                            selectedTemplate === key
                              ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                              : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600"
                          }`}
                        >
                          <Icon size={20} />
                          <span className="text-xs font-medium">{template.name}</span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-zinc-500 mt-2">
                    {templates[selectedTemplate].description}
                  </p>
                </div>

                {/* Photo Option */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-3">
                    Foto
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setPhotoOption("with")}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                        photoOption === "with"
                          ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                          : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600"
                      }`}
                    >
                      <User size={18} />
                      <span className="font-medium">Com foto</span>
                      {photoOption === "with" && <Check size={16} />}
                    </button>
                    <button
                      onClick={() => setPhotoOption("without")}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                        photoOption === "without"
                          ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                          : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600"
                      }`}
                    >
                      <UserX size={18} />
                      <span className="font-medium">Sem foto</span>
                      {photoOption === "without" && <Check size={16} />}
                    </button>
                  </div>
                  <p className="text-xs text-zinc-500 mt-2">
                    {photoOption === "with" 
                      ? "Inclui sua foto profissional (algumas empresas preferem)"
                      : "ATS-friendly, recomendado para aplicações gerais"}
                  </p>
                </div>

                {/* Language Selection */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-3">
                    Language / Idioma
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(Object.keys(languages) as Locale[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedLang(key)}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                          selectedLang === key
                            ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                            : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600"
                        }`}
                      >
                        <span className="text-lg">{languages[key].flag}</span>
                        <span className="font-medium">{languages[key].name}</span>
                        {selectedLang === key && <Check size={16} />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  disabled={isGenerating}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-500/50 text-zinc-900 font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Generating PDF...
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      Download PDF
                    </>
                  )}
                </button>

                {/* Preview Info */}
                <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                  <h4 className="text-sm font-medium text-zinc-300 mb-2">Preview</h4>
                  <div className="text-xs text-zinc-500 space-y-1">
                    <p>• Template: {templates[selectedTemplate].name}</p>
                    <p>• Language: {languages[selectedLang].name}</p>
                    <p>• ATS-friendly (Applicant Tracking Systems)</p>
                    <p>• 7 professional experiences</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
