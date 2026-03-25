import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#1a1a1a',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#10b981',
    paddingBottom: 10,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
    marginBottom: 3,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#10b981',
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    fontSize: 8,
    color: '#666',
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#10b981',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e5',
    paddingBottom: 3,
  },
  summary: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#333',
  },
  experienceItem: {
    marginBottom: 10,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  company: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
  },
  period: {
    fontSize: 8,
    color: '#666',
  },
  role: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#10b981',
    marginBottom: 3,
  },
  description: {
    fontSize: 8,
    color: '#444',
    lineHeight: 1.3,
    marginBottom: 3,
  },
  highlights: {
    marginLeft: 8,
  },
  highlightItem: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  highlightBullet: {
    width: 8,
    color: '#10b981',
    fontSize: 8,
  },
  highlightText: {
    fontSize: 8,
    color: '#555',
    flex: 1,
  },
  skillCategory: {
    marginBottom: 6,
  },
  skillCategoryTitle: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
    marginBottom: 2,
  },
  skillList: {
    fontSize: 8,
    color: '#555',
  },
  educationItem: {
    marginBottom: 6,
  },
  degree: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
  },
  school: {
    fontSize: 8,
    color: '#666',
  },
  periodText: {
    fontSize: 7,
    color: '#888',
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 15,
  },
  column: {
    flex: 1,
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  certText: {
    fontSize: 7,
    color: '#555',
    marginBottom: 1,
  },
});

interface CVProps {
  locale: 'en' | 'pt';
}

