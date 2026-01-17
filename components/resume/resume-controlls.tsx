"use client";

import { useResumeStore } from "@/hooks/use-resume-store";
import { Cancel01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";

import { useTranslations } from "next-intl";

export default function ResumeControlls(
    { downloadLabel }:
    { downloadLabel: string }
) {
  const t = useTranslations("resume");
  const file = t("header.file");
  const closeResume = useResumeStore((s) => s.closeResume);

  return (
    <>
      <a href={file} target="_blank" rel="noopener noreferrer" className="inline-block">
        <Button variant="outline" size="sm">
          {downloadLabel}
        </Button>
      </a>
      <Button data-slot="sheet-close" variant="ghost" size="icon" onClick={() => closeResume()}>
        <HugeiconsIcon icon={Cancel01FreeIcons} />
        <span className="sr-only">Fechar</span>
      </Button>
    </>
  );
}
