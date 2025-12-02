"use client"
import { useIsMobile } from "@/hooks/use-mobile.hook";
import { Contact01FreeIcons, File01FreeIcons, Github01FreeIcons, Linkedin01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { SiNestjs, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TbArrowUpLeft } from "react-icons/tb";

export default function Hero() {
    const t = useTranslations('hero')
    const isMobile = useIsMobile();
    const text = isMobile ? t("touch") : t("hover");

    const skills = [
        { icon: SiTypescript, name: "Typescript" },
        { icon: SiNestjs, name: "NestJS" },
        { icon: SiReact, name: "ReactJS" },
        { icon: SiNextdotjs, name: "NextJS" },
    ]

    return (
        <section
            id="main"
            className="grid min-h-[calc(100dvh-var(--nav-height,0px))] w-full items-center justify-items-start gap-6 sm:gap-8 content-center md:grid-cols-2 md:content-center"
        >
            <div className="flex flex-col gap-4 text-base">
                <div className="mr-auto">
                    <div className="title-row">
                        <p className="flex gap-2 flex-row nowrap items-start justify-start">
                            {t("greeting.part_one")} <Image src="/emoji.png" className="emoji" width={16} height={16} alt="emoji" /> {t("greeting.part_two")}
                        </p>
                        <p className="font-bold text-5xl">{t("name")}</p>
                    </div>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="relative inline-flex items-center">
                                <p className={`italic text-xl pr-6`}>{t("role")}</p>
                                <span className="absolute top-6 right-5 text-xs text-muted-foreground flex items-center justify-center">
                                    <TbArrowUpLeft className="h-4 w-4" aria-hidden />
                                    {text}                                
                                </span>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent
                            side={isMobile ? "bottom" : "right"}
                            align="start"
                            className="max-w-[min(50rem,calc(100vw-2rem))]"
                        >
                            <div className="flex w-full flex-wrap items-start justify-start gap-2">
                                {skills.map(skill => (
                                    <Badge variant="outline" key={skill.name} className="text-accent-900 inline-flex items-center justify-center gap-2">
                                        <skill.icon size={16} /> {skill.name}
                                    </Badge>
                                ))}
                            </div>
                        </TooltipContent>
                    </Tooltip>
                </div>
                <div className="flex w-full items-start justify-start gap-2 flex-wrap">
                    <Link
                        href="https://github.com/FabioMiguelNascimento"
                        target="_blank"
                    >
                        <Button
                            variant="outline"
                            size={"sm"}
                            className="inline-flex gap-2 items-center justify-center"
                        >
                            <HugeiconsIcon icon={Github01FreeIcons} /> GitHub
                        </Button>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/fab-nascimento/"
                        target="_blank"
                    >
                        <Button
                            variant="outline"
                            size={"sm"}
                            className="inline-flex gap-2 items-center justify-center"
                        >
                            <HugeiconsIcon icon={Linkedin01FreeIcons} /> LinkedIn
                        </Button>
                    </Link>
                    <Link
                        href="#contact"
                    >
                        <Button
                            variant="outline"
                            size={"sm"}
                            className="inline-flex gap-2 items-center justify-center"
                        >
                            <HugeiconsIcon icon={Contact01FreeIcons} /> {t("buttons.contact")}
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        size={"sm"}
                        className="inline-flex gap-2 items-center justify-center"
                    >
                        <HugeiconsIcon icon={File01FreeIcons} /> {t("buttons.resume")}
                    </Button>
                </div>
            </div>
            <div className="flex w-full justify-center md:justify-end">
                <Image className="border-2 rounded-(--radius)" src="/images/profile.webp" width={250} height={250} alt="profile" />
            </div>
        </section>
    )
}