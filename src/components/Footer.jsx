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
          <FontAwesomeIcon icon={faLinkedin} className="icon" size="2x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="icon" size="2x" />
        </li>

        <li>
          <FontAwesomeIcon icon={faGithub} className="icon" size="2x" />
        </li>
      </ol>
    </footer>
  );
}
