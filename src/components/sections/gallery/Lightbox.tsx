"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { GalleryEvent } from "@/data/gallery";

interface LightboxProps {
  event: GalleryEvent;
  initialIndex?: number;
  onClose: () => void;
}

export function Lightbox({ event, initialIndex = 0, onClose }: LightboxProps) {
  const t = useTranslations("gallery");
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentMedia = event.media[currentIndex];

  const next = () => {
    if (currentIndex < event.media.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "f" || e.key === "F") setIsFullscreen(v => !v);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={event.name}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`relative w-full h-full flex flex-col ${isFullscreen ? "max-w-[100vw] max-h-[100vh]" : "max-w-7xl max-h-[90vh] sm:max-h-[85vh]"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-t-xl">
            <div className="min-w-0 flex-1 pr-4">
              <h3 className="font-display text-base sm:text-lg font-bold text-zinc-100 truncate">{event.name}</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                {t(event.taglineKey)} • {event.media.length} {currentMedia?.type === "video" ? t("videos") : t("photos")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(v => !v)}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                aria-label="Toggle fullscreen"
              >
                <Maximize2 size={18} className="text-zinc-400" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={20} className="text-zinc-400" />
              </button>
            </div>
          </div>

          {/* Media area */}
          <div className={`flex-1 flex items-center justify-center bg-zinc-950 relative overflow-hidden ${isFullscreen ? "rounded-none" : "rounded-b-xl"}`}>
            {currentMedia?.type === "video" ? (
              <video
                src={`/gallery/${event.folder}/${currentMedia.src}`}
                controls
                autoPlay
                className="w-full h-full object-contain max-h-[calc(90vh-120px)] sm:max-h-[calc(85vh-140px)]"
              />
            ) : (
              <img
                src={`/gallery/${event.folder}/${currentMedia?.src}`}
                alt={`${event.name} - ${currentIndex + 1}`}
                className={`max-w-full max-h-full object-contain ${isFullscreen ? "max-h-[calc(100vh-60px)]" : "max-h-[calc(90vh-120px)] sm:max-h-[calc(85vh-140px)]"}`}
              />
            )}

            {event.media.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  disabled={currentIndex === 0}
                  aria-label="Previous image"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm"
                >
                  <ChevronLeft size={20} className="text-zinc-400" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  disabled={currentIndex === event.media.length - 1}
                  aria-label="Next image"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm"
                >
                  <ChevronRight size={20} className="text-zinc-400" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className="p-3 sm:p-4 border-t border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-b-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-zinc-400 font-medium">
                {currentIndex + 1} / {event.media.length}
              </span>
              {currentMedia?.type === "video" && (
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  VIDEO
                </span>
              )}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {event.media.map((media, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`View ${media.type} ${i + 1}`}
                  className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    i === currentIndex
                      ? "border-emerald-500 scale-105"
                      : "border-transparent hover:border-zinc-600"
                  }`}
                >
                  {media.type === "video" ? (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                      <Play size={20} className="text-zinc-400" />
                    </div>
                  ) : (
                    <img
                      src={`/gallery/${event.folder}/${media.src}`}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
