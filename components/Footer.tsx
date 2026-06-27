"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t max-w-5xl mx-auto border-zinc-200 dark:border-zinc-800 py-8 mt-20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Moreshwar Dalavi. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/DalaviMoreshwar"
            target="_blank"
            className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/moreshwar-dalavi"
            target="_blank"
            className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="mailto:moreshwar.dalavi@example.com"
            className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
