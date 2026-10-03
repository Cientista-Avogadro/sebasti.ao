/**
 * Single source of truth for the downloadable CV PDFs.
 * Content mirrors the corrected final CV (EN and PT) so the document a
 * recruiter downloads from the site matches the document that gets sent.
 */
export interface CVSkillGroup {
  label: string;
  items: string;
}

export interface CVExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface CVFreelanceEntry {
  name: string;
  role: string;
  period: string;
  text: string;
}

export interface CVProject {
  name: string;
  text: string;
}

export interface CVEducation {
  degree: string;
  school: string;
  detail: string;
}

export interface CVData {
  name: string;
  title: string;
  locationLine: string;
  contactLine1: string;
  contactLine2: string;
  summaryTitle: string;
  summary: string;
  highlightsTitle: string;
  highlights: string[];
  skillsTitle: string;
  skills: CVSkillGroup[];
  experienceTitle: string;
  experience: CVExperience[];
  freelanceTitle: string;
  freelanceIntro: string;
  freelance: CVFreelanceEntry[];
  projectsTitle: string;
  projects: CVProject[];
  educationTitle: string;
  education: CVEducation[];
  certificationsTitle: string;
  certifications: string;
  languagesTitle: string;
  languages: string;
}

export const cvData: Record<"en" | "pt", CVData> = {
  en: {
    name: "SEBASTIAO DE SOUSA MONIZ",
    title: "Senior Software Engineer & Team Lead · Frontend & AI Engineering",
    locationLine: "Luanda, Angola (open to remote, EU and US time zones)",
    contactLine1: "+244 972 745 066  ·  moniz.techs@gmail.com",
    contactLine2: "linkedin.com/in/sebastiao-de-sousa-moniz  ·  github.com/Cientista-Avogadro  ·  sebastiao-moniz.vercel.app",
    summaryTitle: "PROFESSIONAL SUMMARY",
    summary:
      "Senior Software Engineer and Team Lead with 6 years and 18 delivered projects in production for clients in Angola, Europe and Brazil. Builds React, Next.js and TypeScript frontends over C# / .NET 8 and Node.js services, and applies AI in production through vector embeddings, semantic matching, Hugging Face model integration and computer vision model training. Leads a development and testing team of under 8 engineers at DevTest, where an agribusiness ERP runs live on 5 coffee farms.",
    highlightsTitle: "SELECTED HIGHLIGHTS",
    highlights: [
      "Built SOS Benguela, the missing persons platform for the Benguela flood response, matching reports through vector embeddings and Hugging Face LLM inference with AI assisted decisioning, alongside INAC, the National Police and the provincial government.",
      "Software in daily use by 300+ active businesses across Angola (KITANDASOFT and SIKOLASOFT suites).",
      "Tech Lead of DealBusinessHub, a European marketplace for real estate and business transactions, on Blazor and .NET 8.",
    ],
    skillsTitle: "CORE TECHNICAL SKILLS",
    skills: [
      { label: "Frontend", items: "React, Next.js (App Router), TypeScript, JavaScript ES6+, React Native, Blazor, Redux Toolkit, TailwindCSS, Chakra UI, responsive and accessible UI, Core Web Vitals" },
      { label: "AI and Machine Learning", items: "Python, vector embeddings and semantic matching, similarity and vector search, LLM integration via Hugging Face, AI assisted decision logic, prompt engineering, computer vision model training, chatbot development, workflow automation" },
      { label: "Backend and APIs", items: "C#, ASP.NET Core, .NET 8, Node.js, GraphQL, REST, Hasura Cloud, PayloadCMS, Java Spring Boot, PHP" },
      { label: "Databases", items: "PostgreSQL, Microsoft SQL Server, MariaDB, Prisma, Entity Framework Core" },
      { label: "Cloud and Hosting", items: "AWS, Microsoft Azure, IIS server administration, Netlify, Vercel, SmartASP hosting, DNS and domain / subdomain management" },
      { label: "Testing and DevOps", items: "Docker, Git and GitFlow, CI/CD, static code analysis, code review, Agile / Scrum, Jira" },
      { label: "Cross platform", items: "Tauri, Electron, React Native, DevExpress, XtraReports" },
    ],
    experienceTitle: "PROFESSIONAL EXPERIENCE",
    experience: [
      {
        company: "DevTest",
        location: "Luanda, Angola",
        role: "Team Lead, Software Development & Testing | Senior Software Engineer",
        period: "Oct 2024 to Present",
        bullets: [
          "Lead the development and testing department, a team of under 8 engineers covering frontend, backend and QA, while also acting as Senior Software Engineer on the codebase, by owning the cycle from requirements to production release and running weekly release reviews.",
          "Shipped an agribusiness ERP for coffee production, live on 5 farms and expanding, by mapping harvest, stock and traceability workflows into a Next.js and Hasura Cloud platform.",
          "Delivered Kibera, a business management and invoicing suite for the Angolan market, by architecting it in Next.js and PayloadCMS with compliant fiscal document generation.",
          "Delivered 10+ enterprise web, desktop and mobile platforms, cutting build time on every new project, by creating a shared TypeScript component library reused across Tauri, Electron and React Native.",
          "Integrated AI features into client and in house products, reducing manual handling time, by combining Hugging Face LLM inference, embedding based matching and AI assisted decision rules over PostgreSQL.",
          "Own deployment and hosting for the frontend projects delivered, including FEMB and other client sites, by managing releases on Netlify and Vercel and configuring domains and subdomains end to end.",
          "Standardised engineering practice across the team, by enforcing code review on every pull request, GitFlow branching and Docker based environments.",
        ],
      },
      {
        company: "TailorDeal",
        location: "Lisbon, Portugal (remote)",
        role: "Senior Software Developer and Tech Lead",
        period: "Jan 2024 to Jan 2025",
        bullets: [
          "Led the technical direction of DealBusinessHub, a European marketplace connecting brokers, investors and business owners, by architecting a modular Blazor and .NET 8 platform on PostgreSQL.",
          "Reduced page load time across the listings area, by optimising Entity Framework queries, adding server side caching and lazy loading heavy Blazorise components.",
          "Kept the platform available across both cloud and legacy targets, by deploying and maintaining infrastructure on AWS and Azure alongside the SmartASP IIS hosting environment.",
          "Kept the codebase consistent as the platform grew, by enforcing static code analysis and peer reviewed pull requests on every change.",
          "Kept a predictable release cadence on a distributed team, by running Jira sprint planning and enforcing GitFlow branching.",
        ],
      },
      {
        company: "GC-LUCAN",
        location: "Luanda, Angola",
        role: "Senior Software Engineer and Technical Lead",
        period: "Jul 2022 to Sep 2024",
        bullets: [
          "Led engineering for the KITANDASOFT suite (ERP, POS, restaurant, invoicing, CRM) and SIKOLASOFT, reaching 300+ active business customers across Angola, by owning architecture, code review and release planning.",
          "Delivered SIKOLASOFT, Angola's most complete school management platform, by building its administrative, pedagogical, academic and financial modules in C# and ASP.NET on MariaDB.",
          "Built the shared reporting and invoicing engine used by all five products in the suite, by designing a reusable class library with DevExpress and XtraReports.",
          "Modernised the CRM module, reducing page response time, by migrating it from ASP.NET WebForms to Blazor and .NET 8.",
          "Kept all five products available to customers, by administering the on premises IIS hosting environment and piloting a migration path to Azure.",
          "Grew the team as Team Lead and head of the development area, by mentoring 3+ interns to full autonomy through pairing and code review.",
          "Shipped the frontend of a hotel management system, by pairing React and TailwindCSS with a Node.js API.",
        ],
      },
      {
        company: "SNIR, S.A.",
        location: "Maianga, Luanda, Angola",
        role: "Software Developer (Backend, Reports and DBA)",
        period: "Feb 2021 to Feb 2024",
        bullets: [
          "Built and maintained International Insurance, a full insurance management system, by developing backend services in C# and ASP.NET on Microsoft SQL Server.",
          "Delivered NZIMBUPAY, a banking application, by owning senior report development and backend features in C#, ASP.NET and DevExpress.",
          "Kept both systems reliable in production across three years, by administering the SQL Server databases and resolving reporting incidents as the dedicated DBA.",
        ],
      },
    ],
    freelanceTitle: "FREELANCE AND CONTRACT ENGAGEMENTS (2021 to 2025)",
    freelanceIntro: "Project based and part time engagements delivered in parallel with the roles above.",
    freelance: [
      { name: "ECO Estuda Comigo (Angola)", role: "Frontend Tech Lead", period: "Nov 2023 to Jan 2025", text: "led the frontend of an online education platform, by delivering responsive dashboards and learning interfaces on ASP.NET Core, Bootstrap and MariaDB." },
      { name: "Kiari Code (Angola)", role: "Frontend Developer", period: "Sep 2021 to Feb 2024", text: "built the corporate website and the Kiari Events organiser application, by shipping React, Next.js, Redux Toolkit, GraphQL and Chakra UI interfaces with geolocation." },
      { name: "XGrow (Brazil)", role: "Frontend Developer", period: "Jan 2022 to Jul 2022", text: "delivered the calendar and live sessions modules of an education platform serving 10K+ active users at 92% engagement, in React and Next.js." },
      { name: "Tecla T (Brazil)", role: "Frontend Developer", period: "Jan 2022 to Jul 2022", text: "built the login flow, currency exchange calculator and registration journeys of SADOC, an international remittance platform, lifting conversion by 45% and reaching 87% form completion." },
      { name: "Zeni Tech (Brazil)", role: "Fullstack Developer", period: "Jun 2022 to Sep 2022", text: "delivered landing pages and defect fixes with React, Node.js, Angular, WordPress and PHP." },
    ],
    projectsTitle: "SELECTED AI AND PRODUCT PROJECTS",
    projects: [
      { name: "SOS Benguela (benguela.sosangola.ao)", text: "missing persons platform for the Benguela flood response, built with AASED and operated alongside INAC, the National Police, the Ministry of Health and the provincial government. Matches missing person reports against found person reports using vector embeddings and similarity search, with Hugging Face LLM inference and AI assisted decisioning on top, in Next.js." },
      { name: "Animal recognition models (academic research)", text: "trained and evaluated computer vision models for animal species recognition in Python." },
      { name: "Coffee agribusiness ERP (DevTest)", text: "harvest, stock and traceability management for coffee production, live on 5 farms and expanding." },
      { name: "Docampo (co-founder and lead developer)", text: "agricultural marketplace connecting producers and buyers, in pre launch with its first users. Sole developer of the platform, from data model to interface." },
      { name: "Open source", text: "121 repositories and 719 contributions in the last year at github.com/Cientista-Avogadro. Full case studies at sebastiao-moniz.vercel.app." },
    ],
    educationTitle: "EDUCATION",
    education: [
      { degree: "BSc in Computer Science", school: "Instituto Superior Politecnico Metropolitano de Angola (ISPM), Luanda", detail: "2023 to 2028, in progress." },
      { degree: "Technologist Degree in Systems Analysis and Development", school: "Faculdade AIEC, Brazil (online)", detail: "In progress, started Feb 2026." },
      { degree: "Technical High School Diploma in Computer Systems Management", school: "IPIL Makarenco, Luanda", detail: "2018 to 2022, final grade 17 out of 20." },
    ],
    certificationsTitle: "CERTIFICATIONS AND LANGUAGES",
    certifications: "15 professional certifications, including React The Complete Guide (Udemy), JavaScript Algorithms and Data Structures (freeCodeCamp), Decola Tech Bootcamp and Advanced JavaScript ES6 with TypeScript (Digital Innovation One), Eduzz Fullstack Developer Bootcamp.",
    languagesTitle: "LANGUAGES",
    languages: "Portuguese native · English professional working proficiency.",
  },
  pt: {
    name: "SEBASTIAO DE SOUSA MONIZ",
    title: "Engenheiro de Software Sénior e Team Lead · Frontend e Engenharia de IA",
    locationLine: "Luanda, Angola (disponível para remoto, fusos da Europa e EUA)",
    contactLine1: "+244 972 745 066  ·  moniz.techs@gmail.com",
    contactLine2: "linkedin.com/in/sebastiao-de-sousa-moniz  ·  github.com/Cientista-Avogadro  ·  sebastiao-moniz.vercel.app",
    summaryTitle: "RESUMO PROFISSIONAL",
    summary:
      "Engenheiro de Software Sénior e Team Lead com 6 anos e 18 projectos entregues em produção para clientes em Angola, Europa e Brasil. Constrói frontends em React, Next.js e TypeScript sobre serviços em C# / .NET 8 e Node.js, e aplica IA em produção com vector embeddings, correspondência semântica, integração de modelos da Hugging Face e treino de modelos de visão computacional. Lidera a equipa de desenvolvimento e testes da DevTest, com menos de 8 engenheiros, onde um ERP de agronegócio está activo em 5 fazendas de café.",
    highlightsTitle: "DESTAQUES",
    highlights: [
      "Construí o SOS Benguela, plataforma de pessoas desaparecidas para a resposta às cheias de Benguela, com correspondência por vector embeddings e inferência de LLM da Hugging Face com decisão assistida por IA, em articulação com o INAC, a Polícia Nacional e o governo provincial.",
      "Software em uso diário por mais de 300 empresas activas em Angola (suites KITANDASOFT e SIKOLASOFT).",
      "Tech Lead do DealBusinessHub, marketplace europeu de compra e venda de imóveis e empresas, em Blazor e .NET 8.",
    ],
    skillsTitle: "COMPETÊNCIAS TÉCNICAS",
    skills: [
      { label: "Frontend", items: "React, Next.js (App Router), TypeScript, JavaScript ES6+, React Native, Blazor, Redux Toolkit, TailwindCSS, Chakra UI, interfaces responsivas e acessíveis, Core Web Vitals" },
      { label: "IA e Machine Learning", items: "Python, vector embeddings e correspondência semântica, busca vectorial e por similaridade, integração de LLM via Hugging Face, lógica de decisão assistida por IA, prompt engineering, treino de modelos de visão computacional, desenvolvimento de chatbots, automação de fluxos" },
      { label: "Backend e APIs", items: "C#, ASP.NET Core, .NET 8, Node.js, GraphQL, REST, Hasura Cloud, PayloadCMS, Java Spring Boot, PHP" },
      { label: "Bases de dados", items: "PostgreSQL, Microsoft SQL Server, MariaDB, Prisma, Entity Framework Core" },
      { label: "Cloud e Hospedagem", items: "AWS, Microsoft Azure, administração de servidor IIS, Netlify, Vercel, hospedagem SmartASP, gestão de DNS e domínio / subdomínio" },
      { label: "Testes e DevOps", items: "Docker, Git e GitFlow, CI/CD, análise estática de código, code review, Agile / Scrum, Jira" },
      { label: "Multiplataforma", items: "Tauri, Electron, React Native, DevExpress, XtraReports" },
    ],
    experienceTitle: "EXPERIÊNCIA PROFISSIONAL",
    experience: [
      {
        company: "DevTest",
        location: "Luanda, Angola",
        role: "Team Lead da área de Desenvolvimento e Testes | Engenheiro de Software Sénior",
        period: "Out 2024 a Presente",
        bullets: [
          "Lidero a área de desenvolvimento e testes, uma equipa com menos de 8 engenheiros, abrangendo frontend, backend e QA, actuando também como Engenheiro de Software Sénior no código, ao assumir o ciclo desde os requisitos até à produção e conduzir revisões semanais de release.",
          "Coloquei em produção um ERP de agronegócio para produção de café, activo em 5 fazendas e a crescer, ao mapear os fluxos de colheita, stock e rastreabilidade numa plataforma em Next.js e Hasura Cloud.",
          "Entreguei o Kibera, suite de gestão e facturação para o mercado angolano, ao arquitectá-la em Next.js e PayloadCMS com geração de documentos fiscais conforme as regras locais.",
          "Entreguei mais de 10 plataformas empresariais web, desktop e mobile, reduzindo o tempo de arranque de cada novo projecto, ao criar uma biblioteca de componentes em TypeScript reutilizada em Tauri, Electron e React Native.",
          "Integrei funcionalidades de IA nos produtos dos clientes e internos, reduzindo o tratamento manual, ao combinar inferência de LLM da Hugging Face, correspondência por embeddings e regras de decisão assistida por IA sobre PostgreSQL.",
          "Assumo a hospedagem e o deployment dos projectos de frontend entregues, incluindo o FEMB e outros sites de clientes, ao gerir releases em Netlify e Vercel e configurar domínios e subdomínios de ponta a ponta.",
          "Padronizei a prática de engenharia da equipa, ao impor code review em cada pull request, branching com GitFlow e ambientes baseados em Docker.",
        ],
      },
      {
        company: "TailorDeal",
        location: "Lisboa, Portugal (remoto)",
        role: "Desenvolvedor de Software Sénior e Tech Lead",
        period: "Jan 2024 a Jan 2025",
        bullets: [
          "Liderei a direcção técnica do DealBusinessHub, marketplace europeu que liga corretores, investidores e empresários, ao arquitectar uma plataforma modular em Blazor e .NET 8 sobre PostgreSQL.",
          "Reduzi o tempo de carregamento na área de anúncios, ao optimizar consultas Entity Framework, adicionar caching no servidor e aplicar lazy loading a componentes Blazorise pesados.",
          "Mantive a plataforma disponível em ambiente cloud e legado, ao fazer deployment e manter infra-estrutura em AWS e Azure em paralelo com o ambiente de hospedagem SmartASP em IIS.",
          "Mantive a consistência do código à medida que a plataforma crescia, ao impor análise estática e pull requests revistos por pares em cada alteração.",
          "Mantive uma cadência de releases previsível numa equipa distribuída, ao conduzir planeamento de sprints em Jira e impor branching com GitFlow.",
        ],
      },
      {
        company: "GC-LUCAN",
        location: "Luanda, Angola",
        role: "Engenheiro de Software Sénior e Technical Lead",
        period: "Jul 2022 a Set 2024",
        bullets: [
          "Liderei a engenharia da suite KITANDASOFT (ERP, POS, restauração, facturação, CRM) e do SIKOLASOFT, chegando a mais de 300 empresas clientes activas em Angola, ao assumir arquitectura, code review e planeamento de releases.",
          "Entreguei o SIKOLASOFT, a mais completa plataforma angolana de gestão escolar, ao construir os módulos administrativo, pedagógico, académico e financeiro em C# e ASP.NET sobre MariaDB.",
          "Construí o motor partilhado de relatórios e facturação usado pelos cinco produtos da suite, ao desenhar uma class library reutilizável com DevExpress e XtraReports.",
          "Modernizei o módulo de CRM, reduzindo o tempo de resposta das páginas, ao migrá-lo de ASP.NET WebForms para Blazor e .NET 8.",
          "Mantive os cinco produtos disponíveis para os clientes, ao administrar o ambiente de hospedagem IIS on premises e pilotar uma migração para Azure.",
          "Fiz crescer a equipa como Team Lead e chefe da área de desenvolvimento, ao formar mais de 3 estagiários até à autonomia total através de pair programming e code review.",
          "Entreguei o frontend de um sistema de gestão hoteleira, ao combinar React e TailwindCSS com uma API em Node.js.",
        ],
      },
      {
        company: "SNIR, S.A.",
        location: "Maianga, Luanda, Angola",
        role: "Desenvolvedor de Software (Backend, Relatórios e DBA)",
        period: "Fev 2021 a Fev 2024",
        bullets: [
          "Construí e mantive o International Insurance, sistema completo de gestão de seguros, ao desenvolver serviços de backend em C# e ASP.NET sobre Microsoft SQL Server.",
          "Entreguei o NZIMBUPAY, aplicação bancária, ao assumir o desenvolvimento sénior de relatórios e funcionalidades de backend em C#, ASP.NET e DevExpress.",
          "Mantive ambos os sistemas fiáveis em produção ao longo de três anos, ao administrar as bases de dados SQL Server e resolver incidentes de relatórios como DBA responsável.",
        ],
      },
    ],
    freelanceTitle: "TRABALHOS EM FREELANCE E POR CONTRATO (2021 a 2025)",
    freelanceIntro: "Projectos e colaborações em regime parcial, realizados em paralelo com as funções acima.",
    freelance: [
      { name: "ECO Estuda Comigo (Angola)", role: "Tech Lead de Frontend", period: "Nov 2023 a Jan 2025", text: "liderei o frontend de uma plataforma de educação online, ao entregar dashboards responsivos e interfaces de aprendizagem em ASP.NET Core, Bootstrap e MariaDB." },
      { name: "Kiari Code (Angola)", role: "Desenvolvedor Frontend", period: "Set 2021 a Fev 2024", text: "construí o website institucional e a aplicação Kiari Events para organizadores, ao entregar interfaces em React, Next.js, Redux Toolkit, GraphQL e Chakra UI com geolocalização." },
      { name: "XGrow (Brasil)", role: "Desenvolvedor Frontend", period: "Jan 2022 a Jul 2022", text: "entreguei os módulos de calendário e de sessões ao vivo de uma plataforma de educação com mais de 10 mil utilizadores activos e 92% de engagement, em React e Next.js." },
      { name: "Tecla T (Brasil)", role: "Desenvolvedor Frontend", period: "Jan 2022 a Jul 2022", text: "construí o fluxo de login, a calculadora de câmbio e os registos de pessoa física e jurídica do SADOC, plataforma internacional de remessas, elevando a conversão em 45% e atingindo 87% de conclusão de formulários." },
      { name: "Zeni Tech (Brasil)", role: "Desenvolvedor Fullstack", period: "Jun 2022 a Set 2022", text: "entreguei landing pages e correcções de defeitos com React, Node.js, Angular, WordPress e PHP." },
    ],
    projectsTitle: "PROJECTOS SELECCIONADOS DE IA E PRODUTO",
    projects: [
      { name: "SOS Benguela (benguela.sosangola.ao)", text: "plataforma de pessoas desaparecidas para a resposta às cheias de Benguela, construída com a AASED e operada em articulação com o INAC, a Polícia Nacional, o Ministério da Saúde e o governo provincial. Faz a correspondência entre registos de desaparecidos e de encontrados através de vector embeddings e busca por similaridade, com inferência de LLM da Hugging Face e decisão assistida por IA, em Next.js." },
      { name: "Modelos de reconhecimento de animais (investigação académica)", text: "treinei e avaliei modelos de visão computacional para reconhecimento de espécies animais em Python." },
      { name: "ERP de agronegócio do café (DevTest)", text: "gestão de colheita, stock e rastreabilidade para produção de café, activo em 5 fazendas e a crescer." },
      { name: "Docampo (co-fundador e desenvolvedor principal)", text: "marketplace agrícola que liga produtores e compradores, em pré-lançamento com os primeiros utilizadores. Único desenvolvedor da plataforma, do modelo de dados à interface." },
      { name: "Código aberto", text: "121 repositórios e 719 contribuições no último ano em github.com/Cientista-Avogadro. Casos de estudo completos em sebastiao-moniz.vercel.app." },
    ],
    educationTitle: "FORMAÇÃO ACADÉMICA",
    education: [
      { degree: "Licenciatura em Ciência da Computação", school: "Instituto Superior Politécnico Metropolitano de Angola (ISPM), Luanda", detail: "2023 a 2028, em curso." },
      { degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas", school: "Faculdade AIEC, Brasil (online)", detail: "Em curso, início em Fev 2026." },
      { degree: "Ensino Médio Técnico em Gestão de Sistemas Informáticos", school: "IPIL Makarenco, Luanda", detail: "2018 a 2022, média final de 17 valores." },
    ],
    certificationsTitle: "CERTIFICAÇÕES E IDIOMAS",
    certifications: "15 certificações profissionais, incluindo React The Complete Guide (Udemy), JavaScript Algorithms and Data Structures (freeCodeCamp), Decola Tech Bootcamp e Desenvolvimento avançado com JavaScript ES6 e TypeScript (Digital Innovation One), Bootcamp Eduzz Fullstack Developer.",
    languagesTitle: "IDIOMAS",
    languages: "Português nativo · Inglês nível profissional.",
  },
};
