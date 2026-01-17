"use client";

import { useResumeStore } from "@/hooks/use-resume-store";
import {
  Contact01FreeIcons,
  File01FreeIcons,
  Github01FreeIcons,
  Linkedin01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { ResumeModal } from "../resume/resume-modal";
import { Button } from "../ui/button";

type HeroButtonsProps = {
  contactLabel: string;
  resumeLabel: string;
};

export function HeroButtons({
  contactLabel,
  resumeLabel,
}: HeroButtonsProps) {
  const isResumeModalOpen = useResumeStore((s) => s.resumeOpen);
  const openResume = useResumeStore((s) => s.openResume);
  const closeResume = useResumeStore((s) => s.closeResume);

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
        onClick={() => openResume()}
      >
        <HugeiconsIcon icon={File01FreeIcons} /> {resumeLabel}
      </Button>

       <ResumeModal
        open={isResumeModalOpen}
        onOpenChange={(open) => (open ? openResume() : closeResume())}
      />
    </div>
  );
}
