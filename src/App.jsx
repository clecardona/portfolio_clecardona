import HeaderBackground from "./components/HeaderBackground";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import logo from "./logo.svg";
import "./styles/base.css";

function App() {
  return (
    <div className="App">
      <header><HeaderBackground/></header>
      

      <main>
        <ProfileSection/>
        <SkillSection/>
        <ProjectSection/>
        <div id="diamond"></div>
      </main>
    </div>
  );
}

export default App;
