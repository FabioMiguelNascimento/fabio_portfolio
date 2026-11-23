import { Project } from "@/components/projects/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    image: "/images/projects/portfolio-thumb.webp",
    imageFull: "/images/projects/portfolio.webp",
    releaseDate: "2025",
    tags: [
      { name: "React", iconKey: "SiReact" },
      { name: "TypeScript", iconKey: "SiTypescript" },
      { name: "Tailwind CSS", iconKey: "SiTailwindcss" },
      { name: "Prisma", iconKey: "SiPrisma" },
      { name: "Next.js", iconKey: "SiNextdotjs" },
    ],
    links: {
      demo: "https://portfolio-fabio-miguel.vercel.app/",
      repository: "https://github.com/FabioMiguelNascimento",
    },
  },
  {
    id: "version_logger",
    image: "/images/projects/ais-update-thumb.webp",
    imageFull: "/images/projects/ais-update.webp",
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
    image: "/images/projects/bizzconnect-thumb.webp",
    imageFull: "/images/projects/bizzconnect.webp",
    releaseDate: "2026",
    tags: [
      { name: "Next.js", iconKey: "SiNextdotjs" },
      { name: "NestJS", iconKey: "SiNestjs" },
      { name: "RabbitMQ", iconKey: "SiRabbitmq" },
      { name: "Redis", iconKey: "SiRedis" },
      { name: "Prisma", iconKey: "SiPrisma" },
      { name: "Docker", iconKey: "SiDocker" },
    ],
    links: {
      demo: "https://bizzconnect-nu.vercel.app/pt-BR",
    },
  },
  {
    id: "salva-contas",
    image: "/images/projects/salva-contas-thumb.webp",
    imageFull: "/images/projects/salva-contas.webp",
    releaseDate: "2026",
    tags: [
      { name: "React", iconKey: "SiReact" },
      { name: "TypeScript", iconKey: "SiTypescript" },
      { name: "Tailwind CSS", iconKey: "SiTailwindcss" },
      { name: "NestJs", iconKey: "SiNestjs" },
      { name: "Artificial Intelligence", iconKey: "AiOutlineRobot" },
    ],
    links: {
      demo: "https://salva-contas.vercel.app/",
      repository: "https://github.com/FabioMiguelNascimento/salva-contas",
    },
  },
  {
    id: "weather_app",
    image: "/images/projects/weather-app-thumb.webp",
    imageFull: "/images/projects/weather-app.webp",
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
    image: "/images/projects/maya-portfolio-thumb.webp",
    imageFull: "/images/projects/maya-portfolio.webp",
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
