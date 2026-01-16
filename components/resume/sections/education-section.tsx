"use client";

import type { EducationItem } from "../types";
import ResumeSection from "./resume-section";

export default function EducationSection({
  title,
  number,
  items,
}: {
  title: string;
  number?: string;
  items: EducationItem[];
}) {
  return (
    <ResumeSection title={title} number={number}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="education-card bg-card p-6 rounded-lg border border-muted-foreground/10">
            <h4 className="text-lg font-semibold mb-1">{item.course}</h4>
            <p className="text-primary/80 mb-2">{item.institution}</p>
            <p className="text-sm text-muted-foreground">{item.period}</p>
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}
