import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub ,faLinkedin ,faSafari} from "@fortawesome/free-brands-svg-icons";

export default function ProjectSection() {
  return (
    <section className="project">
      <ul>
        <li className="item1">
          <div className="bg">
            <div className="item-title">
              <p>Parcel <br/>Tracking <br/><strong>App</strong></p>
            <div className="item-legend">
              <a
                href="https://github.com/clecardona/package-tracking-app"
                target="blank"
              >
             <FontAwesomeIcon icon={faGithub} className="icon" size="2x" />
              </a>
              <a
                href="https://package-tracking-app-6e0dd.web.app/"
                target="blank"
              >
              <FontAwesomeIcon icon={faSafari} className="icon" size="2x" />
              </a>
            </div>
            </div>
          </div>
        </li>

        <li className="item2">
          <div className="bg">
            <div className="item-title">
              <p>Cakery<br/><strong>Website</strong></p>
            <div className="item-legend">
              <a href="https://github.com/clecardona/cupcake" target="blank">
              <FontAwesomeIcon icon={faGithub} className="icon" size="2x" />
              </a>
              <a href="https://cupcake-c0ffc.web.app/" target="blank">
              <FontAwesomeIcon icon={faSafari} className="icon" size="2x" />
              </a>
            </div>
            </div>
          </div>
        </li>

        <li className="item3">
          <div className="bg">
            <div className="item-title">
              <p>
                
                <strong>Portfolio</strong>
                <br/> Architecture
              </p>
            <div className="item-legend">
              <a href="http://clecardona.com/" target="blank">
              <FontAwesomeIcon icon={faSafari} className="icon" size="2x" />
              </a>
            </div>
            </div>
          </div>
        </li>

        <li className="item4">
          <div className="bg">
            <div className="item-title">
              <p>
                Fashion
                <br />
                <strong>
                Social
                <br />
                Network</strong>
              </p>
            <div className="item-legend">
              <a href="https://github.com/clecardona/inStyle" target="blank">
              <FontAwesomeIcon icon={faGithub} className="icon" size="2x" />
              </a>
              <a href="https://instyle-3f5f5.web.app/" target="blank">
              <FontAwesomeIcon icon={faSafari} className="icon" size="2x" />
              </a>
            </div>
            </div>
          </div>
        </li>
        <li className="item5">
          <div className="bg">
            <div className="item-title">
              <p>
                Java
                <br />
                <strong>TodoList</strong>
                
              </p>

              <div className="item-legend">
                <a href="https://github.com/clecardona/todolist" target="blank">
                <FontAwesomeIcon icon={faGithub} className="icon" size="2x" />
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
