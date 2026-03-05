"use client";

import { Github01FreeIcons, Linkedin01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { Button } from "../ui/button";
import { StatusButton } from "../ui/status-button";

export default function Contact() {
  const t = useTranslations("contact");
  const [copied, setCopied] = useState(false);
  const email = "fabiomnascimento05@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard write failed", err);
    }
  };

  return (
    <section id="contact" className="w-full min-h-dvh py-24 flex flex-col items-center justify-center gap-8">
      <div className="text-center space-y-2">
        <h2 className="font-handwriting text-4xl font-bold -rotate-1">
          {t("title")}
        </h2>
        <p className="font-mono text-sm">{t("subtitle")}</p>
      </div>

      <div
        className={
          "relative w-full max-w-md  flex flex-col gap-6"
        }
      >

        <div className="flex flex-col">
          <span className="font-bold text-xl text-stone-900 dark:text-stone-100">Fábio Miguel</span>
          <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">{t("role")}</span>
        </div>

        <div className="group relative">
          <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase mb-1 block">{t("emailLabel")}</label>
          <button
              onClick={handleCopy}
              aria-label={`${t("copy")} ${email}`}
              className="w-full flex items-center justify-between p-3 bg-white/70 cursor-pointer dark:bg-white/5 border border-stone-300 dark:border-white/10 rounded hover:border-stone-400 transition-all active:scale-[0.99]"
          >
            <span className="font-mono text-stone-900 dark:text-stone-200 font-medium">{email}</span>
            <div className="text-stone-600 dark:text-stone-400">
              {copied ? <FiCheck className="text-green-600 dark:text-green-500" aria-hidden /> : <FiCopy className="group-hover:text-stone-900 dark:group-hover:text-stone-200" aria-hidden />}
            </div>
          </button>

          {copied && (
              <span role="status" aria-live="polite" className="absolute -right-2 -top-8 bg-stone-800 text-white text-xs px-2 py-1 rounded shadow-lg animate-in fade-in slide-in-from-bottom-2">
              {t("copied")}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 items-stretch">
          <Link href="https://github.com/FabioMiguelNascimento" target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="w-full inline-flex gap-2 items-center justify-center"
            >
              <HugeiconsIcon icon={Github01FreeIcons} /> GitHub
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/fab-nascimento/" target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="w-full inline-flex gap-2 items-center justify-center"
            >
              <HugeiconsIcon icon={Linkedin01FreeIcons} /> LinkedIn
            </Button>
          </Link>
        </div> 

        <div className="mt-2 pt-4 flex justify-between items-center text-[10px] text-stone-400 font-mono">
          <span>{t("basedIn")}</span>
          <StatusButton />
        </div>
      </div>
    </section>
  );
}