"use client";

import { useState } from "react";
import { usePathname, useRouter, Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/#about", label: t("about") },
    { href: "/#work", label: t("projects") },
    { href: "/#experience", label: t("experience") },
    { href: "/#courses", label: t("certifications") },
    { href: "/#contact", label: t("contact") },
  ];

  const mobileNavItems = [
    { href: "/#about", label: t("about") },
    { href: "/#work", label: t("projects") },
    { href: "/#experience", label: t("experience") },
    { href: "/#education", label: t("education") },
    { href: "/#courses", label: t("certifications") },
    { href: "/#articles", label: t("articles") },
    { href: "/#gallery", label: t("gallery") },
    { href: "/#contact", label: t("contact") },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("/#") && pathname !== "/") {
      router.push(href);
      return;
    }

    const hash = href.slice(href.indexOf("#") + 1);
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b border-line">
        <nav className="container-site flex items-center justify-between py-4">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight">
            Sebastião Moniz
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-ink/80 hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="https://github.com/Cientista-Avogadro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("githubProfile")}
              className="text-soft hover:text-ink transition-colors"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-ink p-1"
            aria-label={t("toggleMenu")}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-paper md:hidden pt-20 overflow-y-auto overscroll-contain">
          <nav className="container-site flex flex-col gap-1 pb-16">
            {mobileNavItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left font-display text-2xl py-3 border-b border-line text-ink hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-8 flex items-center gap-6">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
