import { Project } from "@/components/projects/project";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Pessoal",
    description: "Site pessoal desenvolvido com React e SCSS, apresentando projetos, habilidades e experiências de forma interativa e responsiva.",
    image: "/images/projects/portfolio.png",
    releaseDate: "2025",
    tags: [
      { name: "React", iconKey: "SiReact" },
      { name: "SCSS", iconKey: "SiSass" },
      { name: "Framer Motion", iconKey: "Motion01Icon" },
    ],
    links: {
      demo: "https://portfolio-fabio-miguel.vercel.app/",
      repository: "https://github.com/FabioMiguelNascimento",
    },
  },
  {
    id: "version_logger",
    title: "Version Logger",
    description: "Aplicação pessoal que permite criar e compartilhar registros em formato Markdown através de URLs, facilitando a documentação e compartilhamento de informações.",
    image: "/images/projects/ais-update.png",
    releaseDate: "2024",
    tags: [
      { name: "React", iconKey: "SiReact" },
      { name: "Firebase", iconKey: "SiFirebase" },
      { name: "SCSS", iconKey: "SiSass" },
      { name: "Markdown", iconKey: "SiMarkdown" },
    ],
    links: {
      demo: "https://ais-update.vercel.app",
    },
  },
  {
    id: "bizzconnect",
    title: "Bizzconnect",
    description: "Aplicativo de rede social para profissionais, com recursos de mensagens, grupos e compartilhamento de conteúdo. Utilize de todos os meios de comunicação atuais para se conectar com seus colegas/clientes.",
    image: "/images/projects/bizzconnect.png",
    releaseDate: "2026",
    tags: [
      { name: "React", iconKey: "SiReact" },
      { name: "Redis", iconKey: "SiRedis" },
      { name: "Node.js", iconKey: "SiNodedotjs" },
      { name: "MongoDB", iconKey: "SiMongodb" },
      { name: "Socket.io", iconKey: "SiSocketdotio" },
      { name: "Cloudflare Storage", iconKey: "SiCloudflare" },
    ],
    links: {
      demo: "https://bizzconnect-nu.vercel.app/pt-BR",
    },
  },
  {
    id: "weather_app",
    title: "Weather App",
    description: "Aplicativo de previsão do tempo com geolocalização e alertas meteorológicos.",
    image: "/images/projects/weather-app.png",
    releaseDate: "2024",
    tags: [
      { name: "React", iconKey: "SiReact" },
      { name: "OpenWeather API", iconKey: "CloudFreeIcons" },
      { name: "Axios", iconKey: "SiAxios" },
      { name: "SCSS", iconKey: "SiSass" },
    ],
    links: {
      demo: "https://weather-app-sable-seven-58.vercel.app/",
      repository: "https://github.com/FabioMiguelNascimento/weatherApp",
    },
  },
  {
    id: "portfolio_maya",
    title: "Portfolio Maya",
    description: "Portfolio profissional desenvolvido para minha esposa, apresentando seus trabalhos e experiências de forma elegante e responsiva.",
    image: "/images/projects/maya-portfolio.png",
    releaseDate: "2024",
    tags: [
      { name: "React", iconKey: "SiReact" },
      { name: "SCSS", iconKey: "SiSass" },
      { name: "Responsive Design", iconKey: "TbDevices" },
      { name: "Framer Motion", iconKey: "Motion01Icon" },
    ],
    links: {
      demo: "https://maya-portfolio-topaz.vercel.app/",
      repository: "https://github.com/FabioMiguelNascimento/maya-portfolio",
    },
  },
  {
    id: "blog_platform",
    title: "Blog Platform",
    description: "Plataforma de blog com editor rich text, sistema de comentários e painel do autor.",
    image: "",
    releaseDate: "2025",
    tags: [
      { name: "Next.js", iconKey: "SiNextdotjs" },
      { name: "Prisma", iconKey: "SiPrisma" },
      { name: "PostgreSQL", iconKey: "SiPostgresql" },
      { name: "TailwindCSS", iconKey: "SiTailwindcss" },
    ],
    links: {
      demo: "https://demo.com/blog",
      repository: "https://github.com/user/blog",
    },
  },
  {
    id: "dashboard_admin",
    title: "Dashboard Admin",
    description: "Painel administrativo com visualização de dados em tempo real, gráficos interativos e gerenciamento de usuários.",
    image: "",
    releaseDate: "2023",
    tags: [
      { name: "React", iconKey: "SiReact" },
      { name: "Chart.js", iconKey: "SiChartdotjs" },
      { name: "Firebase", iconKey: "SiFirebase" },
      { name: "Material UI", iconKey: "SiMui" },
    ],
    links: {
      demo: "https://demo.com/dashboard",
      repository: "https://github.com/user/dashboard",
    },
  },
];