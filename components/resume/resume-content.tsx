"use client";

import { useTranslations } from "next-intl";
import { ResumeSkillsGrid } from "./resume-skills-grid";
import EducationSection from "./sections/education-section";
import ExperienceSection from "./sections/experience-section";
import type { EducationItem, ExperienceItem } from "./types";


export default function ResumeContent() {
  const t = useTranslations("resume");

  const experienceItems = t.raw("experience.items") as ExperienceItem[];
  const educationItems = t.raw("education.items") as EducationItem[];

  return (
    <div className="resume-container flex flex-col gap-12 overflow-y-auto p-4 sm:p-6 lg:p-12">
      <ExperienceSection title={t("experience.title")} number="01" items={experienceItems} />

      <section className="resume-section">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-6">
          {t("skills.title")} <span className="text-accent ml-3 text-lg">02</span>
        </h2>
        <hr className="border-t border-muted my-4" />
        <ResumeSkillsGrid />
      </section>

      <EducationSection title={t("education.title")} number="03" items={educationItems} />
    </div>
  );
}