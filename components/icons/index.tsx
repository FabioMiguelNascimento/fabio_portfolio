"use client"

import { CloudFreeIcons, Motion01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react"
import React from "react"
import type { IconType } from "react-icons"

import { FiBook, FiCode, FiCoffee, FiExternalLink, FiGithub, FiHeart, FiLayers, FiTarget, FiZap } from "react-icons/fi"
import { SiArchlinux, SiAxios, SiChartdotjs, SiCloudflare, SiDocker, SiFirebase, SiLinux, SiMarkdown, SiMongodb, SiMui, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiRabbitmq, SiReact, SiRedis, SiSass, SiSocketdotio, SiTailwindcss, SiTypescript } from "react-icons/si"
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
  SiPostgresql,
  SiTailwindcss,
  SiChartdotjs,
  SiMui,
  SiTypescript,
  SiLinux,
  TbDevices: (TbDevices as unknown) as IconType,
  TbRobot: (TbRobot as unknown) as IconType,
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

export const FRIENDLY_NAME_TO_KEY: Record<string, string> = {
  "TypeScript": "SiTypescript",
  "React": "SiReact",
  "Next.js": "SiNextdotjs",
  "NestJS": "SiNestjs",
  "Node.js": "SiNodedotjs",
  "PostgreSQL": "SiPostgresql",
  "Docker": "SiDocker",
  "Redis": "SiRedis",
  "LLMs": "TbRobot",
  "Clean Architecture": "FiLayers",
  "DDD": "FiTarget",
}

export function getIconComponent(iconKeyOrFriendly: string): React.ReactNode {
  if (!iconKeyOrFriendly) return null

  const key = FRIENDLY_NAME_TO_KEY[iconKeyOrFriendly] ?? iconKeyOrFriendly

  if (REACT_ICONS[key]) {
    const Comp = REACT_ICONS[key] as IconType
    return <Comp />
  }

  if (HUGEICONS[key]) {
    return <HugeiconsIcon icon={HUGEICONS[key]} />
  }

  return null
}

export default getIconComponent
