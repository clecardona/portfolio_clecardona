import { faGlassMartiniAlt } from "@fortawesome/free-solid-svg-icons";
import portrait from "../assets/img/portrait.jpeg";

export default function ProfileSection() {
  return (
    <section className="profile">
      <div className="profile-left">
        <p className="firstname">Clément</p>
        <p className="lastname">Cardona</p>
        <p className="position">Junior Full-stack developer</p>
        <p className="title">Portfolio</p>
      </div>
      <div className="profile-right">
        <div className="container">
          <img className="img-main" src={portrait} />
          <div className="drawer">
            <svg viewBox="0 0 500 500">
              <path
                id="curve"
                d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              />
              <text width="300">
                <textPath
                  startOffset="100%"
                   textAnchor="end"
                   href="#curve"
                >
                  <a href="mailto: clecardona@gmail.com" target="blank">clecardona@gmail.com</a> . 076-590-16-39
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
