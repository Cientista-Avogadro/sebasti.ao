"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, ExternalLink, Play, Maximize2 } from "lucide-react";
import { useTranslations } from "next-intl";

const events = [
  {
    id: "as-speaker",
    name: "As-Speaker",
    tagline: "Palestrante",
    description: "Participação como palestrante em evento de tecnologia e desenvolvimento pessoal.",
    location: "Angola",
    date: "Janeiro 2026",
    folder: "palestra/As-Speaker",
    media: [
      { type: "image", src: "IMG-20260105-WA0002.jpg" },
      { type: "image", src: "IMG-20260121-WA0017.jpg" },
      { type: "image", src: "IMG-20260121-WA0019.jpg" },
      { type: "image", src: "IMG-20260121-WA0021.jpg" },
      { type: "image", src: "IMG-20260121-WA0023.jpg" },
      { type: "image", src: "IMG-20260201-WA0021.jpg" },
      { type: "image", src: "IMG-20260201-WA0026.jpg" },
      { type: "image", src: "IMG-20260201-WA0029.jpg" },
      { type: "image", src: "IMG-20260201-WA0035.jpg" },
      { type: "image", src: "IMG-20260201-WA0043.jpg" },
      { type: "image", src: "IMG-20260203-WA0009.jpg" },
      { type: "image", src: "IMG-20260203-WA0012.jpg" },
      { type: "image", src: "IMG-20260203-WA0016.jpg" },
      { type: "image", src: "IMG-20260203-WA0030.jpg" },
      { type: "image", src: "IMG-20260203-WA0032.jpg" },
      { type: "image", src: "IMG-20260203-WA0036.jpg" },
      { type: "image", src: "IMG-20260203-WA0044.jpg" },
      { type: "image", src: "WhatsApp Image 2026-01-16 at 23.57.02.jpeg" },
      { type: "image", src: "WhatsApp Image 2026-01-17 at 13.12.41.jpeg" },
    ],
    featured: true,
  },
  {
    id: "cafe-de-ti-lubango",
    name: "Café de TI Lubango",
    tagline: "Evento DevTest",
    description: "Encontro de desenvolvedores e profissionais de TI no Lubango para networking e partilha de conhecimento.",
    location: "Lubango, Angola",
    date: "Fevereiro 2026",
    folder: "DevTest/Cafe-de-TI-Lubango-2026",
    media: [
      { type: "image", src: "IMG-20260203-WA0057.jpg" },
      { type: "image", src: "IMG-20260203-WA0059.jpg" },
      { type: "image", src: "Palestra DEVTEST-35.jpg" },
      { type: "image", src: "Palestra DEVTEST-42.jpg" },
      { type: "image", src: "Palestra DEVTEST-43.jpg" },
    ],
    featured: true,
  },
  {
    id: "cafe-de-ti",
    name: "Café de TI V1",
    tagline: "Evento DevTest",
    description: "Encontro de desenvolvedores e profissionais de TI para networking e partilha de conhecimento.",
    location: "Luanda, Angola",
    date: "2025",
    folder: "DevTest/Cafe-de-TI-V1",
    media: [
      { type: "image", src: "FB_IMG_1012628135802762955.jpg" },
      { type: "image", src: "FB_IMG_1064894308481770777.jpg" },
      { type: "image", src: "FB_IMG_1667680403516875788.jpg" },
      { type: "image", src: "FB_IMG_1855054221396268315.jpg" },
      { type: "image", src: "FB_IMG_4283192782870298298.jpg" },
      { type: "image", src: "FB_IMG_479675829648507710.jpg" },
      { type: "image", src: "FB_IMG_7795449946900920506.jpg" },
      { type: "image", src: "FB_IMG_8735806457027831717.jpg" },
      { type: "image", src: "FB_IMG_9146310851780832149.jpg" },
    ],
    featured: true,
  },
  {
    id: "expo-huila",
    name: "Expo Huila 2025",
    tagline: "Feira de Tecnologia",
    description: "Participação na Expo Huila com demonstração de soluções tecnológicas para o desenvolvimento regional.",
    location: "Huila, Angola",
    date: "2025",
    folder: "DevTest/Expo-Huila-2025",
    media: [
      { type: "image", src: "FB_IMG_6780121202330775531.jpg" },
      { type: "image", src: "FB_IMG_706916006750355470.jpg" },
    ],
    featured: true,
  },
  {
    id: "project-summit",
    name: "Project Summit 2025",
    tagline: "Conferência Tech",
    description: "Participação em conferência de tecnologia e inovação.",
    location: "Luanda, Angola",
    date: "Dezembro 2025",
    folder: "Project-Summit-2025",
    media: [
      { type: "image", src: "IMG-20251210-WA0067.jpg" },
      { type: "image", src: "IMG-20251210-WA0074.jpg" },
      { type: "image", src: "IMG-20251210-WA0075.jpg" },
    ],
    featured: true,
  },
  {
    id: "angotic-2025",
    name: "AngoTic 2025",
    tagline: "Angola TIC Conference",
    description: "Maior conferência de tecnologia e inovação de Angola. Networking com profissionais e empresas do setor tech.",
    location: "Luanda, Angola",
    date: "2025",
    folder: "DevTest/AngoTic-2025",
    media: [
      { type: "video", src: "FB_VID_1766992272090824016.mp4" },
      { type: "video", src: "FB_VID_1788864733924928294.mp4" },
      { type: "video", src: "FB_VID_2275364572419675828.mp4" },
      { type: "video", src: "FB_VID_5808836047823573631.mp4" },
      { type: "video", src: "FB_VID_6208581793112401167.mp4" },
      { type: "image", src: "SmartSelect_20250908_123608_Instagram.jpg" },
      { type: "image", src: "SmartSelect_20250908_123630_Instagram.jpg" },
      { type: "image", src: "SmartSelect_20250908_123654_Instagram.jpg" },
    ],
    featured: true,
  },
  {
    id: "code-moments",
    name: "Code Moments",
    tagline: "Programação & Desenvolvimento",
    description: "Momentos de coding, projetos e desenvolvimento de software.",
    location: "Angola",
    date: "2022-2023",
    folder: "Code Momment",
    media: [
      { type: "image", src: "20220311_090946.jpg" },
      { type: "image", src: "20220312_150402.jpg" },
      { type: "image", src: "20220710_232412.jpg" },
      { type: "image", src: "Captura de tela 2023-02-15 124813.jpeg" },
      { type: "image", src: "FB_IMG_1676749490204.jpg" },
      { type: "image", src: "FB_IMG_1676749540250.jpg" },
      { type: "image", src: "FB_IMG_1676749585541.jpg" },
      { type: "image", src: "FB_IMG_1676749600604.jpg" },
      { type: "image", src: "IMG-20220313-WA0000.jpeg" },
      { type: "image", src: "IMG-20220401-WA0005.jpeg" },
      { type: "image", src: "IMG-20220813-WA0000.jpeg" },
    ],
    featured: false,
  },
  {
    id: "gc-lucan",
    name: "GC-LUCAN",
    tagline: "Eventos da Empresa",
    description: "Momentos e eventos da equipa GC-LUCAN.",
    location: "Luanda, Angola",
    date: "2023",
    folder: "GCLucan",
    media: [
      { type: "image", src: "20230623_094017.jpg" },
      { type: "image", src: "20230623_135734.jpg" },
      { type: "image", src: "20230623_144929.jpg" },
      { type: "image", src: "20230712_182953.jpg" },
      { type: "image", src: "IMG-20230313-WA0012.jpg" },
      { type: "image", src: "IMG-20230313-WA0019.jpg" },
    ],
    featured: false,
  },
  {
    id: "snir",
    name: "SNIR",
    tagline: "Eventos da Empresa",
    description: "Momentos da equipa SNIR.",
    location: "Luanda, Angola",
    date: "2021",
    folder: "SNIR",
    media: [
      { type: "image", src: "20210704_235658.jpg" },
      { type: "image", src: "20210705_000144.jpg" },
      { type: "image", src: "20210705_152717_mfnr.jpg" },
      { type: "image", src: "619c7889da3cdc981194440a338fc952.jpg" },
    ],
    featured: false,
  },
  {
    id: "passeios-huila",
    name: "Passeios Huila",
    tagline: "Team Building",
    description: "Passeios e momentos de integração da equipa DevTest na Huila.",
    location: "Huila, Angola",
    date: "2025",
    folder: "DevTest/Passeios-Huila-2025",
    media: [
      { type: "image", src: "FB_IMG_1095570067143933949.jpg" },
      { type: "image", src: "FB_IMG_1585484437185640759.jpg" },
      { type: "image", src: "FB_IMG_3564450309450655952.jpg" },
      { type: "image", src: "FB_IMG_777920285129879401.jpg" },
      { type: "image", src: "FB_IMG_8618170720402491923.jpg" },
      { type: "image", src: "FB_IMG_8695492802161303225.jpg" },
      { type: "image", src: "FB_IMG_955127692866955746.jpg" },
    ],
    featured: false,
  },
  {
    id: "office",
    name: "Office Moments",
    tagline: "Ambiente de Trabalho",
    description: "Momentos do dia-a-dia no escritório da DevTest.",
    location: "Luanda, Angola",
    date: "2024-2025",
    folder: "DevTest/Office",
    media: [
      { type: "image", src: "DSC_0189.jpg" },
      { type: "image", src: "DSC_0190.jpg" },
      { type: "image", src: "DSC_0193.jpg" },
      { type: "image", src: "DSC_0194.jpg" },
      { type: "image", src: "DSC_0195.jpg" },
      { type: "image", src: "DSC_0197.jpg" },
      { type: "image", src: "DSC_0202.jpg" },
      { type: "image", src: "FB_IMG_178789417513177742.jpg" },
      { type: "image", src: "FB_IMG_370193770258633789.jpg" },
      { type: "image", src: "IMG-20251114-WA0039.jpg" },
      { type: "image", src: "IMG-20251114-WA0045.jpg" },
      { type: "image", src: "IMG-20251114-WA0051.jpg" },
      { type: "image", src: "IMG-20251114-WA0052.jpg" },
      { type: "image", src: "IMG-20251114-WA0058.jpg" },
      { type: "image", src: "IMG-20251114-WA0067.jpg" },
      { type: "image", src: "IMG-20251116-WA0000.jpg" },
    ],
    featured: false,
  },
  {
    id: "jovens-negocios",
    name: "Jovens de Negócios",
    tagline: "Evento",
    description: "Participação em evento de jovens empreendedores e negócios.",
    location: "Angola",
    date: "Fevereiro 2026",
    folder: "Jovens de negocios",
    media: [
      { type: "image", src: "FB_IMG_1730365919826.jpg" },
      { type: "image", src: "FB_IMG_1730365927042.jpg" },
      { type: "image", src: "IMG-20260217-WA0037.jpg" },
    ],
    featured: false,
  },
];

