"use client";

export default function SectionTitle({
  title,
  number,
}: {
  title: string;
  number?: string;
}) {
  return (
    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
      {title} <span className="text-accent ml-3 text-lg">{number}</span>
    </h2>
  );
}
