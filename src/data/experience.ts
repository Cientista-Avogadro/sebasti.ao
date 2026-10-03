export interface Project {
  name: string;
  company: string;
  link: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  location: string;
  workType: "remote" | "hybrid" | "onsite";
  descriptionKey: string;
  highlightsKey: string;
  highlightsCount: number;
}

export const projects: Project[] = [
  { name: "Kibera", company: "DevTest", link: "#" },
  { name: "CAFE Platform", company: "DevTest", link: "https://cafe.devtest.co.ao/en" },
  { name: "DealBusinessHub", company: "TailorDeal", link: "#" },
  { name: "ECO Estuda Comigo", company: "ECO Estuda Comigo", link: "#" },
  { name: "KITANDASOFT Suite", company: "GC-LUCAN", link: "#" },
  { name: "SIKOLASOFT", company: "GC-LUCAN", link: "#" },
  { name: "NZIMBUPAY", company: "SNIR", link: "#" },
  { name: "SADOC", company: "Tecla T", link: "#" },
  { name: "XGrow", company: "XGrow", link: "https://www.xgrow.com/" },
];

export const experiences: Experience[] = [
  {
    company: "DevTest",
    role: "Team Lead, Software Development & Testing | Senior Software Engineer",
    period: "Oct 2024 - Present",
    startDate: "2024-10",
    endDate: null,
    location: "Luanda, Angola",
    workType: "hybrid",
    descriptionKey: "devtest.description",
    highlightsKey: "devtest.highlights",
    highlightsCount: 7,
  },
  {
    company: "TailorDeal",
    role: "Senior Software Developer and Tech Lead",
    period: "Jan 2024 - Jan 2025",
    startDate: "2024-01",
    endDate: "2025-01",
    location: "Lisbon, Portugal",
    workType: "remote",
    descriptionKey: "tailordeal.description",
    highlightsKey: "tailordeal.highlights",
    highlightsCount: 5,
  },
  {
    company: "ECO Estuda Comigo",
    role: "Senior Software Developer and Tech Lead",
    period: "Nov 2023 - Jan 2025",
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
    role: "Senior Software Engineer and Technical Lead",
    period: "Jul 2022 - Sep 2024",
    startDate: "2022-07",
    endDate: "2024-09",
    location: "Belas, Luanda, Angola",
    workType: "hybrid",
    descriptionKey: "gclucan.description",
    highlightsKey: "gclucan.highlights",
    highlightsCount: 7,
  },
  {
    company: "Kiari Code",
    role: "Frontend Developer",
    period: "Sep 2021 - Feb 2024",
    startDate: "2021-09",
    endDate: "2024-02",
    location: "Luanda, Angola",
    workType: "remote",
    descriptionKey: "kiari.description",
    highlightsKey: "kiari.highlights",
    highlightsCount: 4,
  },
  {
    company: "SNIR, S.A.",
    role: "Software Developer (Backend, Reports and DBA)",
    period: "Feb 2021 - Feb 2024",
    startDate: "2021-02",
    endDate: "2024-02",
    location: "Urbano da Maianga, Luanda, Angola",
    workType: "onsite",
    descriptionKey: "snir.description",
    highlightsKey: "snir.highlights",
    highlightsCount: 3,
  },
  {
    company: "Tecla T",
    role: "Front-End Developer",
    period: "Jan 2022 - Jul 2022",
    startDate: "2022-01",
    endDate: "2022-07",
    location: "Brazil",
    workType: "remote",
    descriptionKey: "teclat.description",
    highlightsKey: "teclat.highlights",
    highlightsCount: 3,
  },
  {
    company: "XGrow",
    role: "Front-End Developer",
    period: "Jan 2022 - Jul 2022",
    startDate: "2022-01",
    endDate: "2022-07",
    location: "Brazil",
    workType: "remote",
    descriptionKey: "xgrow.description",
    highlightsKey: "xgrow.highlights",
    highlightsCount: 3,
  },
  {
    company: "Zeni Tech",
    role: "Fullstack Developer (WordPress, Node.js, PHP, Angular, React)",
    period: "Jun 2022 - Sep 2022",
    startDate: "2022-06",
    endDate: "2022-09",
    location: "Brazil",
    workType: "remote",
    descriptionKey: "zenitech.description",
    highlightsKey: "zenitech.highlights",
    highlightsCount: 3,
  },
];
