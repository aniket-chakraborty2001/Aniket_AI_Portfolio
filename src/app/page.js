"use client";

import Home from "@/src/components/Home";
import Navbar from "@/src/components/Navbar";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import Education from "@/src/components/Education";


export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
    </>
  );
}