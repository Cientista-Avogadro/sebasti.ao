"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrentIndex((index) => (index + 1) % testimonials.length);
  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="scroll-mt-24 border-t border-line">
      <div className="container-site py-24">
        <SectionHeader index="09" label={t("label")} title={t("title")} subtitle={t("subtitle")} />

        <div className="max-w-3xl">
          <figure className="border-t-2 border-ink pt-8">
            <Quote size={28} className="text-line" aria-hidden="true" />
            <blockquote className="font-display text-xl sm:text-2xl leading-relaxed mt-6">
              {t(`items.${current.id}.quote`)}
            </blockquote>
            <figcaption className="flex items-center gap-4 mt-8">
              {current.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={current.photo} alt={current.author} className="w-12 h-12 rounded-full object-cover grayscale" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-line" aria-hidden="true" />
              )}
              <div>
                <p className="font-medium">{current.author}</p>
                <p className="text-soft text-sm">{current.role}</p>
                <p className="text-faint text-xs mt-0.5">{t(`items.${current.id}.relation`)}</p>
              </div>
            </figcaption>
          </figure>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`${index + 1} / ${testimonials.length}`}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 transition-colors",
                    index === currentIndex ? "bg-accent" : "bg-line hover:bg-soft"
                  )}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="p-2 border border-line hover:border-ink transition-colors"
              >
                <ChevronLeft size={16} aria-hidden="true" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="p-2 border border-line hover:border-ink transition-colors"
              >
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/sebasti%C3%A3o-de-sousa-moniz/details/recommendations"
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-block mt-10 text-sm"
          >
            {t("viewAll")}
          </a>
        </div>
      </div>
    </section>
  );
}
