"use client";

import { motion } from "framer-motion";
import { Camera, MapPin, Calendar, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { GalleryEvent } from "@/data/gallery";

interface GalleryItemProps {
  event: GalleryEvent;
  index: number;
  isInView: boolean;
  onOpen: (eventId: string, mediaIndex?: number) => void;
}

export function GalleryItem({ event, index, isInView, onOpen }: GalleryItemProps) {
  const t = useTranslations("gallery");
  const firstMedia = event.media[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="group cursor-pointer"
      onClick={() => onOpen(event.id, 0)}
      role="button"
      aria-label={`Open gallery: ${event.name}`}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(event.id, 0)}
    >
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300">
        {firstMedia && (
          <div className="aspect-video overflow-hidden">
            {firstMedia.type === "video" ? (
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                <Play size={48} className="text-emerald-400" />
              </div>
            ) : (
              <img
                src={`/gallery/${event.folder}/${firstMedia.src}`}
                alt={event.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            )}
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent opacity-80" />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              {t(event.taglineKey)}
            </span>
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700">
              {event.media.length} {firstMedia?.type === "video" ? t("videos") : t("photos")}
            </span>
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-zinc-100 mb-1">{event.name}</h3>
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {event.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {event.date}
            </span>
          </div>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="p-2 rounded-full bg-zinc-900/80 backdrop-blur-sm">
            <Camera size={18} className="text-emerald-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
