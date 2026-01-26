"use client"

import { cn } from "@/lib/utils";
import { CloudFreeIcons, Motion01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import Link from "next/link";
import React from "react";
import { FiBook, FiExternalLink, FiGithub } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { SiAxios, SiChartdotjs, SiCloudflare, SiDocker, SiFirebase, SiMarkdown, SiMongodb, SiMui, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiRabbitmq, SiReact, SiRedis, SiSass, SiSocketdotio, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbDevices } from "react-icons/tb";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";

import type { Project, ProjectProps } from "./types";

const Project = React.forwardRef<HTMLButtonElement, ProjectProps & React.ButtonHTMLAttributes<HTMLButtonElement>>(function Project({ project, metadata, ...props }, ref) {

  const iconMap: Record<string, IconType | IconSvgElement> = {
    SiReact,
    SiTypescript,
    Motion01Icon,
    SiFirebase,
    SiMarkdown,
    SiRedis,
    SiNodedotjs,
    SiMongodb,
    SiSocketdotio,
    SiCloudflare,
    CloudFreeIcons,
    SiAxios,
    SiNestjs,
    SiRabbitmq,
    SiDocker,
    TbDevices,
    SiNextdotjs,
    SiPrisma,
    SiPostgresql,
    SiTailwindcss,
    SiChartdotjs,
    SiMui,
  };

  const getIconComponent = (iconKey: string) => {
    const icon = iconMap[iconKey];
    if (!icon) return null;

    if (typeof icon === "function") {
      const IconComp = icon as IconType;
      return <IconComp />;
    } else {
      return <HugeiconsIcon icon={icon as IconSvgElement} />;
    }
  };

  return (
    <button ref={ref} {...props} type="button" className="flex gap-2 flex-col py-4 w-full text-left">
      <header className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full">
        <h2 className="text-2xl font-extralight truncate">{metadata.title}</h2>
        <span className="font-mono text-sm text-muted-foreground mt-0.5 sm:mt-0">{project.releaseDate}</span>
      </header>

      <div>
        <span className="text-sm text-muted-foreground line-clamp-3">{metadata.description}</span>
      </div>

      <footer className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full items-start sm:items-center justify-between">
        <ul className="flex flex-wrap gap-2 justify-start max-w-full">
          {project.tags.map((tag) => {
            const iconComponent = getIconComponent(tag.iconKey);
            return (
              <Badge key={tag.name} variant="muted" className="flex gap-2">
                {iconComponent}
                <p className="text-sm truncate">{tag.name}</p>
              </Badge>
            );
          })}
        </ul>

        <div className="flex gap-2 flex-wrap justify-end w-full sm:w-auto">
          {project.links.demo && (
            <Button variant="brand" size="sm" asChild>
              <Link
                target="_blank"
                rel="noreferrer"
                href={project.links.demo}
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink />
                {metadata.links.demo}
              </Link>
            </Button>
          )}
          {project.links.repository && (
            <Button variant="outline" size="sm" asChild>
              <Link
                target="_blank"
                rel="noreferrer"
                href={project.links.repository}
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub />
                {metadata.links.repository}
              </Link>
            </Button>
          )}
          {project.links.doc && (
            <span
              role="link"
              tabIndex={0}
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              onClick={(e) => { e.stopPropagation(); window.open(project.links.doc, '_blank'); }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); window.open(project.links.doc, '_blank'); } }}
            >
              <FiBook />
              {metadata.links.doc}
            </span>
          )}
        </div>
      </footer>
    </button>
  );
});

export default Project;
