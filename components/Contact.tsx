"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Calendar } from "lucide-react";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:moreshwar.dalavi@example.com",
    icon: Mail,
    description: "moreshwar.dalavi@example.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/DalaviMoreshwar",
    icon: Github,
    description: "github.com/DalaviMoreshwar",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/moreshwar-dalavi",
    icon: Linkedin,
    description: "linkedin.com/in/moreshwar-dalavi",
  },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <SectionTitle title="Get in Touch" />

      <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
        I&apos;m always open to discussing new projects, creative ideas, or
        opportunities to be part of something great. Feel free to reach out
        through any of the channels below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {contactLinks.map((link) => (
          <Link key={link.label} href={link.href} target="_blank">
            <div className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-violet-500 dark:hover:border-violet-500 transition-all duration-300">
              <link.icon
                size={28}
                className="text-zinc-500 group-hover:text-violet-500 transition-colors"
              />
              <span className="font-medium text-zinc-800 dark:text-zinc-200">
                {link.label}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
                {link.description}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="pt-4">
        <Link
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="rounded-full px-6 gap-2">
            <Calendar size={16} />
            Schedule a Meeting
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}
