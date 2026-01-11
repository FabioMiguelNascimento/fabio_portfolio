"use client";

import {
    Contact01FreeIcons,
    File01FreeIcons,
    Github01FreeIcons,
    Linkedin01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "../ui/button";

type HeroButtonsProps = {
  contactLabel: string;
  resumeLabel: string;
};

export function HeroButtons({ contactLabel, resumeLabel }: HeroButtonsProps) {
  return (
    <div className="flex w-full items-start justify-start gap-2 flex-wrap">
      <Link href="https://github.com/FabioMiguelNascimento" target="_blank">
        <Button
          variant="outline"
          size="sm"
          className="inline-flex gap-2 items-center justify-center"
        >
          <HugeiconsIcon icon={Github01FreeIcons} /> GitHub
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/fab-nascimento/" target="_blank">
        <Button
          variant="outline"
          size="sm"
          className="inline-flex gap-2 items-center justify-center"
        >
          <HugeiconsIcon icon={Linkedin01FreeIcons} /> LinkedIn
        </Button>
      </Link>
      <Link href="#contact">
        <Button
          variant="outline"
          size="sm"
          className="inline-flex gap-2 items-center justify-center"
        >
          <HugeiconsIcon icon={Contact01FreeIcons} /> {contactLabel}
        </Button>
      </Link>
      <Button
        variant="outline"
        size="sm"
        className="inline-flex gap-2 items-center justify-center"
      >
        <HugeiconsIcon icon={File01FreeIcons} /> {resumeLabel}
      </Button>
    </div>
  );
}
