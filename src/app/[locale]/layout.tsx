import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Script from 'next/script';

const APP_URL = process.env.APP_URL || "https://sebasti.ao";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sebastião de Sousa Moniz",
    alternateName: ["Cientista-Avogadro", "Sebasti"],
    url: APP_URL,
    image: `${APP_URL}/myphoto.jpg`,
    description: "Senior Software Engineer and System Analyst with 6+ years of experience in web, desktop, and mobile development. Based in Luanda, Angola.",
    email: "moniz.techs@gmail.com",
    telephone: "+244972745066",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Luanda",
      addressCountry: "AO",
    },
    sameAs: [
      "https://github.com/Cientista-Avogadro",
      "https://www.linkedin.com/in/sebastião-de-sousa-moniz",
      "https://www.instagram.com/sebastiao_moniz_scientist/",
      "https://web.facebook.com/Cientistass",
    ],
    jobTitle: "Senior Software Engineer",
    worksFor: [
      {
        "@type": "Organization",
        name: "DevTest",
        startDate: "2024-10",
      },
    ],
    knowsAbout: [
      "Frontend Engineering",
      "React",
      "Next.js",
      "TypeScript",
      "Blazor",
      ".NET",
      "AI",
      "System Analysis",
      "Full-Stack Development",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Instituto Superior Politécnico do Moxico (ISPM)",
      },
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "w17vqw398h");`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090b] text-zinc-50 antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
