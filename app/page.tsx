"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Experiences from "@/components/Experiences";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <Navbar />

      <main>
        <Hero />

        <TechStack />
        <AboutMe />
        <Experiences />
        <Projects />

        <div className="max-w-5xl mx-auto  space-y-24 pb-16">
          <Education />
          <Contact />
        </div>

        <Footer />
      </main>
    </div>
  );
}
