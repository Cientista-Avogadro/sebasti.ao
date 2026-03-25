import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const getPhotoSrc = () => typeof window !== 'undefined' ? `${window.location.origin}/myphoto.jpg` : '/myphoto.jpg';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: '#333',
    backgroundColor: '#ffffff',
  },
  sidebar: {
    width: '35%',
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  main: {
    width: '65%',
    padding: 20,
  },
  photo: {
    width: 60,
    height: 75,
    marginBottom: 15,
    borderRadius: 4,
    objectFit: 'cover',
    alignSelf: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
    marginBottom: 4,
    textAlign: 'center',
  },
  title: {
    fontSize: 9,
    color: '#10b981',
    marginBottom: 15,
    textAlign: 'center',
  },
  sidebarSection: {
    marginBottom: 15,
  },
  sidebarSectionTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#10b981',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 4,
  },
  contactText: {
    fontSize: 8,
    color: '#cccccc',
    marginBottom: 4,
  },
  skillItem: {
    marginBottom: 6,
  },
  skillName: {
    fontSize: 8,
    color: '#ffffff',
    marginBottom: 2,
  },
  skillBarBg: {
    height: 3,
    backgroundColor: '#333',
    borderRadius: 1,
  },
  skillBarFill: {
    height: 3,
    backgroundColor: '#10b981',
    borderRadius: 1,
  },
  skillList: {
    fontSize: 8,
    color: '#cccccc',
    marginBottom: 2,
  },
  mainSection: {
    marginBottom: 15,
  },
  mainSectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
    borderBottomWidth: 2,
    borderBottomColor: '#10b981',
    paddingBottom: 4,
    marginBottom: 10,
  },
  expItem: {
    marginBottom: 10,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  expCompany: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
  },
  expPeriod: {
    fontSize: 8,
    color: '#10b981',
  },
  expRole: {
    fontSize: 9,
    color: '#666',
    marginBottom: 3,
  },
  expDesc: {
    fontSize: 8,
    color: '#555',
    lineHeight: 1.3,
  },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  langName: {
    fontSize: 8,
    color: '#cccccc',
  },
  langLevel: {
    fontSize: 8,
    color: '#10b981',
  },
  certItem: {
    fontSize: 8,
    color: '#cccccc',
    marginBottom: 4,
  },
});

interface CVProps {
  locale: 'en' | 'pt';
  withPhoto?: boolean;
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
        description: 'Team Lead responsible for the entire development department. Building enterprise web, desktop, and mobile applications.',
      },
      {
        company: 'TailorDeal',
        role: 'Senior Developer | Tech Lead',
        period: 'Jan 2024 - Jan 2025',
        description: "Tech Lead for Europe's leading online marketplace for real estate and business transactions.",
      },
      {
        company: 'ECO Estuda Comigo',
        role: 'Senior Developer | Tech Lead',
        period: 'Nov 2023 - Jan 2025',
        description: "Frontend Tech Lead for Angola's innovative education technology platform.",
      },
      {
        company: 'GC-LUCAN',
        role: 'Senior Software Engineer | Tech Lead',
        period: 'Jul 2022 - Sep 2024',
        description: 'Led development of enterprise-grade software solutions serving 300+ businesses across Angola.',
      },
      {
        company: 'Tecla T',
        role: 'Frontend Developer',
        period: 'Jan 2022 - Jul 2022',
        description: 'Frontend Developer for international currency transaction platform.',
      },
      {
        company: 'Kiari Code',
        role: 'Frontend Developer',
        period: 'Sep 2021 - Feb 2024',
        description: 'Frontend Developer building event management platform for Angolan market.',
      },
      {
        company: 'SNIR',
        role: 'Software Developer',
        period: 'Feb 2021 - Feb 2024',
        description: 'Full-Stack Developer for Angolan financial services company.',
      },
    ],
    education: [
      { degree: 'High School - Computer Systems Management', school: 'IPIL Makarenco', period: '2018 - 2022' },
      { degree: "Bachelor's in Computer Science", school: 'ISPM Angola', period: '2023 - 2028' },
      { degree: 'Systems Analysis & Development', school: 'AIEC Brazil', period: 'In progress' },
    ],
    skills: {
      frontend: ['React.js', 'Next.js', 'TypeScript', 'Blazor', 'React Native'],
      backend: ['C#/.NET', 'Java Spring Boot', 'Node.js', 'GraphQL'],
      ai: ['VibeCoding', 'LLM Integration', 'Prompt Engineering'],
      database: ['SQL Server', 'MariaDB', 'PostgreSQL'],
      tools: ['Git', 'Docker', 'JIRA', 'Redux'],
    },
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Professional' },
    ],
    certifications: [
      'React - The Complete Guide (Udemy)',
      'JavaScript Algorithms (freeCodeCamp)',
      'Decola Tech Bootcamp',
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
      },
      {
        company: 'TailorDeal',
        role: 'Desenvolvedor Senior | Tech Lead',
        period: 'Jan 2024 - Jan 2025',
        description: 'Tech Lead do maior marketplace online da Europa para transaccoes imobliarias.',
      },
      {
        company: 'ECO Estuda Comigo',
        role: 'Desenvolvedor Senior | Tech Lead',
        period: 'Nov 2023 - Jan 2025',
        description: 'Frontend Tech Lead da plataforma angolana de tecnologia educacional.',
      },
      {
        company: 'GC-LUCAN',
        role: 'Engenheiro de Software Senior | Tech Lead',
        period: 'Jul 2022 - Set 2024',
        description: 'Liderou o desenvolvimento de solucoes de software para mais de 300 empresas em Angola.',
      },
      {
        company: 'Tecla T',
        role: 'Desenvolvedor Frontend',
        period: 'Jan 2022 - Jul 2022',
        description: 'Desenvolvedor Frontend para plataforma de transaccoes cambiais internacionais.',
      },
      {
        company: 'Kiari Code',
        role: 'Desenvolvedor Frontend',
        period: 'Set 2021 - Fev 2024',
        description: 'Desenvolvedor Frontend a construir plataforma de gestao de eventos.',
      },
      {
        company: 'SNIR',
        role: 'Desenvolvedor de Software',
        period: 'Fev 2021 - Fev 2024',
        description: 'Desenvolvedor Full-Stack para empresa angolana de servicos financeiros.',
      },
    ],
    education: [
      { degree: 'Ensino Medio - Gestao de Sistemas Informaticos', school: 'IPIL Makarenco', period: '2018 - 2022' },
      { degree: 'Licenciatura em Ciencias da Computacao', school: 'ISPM Angola', period: '2023 - 2028' },
      { degree: 'Analise e Desenvolvimento de Sistemas', school: 'AIEC Brasil', period: 'Em progresso' },
    ],
    skills: {
      frontend: ['React.js', 'Next.js', 'TypeScript', 'Blazor', 'React Native'],
      backend: ['C#/.NET', 'Java Spring Boot', 'Node.js', 'GraphQL'],
      ai: ['VibeCoding', 'Integracao LLM', 'Engenharia de Prompts'],
      database: ['SQL Server', 'MariaDB', 'PostgreSQL'],
      tools: ['Git', 'Docker', 'JIRA', 'Redux'],
    },
    languages: [
      { name: 'Portugues', level: 'Nativo' },
      { name: 'Ingles', level: 'Profissional' },
    ],
    certifications: [
      'React - The Complete Guide (Udemy)',
      'JavaScript Algorithms (freeCodeCamp)',
      'Decola Tech Bootcamp',
    ],
  },
};

