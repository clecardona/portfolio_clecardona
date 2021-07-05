import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faUserAstronaut,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";

export default function SkillSection() {
  return (
    <section className="skills">
      <div className="section-header">
        <img
          id="what"
          className="img-200 center"
          src="https://clecardona.com/code/icons/gummy-app-development.svg"
          alt="who"
        />
        <h4>
          <strong>What</strong> I do
        </h4>
      </div>
      <div className="skills-body">
        <div className="skills-item frontend">
          <FontAwesomeIcon
            icon={faUserAstronaut}
            className="icon-skills"
            size="2x"
          />
          <h3>Frontend</h3>
          <hr className="frontend" />
          I use Javascript and React to create simple,clean and responsive web
          applications.
          <br />
          Every user should enjoy using the app or website. Therefore, my focus
          is on providing a clean and intuitive user interface.
          <div className="skills-link" href="https://github.com/clecardona">
            <a href="https://github.com/clecardona">See more →</a>
          </div>
        </div>
        <div className="skills-item backend ">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="icon-skills"
            size="2x"
          />
          <h3>Backend</h3>
          <hr className="backend" />
          Trained in Java, I use Springboot and Hibernate for the backend. A
          simple and well-constructed backend will allow the application to be
          efficient and functional.
          <div className="skills-link" href="https://github.com/clecardona">
            <a href="https://github.com/clecardona">See more →</a>
          </div>
        </div>
        <div className="skills-item philosophy">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="icon-skills"
            size="2x"
          />
          <h3>Philosophy</h3>
          <hr className="philosophy" />
          Coming from the world of architecture, I place a lot of importance on
          functionality and user interaction. I can also bring my experience in
          design, coloring and complexity simplification. Design must be there
          to enhance functionality, never the other way around
          <div className="skills-link" href="https://github.com/clecardona">
            <a href="https://github.com/clecardona">See more →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
