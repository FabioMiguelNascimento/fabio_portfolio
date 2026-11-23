"use client"

import { CloudFreeIcons, Motion01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react"
import React from "react"
import type { IconType } from "react-icons"
import { AiOutlineRobot } from "react-icons/ai"

import { FiBook, FiCode, FiCoffee, FiExternalLink, FiGithub, FiHeart, FiLayers, FiTarget, FiZap } from "react-icons/fi"
import {
  SiAmazonwebservices, SiArchlinux, SiAxios, SiChartdotjs, SiCloudflare,
  SiDocker, SiDrizzle, SiFirebase, SiGithubactions, SiLinux, SiMarkdown,
  SiMongodb, SiMui, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql,
  SiPrisma, SiRabbitmq, SiReact, SiRedis, SiSass, SiSocketdotio,
  SiTailwindcss, SiTurborepo, SiTypescript, SiVitest, SiZod
} from "react-icons/si"
import { TbDevices, TbRobot } from "react-icons/tb"

export const HUGEICONS: Record<string, IconSvgElement> = {
  CloudFreeIcons,
  Motion01Icon,
}

export const REACT_ICONS: Record<string, IconType> = {
  SiReact,
  SiSass,
  SiFirebase,
  SiMarkdown,
  SiRedis,
  SiNodedotjs,
  SiMongodb,
  SiSocketdotio,
  SiCloudflare,
  SiAxios,
  SiNestjs,
  SiRabbitmq,
  SiDocker,
  SiNextdotjs,
  SiPrisma,
  SiDrizzle,
  SiPostgresql,
  SiTailwindcss,
  SiChartdotjs,
  SiMui,
  SiTypescript,
  SiLinux,
  SiAmazonwebservices,
  SiVitest,
  SiTurborepo,
  SiZod,
  SiGithubactions,
  TbDevices: (TbDevices as unknown) as IconType,
  TbRobot: (TbRobot as unknown) as IconType,
  AiOutlineRobot: (AiOutlineRobot as unknown) as IconType,
  FiBook: (FiBook as unknown) as IconType,
  FiExternalLink: (FiExternalLink as unknown) as IconType,
  FiGithub: (FiGithub as unknown) as IconType,
  FiLayers: (FiLayers as unknown) as IconType,
  FiTarget: (FiTarget as unknown) as IconType,
  SiArchlinux,
  FiCoffee: (FiCoffee as unknown) as IconType,
  FiHeart: (FiHeart as unknown) as IconType,
  FiCode: (FiCode as unknown) as IconType,
  FiZap: (FiZap as unknown) as IconType,
}

// Brand colors for technology icons
export const ICON_COLORS: Record<string, string> = {
  SiReact:            "#61DAFB",
  SiTypescript:       "#3178C6",
  SiNextdotjs:        "currentColor",
  SiNestjs:           "#E0234E",
  SiNodedotjs:        "#339933",
  SiPostgresql:       "#4169E1",
  SiDocker:           "#2496ED",
  SiRedis:            "#FF4438",
  SiRabbitmq:         "#FF6600",
  SiPrisma:           "currentColor",
  SiDrizzle:          "#C5F74F",
  SiTailwindcss:      "#06B6D4",
  SiFirebase:         "#FFCA28",
  SiMongodb:          "#47A248",
  SiSocketdotio:      "currentColor",
  SiCloudflare:       "#F38020",
  SiAxios:            "#5A29E4",
  SiMarkdown:         "currentColor",
  SiSass:             "#CC6699",
  SiLinux:            "currentColor",
  SiAmazonwebservices:"#FF9900",
  SiVitest:           "#6E9F18",
  SiTurborepo:        "#EF4444",
  SiZod:              "#3068B7",
  SiGithubactions:    "currentColor",
  SiMui:              "#007FFF",
  SiChartdotjs:       "#FF6384",
  SiArchlinux:        "#1793D1",
  TbRobot:            "#A855F7",
  AiOutlineRobot:     "#A855F7",
  FiLayers:           "#64748B",
  FiTarget:           "#64748B",
  FiCode:             "#64748B",
  FiZap:              "#EAB308",
}

export const FRIENDLY_NAME_TO_KEY: Record<string, string> = {
  "TypeScript":                    "SiTypescript",
  "React":                         "SiReact",
  "Next.js":                       "SiNextdotjs",
  "NestJS":                        "SiNestjs",
  "Node.js":                       "SiNodedotjs",
  "PostgreSQL":                    "SiPostgresql",
  "Docker":                        "SiDocker",
  "Redis":                         "SiRedis",
  "LLMs":                          "TbRobot",
  "Clean Architecture":            "FiLayers",
  "DDD":                           "FiTarget",
  "Tailwind CSS":                  "SiTailwindcss",
  "AWS (S3, EC2)":                 "SiAmazonwebservices",
  "AWS":                           "SiAmazonwebservices",
  "GitHub Actions":                "SiGithubactions",
  "Turborepo":                     "SiTurborepo",
  "Vitest":                        "SiVitest",
  "Zod":                           "SiZod",
  "Cloudflare R2":                 "SiCloudflare",
  "Agentic Coding":                "TbRobot",
  "Spec-Driven Development (SDD)": "FiTarget",
  "Agentes Autônomos":             "TbRobot",
  "Prompt Engineering":            "FiCode",
  "CI/CD":                         "SiGithubactions",
  "IAM/SSO":                       "FiLayers",
  "RBAC":                          "FiTarget",
  "Drizzle ORM":                   "SiDrizzle",
  "Artificial Intelligence":       "AiOutlineRobot",
  "Inteligência Artificial":       "AiOutlineRobot",
  "Firebase":                      "SiFirebase",
  "Markdown":                      "SiMarkdown",
  "SCSS":                          "SiSass",
  "RabbitMQ":                      "SiRabbitmq",
  "Prisma":                        "SiPrisma",
  "Framer Motion":                 "Motion01Icon",
  "Responsive Design":             "TbDevices",
  "OpenWeather API":               "CloudFreeIcons",
  "Axios":                         "SiAxios",
}

export function getIconComponent(iconKeyOrFriendly: string, colored = false): React.ReactNode {
  if (!iconKeyOrFriendly) return null

  const key = FRIENDLY_NAME_TO_KEY[iconKeyOrFriendly] ?? iconKeyOrFriendly
  const brandColor = ICON_COLORS[key]
  // For colored mode: use brand color at 80% opacity for readability.
  // Icons that are currentColor (GitHub, Next.js, Prisma, etc.) stay as-is.
  const style: React.CSSProperties | undefined = colored && brandColor && brandColor !== "currentColor"
    ? { color: brandColor, opacity: 0.8 }
    : undefined

  if (REACT_ICONS[key]) {
    const Comp = REACT_ICONS[key] as IconType
    return <Comp style={style} />
  }

  if (HUGEICONS[key]) {
    return <HugeiconsIcon icon={HUGEICONS[key]} style={style} />
  }

  return null
}

export default getIconComponent
