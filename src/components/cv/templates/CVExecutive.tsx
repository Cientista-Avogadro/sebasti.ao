import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const getPhotoSrc = () => typeof window !== 'undefined' ? `${window.location.origin}/myphoto.jpg` : '/myphoto.jpg';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#2d2d2d',
    backgroundColor: '#fafafa',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#10b981',
    alignItems: 'center',
  },
  photo: {
    width: 70,
    height: 70,
    marginBottom: 10,
    borderRadius: 35,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: '#10b981',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    fontSize: 9,
    color: '#666',
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
    marginBottom: 10,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#10b981',
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#444',
    textAlign: 'justify',
  },
  expItem: {
    marginBottom: 12,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#e0e0e0',
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  expCompany: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
  },
  expPeriod: {
    fontSize: 9,
    color: '#888',
  },
  expRole: {
    fontSize: 10,
    color: '#10b981',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  expDesc: {
    fontSize: 9,
    color: '#555',
    lineHeight: 1.4,
    textAlign: 'justify',
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 20,
  },
  column: {
    flex: 1,
  },
  skillRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  skillLabel: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#333',
    width: 80,
  },
  skillValue: {
    fontSize: 9,
    color: '#555',
    flex: 1,
  },
  eduItem: {
    marginBottom: 8,
  },
  degree: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
  },
  school: {
    fontSize: 9,
    color: '#666',
  },
  period: {
    fontSize: 8,
    color: '#888',
  },
  certItem: {
    fontSize: 9,
    color: '#555',
    marginBottom: 3,
  },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  langName: {
    fontSize: 9,
    color: '#333',
  },
  langLevel: {
    fontSize: 9,
    color: '#666',
  },
});

interface CVProps {
  locale: 'en' | 'pt';
  withPhoto?: boolean;
}

