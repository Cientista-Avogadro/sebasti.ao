export interface Project {
  name: string;
  taglineKey: string;
  descriptionKey: string;
  roleKey: string;
  impactKey: string;
  focus?: string[];
  tech: string[];
  status: string;
  link: string;
  github: string;
  featured: boolean;
  image?: string;
  metrics?: { labelKey: string; value: string }[];
  stats?: string;
}

export const projects: Project[] = [
  { 
    name: "ROKIZ Forum", 
    taglineKey: "projects.rokiz.tagline", 
    descriptionKey: "projects.rokiz.description", 
    roleKey: "projects.rokiz.role", 
    impactKey: "projects.rokiz.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://rokiz-forum.com/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "NGOLA SMART", 
    taglineKey: "projects.ngola.tagline", 
    descriptionKey: "projects.ngola.description", 
    roleKey: "projects.ngola.role", 
    impactKey: "projects.ngola.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://ngolasmart.co.ao/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "UAU SHOW", 
    taglineKey: "projects.uaushow.tagline", 
    descriptionKey: "projects.uaushow.description", 
    roleKey: "projects.uaushow.role", 
    impactKey: "projects.uaushow.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://uaushow.co.ao/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "ISTO É TERAPIA", 
    taglineKey: "projects.terapia.tagline", 
    descriptionKey: "projects.terapia.description", 
    roleKey: "projects.terapia.role", 
    impactKey: "projects.terapia.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://istoeterapia.co.ao/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "PENTTINALI", 
    taglineKey: "projects.penttinali.tagline", 
    descriptionKey: "projects.penttinali.description", 
    roleKey: "projects.penttinali.role", 
    impactKey: "projects.penttinali.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://penttinali.com/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "AYONAS Transportes", 
    taglineKey: "projects.ayonas.tagline", 
    descriptionKey: "projects.ayonas.description", 
    roleKey: "projects.ayonas.role", 
    impactKey: "projects.ayonas.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://ayonas.co.ao/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "OZUNA", 
    taglineKey: "projects.ozuna.tagline", 
    descriptionKey: "projects.ozuna.description", 
    roleKey: "projects.ozuna.role", 
    impactKey: "projects.ozuna.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://ozuna.ao/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "Elizandra Santos", 
    taglineKey: "projects.elizandra.tagline", 
    descriptionKey: "projects.elizandra.description", 
    roleKey: "projects.elizandra.role", 
    impactKey: "projects.elizandra.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://elizandrasantos.com/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "CAFÊ Platform", 
    taglineKey: "projects.cafe.tagline", 
    descriptionKey: "projects.cafe.description", 
    roleKey: "projects.cafe.role", 
    impactKey: "projects.cafe.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://cafe.devtest.co.ao/en", 
    github: "#", 
    featured: false 
  },
  { 
    name: "SIKOLASOFT", 
    taglineKey: "projects.sikolasoft.tagline", 
    descriptionKey: "projects.sikolasoft.description", 
    roleKey: "projects.sikolasoft.role", 
    impactKey: "projects.sikolasoft.impact", 
    tech: ["C#", "ASP.NET", "MariaDB", "DevExpress"], 
    status: "Live", 
    link: "#", 
    github: "#", 
    featured: false 
  },
  { 
    name: "KITANDASOFT Suite", 
    taglineKey: "projects.kitandasoft.tagline", 
    descriptionKey: "projects.kitandasoft.description", 
    roleKey: "projects.kitandasoft.role", 
    impactKey: "projects.kitandasoft.impact", 
    tech: ["C#", "ASP.NET", "MariaDB", "Blazor"], 
    status: "Live", 
    link: "#", 
    github: "#", 
    featured: false 
  },
  { 
    name: "DealBusinessHub", 
    taglineKey: "projects.dealbusinesshub.tagline", 
    descriptionKey: "projects.dealbusinesshub.description", 
    roleKey: "projects.dealbusinesshub.role", 
    impactKey: "projects.dealbusinesshub.impact", 
    tech: ["C#", "Blazor", ".NET 8"], 
    status: "Live", 
    link: "#", 
    github: "#", 
    featured: false 
  },
  { 
    name: "Kiari Events", 
    taglineKey: "projects.kiari.tagline", 
    descriptionKey: "projects.kiari.description", 
    roleKey: "projects.kiari.role", 
    impactKey: "projects.kiari.impact", 
    tech: ["React", "Next.js", "Redux", "GraphQL", "Chakra UI"], 
    status: "Live", 
    link: "https://kiarieventos.netlify.app/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "ECO Estuda Comigo", 
    taglineKey: "projects.eco.tagline", 
    descriptionKey: "projects.eco.description", 
    roleKey: "projects.eco.role", 
    impactKey: "projects.eco.impact", 
    tech: ["C#", "ASP.NET Core", "MariaDB"], 
    status: "Live", 
    link: "#", 
    github: "#", 
    featured: false 
  },
  { 
    name: "NZIMBUPAY", 
    taglineKey: "projects.nzimbupay.tagline", 
    descriptionKey: "projects.nzimbupay.description", 
    roleKey: "projects.nzimbupay.role", 
    impactKey: "projects.nzimbupay.impact", 
    tech: ["React", "Next.js", "C#", "ASP.NET", "SQL Server"], 
    status: "Live", 
    link: "#", 
    github: "#", 
    featured: false 
  },
  { 
    name: "Hotel Management System", 
    taglineKey: "projects.hotel.tagline", 
    descriptionKey: "projects.hotel.description", 
    roleKey: "projects.hotel.role", 
    impactKey: "projects.hotel.impact", 
    tech: ["React", "Node.js", "TailwindCSS", "Chakra UI"], 
    status: "Live", 
    link: "https://hotel-management-v1.netlify.app/", 
    github: "#", 
    featured: false 
  },
  { 
    name: "SADOC", 
    taglineKey: "projects.sadoc.tagline", 
    descriptionKey: "projects.sadoc.description", 
    roleKey: "projects.sadoc.role", 
    impactKey: "projects.sadoc.impact", 
    tech: ["React", "Redux", "Formik", "ViteJS"], 
    status: "Live", 
    link: "https://sadoc-front.netlify.app/", 
    github: "#", 
    featured: true 
  },
  { 
    name: "XGrow", 
    taglineKey: "projects.xgrow.tagline", 
    descriptionKey: "projects.xgrow.description", 
    roleKey: "projects.xgrow.role", 
    impactKey: "projects.xgrow.impact", 
    tech: ["React", "Next.js", "Chakra UI", "GitFlow"], 
    status: "Live", 
    link: "https://www.xgrow.com/", 
    github: "#", 
    featured: true 
  },
  { 
    name: "Macovi Sport Club", 
    taglineKey: "projects.macovi.tagline", 
    descriptionKey: "projects.macovi.description", 
    roleKey: "projects.macovi.role", 
    impactKey: "projects.macovi.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://macovi-sport-club.vercel.app/", 
    github: "#", 
    featured: true 
  },
  { 
    name: "FEMB", 
    taglineKey: "projects.femb.tagline", 
    descriptionKey: "projects.femb.description", 
    roleKey: "projects.femb.role", 
    impactKey: "projects.femb.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://femb.ao", 
    github: "#", 
    featured: true 
  },
  { 
    name: "Docampo", 
    taglineKey: "projects.docampo.tagline", 
    descriptionKey: "projects.docampo.description", 
    roleKey: "projects.docampo.role", 
    impactKey: "projects.docampo.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://docampo.vercel.app/", 
    github: "#", 
    featured: true 
  },
  { 
    name: "St Maze Love", 
    taglineKey: "projects.stmaze.tagline", 
    descriptionKey: "projects.stmaze.description", 
    roleKey: "projects.stmaze.role", 
    impactKey: "projects.stmaze.impact", 
    tech: ["React", "Next.js", "TailwindCSS", "Vercel"], 
    status: "Live", 
    link: "https://st-maze-love.vercel.app/", 
    github: "#", 
    featured: true 
  },
  { 
    name: "Mambo Weather App", 
    taglineKey: "projects.mambo.tagline", 
    descriptionKey: "projects.mambo.description", 
    roleKey: "projects.mambo.role", 
    impactKey: "projects.mambo.impact", 
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
