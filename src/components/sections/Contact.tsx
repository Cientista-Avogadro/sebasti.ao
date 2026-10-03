"use client";

import { useRef, useState } from "react";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  const t = useTranslations("contact");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const channels = [
    { icon: Mail, label: "Email", value: "moniz.techs@gmail.com", href: "mailto:moniz.techs@gmail.com" },
    { icon: Phone, label: "Phone", value: "+244 972 745 066", href: "tel:+244972745066" },
    { icon: MapPin, label: t("location"), value: t("luanda"), href: null },
  ];

  return (
    <section id="contact" className="scroll-mt-24 border-t-2 border-ink">
      <div className="container-site py-24">
        <SectionHeader index="13" label={t("label")} title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <dl>
              {channels.map((channel) => (
                <div key={channel.label} className="flex items-baseline justify-between gap-6 py-4 border-t border-line">
                  <dt className="label">{channel.label}</dt>
                  <dd className="text-[0.95rem]">
                    {channel.href ? (
                      <a href={channel.href} className={channel.href.startsWith("http") ? "link" : "text-ink/85 hover:text-accent transition-colors"} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                        {channel.value}
                      </a>
                    ) : (
                      <span className="text-ink/85">{channel.value}</span>
                    )}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 py-4 border-t border-line">
                <dt className="label">LinkedIn</dt>
                <dd>
                  <a href="https://www.linkedin.com/in/sebasti%C3%A3o-de-sousa-moniz/" target="_blank" rel="noopener noreferrer" className="link text-[0.95rem]">
                    sebastiao-de-sousa-moniz
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 py-4 border-t border-line">
                <dt className="label">GitHub</dt>
                <dd>
                  <a href="https://github.com/Cientista-Avogadro" target="_blank" rel="noopener noreferrer" className="link text-[0.95rem]">
                    @Cientista-Avogadro
                  </a>
                </dd>
              </div>
            </dl>

            <p className="label mt-8">{t("available")}</p>
          </div>

          <form onSubmit={handleSubmit} className="self-start w-full">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="label block mb-2">
                  {t("name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  placeholder={t("yourName")}
                  className="w-full bg-transparent border-0 border-b border-ink/30 rounded-none px-0 py-2.5 text-ink placeholder:text-faint focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="label block mb-2">
                  {t("email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  placeholder={t("yourEmail")}
                  className="w-full bg-transparent border-0 border-b border-ink/30 rounded-none px-0 py-2.5 text-ink placeholder:text-faint focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="mt-8">
              <label htmlFor="message" className="label block mb-2">
                {t("message")}
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={6}
                placeholder={t("messagePlaceholder")}
                className="w-full bg-transparent border-0 border-b border-ink/30 rounded-none px-0 py-2.5 text-ink placeholder:text-faint focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button type="submit" disabled={isSubmitting || isSubmitted} className="btn mt-10 disabled:opacity-60">
              {isSubmitted ? <CheckCircle size={16} aria-hidden="true" /> : <Send size={16} aria-hidden="true" />}
              {isSubmitting ? t("sending") : isSubmitted ? t("sent") : t("send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
