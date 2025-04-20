'use client';

import React from "react";
import Navbar from "./Components/Navbar";
import Wcard from "./Components/Wcard";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import AboutMe from "./Components/About";
import WelcomeBar from "./Components/Welcome";
import Work from "./Components/Work";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="pt-16 scroll-smooth"> {/* Add top padding & smooth scroll */}
      <Navbar /> {/* Navbar inside the main section */}
      
      <div id="top" /> {/* Top of page for scroll-to-top */}

      {/* Sections with ids for scrolling */}
      <section id="welcome">
        <WelcomeBar />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="testing-projects">
        <Wcard />
      </section>

      <section id="work">
        <Work/>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  );
}
