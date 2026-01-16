"use client";

import { useTranslations } from "next-intl";
import { Sheet, SheetContent } from "../ui/sheet";
import ResumeContent from "./resume-content";
import ResumeHeader from "./resume-header";

type ResumeModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ResumeModal({
  open,
  onOpenChange,
}: ResumeModalProps) {
  const t = useTranslations("resume");

  return (
    <Sheet open={open} onOpenChange={onOpenChange} modal>
      <SheetContent side="right" className="inset-0 left-0 right-0 w-screen max-w-none border-0 flex flex-col overflow-hidden h-screen p-8 pt-2 sm:p-12 sm:pt-2 [&>button:first-of-type]:hidden" style={{ width: '100vw', maxWidth: 'none' }} >
        <ResumeHeader
          title={t("header.title")}
          downloadLabel={t("header.download")}
          onOpenChange={onOpenChange}
        />
        <ResumeContent />
      </SheetContent>
    </Sheet>
  );
}
