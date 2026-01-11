"use client";

import { useIsMobile } from "@/hooks/use-mobile.hook";
import { SiNestjs, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import { TbArrowUpLeft } from "react-icons/tb";
import { Badge } from "../ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type HeroSkillsPopoverProps = {
  role: string;
  viewSkillsLabel: string;
  techTitle: string;
};

const skills = [
  { icon: SiTypescript, name: "Typescript" },
  { icon: SiNestjs, name: "NestJS" },
  { icon: SiReact, name: "ReactJS" },
  { icon: SiNextdotjs, name: "NextJS" },
];

export function HeroSkillsPopover({
  role,
  viewSkillsLabel,
  techTitle,
}: HeroSkillsPopoverProps) {
  const isMobile = useIsMobile();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <span className="relative inline-flex items-center">
          <p className="italic text-xl pr-6">{role}</p>
          <span className="absolute top-6 right-5 text-xs text-muted-foreground flex items-center justify-center">
            <TbArrowUpLeft className="h-4 w-4" aria-hidden />
            {viewSkillsLabel}
          </span>
        </span>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={isMobile ? 15 : -10}
        side={isMobile ? "bottom" : "right"}
        align="start"
        className="max-w-[min(50rem,calc(100vw-2rem))] p-2"
      >
        <div className="flex w-full flex-wrap items-start justify-start gap-2">
          <span className="font-bold">{techTitle}</span>
          <ul className="flex flex-row gap-2 flex-wrap">
            {skills.map((skill) => (
              <li key={skill.name}>
                <Badge
                  variant="outline"
                  className="text-accent-900 inline-flex items-center justify-center gap-2"
                >
                  <skill.icon size={16} /> {skill.name}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}
