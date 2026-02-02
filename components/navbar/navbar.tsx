"use client"
import { StatusButton } from "@/components/ui/status-button"
import { useIsMobile } from "@/hooks/use-mobile.hook"
import { useResumeStore } from "@/hooks/use-resume-store"
import { Link, usePathname, useRouter } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import { Moon01FreeIcons, Sun01FreeIcons } from "@hugeicons/core-free-icons"
import type { IconSvgElement } from "@hugeicons/react"
import { useLocale, useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import dynamic from "next/dynamic"
import { useEffect, useMemo, useState } from "react"

type NavbarIcon = string | IconSvgElement

export type NavbarItem = {
    name?: string
    icon?: NavbarIcon
    onClick?: () => void
    href?: string
    srLabel?: string
}

const DynamicDesktop = dynamic(() => import("./desktop"), {
    ssr: false,
})
const DynamicMobile = dynamic(() => import("./mobile"), {
    ssr: false,
})

export default function Navbar() {
    const t = useTranslations("navbar")
    const { theme, setTheme } = useTheme()
    const isMobile = useIsMobile()
    const locale = useLocale()
    const pathname = usePathname()
    const router = useRouter()
    const menuLabel = t("menu")
    const toggleThemeLabel = t("toggleTheme")
    const switchToEnglishLabel = t("switchLanguageToEnglish")
    const switchToPortugueseLabel = t("switchLanguageToPortuguese")

    const [showCompactTitle, setShowCompactTitle] = useState(false)

    useEffect(() => {
        const title = document.getElementById("hero-title")

        if (!title) {
            setShowCompactTitle(true)
            return
        }

        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setShowCompactTitle(!entry.isIntersecting)
            })
        }, { threshold: 0.5 })

        obs.observe(title)
        return () => obs.disconnect()
    }, [pathname])

    const primaryItems = useMemo<NavbarItem[]>(
        () => [
            {
                name: t("about"),
                href: "#about",
            },
            {
                name: t("projects"),
                href: "#projects",
            },
            {
                name: t("resume"),
                onClick: () => useResumeStore.getState().openResume(),
            },
            {
                name: t("contact"),
                href: "#contact",
            },
        ],
        [t]
    )

    const actionItems = useMemo<NavbarItem[]>(
        () => {
            const nextLocale = locale === "en" ? "pt-br" : "en"
            const currentLanguageShortLabel = locale === "en" ? t("languageShortEn") : t("languageShortPt")

            return [
                {
                    name: currentLanguageShortLabel,
                    icon: locale === "en" ? "/icons/united-states.png" : "/icons/brazil.png",
                    onClick: () => router.replace(pathname, { locale: nextLocale }),
                    srLabel: locale === "en" ? switchToPortugueseLabel : switchToEnglishLabel,
                },
                {
                    icon: theme === "light" ? Moon01FreeIcons : Sun01FreeIcons,
                    onClick: () => setTheme(theme === "light" ? "dark" : "light"),
                    srLabel: toggleThemeLabel,
                },
            ]
        },
        [locale, pathname, router, setTheme, switchToEnglishLabel, switchToPortugueseLabel, theme, toggleThemeLabel, t]
    )

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full",
                "bg-transparent backdrop-blur-[3px]",
                "py-6"
            )}
            style={{
                backgroundImage: "radial-gradient(var(--background) 1px, transparent 1px)",
                backgroundSize: "4px 4px",
                mask: "linear-gradient(to bottom, black calc(90%), transparent 100%)",
                WebkitMask: "linear-gradient(to bottom, black calc(100% - 20px), transparent 100%)",
                WebkitBackdropFilter: "blur(3px)",
            }}
        >
            <div className="mx-auto flex w-full  items-center justify-between gap-4 ">
                <Link href="/" className="text-3xl font-semibold tracking-tight sm:text-3xl">
                    <span className={`hidden sm:inline-block transition-transform duration-300 ease-out ${showCompactTitle ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}>Fábio Miguel</span>
                    <span className={`inline-block sm:hidden transition-transform duration-300 ease-out ${showCompactTitle ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`} aria-hidden={!showCompactTitle}>FM</span>
                </Link>
                <div className="hidden sm:flex items-center gap-4">
                  <StatusButton />
                </div>
                {isMobile ? (
                    <DynamicMobile items={[...primaryItems, ...actionItems]} menuLabel={menuLabel} />
                ) : (
                    <DynamicDesktop links={primaryItems} actions={actionItems} />
                )}
            </div>
        </header>
    )
}