const cvData = {
  en: {
    name: 'SEBASTIAO DE SOUSA MONIZ',
    title: 'Senior Software Engineer & Team Lead',
    location: 'Luanda, Angola',
    phone: '+244 972 745 066',
    email: 'moniz.techs@gmail.com',
    linkedin: 'linkedin.com/in/sebastiao-de-sousa-moniz',
    github: 'github.com/Cientista-Avogadro',
    summary: 'Senior Software Engineer with 6+ years of experience building enterprise-grade systems. Specialized in Frontend Engineering and Full-Stack Development, delivering production-ready applications for businesses across Angola, Europe, and Brazil.',
    experience: [
      {
        company: 'DevTest',
        role: 'Team Lead, Software Development & Testing | Senior Software Engineer',
        period: 'Oct 2024 - Present',
        description: 'Team Lead of the development and testing department, a team of under 8 engineers, while also acting as Senior Software Engineer. 10+ enterprise platforms delivered, with deployments on Netlify and Vercel.',
      },
      {
        company: 'TailorDeal',
        role: 'Senior Software Developer and Tech Lead',
        period: 'Jan 2024 - Jan 2025',
        description: 'Tech Lead for a European marketplace for real estate and business transactions. Architected modular Blazor/.NET 8 platform on PostgreSQL, deployed on AWS and Azure alongside SmartASP IIS hosting.',
      },
      {
        company: 'ECO Estuda Comigo',
        role: 'Frontend Tech Lead',
        period: 'Nov 2023 - Jan 2025',
        description: "Frontend Tech Lead for Angola's innovative education technology platform. Built responsive dashboards and learning interfaces.",
      },
      {
        company: 'GC-LUCAN',
        role: 'Senior Software Engineer and Technical Lead',
        period: 'Jul 2022 - Sep 2024',
        description: 'Led development of enterprise-grade software solutions serving 300+ businesses across Angola. SIKOLASOFT and KITANDASOFT Suite delivered.',
      },
      {
        company: 'Tecla T',
        role: 'Frontend Developer',
        period: 'Jan 2022 - Jul 2022',
        description: 'Frontend Developer for international currency transaction platform. SADOC remittance application.',
      },
      {
        company: 'Kiari Code',
        role: 'Frontend Developer',
        period: 'Sep 2021 - Feb 2024',
        description: 'Frontend Developer building event management platform for Angolan market. Full company website development.',
      },
      {
        company: 'SNIR',
        role: 'Software Developer (Backend, Reports and DBA)',
        period: 'Feb 2021 - Feb 2024',
        description: 'Full-Stack Developer for Angolan financial services company. International Insurance and NZIMBUPAY banking application.',
      },
    ],
    education: [
      { degree: 'High School - Computer Systems Management', school: 'IPIL Makarenco', period: '2018 - 2022', grade: '17 Values', project: 'Event Publication and Scheduling System' },
      { degree: "Bachelor's in Computer Science", school: 'Instituto Superior Politecnico Metropolitano de Angola (ISPM)', period: '2023 - 2028' },
      { degree: 'Systems Analysis & Development', school: 'AIEC Brazil - Online', period: 'In progress (Expected: Feb 2026)' },
    ],
    skills: {
      frontend: 'React.js, Next.js, TypeScript, JavaScript (ES6+), Blazor, React Native',
      backend: 'C# / .NET, ASP.NET Core, Java Spring Boot, Node.js, GraphQL',
      ai: 'VibeCoding, LLM Integration, Prompt Engineering, AI Automation',
      database: 'Microsoft SQL Server, MariaDB, PostgreSQL, Entity Framework Core',
      tools: 'Git / GitFlow, Docker, JIRA, DevExpress / XtraReports',
    },
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Professional' },
    ],
    certifications: [
      'React - The Complete Guide (Udemy)',
      'JavaScript Algorithms and Data Structures (freeCodeCamp)',
      'Decola Tech Bootcamp (Digital Innovation One)',
    ],
  },
  pt: {
    name: 'SEBASTIAO DE SOUSA MONIZ',
    title: 'Engenheiro de Software Senior & Team Lead',
    location: 'Luanda, Angola',
    phone: '+244 972 745 066',
    email: 'moniz.techs@gmail.com',
    linkedin: 'linkedin.com/in/sebastiao-de-sousa-moniz',
    github: 'github.com/Cientista-Avogadro',
    summary: 'Engenheiro de Software Senior com mais de 6 anos de experiencia na construcao de sistemas de nivel empresarial. Especializado em Engenharia Frontend e Desenvolvimento Full-Stack.',
    experience: [
      {
        company: 'DevTest',
        role: 'Team Lead, Desenvolvimento e Testes de Software | Engenheiro de Software Senior',
        period: 'Out 2024 - Presente',
        description: 'Team Lead do departamento de desenvolvimento e testes, uma equipa de menos de 8 engenheiros, actuando tambem como Engenheiro de Software Senior. 10+ plataformas empresariais entregues, com deployments em Netlify e Vercel.',
      },
      {
        company: 'TailorDeal',
        role: 'Desenvolvedor Senior de Software e Tech Lead',
        period: 'Jan 2024 - Jan 2025',
        description: 'Tech Lead de um marketplace europeu para transaccoes imobiliarias e empresariais. Plataforma modular Blazor/.NET 8 sobre PostgreSQL, com deployments em AWS e Azure a par do hosting SmartASP/IIS.',
      },
      {
        company: 'ECO Estuda Comigo',
        role: 'Frontend Tech Lead',
        period: 'Nov 2023 - Jan 2025',
        description: 'Frontend Tech Lead da plataforma angolana de tecnologia educacional inovadora. Dashboards responsivos e interfaces de aprendizagem.',
      },
      {
        company: 'GC-LUCAN',
        role: 'Engenheiro de Software Senior e Technical Lead',
        period: 'Jul 2022 - Set 2024',
        description: 'Liderou o desenvolvimento de solucoes de software para mais de 300 empresas em Angola. SIKOLASOFT e KITANDASOFT Suite entregues.',
      },
      {
        company: 'Tecla T',
        role: 'Desenvolvedor Frontend',
        period: 'Jan 2022 - Jul 2022',
        description: 'Desenvolvedor Frontend para plataforma de transaccoes cambiais internacionais. Aplicacao SADOC de remessas.',
      },
      {
        company: 'Kiari Code',
        role: 'Desenvolvedor Frontend',
        period: 'Set 2021 - Fev 2024',
        description: 'Desenvolvedor Frontend a construir plataforma de gestao de eventos para o mercado angolano. Website completo da empresa.',
      },
      {
        company: 'SNIR',
        role: 'Desenvolvedor de Software (Backend, Relatorios e DBA)',
        period: 'Fev 2021 - Fev 2024',
        description: 'Desenvolvedor Full-Stack para empresa angolana de servicos financeiros. International Insurance e aplicacao bancaria NZIMBUPAY.',
      },
    ],
    education: [
      { degree: 'Ensino Medio - Gestao de Sistemas Informaticos', school: 'IPIL Makarenco', period: '2018 - 2022', grade: '17 Valores', project: 'Sistema de Publicacao e Agendamento de Eventos' },
      { degree: 'Licenciatura em Ciencias da Computacao', school: 'Instituto Superior Politecnico Metropolitano de Angola (ISPM)', period: '2023 - 2028' },
      { degree: 'Analise e Desenvolvimento de Sistemas', school: 'AIEC Brasil - EAD', period: 'Em progresso (Previsto: Fev 2026)' },
    ],
    skills: {
      frontend: 'React.js, Next.js, TypeScript, JavaScript (ES6+), Blazor, React Native',
      backend: 'C# / .NET, ASP.NET Core, Java Spring Boot, Node.js, GraphQL',
      ai: 'VibeCoding, Integracao LLM, Engenharia de Prompts, Automacao IA',
      database: 'Microsoft SQL Server, MariaDB, PostgreSQL, Entity Framework Core',
      tools: 'Git / GitFlow, Docker, JIRA, DevExpress / XtraReports',
    },
    languages: [
      { name: 'Portugues', level: 'Nativo' },
      { name: 'Ingles', level: 'Profissional' },
    ],
    certifications: [
      'React - The Complete Guide (Udemy)',
      'JavaScript Algorithms and Data Structures (freeCodeCamp)',
      'Decola Tech Bootcamp (Digital Innovation One)',
    ],
  },
};

