import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import MicrosoftClarity from '@/components/MicrosoftClarity';
import { MobileMenuProvider } from '@/lib/context/MobileMenuContext';

const APP_URL = process.env.APP_URL || "https://sebasti.ao";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  
  const isPT = locale === 'pt';
  
  return {
    metadataBase: new URL(APP_URL),
    title: isPT 
      ? 'Sebastião Moniz | Engenheiro de Software Sénior'
      : 'Sebastião Moniz | Senior Software Engineer',
    description: isPT
      ? 'Engenheiro de Software Sénior com 6+ anos de experiência. Especializado em Frontend, Full-Stack, IA e Soluções Empresariais. Baseado em Luanda, Angola.'
      : 'Senior Software Engineer with 6+ years of experience. Specialized in Frontend, Full-Stack, AI, and Enterprise Solutions. Based in Luanda, Angola.',
    keywords: [
      'Software Engineer',
      'Frontend Developer',
      'Full-Stack Developer',
      'React',
      'Next.js',
      'TypeScript',
      'Tech Lead',
      'Luanda',
      'Angola',
      'Remote Developer',
      'Engenheiro de Software',
      'Desenvolvedor Frontend',
    ],
    authors: [{ name: 'Sebastião de Sousa Moniz' }],
    creator: 'Sebastião de Sousa Moniz',
    publisher: 'Sebastião de Sousa Moniz',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'google9f8dd97617ca067d',
    },
    openGraph: {
      type: 'website',
      locale: isPT ? 'pt_AO' : 'en_US',
      alternateLocale: isPT ? 'en_US' : 'pt_AO',
      url: `${APP_URL}/${locale}`,
      siteName: isPT ? 'Sebastião Moniz' : 'Sebastião Moniz',
      title: isPT
        ? 'Sebastião Moniz | Engenheiro de Software Sénior & Tech Lead'
        : 'Sebastião Moniz | Senior Software Engineer & Tech Lead',
      description: isPT
        ? 'Engenheiro de Software Sénior com 6+ anos de experiência. Especializado em Frontend, Full-Stack, IA e Soluções Empresariais. Baseado em Luanda, Angola.'
        : 'Senior Software Engineer with 6+ years of experience. Specialized in Frontend, Full-Stack, AI, and Enterprise Solutions. Based in Luanda, Angola.',
      images: [
        {
          url: `${APP_URL}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: isPT ? 'Sebastião Moniz - Engenheiro de Software' : 'Sebastião Moniz - Senior Software Engineer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isPT
        ? 'Sebastião Moniz | Engenheiro de Software Sénior'
        : 'Sebastião Moniz | Senior Software Engineer',
      description: isPT
        ? 'Engenheiro de Software Sénior com 6+ anos de experiência.'
        : 'Senior Software Engineer with 6+ years of experience.',
      images: [`${APP_URL}/og-image.svg`],
      creator: '@CientistaAvogadro',
    },
    alternates: {
      canonical: `${APP_URL}/${locale}`,
      languages: {
        'en-US': `${APP_URL}/en`,
        'pt-AO': `${APP_URL}/pt`,
      },
    },
  };
}

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
    url: `${APP_URL}/${locale}`,
    image: `${APP_URL}/myphoto.jpg`,
    description: locale === 'pt'
      ? "Engenheiro de Software Sénior com 6+ anos de experiência em desenvolvimento web, desktop e mobile. Baseado em Luanda, Angola."
      : "Senior Software Engineer with 6+ years of experience in web, desktop, and mobile development. Based in Luanda, Angola.",
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
    jobTitle: locale === 'pt' ? "Engenheiro de Software Sénior | Tech Lead" : "Senior Software Engineer | Tech Lead",
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
        <link rel="icon" href="/favicon.ico" />
        <MicrosoftClarity />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090b] text-zinc-50 antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <MobileMenuProvider>
            {children}
          </MobileMenuProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
