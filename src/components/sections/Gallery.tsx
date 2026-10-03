"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";
import { GalleryItem } from "./gallery/GalleryItem";
import { Lightbox } from "./gallery/Lightbox";
import { galleryEvents } from "@/data/gallery";

export function Gallery({ showAll = false }) {
  const t = useTranslations("gallery");

  const eventsWithMedia = galleryEvents.filter((event) => event.media.length > 0);
  const totalPhotos = eventsWithMedia.reduce(
    (count, event) => count + event.media.filter((m) => m.type === "image").length,
    0
  );
  const totalVideos = eventsWithMedia.reduce(
    (count, event) => count + event.media.filter((m) => m.type === "video").length,
    0
  );

  const displayedEvents = showAll ? eventsWithMedia : eventsWithMedia.slice(0, 3);

  const [activeEventIndex, setActiveEventIndex] = useState<number | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  const openLightbox = (eventIndex: number, initialMediaIndex = 0) => {
    setActiveEventIndex(eventIndex);
    setMediaIndex(initialMediaIndex);
  };

  const closeLightbox = () => setActiveEventIndex(null);

  const activeEvent = activeEventIndex !== null ? displayedEvents[activeEventIndex] : null;

  return (
    <section id="gallery" className="scroll-mt-24 border-t border-line">
      <div className="container-site py-24">
        <SectionHeader
          index={showAll ? "" : "12"}
          label={showAll ? t("allEvents") : t("label")}
          title={showAll ? t("allEvents") : t("title")}
          subtitle={
            showAll
              ? `${eventsWithMedia.length} · ${totalPhotos} ${t("photos")}${totalVideos > 0 ? ` · ${totalVideos} ${t("videos")}` : ""}`
              : t("subtitle")
          }
          action={
            !showAll ? (
              <a href="/gallery" className="link inline-flex items-center gap-1.5 text-sm whitespace-nowrap">
                {t("viewAll")}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : undefined
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEvents.map((event, index) => (
            <GalleryItem key={event.id} event={event} index={index} onOpen={openLightbox} />
          ))}
        </div>
      </div>

      {activeEvent && (
        <Lightbox event={activeEvent} initialIndex={mediaIndex} onClose={closeLightbox} />
      )}
    </section>
  );
}
