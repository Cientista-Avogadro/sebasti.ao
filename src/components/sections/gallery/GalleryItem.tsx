"use client";

import { Camera, MapPin, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { GalleryEvent } from "@/data/gallery";

interface GalleryItemProps {
  event: GalleryEvent;
  index: number;
  onOpen: (eventIndex: number, mediaIndex?: number) => void;
}

export function GalleryItem({ event, index, onOpen }: GalleryItemProps) {
  const t = useTranslations("gallery");

  const cover = event.media[0];
  const coverSrc = cover ? `/gallery/${event.folder}/${cover.src}` : null;
  const photos = event.media.filter((m) => m.type === "image").length;
  const videos = event.media.filter((m) => m.type === "video").length;

  return (
    <button
      onClick={() => onOpen(index)}
      className="text-left group border border-ink/25 bg-raised p-2 transition-colors hover:border-ink"
      aria-label={event.name}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {cover && cover.type === "image" && coverSrc && (
          <Image
            src={coverSrc}
            alt={event.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        {cover && cover.type === "video" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Play size={40} className="text-paper" aria-hidden="true" />
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg leading-snug">{event.name}</h3>
        <p className="font-mono text-xs text-soft mt-2 flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1">
            <MapPin size={11} aria-hidden="true" />
            {event.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Camera size={11} aria-hidden="true" />
            {photos} {t("photos")}
          </span>
          {videos > 0 && (
            <span className="inline-flex items-center gap-1">
              <Play size={11} aria-hidden="true" />
              {videos} {t("videos")}
            </span>
          )}
        </p>
      </div>
    </button>
  );
}
