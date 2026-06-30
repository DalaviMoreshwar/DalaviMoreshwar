"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { useRef } from "react";
import ParticleGrid from "./ParticleGrid";

const experiences = [
  {
    role: "Senior Consultant & Application Developer",
    company: "Capgemini, India",
    start: "23/11/2022",
    end: "Present",
    projects: [
      {
        name: "BMW Group | Integrate SCP Apps",
        desc: "Integrate is an BMW internal open-source platform that empowers business departments to digitalise and automate their processes. It provides a robust ecosystem for creating, deploying, and managing custom web apps, interconnected with each other and with other BMW data source systems.",
        dates: "02/12/2025",
      },
      {
        name: "Mercedes-Benz R&D India | Integrated Product Planning",
        desc: "React Query + Material UI based application for Integrated Product Planning (IPP). Developed modular reusable components; implemented React Testing Library for unit tests.",
      },
      {
        name: "Mercedes-Benz R&D India | HoT Inside",
        desc: "Created dashboard for Software Engineering metrics using DORA KPIs. Utilized Ant Design, Axios, and React Testing Library to build dynamic and testable UIs. Enhanced user experience through effective use of modern React tools and libraries.",
      },
      {
        name: "Mercedes-Benz R&D India | Ansify Q&A Platform",
        desc: "Developed full UI for an internal knowledge-sharing platform that received client appreciation. Managed local storage for state persistence ensuring seamless user experience. Delivered maintainable and extensible frontend code.",
      },
    ],
  },
  {
    role: "Frontend Developer",
    company: "Acclivis Technologies Pvt Ltd.",
    start: "02/09/2020",
    end: "16/11/2022",
    projects: [
      {
        name: "Smart System Designer",
        desc: " Developed Smart System Designer tool for electronic component search. Implemented Redux Thunk for advanced state management. Contributed to desktop support and ETL testing to ensure software quality.",
      },
    ],
  },
  {
    role: "Senior Consultant",
    company: "Capgemini",
    start: "01/03/2021",
    end: "Present",
    projects: [
      {
        name: "BMW Group Platform",
        desc: "Worked on large-scale data-driven applications for enterprise systems.",
      },
      {
        name: "Mercedes-Benz Solutions",
        desc: "Developed scalable frontend solutions for critical business platforms.",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Tech Company",
    start: "01/06/2018",
    end: "28/02/2021",
    projects: [
      {
        name: "Internal Tools",
        desc: "Built reusable UI components and improved system efficiency.",
      },
    ],
  },
];

export default function ExperienceTimeline() {
  const ref = useRef(null);

  return (
    <section
      id="experience"
      ref={ref}
      className="sticky py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Particals Grid */}
      <ParticleGrid />

      {/* 🌌 BACKDROP */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-[600] h-[600] bg-indigo-500/20 blur-3xl rounded-full top-[-250] left-[350]" />
        <div className="absolute w-[600] h-[600] bg-purple-500/20 blur-3xl rounded-full bottom-[-250] right-[370]" />

        {/* stars */}
        <div className="absolute inset-0 opacity-3 bg-[radial-gradient(white_1px,transparent_1px)] bg-size-[10px_10px]" />
      </div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Experience Journey
        </h2>
        <p className="mt-3 text-muted-foreground">
          My professional path building scalable systems and impactful products.
        </p>
      </div>

      {/* Timeline wrapper */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-[2] bg-white/20 h-full" />

        <div className="space-y-16">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col sm:flex-row ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div className="w-full sm:w-[45%]">
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-lg">
                    <CardContent className="p-5 space-y-4">
                      {/* Role + Company */}
                      <div className="flex items-center gap-5">
                        {/* Icon container */}
                        <div
                          className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-purple-500 shadow-lg`}
                        >
                          <Briefcase className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold flex items-center gap-2">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Dates */}
                      <div className="flex items-center gap-2 text-sm uppercase text-muted-foreground">
                        <Calendar size={14} />
                        {exp.start} — {exp.end}
                      </div>

                      {/* Nested Projects */}
                      <div className="space-y-3 pt-2">
                        {exp.projects.map((proj, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-white/5 border border-white/10"
                          >
                            <p className="text-sm font-medium">{proj.name}</p>
                            {proj.dates ? (
                              <div className="flex items-center gap-2 mt-2 text-sm uppercase text-muted-foreground">
                                <Calendar size={14} />
                                {exp.start} — {exp.end}
                              </div>
                            ) : (
                              false
                            )}

                            <p className="text-xs text-muted-foreground mt-2">
                              {proj.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
