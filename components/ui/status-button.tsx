"use client";

import { siteConfig } from "@/config/site";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export function StatusButton() {
  const t = useTranslations("status");
  const open = siteConfig.openToWork;
  const router = useRouter();
  const locale = useLocale();

  const handleClick = () => {
    const closeBtn = document.querySelector('[data-slot="sheet-close"]') as HTMLElement | null;
    if (closeBtn) {
      closeBtn.click();
      setTimeout(() => {
        router.push(`/${locale}/#contact`);
      }, 350);
    } else {
      router.push(`/${locale}/#contact`);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={open ? t("open") : t("unavailable")}
      className="inline-flex items-center gap-2 cursor-pointer"
    >
      <span
        aria-hidden
        className={`relative inline-flex h-3 w-3 rounded-full ${
          open ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        {open && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>}
      </span>
      <span className="text-sm font-medium text-muted-foreground">
        {open ? t("open") : t("unavailable")}
      </span>
    </button>
  );
}