const cvData = {
  en: {
    name: 'Sebastiao de Sousa Moniz',
    title: 'Senior Software Engineer | Tech Lead',
    location: 'Luanda, Angola',
    phone: '+244 972 745 066',
    email: 'moniz.techs@gmail.com',
    linkedin: 'linkedin.com/in/sebastiao-de-sousa-moniz',
    github: 'github.com/Cientista-Avogadro',
    summary: 'Senior Software Engineer with 6+ years of experience building enterprise-grade systems. Specialized in Frontend Engineering and Full-Stack Development, delivering production-ready applications for businesses across Angola, Europe, and Brazil.',
    experience: [
      {
        company: 'DevTest',
        role: 'Senior Software Engineer',
        period: 'Oct 2024 - Present',
        description: 'Team Lead responsible for the entire development department. Building enterprise web, desktop, and mobile applications using cutting-edge technologies.',
        highlights: ['10+ enterprise websites and platforms delivered', 'Managing and mentoring development team', 'Stack: Next.js, PayloadCMS, Hasura Cloud, Tauri, Electron, React Native'],
      },
      {
        company: 'TailorDeal',
        role: 'Senior Developer | Tech Lead',
        period: 'Jan 2024 - Jan 2025',
        description: "Tech Lead for Europe's leading online marketplace for real estate and business transactions.",
        highlights: ["Tech Lead for DealBusinessHub - Europe's leading marketplace", 'Architected scalable Blazor/.NET 8 platform', 'Stack: C#, Blazor, .NET 8, Blazorise, PostgreSQL'],
      },
      {
        company: 'ECO Estuda Comigo',
        role: 'Senior Developer | Tech Lead',
        period: 'Nov 2023 - Jan 2025',
        description: "Frontend Tech Lead for Angola's innovative education technology platform.",
        highlights: ['Frontend Tech Lead for online education platform', 'Built responsive dashboards and learning interfaces'],
      },
      {
        company: 'GC-LUCAN',
        role: 'Senior Software Engineer | Tech Lead',
        period: 'Jul 2022 - Sep 2024',
        description: 'Led development of enterprise-grade software solutions serving 300+ businesses across Angola.',
        highlights: ['300+ active businesses using our software solutions', 'SIKOLASOFT: Most complete Angolan educational management software', 'KITANDASOFT Suite: ERP, POS, restaurant, invoicing, CRM'],
      },
      {
        company: 'Tecla T',
        role: 'Frontend Developer',
        period: 'Jan 2022 - Jul 2022',
        description: 'Frontend Developer for international currency transaction platform.',
        highlights: ['SADOC: International currency exchange platform', 'Login flows, exchange calculator, responsive pages'],
      },
      {
        company: 'Kiari Code',
        role: 'Frontend Developer',
        period: 'Sep 2021 - Feb 2024',
        description: 'Frontend Developer building event management platform for Angolan market.',
        highlights: ['Full company website development', 'Kiari Events: Event organizer app with React, Redux, GraphQL'],
      },
      {
        company: 'SNIR',
        role: 'Software Developer',
        period: 'Feb 2021 - Feb 2024',
        description: 'Full-Stack Developer for Angolan financial services company.',
        highlights: ['International Insurance: Full insurance management system', 'NZIMBUPAY: Banking application'],
      },
    ],
    education: [
      { degree: "Bachelor's in Computer Science", school: 'Instituto Superior Politecnico Metropolitano de Angola (ISPM)', period: '2023 - 2028' },
      { degree: 'Systems Analysis & Development', school: 'AIEC Brazil - Online', period: 'In progress (Expected: Feb 2026)' },
    ],
    skills: {
      frontend: 'React.js, Next.js, TypeScript, JavaScript (ES6+), Blazor, React Native',
      backend: 'C# / .NET, ASP.NET Core, Java Spring Boot, Java Desktop, Node.js, PHP, GraphQL',
      ai: 'VibeCoding, LLM Integration, Prompt Engineering, AI Automation, Chatbot Development',
      database: 'Microsoft SQL Server, Entity Framework Core, MariaDB, PostgreSQL, Prisma',
      tools: 'Git / GitFlow, Docker, JIRA, Redux, DevExpress / XtraReports',
    },
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Professional' },
    ],
    certifications: [
      'React - The Complete Guide (Udemy)',
      'JavaScript Algorithms and Data Structures (freeCodeCamp)',
      'Decola Tech Bootcamp (Digital Innovation One)',
      'Eduzz Fullstack Developer Bootcamp',
    ],
  },
  pt: {
    name: 'Sebastiao de Sousa Moniz',
    title: 'Engenheiro de Software Senior | Tech Lead',
    location: 'Luanda, Angola',
    phone: '+244 972 745 066',
    email: 'moniz.techs@gmail.com',
    linkedin: 'linkedin.com/in/sebastiao-de-sousa-moniz',
    github: 'github.com/Cientista-Avogadro',
    summary: 'Engenheiro de Software Senior com mais de 6 anos de experiencia na construcao de sistemas de nivel empresarial. Especializado em Engenharia Frontend e Desenvolvimento Full-Stack.',
    experience: [
      {
        company: 'DevTest',
        role: 'Engenheiro de Software Senior',
        period: 'Out 2024 - Presente',
        description: 'Team Lead responsavel por todo o departamento de desenvolvimento. Construindo aplicacoes web, desktop e mobile empresariais.',
        highlights: ['10+ websites e plataformas empresariais entregues', 'Gestao e mentoria da equipa de desenvolvimento', 'Stack: Next.js, PayloadCMS, Hasura Cloud, Tauri, Electron, React Native'],
      },
      {
        company: 'TailorDeal',
        role: 'Desenvolvedor Senior | Tech Lead',
        period: 'Jan 2024 - Jan 2025',
        description: 'Tech Lead do maior marketplace online da Europa para transaccoes imobliarias e empresariais.',
        highlights: ['Tech Lead do DealBusinessHub - maior marketplace da Europa', 'Plataforma Blazor/.NET 8 escalavel'],
      },
      {
        company: 'ECO Estuda Comigo',
        role: 'Desenvolvedor Senior | Tech Lead',
        period: 'Nov 2023 - Jan 2025',
        description: 'Frontend Tech Lead da plataforma angolana de tecnologia educacional inovadora.',
        highlights: ['Frontend Tech Lead da plataforma de educacao online', 'Construcao de dashboards responsivos e interfaces de aprendizagem'],
      },
      {
        company: 'GC-LUCAN',
        role: 'Engenheiro de Software Senior | Tech Lead',
        period: 'Jul 2022 - Set 2024',
        description: 'Liderou o desenvolvimento de solucoes de software de nivel empresarial servindo mais de 300 empresas em Angola.',
        highlights: ['300+ empresas activas usando as nossas solucoes', 'SIKOLASOFT: Software de gestao educacional angolano mais completo', 'KITANDASOFT Suite: ERP, POS, restaurante, facturacao, CRM'],
      },
      {
        company: 'Tecla T',
        role: 'Desenvolvedor Frontend',
        period: 'Jan 2022 - Jul 2022',
        description: 'Desenvolvedor Frontend para plataforma de transaccoes cambiais internacionais.',
        highlights: ['SADOC: Plataforma de cambio internacional e remessas de valores', 'Fluxos de login, calculadora de cambio, paginas responsivas'],
      },
      {
        company: 'Kiari Code',
        role: 'Desenvolvedor Frontend',
        period: 'Set 2021 - Fev 2024',
        description: 'Desenvolvedor Frontend a construir plataforma de gestao de eventos para o mercado angolano.',
        highlights: ['Desenvolvimento completo do website da empresa', 'Kiari Events: App de eventos com React, Redux, GraphQL'],
      },
      {
        company: 'SNIR',
        role: 'Desenvolvedor de Software',
        period: 'Fev 2021 - Fev 2024',
        description: 'Desenvolvedor Full-Stack para empresa angolana de servicos financeiros.',
        highlights: ['International Insurance: Sistema completo de gestao de seguros', 'NZIMBUPAY: Aplicacao bancaria'],
      },
    ],
    education: [
      { degree: 'Licenciatura em Ciencias da Computacao', school: 'Instituto Superior Politecnico Metropolitano de Angola (ISPM)', period: '2023 - 2028' },
      { degree: 'Analise e Desenvolvimento de Sistemas', school: 'AIEC Brasil - EAD', period: 'Em progresso (Previsto: Fev 2026)' },
    ],
    skills: {
      frontend: 'React.js, Next.js, TypeScript, JavaScript (ES6+), Blazor, React Native',
      backend: 'C# / .NET, ASP.NET Core, Java Spring Boot, Java Desktop, Node.js, PHP, GraphQL',
      ai: 'VibeCoding, Integracao LLM, Engenharia de Prompts, Automacao IA, Desenvolvimento de Chatbots',
      database: 'Microsoft SQL Server, Entity Framework Core, MariaDB, PostgreSQL, Prisma',
      tools: 'Git / GitFlow, Docker, JIRA, Redux, DevExpress / XtraReports',
    },
    languages: [
      { name: 'Portugues', level: 'Nativo' },
      { name: 'Ingles', level: 'Profissional' },
    ],
    certifications: [
      'React - The Complete Guide (Udemy)',
      'JavaScript Algorithms and Data Structures (freeCodeCamp)',
      'Decola Tech Bootcamp (Digital Innovation One)',
      'Eduzz Fullstack Developer Bootcamp',
    ],
  },
};

