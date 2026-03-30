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
  screenshot?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  { 
    name: "ROKIZ Forum", 
    taglineKey: "rokiz.tagline", 
    descriptionKey: "rokiz.description", 
    roleKey: "rokiz.role", 
    impactKey: "rokiz.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://rokiz-forum.com/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "NGOLA SMART", 
    taglineKey: "ngola.tagline", 
    descriptionKey: "ngola.description", 
    roleKey: "ngola.role", 
    impactKey: "ngola.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://ngolasmart.co.ao/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "UAU SHOW", 
    taglineKey: "uaushow.tagline", 
    descriptionKey: "uaushow.description", 
    roleKey: "uaushow.role", 
    impactKey: "uaushow.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://uaushow.co.ao/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "ISTO É TERAPIA", 
    taglineKey: "terapia.tagline", 
    descriptionKey: "terapia.description", 
    roleKey: "terapia.role", 
    impactKey: "terapia.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://istoeterapia.co.ao/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "PENTTINALI", 
    taglineKey: "penttinali.tagline", 
    descriptionKey: "penttinali.description", 
    roleKey: "penttinali.role", 
    impactKey: "penttinali.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://penttinali.com/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "AYONAS Transportes", 
    taglineKey: "ayonas.tagline", 
    descriptionKey: "ayonas.description", 
    roleKey: "ayonas.role", 
    impactKey: "ayonas.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://ayonas.co.ao/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "OZUNA", 
    taglineKey: "ozuna.tagline", 
    descriptionKey: "ozuna.description", 
    roleKey: "ozuna.role", 
    impactKey: "ozuna.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://ozuna.ao/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "Elizandra Santos", 
    taglineKey: "elizandra.tagline", 
    descriptionKey: "elizandra.description", 
    roleKey: "elizandra.role", 
    impactKey: "elizandra.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://elizandrasantos.com/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "CAFÊ Platform", 
    taglineKey: "cafe.tagline", 
    descriptionKey: "cafe.description", 
    roleKey: "cafe.role", 
    impactKey: "cafe.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://cafe.devtest.co.ao/en", 
    github: "#", 
    featured: false 
  },
  { 
    name: "SIKOLASOFT", 
    taglineKey: "sikolasoft.tagline", 
    descriptionKey: "sikolasoft.description", 
    roleKey: "sikolasoft.role", 
    impactKey: "sikolasoft.impact", 
    focus: [],
    tech: ["C#", "ASP.NET", "MariaDB", "DevExpress"], 
    status: "Live", 
    link: "#", 
    github: "#", 
    featured: false 
  },
  { 
    name: "KITANDASOFT Suite", 
    taglineKey: "kitandasoft.tagline", 
    descriptionKey: "kitandasoft.description", 
    roleKey: "kitandasoft.role", 
    impactKey: "kitandasoft.impact", 
    focus: [],
    tech: ["C#", "ASP.NET", "MariaDB", "Blazor"], 
    status: "Live", 
    link: "#", 
    github: "#", 
    featured: false 
  },
  { 
    name: "DealBusinessHub", 
    taglineKey: "dealbusinesshub.tagline", 
    descriptionKey: "dealbusinesshub.description", 
    roleKey: "dealbusinesshub.role", 
    impactKey: "dealbusinesshub.impact", 
    focus: [],
    tech: ["C#", "Blazor", ".NET 8"], 
    status: "Live", 
    link: "#", 
    github: "#", 
    featured: false 
  },
  { 
    name: "Kiari Events", 
    taglineKey: "kiari.tagline", 
    descriptionKey: "kiari.description", 
    roleKey: "kiari.role", 
    impactKey: "kiari.impact", 
    focus: [],
    tech: ["React", "Next.js", "Redux", "GraphQL", "Chakra UI"], 
    status: "Live", 
    link: "https://kiarieventos.netlify.app/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "ECO Estuda Comigo", 
    taglineKey: "eco.tagline", 
    descriptionKey: "eco.description", 
    roleKey: "eco.role", 
    impactKey: "eco.impact", 
    focus: [],
    tech: ["C#", "ASP.NET Core", "MariaDB"], 
    status: "Live", 
    link: "#", 
    github: "#", 
    featured: false 
  },
  { 
    name: "NZIMBUPAY", 
    taglineKey: "nzimbupay.tagline", 
    descriptionKey: "nzimbupay.description", 
    roleKey: "nzimbupay.role", 
    impactKey: "nzimbupay.impact", 
    focus: [],
    tech: ["React", "Next.js", "C#", "ASP.NET", "SQL Server"], 
    status: "Live", 
    link: "#", 
    github: "#", 
    featured: false 
  },
  { 
    name: "Hotel Management System", 
    taglineKey: "hotel.tagline", 
    descriptionKey: "hotel.description", 
    roleKey: "hotel.role", 
    impactKey: "hotel.impact", 
    focus: [],
    tech: ["React", "Node.js", "TailwindCSS", "Chakra UI"], 
    status: "Live", 
    link: "https://hotel-management-v1.netlify.app/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "SADOC", 
    taglineKey: "sadoc.tagline", 
    descriptionKey: "sadoc.description", 
    roleKey: "sadoc.role", 
    impactKey: "sadoc.impact", 
    focus: [],
    tech: ["React", "Redux", "Formik", "ViteJS"], 
    status: "Live", 
    link: "https://sadoc-front.netlify.app/", 
    github: "#", 
    featured: true,
    metrics: [
      { label: "Conversion Rate", value: "+45% uplift" },
      { label: "Form Completion", value: "87% success" }
    ]
  },
  { 
    name: "XGrow", 
    taglineKey: "xgrow.tagline", 
    descriptionKey: "xgrow.description", 
    roleKey: "xgrow.role", 
    impactKey: "xgrow.impact", 
    focus: [],
    tech: ["React", "Next.js", "Chakra UI", "GitFlow"], 
    status: "Live", 
    link: "https://www.xgrow.com/", 
    github: "#", 
    featured: true,
    metrics: [
      { label: "Active Users", value: "10K+" },
      { label: "Engagement Rate", value: "92%" }
    ]
  },
  { 
    name: "Macovi Sport Club", 
    taglineKey: "macovi.tagline", 
    descriptionKey: "macovi.description", 
    roleKey: "macovi.role", 
    impactKey: "macovi.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://macovi-sport-club.vercel.app/", 
    github: "#", 
    featured: true,
    metrics: [
      { label: "Members", value: "500+" },
      { label: "Events Managed", value: "50+/year" }
    ]
  },
  { 
    name: "FEMB", 
    taglineKey: "femb.tagline", 
    descriptionKey: "femb.description", 
    roleKey: "femb.role", 
    impactKey: "femb.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://femb.ao", 
    github: "#", 
    featured: true,
    metrics: [
      { label: "Transactions", value: "$2M+/year" },
      { label: "User Base", value: "5K+" }
    ]
  },
  { 
    name: "Docampo", 
    taglineKey: "docampo.tagline", 
    descriptionKey: "docampo.description", 
    roleKey: "docampo.role", 
    impactKey: "docampo.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://docampo.vercel.app/", 
    github: "#", 
    featured: true,
    metrics: [
      { label: "Documents Stored", value: "100K+" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  { 
    name: "St Maze Love", 
    taglineKey: "stmaze.tagline", 
    descriptionKey: "stmaze.description", 
    roleKey: "stmaze.role", 
    impactKey: "stmaze.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://st-maze-love.vercel.app/", 
    github: "#", 
    featured: true,
    metrics: [
      { label: "Monthly Visitors", value: "3K+" },
      { label: "Engagement Time", value: "8 min avg" }
    ]
  },
  { 
    name: "Mambo Weather App", 
    taglineKey: "mambo.tagline", 
    descriptionKey: "mambo.description", 
    roleKey: "mambo.role", 
    impactKey: "mambo.impact", 
    focus: [],
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://mambo-weather-app.vercel.app/", 
    github: "#", 
    featured: false 
  },
];

export const filterCategories = [
  { name: "Frontend", techs: ["React", "Next.js", "TailwindCSS", "Chakra UI", "Redux"] },
  { name: "Backend", techs: ["C#", ".NET", "ASP.NET", "Blazor", "Node.js"] },
  { name: "Database", techs: ["MariaDB", "SQL Server"] },
  { name: "Tools", techs: ["Vercel"] }
];
