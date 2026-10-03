import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import { cvData } from "../data";
import "../fonts";

interface CVStandardProps {
  locale: "en" | "pt";
  withPhoto: boolean;
}

const colors = {
  paper: "#f6f3ec",
  ink: "#201d16",
  soft: "#6b6455",
  line: "#d9d2c2",
  accent: "#1f5c40",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.paper,
    color: colors.ink,
    fontFamily: "PlexSans",
    fontSize: 9.3,
    lineHeight: 1.45,
    paddingHorizontal: 40,
    paddingVertical: 32,
  },
  header: {
    alignItems: "center",
    marginBottom: 12,
  },
  name: {
    fontFamily: "PlexSerif",
    fontWeight: 600,
    fontSize: 19,
    color: colors.accent,
    letterSpacing: 1.2,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 600,
    marginTop: 5,
  },
  contact: {
    fontSize: 8.4,
    color: colors.soft,
    marginTop: 2.5,
  },
  headerLocation: {
    fontSize: 8.4,
    color: colors.soft,
    marginTop: 9,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 14,
  },
  photo: {
    width: 58,
    height: 68,
    borderStyle: "solid",
    borderWidth: 1,
    objectFit: "cover",
    borderColor: colors.line,
  },
  section: {
    marginTop: 12,
    borderTopWidth: 1.4,
    borderTopColor: colors.ink,
    paddingTop: 6,
  },
  sectionTitle: {
    fontFamily: "PlexSerif",
    fontWeight: 600,
    fontSize: 9.6,
    color: colors.accent,
    letterSpacing: 0.8,
    marginBottom: 5,
  },
  paragraph: {
    textAlign: "justify",
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 3,
    paddingRight: 4,
  },
  bulletDash: {
    width: 10,
    color: colors.accent,
  },
  bulletText: {
    flex: 1,
    textAlign: "justify",
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  skillLabel: {
    width: 118,
    fontWeight: 600,
  },
  skillItems: {
    flex: 1,
    textAlign: "justify",
  },
  companyRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 5,
  },
  company: {
    fontFamily: "PlexSerif",
    fontWeight: 600,
    fontSize: 10.4,
  },
  location: {
    fontSize: 8.2,
    color: colors.soft,
  },
  roleRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  role: {
    fontWeight: 600,
    fontSize: 9.4,
    color: colors.accent,
  },
  period: {
    fontSize: 8.2,
    color: colors.soft,
  },
  freelanceText: {
    textAlign: "justify",
    marginBottom: 3,
  },
  entryName: {
    fontWeight: 600,
  },
  entryRole: {
    color: colors.soft,
  },
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

/**
 * Standard template: single column dossier, mirroring the corrected final CV.
 */
export function CVStandard({ locale, withPhoto }: CVStandardProps) {
  const data = cvData[locale];

  return (
    <Document
      title={`${data.name} - CV`}
      author="Sebastiao de Sousa Moniz"
      language={locale}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            {withPhoto && <Image style={styles.photo} src="/myphoto.jpg" />}
            <View style={{ alignItems: "center" }}>
              <Text style={styles.name}>{data.name}</Text>
              <Text style={styles.jobTitle}>{data.title}</Text>
              <Text style={styles.headerLocation}>{data.locationLine}</Text>
              <Text style={styles.contact}>{data.contactLine1}</Text>
              <Text style={styles.contact}>{data.contactLine2}</Text>
            </View>
          </View>
        </View>

        <Section title={data.summaryTitle}>
          <Text style={styles.paragraph}>{data.summary}</Text>
        </Section>

        <Section title={data.highlightsTitle}>
          {data.highlights.map((item, i) => (
            <View key={i} style={styles.bulletRow}>
              <Text style={styles.bulletDash}>{"-"}</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </Section>

        <Section title={data.skillsTitle}>
          {data.skills.map((group) => (
            <View key={group.label} style={styles.skillRow}>
              <Text style={styles.skillLabel}>{group.label}:</Text>
              <Text style={styles.skillItems}>{group.items}</Text>
            </View>
          ))}
        </Section>

        <Section title={data.experienceTitle}>
          {data.experience.map((job) => (
            <View key={job.company} style={{ marginBottom: 6 }}>
              <View style={styles.companyRow}>
                <Text style={styles.company}>{job.company}</Text>
                <Text style={styles.location}>{job.location}</Text>
              </View>
              <View style={styles.roleRow}>
                <Text style={styles.role}>{job.role}</Text>
                <Text style={styles.period}>{job.period}</Text>
              </View>
              {job.bullets.map((bullet, i) => (
                <View key={i} style={styles.bulletRow}>
                  <Text style={styles.bulletDash}>{"-"}</Text>
                  <Text style={styles.bulletText}>{bullet}</Text>
                </View>
              ))}
            </View>
          ))}
        </Section>

        <Section title={data.freelanceTitle}>
          <Text style={[styles.freelanceText, styles.entryRole]}>{data.freelanceIntro}</Text>
          {data.freelance.map((entry, i) => (
            <Text key={i} style={styles.freelanceText}>
              <Text style={styles.entryName}>{entry.name}</Text>
              <Text style={styles.entryRole}>, {entry.role}, {entry.period}: </Text>
              <Text>{entry.text}</Text>
            </Text>
          ))}
        </Section>

        <Section title={data.projectsTitle}>
          {data.projects.map((project, i) => (
            <Text key={i} style={styles.freelanceText}>
              <Text style={styles.entryName}>{project.name}</Text>
              <Text style={styles.entryRole}>: </Text>
              <Text>{project.text}</Text>
            </Text>
          ))}
        </Section>

        <Section title={data.educationTitle}>
          {data.education.map((entry, i) => (
            <Text key={i} style={styles.freelanceText}>
              <Text style={styles.entryName}>{entry.degree}</Text>
              <Text>, {entry.school}. </Text>
              <Text style={styles.entryRole}>{entry.detail}</Text>
            </Text>
          ))}
        </Section>

        <Section title={data.certificationsTitle}>
          <Text style={[styles.freelanceText, { marginBottom: 2 }]}>
            <Text style={styles.entryName}>Certifications: </Text>
            <Text>{data.certifications}</Text>
          </Text>
          <Text>
            <Text style={styles.entryName}>Languages: </Text>
            <Text>{data.languages}</Text>
          </Text>
        </Section>
      </Page>
    </Document>
  );
}
