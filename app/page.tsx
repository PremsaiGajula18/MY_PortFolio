import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { WebDevelopment } from "@/components/WebDevelopment";
import { Services } from "@/components/Services";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B1120] text-slate-100 overflow-x-hidden">
      {/* Dynamic Backgrounds */}
      <AuroraBackground />
      <ParticleCanvas />

      {/* Main Interface Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <WebDevelopment />
        <Services />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
