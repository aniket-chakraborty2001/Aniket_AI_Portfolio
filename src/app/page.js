"use client";

import Home from "@/src/components/Home";
import Navbar from "@/src/components/Navbar";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";


export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </>
  );
}