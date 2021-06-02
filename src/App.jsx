import HeaderBackground from "./components/HeaderBackground";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import MeSection from "./components/MeSection";
import logo from "./logo.svg";
import "./styles/base.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header><HeaderBackground/></header>
      

      <main>
      
        <ProfileSection/>

        <SkillSection/>
        <h2>Who I am</h2>
       <MeSection/>

        <h2>Selected Work</h2>
        <ProjectSection/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
