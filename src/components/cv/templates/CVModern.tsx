import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { cvData } from "../data";
import "../fonts";

interface CVModernProps {
  locale: "en" | "pt";
  withPhoto: boolean;
}

const colors = {
  paper: "#f6f3ec",
  sidebar: "#ede8da",
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
    fontSize: 9.2,
    lineHeight: 1.42,
    flexDirection: "row",
  },
  main: {
    width: "64%",
    paddingHorizontal: 28,
    paddingVertical: 30,
  },
  sidebar: {
    width: "36%",
    backgroundColor: colors.sidebar,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderLeftWidth: 1,
    borderLeftColor: colors.line,
  },
  name: {
    fontFamily: "PlexSerif",
    fontWeight: 600,
    fontSize: 17,
    color: colors.accent,
  },
  jobTitle: {
    fontSize: 9.6,
    fontWeight: 600,
    marginTop: 3,
  },
  contact: {
    fontSize: 8,
    color: colors.soft,
    marginTop: 2.5,
  },
  headerLocation: {
    fontSize: 8,
    color: colors.soft,
    marginTop: 9,
  },
  header: {
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  photo: {
    width: 54,
    height: 64,
    borderStyle: "solid",
    borderWidth: 1,
    objectFit: "cover",
    borderColor: colors.line,
  },
  section: {
    marginTop: 11,
    borderTopWidth: 1.4,
    borderTopColor: colors.ink,
    paddingTop: 6,
  },
  sidebarSection: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    paddingTop: 6,
  },
  sectionTitle: {
    fontFamily: "PlexSerif",
    fontWeight: 600,
    fontSize: 9.2,
    color: colors.accent,
    marginBottom: 5,
  },
  paragraph: {
    textAlign: "justify",
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bulletDash: {
    width: 9,
    color: colors.accent,
  },
  bulletText: {
    flex: 1,
    textAlign: "justify",
  },
  company: {
    fontFamily: "PlexSerif",
    fontWeight: 600,
    fontSize: 10,
    marginTop: 4,
  },
  role: {
    fontWeight: 600,
    fontSize: 9,
    color: colors.accent,
    marginTop: 1,
  },
  meta: {
    fontSize: 8,
    color: colors.soft,
    marginBottom: 3,
  },
  skillGroup: {
    marginBottom: 5,
  },
  skillLabel: {
    fontWeight: 600,
    fontSize: 8.6,
  },
  skillItems: {
    fontSize: 8.4,
    textAlign: "justify",
  },
  entryName: {
    fontWeight: 600,
  },
  entryRole: {
    color: colors.soft,
  },
  freelanceText: {
    textAlign: "justify",
    marginBottom: 3,
  },
});

function MainSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

/**
 * Modern template: content column with a raised paper sidebar.
 */
export function CVModern({ locale, withPhoto }: CVModernProps) {
  const data = cvData[locale];

  return (
    <Document
      title={`${data.name} - CV`}
      author="Sebastiao de Sousa Moniz"
      language={locale}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.main}>
          <View style={styles.header}>
            <View style={styles.headerRow}>
              {withPhoto && <Image style={styles.photo} src="/myphoto.jpg" />}
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.jobTitle}>{data.title}</Text>
                <Text style={styles.headerLocation}>{data.locationLine}</Text>
                <Text style={styles.contact}>{data.contactLine1}</Text>
                <Text style={styles.contact}>{data.contactLine2}</Text>
              </View>
            </View>
          </View>

          <MainSection title={data.summaryTitle}>
            <Text style={styles.paragraph}>{data.summary}</Text>
          </MainSection>

          <MainSection title={data.highlightsTitle}>
            {data.highlights.map((item, i) => (
              <View key={i} style={styles.bulletRow}>
                <Text style={styles.bulletDash}>{"-"}</Text>
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            ))}
          </MainSection>

          <MainSection title={data.experienceTitle}>
            {data.experience.map((job) => (
              <View key={job.company} style={{ marginBottom: 5 }}>
                <Text style={styles.company}>{job.company}</Text>
                <Text style={styles.role}>{job.role}</Text>
                <Text style={styles.meta}>{job.location}  ·  {job.period}</Text>
                {job.bullets.map((bullet, i) => (
                  <View key={i} style={styles.bulletRow}>
                    <Text style={styles.bulletDash}>{"-"}</Text>
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
            ))}
          </MainSection>

          <MainSection title={data.freelanceTitle}>
            <Text style={[styles.freelanceText, styles.entryRole]}>{data.freelanceIntro}</Text>
            {data.freelance.map((entry, i) => (
              <Text key={i} style={styles.freelanceText}>
                <Text style={styles.entryName}>{entry.name}</Text>
                <Text style={styles.entryRole}>, {entry.role}, {entry.period}: </Text>
                <Text>{entry.text}</Text>
              </Text>
            ))}
          </MainSection>

          <MainSection title={data.projectsTitle}>
            {data.projects.map((project, i) => (
              <Text key={i} style={styles.freelanceText}>
                <Text style={styles.entryName}>{project.name}</Text>
                <Text style={styles.entryRole}>: </Text>
                <Text>{project.text}</Text>
              </Text>
            ))}
          </MainSection>
        </View>

        <View style={styles.sidebar}>
          <View style={styles.sidebarSection}>
            <Text style={styles.sectionTitle}>{data.skillsTitle}</Text>
            {data.skills.map((group) => (
              <View key={group.label} style={styles.skillGroup}>
                <Text style={styles.skillLabel}>{group.label}</Text>
                <Text style={styles.skillItems}>{group.items}</Text>
              </View>
            ))}
          </View>

          <View style={styles.sidebarSection}>
            <Text style={styles.sectionTitle}>{data.educationTitle}</Text>
            {data.education.map((entry, i) => (
              <View key={i} style={styles.skillGroup}>
                <Text style={styles.skillLabel}>{entry.degree}</Text>
                <Text style={styles.skillItems}>{entry.school}</Text>
                <Text style={styles.entryRole}>{entry.detail}</Text>
              </View>
            ))}
          </View>

          <View style={styles.sidebarSection}>
            <Text style={styles.sectionTitle}>{data.certificationsTitle}</Text>
            <Text style={styles.skillItems}>{data.certifications}</Text>
          </View>

          <View style={styles.sidebarSection}>
            <Text style={styles.sectionTitle}>{data.languagesTitle}</Text>
            <Text style={styles.skillItems}>{data.languages}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
