export interface Project {
  name: string;
  taglineKey: string;
  descriptionKey: string;
  roleKey: string;
  impactKey: string;
  focus: string[];
  tech: string[];
  status: string;
  link: string;
  github: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: "Kibera",
    taglineKey: "kibera.tagline",
    descriptionKey: "kibera.description",
    roleKey: "kibera.role",
    impactKey: "kibera.impact",
    focus: ["Tenant-aware architecture", "Billing workflows", "POS and receivables"],
    tech: ["React.js", "Node.js", "JavaScript", "TypeScript", "Prisma", "PostgreSQL", "SQL"],
    status: "Private",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    name: "CAFE Platform",
    taglineKey: "cafe.tagline",
    descriptionKey: "cafe.description",
    roleKey: "cafe.role",
    impactKey: "cafe.impact",
    focus: ["Agricultural operations", "Structured farm data", "Planning and traceability"],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    status: "Live",
    link: "https://cafe.devtest.co.ao/en",
    github: "#",
    featured: true,
  },
  {
    name: "KITANDASOFT Suite",
    taglineKey: "kitandasoft.tagline",
    descriptionKey: "kitandasoft.description",
    roleKey: "kitandasoft.role",
    impactKey: "kitandasoft.impact",
    focus: ["ERP workflows", "POS and invoicing", "Business operations"],
    tech: ["C#", "ASP.NET", "MariaDB", "Blazor", "DevExpress"],
    status: "Private",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    name: "DealBusinessHub",
    taglineKey: "dealbusinesshub.tagline",
    descriptionKey: "dealbusinesshub.description",
    roleKey: "dealbusinesshub.role",
    impactKey: "dealbusinesshub.impact",
    focus: ["Marketplace architecture", "Lead workflows", "European product delivery"],
    tech: ["C#", "Blazor", ".NET 8", "PostgreSQL"],
    status: "Private",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    name: "NZIMBUPAY",
    taglineKey: "nzimbupay.tagline",
    descriptionKey: "nzimbupay.description",
    roleKey: "nzimbupay.role",
    impactKey: "nzimbupay.impact",
    focus: ["Financial reporting", "Sensitive data workflows", "Database administration"],
    tech: ["React", "Next.js", "C#", "ASP.NET", "SQL Server"],
    status: "Private",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    name: "SADOC",
    taglineKey: "sadoc.tagline",
    descriptionKey: "sadoc.description",
    roleKey: "sadoc.role",
    impactKey: "sadoc.impact",
    focus: ["Cross-border payments UX", "Validation-heavy forms", "Responsive transactional flows"],
    tech: ["React", "Redux", "Formik", "ViteJS"],
    status: "Private",
    link: "#",
    github: "#",
    featured: false,
  },
];

export const filterCategories = [
  { name: "Frontend", techs: ["React", "Next.js", "TypeScript", "Redux"] },
  { name: "Backend", techs: ["C#", ".NET", "ASP.NET", "Blazor", "Node.js"] },
  { name: "Database", techs: ["PostgreSQL", "MariaDB", "SQL Server"] },
  { name: "Architecture", techs: ["DevExpress", "Formik"] },
];
