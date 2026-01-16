"use client";

import { Cancel01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";

import { useTranslations } from "next-intl";

export default function ResumeControlls(
    { downloadLabel, onOpenChange }:
    { downloadLabel: string; onOpenChange: (open: boolean) => void }
) {
  const t = useTranslations("resume");
  const file = t("header.file");

  return (
    <>
      <a href={file} target="_blank" rel="noopener noreferrer" className="inline-block">
        <Button variant="outline" size="sm">
          {downloadLabel}
        </Button>
      </a>
      <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
        <HugeiconsIcon icon={Cancel01FreeIcons} />
        <span className="sr-only">Fechar</span>
      </Button>
    </>
  );
}
