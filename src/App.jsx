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
      <Sidebar />
      <header>
        <HeaderBackground />
      </header>

      <main>
        <ProfileSection />
        <SkillSection />
        <MeSection />
        <ProjectSection />  
        <TechnoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
