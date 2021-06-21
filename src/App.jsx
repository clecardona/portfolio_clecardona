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
        {/*  <div className="section-title">
          <p id="what">
            <strong>What</strong> I do ? 
          </p>
        </div> */}
        <img
        id="what"
          className="img-200 center"
          src="https://clecardona.com/code/icons/gummy-app-development.svg"
          alt="who"
        />
        <h4><strong>What</strong> I do?</h4>

        <SkillSection />
        {/* <div className="section-title">
          <p id="who">
            <strong>Who</strong> I am ?
          </p>
        </div> */}
        <div className="section-header">
        <img
        id="who"
          className="img-200 center"
          src="https://clecardona.com/code/icons/gummy-me.svg"
          alt="who"
        />
        <h4><strong>Who</strong> I am</h4>
        </div>

        <MeSection />

        {/* <div className="section-title">
          <p id="selected">
            <strong>Selected</strong> Work
          </p>
        </div> */}
    
<div className="section-header">
        <img
          id="selected"
          className="img-200 center"
          src="https://clecardona.com/code/icons/gummy-macbook.svg"
          alt="who"
        />
        <h4><strong>Selected</strong> Work</h4>
        </div>

        <ProjectSection />
       
      
        
<div className="section-header">
        <img
        id="techno"
          className="img-200 center"
          src="https://clecardona.com/code/icons/gummy-tools.svg"
          alt="who"
        />
        <h4><strong>Technologies</strong> I use</h4>
        </div>
        <TechnoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
