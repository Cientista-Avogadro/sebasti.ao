"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { GalleryEvent } from "@/data/gallery";

interface LightboxProps {
  event: GalleryEvent;
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ event, initialIndex, onClose }: LightboxProps) {
  const t = useTranslations("gallery");
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + event.media.length) % event.media.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % event.media.length);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [event.media.length, onClose]);

  const media = event.media[index];

  return (
    <div className="fixed inset-0 z-50 bg-paper/98 flex flex-col" role="dialog" aria-modal="true" aria-label={event.name}>
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <div>
          <p className="font-display text-lg leading-tight">{event.name}</p>
          <p className="font-mono text-xs text-soft">{event.location} · {event.date}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-soft">
            {index + 1} / {event.media.length}
          </span>
          <button onClick={onClose} aria-label="Close" className="p-2 border border-line hover:border-ink transition-colors">
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center p-4 sm:p-10 min-h-0">
        {media.type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`/gallery/${event.folder}/${media.src}`} alt={`${event.name} ${index + 1}`} className="max-h-full max-w-full object-contain border border-line" />
        ) : (
          <video src={`/gallery/${event.folder}/${media.src}`} controls className="max-h-full max-w-full" />
        )}

        {event.media.length > 1 && (
          <>
            <button
              onClick={() => setIndex((i) => (i - 1 + event.media.length) % event.media.length)}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 border border-line bg-raised hover:border-ink transition-colors"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % event.media.length)}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 border border-line bg-raised hover:border-ink transition-colors"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <p className="sr-only">{t("photos")} · {t("videos")}</p>
    </div>
  );
}
