import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Emoji from "./emoji";
import { HeroButtons } from "./hero-buttons";
import { HeroSkillsPopover } from "./hero-skills-popover";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      id="main"
      className="grid min-h-[calc(100dvh-var(--nav-height,0px))] w-full items-center justify-items-start gap-6 sm:gap-8 content-center md:grid-cols-2 md:content-center"
    >
      <div className="flex flex-col gap-4 text-base">
        <div className="mr-auto">
          <div className="title-row">
            <p className="flex gap-2 flex-row nowrap items-start justify-start">
              {t("greeting.part_one")}
              <Emoji />
              {" "}
              {t("greeting.part_two")}
            </p>
            <p id="hero-title" className="font-bold text-5xl">{t("name")}</p>
          </div>
          <HeroSkillsPopover
            role={t("role")}
            viewSkillsLabel={t("view_skills")}
            techTitle={t("tech_title")}
          />
        </div>
        <HeroButtons
          contactLabel={t("buttons.contact")}
          resumeLabel={t("buttons.resume")}
        />
      </div>
      <div className="flex w-full justify-center md:justify-end">
        <Image
          className="border-2 rounded-(--radius)"
          src="/images/profile.webp"
          width={250}
          height={250}
          alt="profile"
        />
      </div>
    </section>
  );
}
