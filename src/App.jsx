import React, { useState, useEffect } from "react";

import HeaderBackground from "./components/HeaderBackground";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import MeSection from "./components/MeSection";
import logo from "./logo.svg";
import "./styles/base.css";
import Footer from "./components/Footer";
import TechnoSection from "./components/TechnoSection";
import Sidebar from "./components/Sidebar";



function App() {
  return (
    <div className="App">

      <Sidebar/>
      <header>
        <HeaderBackground />
        
      </header>

      <main>
      
        <ProfileSection />
        <div className="section-title">
          <p id="what">
            <strong>What</strong> I do
          </p>
        </div>

        <SkillSection />
        <div className="section-title">
          <p id="who">
            <strong>Who</strong> I am
          </p>
        </div>
        <MeSection />

        <div className="section-title">
          <p id="selected">
            <strong>Selected</strong> Work
          </p>
        </div>
        <ProjectSection />
        <div className="section-title">
          <p id="techno">
            <strong>Technologies</strong> I use
          </p>
        </div>
        <TechnoSection/>




      </main>
      <Footer />
    </div>
  );
}

export default App;
