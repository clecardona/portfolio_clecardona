import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faJava,
  faReact,
  faCss3Alt,
  faHtml5,
  faNodeJs,
  faPhp
} from "@fortawesome/free-brands-svg-icons";

export default function TechnoSection() {
  return (
    <section className="techno">
      <div className="icon-box">
      < div className="icon-box-zoom">
      <FontAwesomeIcon icon={faJava} className="icon icon-techno  icon-java" size="5x" />
      </div>
      <p className="icon-label">Java</p>
      </div>

      <div className="icon-box">
        <svg className="icon icon-techno icon-spring" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 767.8 768" width="60" height="60" >
        <path class="st0" d="M698.3 40c-10.8 25.8-24.5 50.3-41 72.8C585.1 40.6 487.1 0 385 0 173.8 0 0 174 0 385.5 0 491 43.2 592 119.6 664.8l14.2 12.6c69.4 58.5 157.3 90.7 248 90.7 200.8 0 369.6-157.4 383.9-358 10.5-98.2-18.3-222.4-67.4-370.1zm-524 627c-6.2 7.7-15.7 12.2-25.6 12.2-18.1 0-32.9-14.9-32.9-33s14.9-33 32.9-33c7.5 0 14.9 2.6 20.7 7.4 14.1 11.4 16.3 32.3 4.9 46.4zm522.4-115.4c-95 126.7-297.9 84-428 90.1 0 0-23.1 1.4-46.3 5.2 0 0 8.7-3.7 20-8 91.3-31.8 134.5-38 190-66.5 104.5-53.2 207.8-169.6 229.3-290.7C621.9 398.2 501.3 498.3 391.4 539c-75.3 27.8-211.3 54.8-211.3 54.8l-5.5-2.9C82 545.8 79.2 345.1 247.5 280.3c73.7-28.4 144.2-12.8 223.8-31.8 85-20.2 183.3-84 223.3-167.2 44.8 133.1 98.7 341.5 2.1 470.3z"/></svg>
        <p className="icon-label">Spring</p>
       </div>
      
       <div className="icon-box">
      <FontAwesomeIcon icon={faHtml5} className="icon icon-techno icon-html" size="5x" />
       <p className="icon-label">HTML</p>
       </div>

       <div className="icon-box">
      <FontAwesomeIcon icon={faCss3Alt} className="icon icon-techno icon-css" size="5x" />
       <p className="icon-label">CSS</p>
       </div>

       <div className="icon-box">
      <FontAwesomeIcon icon={faNodeJs} className="icon icon-techno icon-js" size="5x" />
       <p className="icon-label">JavaScript</p>
       </div>

       <div className="icon-box">
      <FontAwesomeIcon icon={faReact} className="icon icon-techno icon-react" size="5x" />
       <p className="icon-label">React</p>
       </div>

       <div className="icon-box">
  <FontAwesomeIcon icon={faPhp} className="icon icon-techno icon-java" size="5x" />
       <p className="icon-label">pHp</p>
       </div>

       <div className="icon-box">
      <svg className="icon icon-techno icon-fb" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 512 512" width="60" height="60" >
		<path d="M135,324.8l44.3-285.2c1.5-9.7,14.5-11.9,19-3.2l47.7,89.4L135,324.8z M449.9,394.1l-42.2-262.5
			c-1.4-8.1-11.3-11.3-17.2-5.5L124.3,394l147.3,83.1c9.2,5.2,20.5,5.2,29.7,0L449.9,394.1z M330.2,165l-34.1-65.3
			c-3.8-7.3-14.2-7.3-18,0L128.3,368.2L330.2,165z"/>

</svg>    
       <p className="icon-label">Firebase</p>
       </div>

      
  
</section>
  );
}