const labels = {
  en: { contact: 'Contact', skills: 'Skills', languages: 'Languages', certifications: 'Certifications', experience: 'Experience', education: 'Education', summary: 'Profile' },
  pt: { contact: 'Contacto', skills: 'Competencias', languages: 'Idiomas', certifications: 'Certificacoes', experience: 'Experiencia', education: 'Formacao', summary: 'Perfil' },
};

export function CVModern({ locale, withPhoto }: CVProps) {
  const data = cvData[locale];
  const t = labels[locale];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar}>
          {withPhoto && (
            <Image
              src={getPhotoSrc()}
              style={styles.photo}
            />
          )}
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>{data.title}</Text>

          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>{t.contact}</Text>
            <Text style={styles.contactText}>{data.location}</Text>
            <Text style={styles.contactText}>{data.phone}</Text>
            <Text style={styles.contactText}>{data.email}</Text>
            <Text style={styles.contactText}>{data.linkedin}</Text>
            <Text style={styles.contactText}>{data.github}</Text>
          </View>

          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>{t.skills}</Text>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>Frontend</Text>
              <Text style={styles.skillList}>{data.skills.frontend.join(', ')}</Text>
            </View>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>Backend</Text>
              <Text style={styles.skillList}>{data.skills.backend.join(', ')}</Text>
            </View>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>AI & Automation</Text>
              <Text style={styles.skillList}>{data.skills.ai.join(', ')}</Text>
            </View>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>Database</Text>
              <Text style={styles.skillList}>{data.skills.database.join(', ')}</Text>
            </View>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>Tools</Text>
              <Text style={styles.skillList}>{data.skills.tools.join(', ')}</Text>
            </View>
          </View>

          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>{t.languages}</Text>
            {data.languages.map((lang, index) => (
              <View key={index} style={styles.langRow}>
                <Text style={styles.langName}>{lang.name}</Text>
                <Text style={styles.langLevel}>{lang.level}</Text>
              </View>
            ))}
          </View>

          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>{t.certifications}</Text>
            {data.certifications.map((cert, index) => (
              <Text key={index} style={styles.certItem}>- {cert}</Text>
            ))}
          </View>
        </View>

        <View style={styles.main}>
          <View style={styles.mainSection}>
            <Text style={styles.mainSectionTitle}>{t.summary}</Text>
            <Text style={styles.expDesc}>{data.summary}</Text>
          </View>

          <View style={styles.mainSection}>
            <Text style={styles.mainSectionTitle}>{t.experience}</Text>
            {data.experience.map((exp, index) => (
              <View key={index} style={styles.expItem}>
                <View style={styles.expHeader}>
                  <Text style={styles.expCompany}>{exp.company}</Text>
                  <Text style={styles.expPeriod}>{exp.period}</Text>
                </View>
                <Text style={styles.expRole}>{exp.role}</Text>
                <Text style={styles.expDesc}>{exp.description}</Text>
              </View>
            ))}
          </View>

          <View style={styles.mainSection}>
            <Text style={styles.mainSectionTitle}>{t.education}</Text>
            {data.education.map((edu, index) => (
              <View key={index} style={styles.expItem}>
                <Text style={styles.expCompany}>{edu.degree}</Text>
                <Text style={styles.expRole}>{edu.school} | {edu.period}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
