"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronUp, MessageCircle, FileText } from "lucide-react";
import { CVDownload } from "./cv";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <motion.button
            onClick={() => window.open('https://wa.me/244972745066', '_blank')}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-lg shadow-green-500/25 transition-all hover:scale-110"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle size={24} className="text-white" />
          </motion.button>

          <CVDownload currentLocale="en" />

          <motion.button
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: showScroll ? 1 : 0, opacity: showScroll ? 1 : 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-14 h-14 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center shadow-lg border border-zinc-700 transition-all hover:scale-110"
            style={{ pointerEvents: showScroll ? "auto" : "none" }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} className="text-zinc-300" />
          </motion.button>
        </div>
      </AnimatePresence>
    </>
  );
}
