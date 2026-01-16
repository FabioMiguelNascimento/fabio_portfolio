"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { FiLayers, FiTarget } from "react-icons/fi";
import {
  SiDocker,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { TbRobot } from "react-icons/tb";

const ICONS: Record<string, any> = {
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "NestJS": SiNestjs,
  "Node.js": SiNodedotjs,
  "PostgreSQL": SiPostgresql,
  "Docker": SiDocker,
  "Redis": SiRedis,
  "LLMs": TbRobot,
  "Clean Architecture": FiLayers,
  "DDD": FiTarget,
};

export function ResumeSkillsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("resume");
  const raw = t.raw("skills") as Record<string, string[]>;

  const list = [
    ...(raw.frontend ?? []),
    ...(raw.backend ?? []),
    ...(raw.infra ?? []),
    ...(raw.ai ?? []),
    ...(raw.other ?? []),
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;

      const items = gridRef.current.querySelectorAll<HTMLElement>(".skill-item");
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        item.style.setProperty("--mouse-x", `${x}px`);
        item.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    const grid = gridRef.current;
    grid?.addEventListener("mousemove", handleMouseMove);

    return () => {
      grid?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="skills-grid grid grid-rows-[repeat(2,minmax(0,1fr))] grid-flow-col auto-cols-[minmax(140px,1fr)] gap-3"
    >
      {list.map((name) => {
        const Icon = ICONS[name];
        return (
          <div
            key={name}
            className="skill-item relative flex items-center justify-center gap-2 rounded-lg border bg-accent/50 p-3 text-sm transition-transform h-full min-h-[3.25rem]"
          >
            {Icon ? <Icon className="h-5 w-5" /> : null}
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}
