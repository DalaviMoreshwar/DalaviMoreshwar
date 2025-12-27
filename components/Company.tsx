"use client";

import Image from "next/image";
import companyLogo from "@/public/capgemini-logo.png";

export default function Company() {
  return (
    <div className="inline-flex gap-2">
      <div className="w-5 h-5">
        <Image
          src={companyLogo}
          alt="company logo"
          width={140}
          height={140}
          className="mt-0.5"
        />
      </div>
      <p className="text-zinc-600 dark:text-zinc-400">Capgemini, India</p>
    </div>
  );
}
