"use client";

import { StatusButton } from "@/components/ui/status-button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
    const t = useTranslations("footer");
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full py-8 mt-16">
            <span className="absolute left-1/2 top-0 w-screen -translate-x-1/2 h-px bg-stone-200 dark:bg-white/10"></span>
            <div className="relative max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="font-mono text-xs text-stone-600 dark:text-stone-400">
                        © {currentYear} Fábio Miguel. {t("rights")}.
                    </span>
                    <StatusButton />
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/FabioMiguelNascimento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-mono text-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
                    >
                        <FiGithub className="w-4 h-4" />
                        <span>{t("source")}</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/fab-nascimento/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-mono text-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
                    >
                        <SiLinkedin className="w-4 h-4" />
                        <span>{t("linkedin")}</span>
                    </Link>
                </div>
            </div>

            <div
                className="w-full text-center mt-6 select-all text-transparent selection:bg-stone-900 selection:text-stone-100 dark:selection:bg-stone-100 dark:selection:text-stone-900 text-[10px] font-mono">
            </div>
        </footer>
    );
}