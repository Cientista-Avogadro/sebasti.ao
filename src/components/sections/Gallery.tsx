"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { galleryEvents } from "@/data/gallery";
import { GalleryItem } from "./gallery/GalleryItem";
import { Lightbox } from "./gallery/Lightbox";

export function Gallery({ showAll = false }: { showAll?: boolean }) {
  const t = useTranslations("gallery");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxState, setLightboxState] = useState<{ eventId: string; mediaIndex: number } | null>(null);

  const eventsWithMedia = galleryEvents.filter(e => e.media.length > 0);
  const displayedEvents = showAll ? eventsWithMedia : galleryEvents.filter(e => e.featured);

  const totalPhotos = eventsWithMedia.reduce((acc, e) => acc + e.media.filter(m => m.type === "image").length, 0);
  const totalVideos = eventsWithMedia.reduce((acc, e) => acc + e.media.filter(m => m.type === "video").length, 0);

  const openLightbox = (eventId: string, mediaIndex = 0) => {
    setLightboxState({ eventId, mediaIndex });
  };
  const closeLightbox = () => setLightboxState(null);

  const activeEvent = lightboxState
    ? galleryEvents.find(e => e.id === lightboxState.eventId)
    : null;

  return (
    <>
      <section id="gallery" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-12"
          >
            <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">
              {showAll ? "07 — ALL EVENTS" : t("label")}
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-50">
                  {showAll ? t("allEvents") : t("title")}
                </h2>
                <p className="text-zinc-400 mt-4 max-w-xl">
                  {showAll
                    ? `${eventsWithMedia.length} events • ${totalPhotos} ${t("photos")}${totalVideos > 0 ? ` • ${totalVideos} ${t("videos")}` : ""}`
                    : t("subtitle")}
                </p>
              </div>
              {!showAll && (
                <a
                  href="/gallery"
                  className="group inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors text-sm md:text-base"
                  aria-label={t("viewAll")}
                >
                  {t("viewAll")}
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {displayedEvents.map((event, index) => (
              <GalleryItem
                key={event.id}
                event={event}
                index={index}
                isInView={isInView}
                onOpen={openLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      {activeEvent && lightboxState && (
        <Lightbox
          event={activeEvent}
          initialIndex={lightboxState.mediaIndex}
          onClose={closeLightbox}
        />
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}
