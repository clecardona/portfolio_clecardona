import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faSafari,
} from "@fortawesome/free-brands-svg-icons";
import { slide as Menu } from "react-burger-menu";
import CC from '../assets/img/CC.jpeg'

export default function Sidebar() {
  return (
    <Menu>
      <h3>Menu</h3>
      <hr/>

      <div className="menu-item">
        <a  className="menu-item-text" href="#what">
          What I do
        </a>
      </div>

      <div className="menu-item">
        
       <a  className="menu-item-text" href="#who">
          Who I am
        </a>
      </div>

      <div className="menu-item">
        <a  className="menu-item-text" href="#selected">
          Selected Work
        </a>
      </div>

      <div className="menu-item">
        
        <a  className="menu-item-text" href="#techno">
          Technologies handled
        </a>
      </div>

      <div className="burger-footer">
        <img className="img-60 img-rd" src={CC}/>
          
      </div>
    </Menu>
  );
}
