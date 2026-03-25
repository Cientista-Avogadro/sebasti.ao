export interface Project {
  name: string;
  company: string;
  link: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string; // This can be moved to i18n too
  startDate: string;
  endDate: string | null;
  location: string;
  workType: 'remote' | 'hybrid' | 'onsite';
  descriptionKey: string;
  highlightsKey: string;
  highlightsCount: number;
}

export const projects: Project[] = [
  { name: "ROKIZ Forum", company: "DevTest", link: "https://rokiz-forum.com/" },
  { name: "NGOLA SMART", company: "DevTest", link: "https://ngolasmart.co.ao/" },
  { name: "UAU SHOW", company: "DevTest", link: "https://uaushow.co.ao/" },
  { name: "ISTO É TERAPIA", company: "DevTest", link: "https://istoeterapia.co.ao/" },
  { name: "PENTTINALI", company: "DevTest", link: "https://penttinali.com/" },
  { name: "AYONAS Transportes", company: "DevTest", link: "https://ayonas.co.ao/" },
  { name: "OZUNA", company: "DevTest", link: "https://ozuna.ao/" },
  { name: "Elizandra Santos", company: "DevTest", link: "https://elizandrasantos.com/" },
  { name: "CAFÊ Platform", company: "DevTest", link: "https://cafe.devtest.co.ao/en" },
  { name: "Kibera", company: "DevTest", link: "#" },
  { name: "SIKOLASOFT", company: "GC-LUCAN", link: "#" },
  { name: "KITANDASOFT Suite", company: "GC-LUCAN", link: "#" },
  { name: "Hotel Management", company: "GC-LUCAN", link: "https://hotel-management-v1.netlify.app/" },
  { name: "DealBusinessHub", company: "TailorDeal", link: "#" },
  { name: "ECO Estuda Comigo", company: "ECO Estuda Comigo", link: "#" },
  { name: "Kiari Events", company: "Kiari Code", link: "https://kiarieventos.netlify.app/" },
  { name: "Kiari Website", company: "Kiari Code", link: "#" },
  { name: "International Insurance", company: "SNIR", link: "#" },
  { name: "NZIMBUPAY", company: "SNIR", link: "#" },
  { name: "SADOC", company: "Tecla T", link: "https://sadoc-front.netlify.app/" },
  { name: "XGrow", company: "XGrow", link: "https://www.xgrow.com/" },
  { name: "Aligner-Flix", company: "Zeni Tech", link: "https://alignerplay.com.br/" },
  { name: "FEMB Website", company: "Freelance", link: "https://femb.ao" },
  { name: "FEMB Farmácia", company: "Freelance", link: "https://farmacia.femb.ao" },
  { name: "Macovi Sport Club", company: "Freelance", link: "https://macovi-sport-club.vercel.app/" },
  { name: "Docampo", company: "Freelance", link: "https://docampo.vercel.app/" },
  { name: "St Maze Love", company: "Freelance", link: "https://st-maze-love.vercel.app/" },
  { name: "Mambo Weather", company: "Freelance", link: "https://mambo-weather-app.vercel.app/" },
];

export const experiences: Experience[] = [
  {
    company: "DevTest",
    role: "Senior Software Engineer",
    period: "Oct 2024 — Present",
    startDate: "2024-10",
    endDate: null,
    location: "Luanda, Angola",
    workType: "hybrid",
    descriptionKey: "devtest.description",
    highlightsKey: "devtest.highlights",
    highlightsCount: 8,
  },
  {
    company: "TailorDeal",
    role: "Senior Developer | Tech Lead",
    period: "Jan 2024 — Jan 2025",
    startDate: "2024-01",
    endDate: "2025-01",
    location: "Lisbon, Portugal",
    workType: "remote",
    descriptionKey: "tailordeal.description",
    highlightsKey: "tailordeal.highlights",
    highlightsCount: 3,
  },
  {
    company: "ECO Estuda Comigo",
    role: "Senior Developer | Tech Lead",
    period: "Nov 2023 — Jan 2025",
    startDate: "2023-11",
    endDate: "2025-01",
    location: "Luanda, Angola",
    workType: "remote",
    descriptionKey: "eco.description",
    highlightsKey: "eco.highlights",
    highlightsCount: 3,
  },
  {
    company: "GC-LUCAN",
    role: "Senior Software Engineer | Tech Lead",
    period: "Jul 2022 — Sep 2024",
    startDate: "2022-07",
    endDate: "2024-09",
    location: "Belas, Luanda, Angola",
    workType: "hybrid",
    descriptionKey: "gclucan.description",
    highlightsKey: "gclucan.highlights",
    highlightsCount: 7,
  },
  {
    company: "Zeni Tech",
    role: "Full-Stack Developer",
    period: "Jun 2022 — Sep 2022",
    startDate: "2022-06",
    endDate: "2022-09",
    location: "Brazil",
    workType: "remote",
    descriptionKey: "zenitech.description",
    highlightsKey: "zenitech.highlights",
    highlightsCount: 3,
  },
  {
    company: "XGrow",
    role: "Front-End Developer",
    period: "Jan 2022 — Jul 2022",
    startDate: "2022-01",
    endDate: "2022-07",
    location: "Brazil",
    workType: "remote",
    descriptionKey: "xgrow.description",
    highlightsKey: "xgrow.highlights",
    highlightsCount: 4,
  },
  {
    company: "Tecla T",
    role: "Front-End Developer",
    period: "Jan 2022 — Jul 2022",
    startDate: "2022-01",
    endDate: "2022-07",
    location: "Brazil",
    workType: "remote",
    descriptionKey: "teclat.description",
    highlightsKey: "teclat.highlights",
    highlightsCount: 3,
  },
  {
    company: "Kiari Code",
    role: "Frontend Developer",
    period: "Sep 2021 — Feb 2024",
    startDate: "2021-09",
    endDate: "2024-02",
    location: "Luanda, Angola",
    workType: "onsite",
    descriptionKey: "kiari.description",
    highlightsKey: "kiari.highlights",
    highlightsCount: 4,
  },
  {
    company: "SNIR",
    role: "Software Developer",
    period: "Feb 2021 — Feb 2024",
    startDate: "2021-02",
    endDate: "2024-02",
    location: "Luanda, Angola",
    workType: "onsite",
    descriptionKey: "snir.description",
    highlightsKey: "snir.highlights",
    highlightsCount: 4,
  },
];
