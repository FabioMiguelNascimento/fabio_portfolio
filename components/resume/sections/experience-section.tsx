"use client";

import Image from "next/image";
import { Trans } from "../../i18n/trans";
import { ExperienceItem } from "../types";
import ResumeSection from "./resume-section";

export default function ExperienceSection({
  title,
  number,
  items,
}: {
  title: string;
  number?: string;
  items: ExperienceItem[];
}) {
  return (
    <ResumeSection title={title} number={number}>
      <div className="grid gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="hidden sm:flex flex-col items-center w-20 shrink-0">
              <div className="w-14 h-14 rounded-lg bg-card-foreground border border-muted-foreground flex items-center justify-center overflow-hidden">
                <Image
                  className="rounded-lg"
                  src={`/icons/companies/${item.company.toLowerCase()}.${item.extension}`}
                  alt={`${item.company} logo`}
                  width={56}
                  height={56}
                  priority={true}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start gap-2 mb-2 flex-wrap">
                <h4 className="text-lg font-semibold mr-2">{item.role}</h4>
                <span className="inline-flex items-center justify-center whitespace-nowrap min-w-24 px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground">{item.period ?? ""}</span>
              </div>
              <p className="text-primary/80 mb-2 flex items-center">
                <span className="sm:hidden inline-flex mr-3 items-center justify-center w-8 h-8 rounded-lg bg-card-foreground border border-muted-foreground overflow-hidden">
                  <Image
                    className="rounded-lg"
                    src={`/icons/companies/${item.company.toLowerCase()}.${item.extension}`}
                    alt={`${item.company} logo`}
                    width={32}
                    height={32}
                    priority={true}
                  />
                </span>
                <span className="break-words">{item.company}</span>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {item.responsibilities.map((resp, i) => (
                  <li key={i} className="leading-snug">
                    <Trans text={resp} components={{ strong: (c) => <strong className="font-bold">{c}</strong> }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}
