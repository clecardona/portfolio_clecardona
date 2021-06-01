import ProfileSection from "./components/ProfileSection";
import SkillSection from "./components/SkillSection";
import logo from "./logo.svg";
import "./styles/base.css";

function App() {
  return (
    <div className="App">
      <header>header</header>

      <main>
        <ProfileSection/>
        <SkillSection/>
       
        <section>Projects</section>
      </main>
    </div>
  );
}

export default App;