const labels = {
  en: { summary: 'Professional Profile', experience: 'Professional Experience', education: 'Education', skills: 'Technical Skills', languages: 'Languages', certifications: 'Certifications' },
  pt: { summary: 'Perfil Profissional', experience: 'Experiencia Profissional', education: 'Formacao', skills: 'Competencias Tecnicas', languages: 'Idiomas', certifications: 'Certificacoes' },
};

export function CVExecutive({ locale, withPhoto = false }: CVProps) {
  const data = cvData[locale];
  const t = labels[locale];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {withPhoto && (
            <Image
              src={getPhotoSrc()}
              style={styles.photo}
            />
          )}
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

        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t.education}</Text>
              {data.education.map((edu, index) => (
                <View key={index} style={styles.eduItem}>
                  <Text style={styles.degree}>{edu.degree}</Text>
                  <Text style={styles.school}>{edu.school}</Text>
                  <Text style={styles.period}>{edu.period}</Text>
                  {'grade' in edu && <Text style={{ fontSize: 8, color: '#10b981' }}>{'grade' in edu ? edu.grade : ''}</Text>}
                  {'project' in edu && <Text style={{ fontSize: 8, color: '#666', fontStyle: 'italic' }}>{'project' in edu ? 'Project: ' + edu.project : ''}</Text>}
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t.certifications}</Text>
              {data.certifications.map((cert, index) => (
                <Text key={index} style={styles.certItem}>- {cert}</Text>
              ))}
            </View>
          </View>

          <View style={styles.column}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t.skills}</Text>
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Frontend:</Text>
                <Text style={styles.skillValue}>{data.skills.frontend}</Text>
              </View>
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Backend:</Text>
                <Text style={styles.skillValue}>{data.skills.backend}</Text>
              </View>
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>AI:</Text>
                <Text style={styles.skillValue}>{data.skills.ai}</Text>
              </View>
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Database:</Text>
                <Text style={styles.skillValue}>{data.skills.database}</Text>
              </View>
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Tools:</Text>
                <Text style={styles.skillValue}>{data.skills.tools}</Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t.languages}</Text>
              {data.languages.map((lang, index) => (
                <View key={index} style={styles.langRow}>
                  <Text style={styles.langName}>{lang.name}</Text>
                  <Text style={styles.langLevel}>{lang.level}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
