"use client";

import SectionTitle from "./section-title";

export default function ResumeSection({
  title,
  number,
  children,
}: {
  title: string;
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="resume-section">
      <SectionTitle title={title} number={number} />
      <hr className="border-t border-muted my-4" />
      <div>{children}</div>
    </section>
  );
}
