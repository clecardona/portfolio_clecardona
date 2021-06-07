import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faSafari,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <ol>
        <li>
        <a href ="https://www.linkedin.com/in/cl%C3%A9ment-cardona-205098171/" target="blank">
          <FontAwesomeIcon icon={faLinkedin} linkclassName="icon" size="2x" className="icon icon-li"/>
          </a>
        </li>
        <li><a href="mailto: clecardona@gmail.com" target="blank" className="icon">

          <FontAwesomeIcon icon={faEnvelope} className="icon" size="2x" />
        </a>
        </li>

        <li>
          <FontAwesomeIcon icon={faGithub} className="icon" size="2x" />
        </li>
      </ol>
    </footer>
  );
}
