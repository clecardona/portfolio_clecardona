import logo from "./logo.svg";
import "./styles/base.css";

function App() {
  return (
    <div className="App">
      <header>header</header>

      <main>
        <section className="profile">
          
            <div className="top-left">
              <p>Clément</p>
              <p>Cardona</p>
              <p>Junior full stack developer</p>
              <p>Portfolio</p>
              
              </div>
            <div className="top-right">
              <img className="img-main" src = "https://clecardona.com/img/portrait.jpg"/>
            </div>
          
        </section>
        <section>Skills</section>
        <section>Projects</section>
      </main>
    </div>
  );
}

export default App;
