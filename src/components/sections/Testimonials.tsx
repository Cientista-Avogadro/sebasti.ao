"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, Star, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const testimonials = [
  { quote: "Tive a oportunidade de trabalhar com o Sebastião durante o meu estágio na SNIR, onde ele actuava como software developer e assumiu parte da minha supervisão técnica. Desde o primeiro dia, demonstrou ser uma pessoa muito amigável e deixou claro o seu domínio sólido das tecnologias, capacidade de resolução de problemas e uma visão técnica muito acima da média. Recomendo o Sebastião para novos desafios e oportunidades de colaboração em qualquer projecto que exija competência, compromisso e elevado rigor técnico.", author: "Lietson Dos Santos", role: "Front-end Developer | React & Node.js", relation: "Trabalhou com Sebastião na SNIR", rating: 5, photo: "https://media.licdn.com/dms/image/v2/D4E03AQFgH9NnpHj1UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728607241113?e=1776297600&v=beta&t=HbClBdaq1NsbVgF5vbq1eJojoNuG6zsjUzQOv3dslps" },
  { quote: "É um ótimo profissional em desenvolvimento das aplicações, super recomendo em varias atividades. Trabalhar com o Cientista está a ser uma experiência muito boa.", author: "Adão Magalhães", role: "Frontend Developer | ReactJS | TailwindCSS", relation: "Trabalhou com Sebastião na GC-LUCAN", rating: 5, photo: "https://media.licdn.com/dms/image/v2/D4D03AQHCqPaZF9gduQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1686138368450?e=1776297600&v=beta&t=rWFxyeSA04F_ZYsXC1It4_Y9C52XI-CLczQMt3CpeSU" },
  { quote: "The good programmer. So sponsor keep.", author: "Edmilson José Silvério", role: "Backend Engineer | Node.js | AWS", relation: "Trabalhou com Sebastião na Tecla T", rating: 5, photo: "https://media.licdn.com/dms/image/v2/D4D03AQFtxgpFnI6cJQ/profile-displayphoto-shrink_200_200/B4DZZVVQEMHIAY-/0/1745188357263?e=1776297600&v=beta&t=jdAZe2DcAFguS7E4EWxz_7ByWJqHAoKJ_hB8MctY7g4" },
];

export function Testimonials() {
  const t = useTranslations("testimonials");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => { setDirection(1); setCurrentIndex((prev) => (prev + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); };

  const variants = { enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }), center: { x: 0, opacity: 1 }, exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }) };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">{t("label")}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-zinc-50">{t("title")}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden min-h-[400px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={currentIndex} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }} className="w-full">
                <div className="p-8 md:p-12 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all relative">
                  <div className="absolute top-6 right-6 md:top-8 md:right-8"><Quote size={48} className="text-emerald-500/20" /></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-6">{[...Array(testimonials[currentIndex].rating)].map((_, i) => (<Star key={i} size={18} className="fill-emerald-500 text-emerald-500" />))}</div>
                    <blockquote className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8">"{testimonials[currentIndex].quote}"</blockquote>
                    <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
                      {testimonials[currentIndex].photo ? (<img src={testimonials[currentIndex].photo} alt={testimonials[currentIndex].author} className="w-14 h-14 rounded-full object-cover" />) : (<div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center"><span className="text-lg font-bold text-white">{testimonials[currentIndex].author.split(' ').map(n => n[0]).join('').slice(0, 2)}</span></div>)}
                      <div>
                        <p className="font-semibold text-zinc-100">{testimonials[currentIndex].author}</p>
                        <p className="text-sm text-emerald-400">{testimonials[currentIndex].role}</p>
                        <p className="text-xs text-zinc-500 mt-1">{testimonials[currentIndex].relation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-zinc-700 hover:border-emerald-500/50 hover:bg-emerald-500/10 flex items-center justify-center transition-all" aria-label="Previous"><ChevronLeft size={20} className="text-zinc-400" /></button>
            <div className="flex items-center gap-2" role="tablist">{testimonials.map((_, index) => (<button key={index} role="tab" aria-selected={index === currentIndex} aria-label={`Testimonial ${index + 1} of ${testimonials.length}`} onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }} className={`min-w-[32px] min-h-[32px] h-2 rounded-full transition-all flex items-center justify-center ${index === currentIndex ? "bg-emerald-500 w-6" : "bg-zinc-700 hover:bg-zinc-600"}`} />))}</div>
            <button onClick={next} className="w-12 h-12 rounded-full border border-zinc-700 hover:border-emerald-500/50 hover:bg-emerald-500/10 flex items-center justify-center transition-all" aria-label="Next"><ChevronRight size={20} className="text-zinc-400" /></button>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="mt-12 text-center">
          <a href="https://www.linkedin.com/in/sebasti%C3%A3o-de-sousa-moniz/details/recommendations" target="_blank" rel="noopener noreferrer" aria-label="View all LinkedIn recommendations" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-emerald-500/50 text-zinc-300 hover:text-emerald-400 transition-all">
            <MessageSquare size={18} />{t("viewAll")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