const labels = {
  en: { summary: 'Professional Summary', experience: 'Professional Experience', education: 'Education', skills: 'Technical Skills', languages: 'Languages', certifications: 'Certifications' },
  pt: { summary: 'Resumo Profissional', experience: 'Experiencia Profissional', education: 'Formacao Academica', skills: 'Competencias Tecnicas', languages: 'Idiomas', certifications: 'Certificacoes' },
};

export function CV({ locale }: CVProps) {
  const data = cvData[locale];
  const t = labels[locale];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.contactRow}>
            <Text>{data.location}</Text>
            <Text>|</Text>
            <Text>{data.phone}</Text>
            <Text>|</Text>
            <Text>{data.email}</Text>
            <Text>|</Text>
            <Text>{data.linkedin}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.summary}</Text>
          <Text style={styles.summary}>{data.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experience}</Text>
          {data.experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.company}>{exp.company}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <Text style={styles.role}>{exp.role}</Text>
              <Text style={styles.description}>{exp.description}</Text>
              <View style={styles.highlights}>
                {exp.highlights.map((highlight, i) => (
                  <View key={i} style={styles.highlightItem}>
                    <Text style={styles.highlightBullet}>-</Text>
                    <Text style={styles.highlightText}>{highlight}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t.education}</Text>
              {data.education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.degree}>{edu.degree}</Text>
                  <Text style={styles.school}>{edu.school}</Text>
                  <Text style={styles.periodText}>{edu.period}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t.certifications}</Text>
              {data.certifications.map((cert, index) => (
                <Text key={index} style={styles.certText}>- {cert}</Text>
              ))}
            </View>
          </View>

          <View style={styles.column}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t.skills}</Text>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Frontend</Text>
                <Text style={styles.skillList}>{data.skills.frontend}</Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Backend & APIs</Text>
                <Text style={styles.skillList}>{data.skills.backend}</Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>AI & Automation</Text>
                <Text style={styles.skillList}>{data.skills.ai}</Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Database</Text>
                <Text style={styles.skillList}>{data.skills.database}</Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Tools & DevOps</Text>
                <Text style={styles.skillList}>{data.skills.tools}</Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t.languages}</Text>
              {data.languages.map((lang, index) => (
                <View key={index} style={styles.languageRow}>
                  <Text style={styles.school}>{lang.name}</Text>
                  <Text style={styles.periodText}>{lang.level}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
