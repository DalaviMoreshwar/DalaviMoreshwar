"use client";

interface Title {
  title: string;
}

export default function SectionTitle({ title }: Title) {
  return (
    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-200">
      {title}
    </h2>
  );
}
