import cakery from "../assets/img/cakery.png";
import parcel from "../assets/img/parcel.png";
import archi from "../assets/img/archi.png";
export default function ProjectSection() {
  return (
    <section className="project">
      <ul>
        <li className="item1">
          <div className="bg">
            <div className="item-title">
              <p>Parcel Tracking <br/><strong>App</strong></p>
            <div className="item-legend">
              <a
                href="https://github.com/clecardona/package-tracking-app"
                target="blank"
              >
                git
              </a>
              <a
                href="https://package-tracking-app-6e0dd.web.app/"
                target="blank"
              >
                site
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
                git
              </a>
              <a href="https://cupcake-c0ffc.web.app/" target="blank">
                site
              </a>
            </div>
            </div>
          </div>
        </li>

        <li className="item3">
          <div className="bg">
            <div className="item-title">
              <p>
                Architecture
                <br/> <strong>Portfolio</strong>
              </p>
            <div className="item-legend">
              <a href="http://clecardona.com/" target="blank">
                site
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
                git
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
                  git
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
