"use client";
import { Satellite } from "lucide-react";

interface Title {
  title: string;
}

export default function SectionTitle({ title }: Title) {
  return (
    <div className="flex gap-2.5 space-y-9">
      <Satellite className="mt-1 text-pink-500" />
      <h2 className="text-2xl uppercase font-medium text-zinc-900 dark:text-zinc-200">
        {title}
      </h2>
    </div>
  );
}