export function Gallery({ showAll = false }: { showAll?: boolean }) {
  const t = useTranslations("gallery");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const eventsWithMedia = events.filter(e => e.media.length > 0);
  const displayedEvents = showAll ? eventsWithMedia : events.filter(e => e.featured);

  const totalPhotos = eventsWithMedia.reduce((acc, e) => acc + e.media.filter(m => m.type === "image").length, 0);
  const totalVideos = eventsWithMedia.reduce((acc, e) => acc + e.media.filter(m => m.type === "video").length, 0);

  const openLightbox = (eventId: string, mediaIndex: number = 0) => {
    setSelectedEvent(eventId);
    setSelectedMedia(mediaIndex);
    setIsFullscreen(false);
  };

  const closeLightbox = () => {
    setSelectedEvent(null);
    setSelectedMedia(0);
    setIsFullscreen(false);
  };

  const nextMedia = () => {
    const event = events.find(e => e.id === selectedEvent);
    if (event && selectedMedia < event.media.length - 1) {
      setSelectedMedia(selectedMedia + 1);
    }
  };

  const prevMedia = () => {
    if (selectedMedia > 0) {
      setSelectedMedia(selectedMedia - 1);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedEvent) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextMedia();
      if (e.key === "ArrowLeft") prevMedia();
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEvent, selectedMedia, isFullscreen]);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedEvent]);

  const selectedEventData = events.find(e => e.id === selectedEvent);
  const currentMedia = selectedEventData?.media[selectedMedia];

  return (
    <>
      <section id="gallery" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
        
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
                  {showAll ? "Event Gallery" : t("title")}
                </h2>
                  <p className="text-zinc-400 mt-4 max-w-xl">
                  {showAll 
                    ? `${eventsWithMedia.length} events • ${totalPhotos} ${t("photos")}${totalVideos > 0 ? ` • ${totalVideos} ${t("videos")}` : ''}`
                    : t("subtitle")}
                </p>
              </div>
              {!showAll && (
                <a
                  href="/gallery"
                  className="group inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors text-sm md:text-base"
                >
                  View All Events
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {displayedEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="group cursor-pointer"
                onClick={() => openLightbox(event.id, 0)}
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300">
                  {event.media[0] && (
                    <div className="aspect-video overflow-hidden">
                      {event.media[0].type === "video" ? (
                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                          <Play size={48} className="text-emerald-400" />
                        </div>
                      ) : (
                        <img
                          src={`/gallery/${event.folder}/${event.media[0].src}`}
                          alt={event.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {event.tagline}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700">
                        {event.media.length} {event.media[0]?.type === "video" ? "videos" : "photos"}
                      </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-zinc-100 mb-1">
                      {event.name}
                    </h3>
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
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedEvent && selectedEventData && selectedEventData.media.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 ${isFullscreen ? '' : ''}`}
            onClick={closeLightbox}
            style={{
              padding: isFullscreen ? '0' : 'env(safe-area-inset)',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full h-full flex flex-col ${isFullscreen ? 'max-w-[100vw] max-h-[100vh]' : 'max-w-7xl max-h-[90vh] sm:max-h-[85vh]'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-t-xl">
                <div className="min-w-0 flex-1 pr-4">
                  <h3 className="font-display text-base sm:text-lg font-bold text-zinc-100 truncate">
                    {selectedEventData.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {selectedEventData.tagline} • {selectedEventData.media.length} {currentMedia?.type === "video" ? t("videos") : t("photos")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                    title="Toggle fullscreen (F)"
                  >
                    <Maximize2 size={18} className="text-zinc-400" />
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                    title="Close (Esc)"
                  >
                    <X size={20} className="text-zinc-400" />
                  </button>
                </div>
              </div>

              <div className={`flex-1 flex items-center justify-center bg-zinc-950 relative overflow-hidden ${isFullscreen ? 'rounded-none' : 'rounded-b-xl'}`}>
                {currentMedia?.type === "video" ? (
                  <video
                    src={`/gallery/${selectedEventData.folder}/${currentMedia.src}`}
                    controls
                    autoPlay
                    className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-contain max-h-[calc(90vh-120px)] sm:max-h-[calc(85vh-140px)]'}`}
                  />
                ) : (
                  <img
                    src={`/gallery/${selectedEventData.folder}/${currentMedia?.src}`}
                    alt={`${selectedEventData.name} - ${selectedMedia + 1}`}
                    className={`max-w-full max-h-full object-contain ${isFullscreen ? 'max-h-[calc(100vh-60px)]' : 'max-h-[calc(90vh-120px)] sm:max-h-[calc(85vh-140px)]'}`}
                  />
                )}
                
                {selectedEventData.media.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                      disabled={selectedMedia === 0}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm"
                    >
                      <ChevronLeft size={20} className="text-zinc-400" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                      disabled={selectedMedia === selectedEventData.media.length - 1}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm"
                    >
                      <ChevronRight size={20} className="text-zinc-400" />
                    </button>
                  </>
                )}
              </div>

              <div className="p-3 sm:p-4 border-t border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-b-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-zinc-400 font-medium">
                    {selectedMedia + 1} / {selectedEventData.media.length}
                  </span>
                  {currentMedia?.type === "video" && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      VIDEO
                    </span>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {selectedEventData.media.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMedia(index)}
                      className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === selectedMedia 
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
                          src={`/gallery/${selectedEventData.folder}/${media.src}`}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
