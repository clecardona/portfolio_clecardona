export default function MeSection() {
  return (

    <section className="me">
 <div className="section-header">
        <img
        id="who"
          className="img-200 center"
          src="https://clecardona.com/code/icons/gummy-me.svg"
          alt="who"
        />
        <h4><strong>Who</strong> I am</h4>
        </div>
    
    <div className="me-body">
      <div className="quote">"</div>
      <div className="bloc">
        <span className="wb">I grew up in Nice, France.</span>
        <span className="yb golden">
          Former Architect, I decided to move to Stockholm to follow the person
          I live with.
        </span>
        <span className="ysi">
          From there I choosed to follow another passion and change carrier to
          become a<span className="wb">developer</span>
          <br />
        </span>

        <span className="bwb">Curious and creative.</span>
        <span className="byb bold">Problem solving oriented.</span>

        <div className="yb">
          An easy going personality that enjoy teamwork and collaboration.
        </div>
        
        <span className="bwb">Aiming to stay positive in any situation.</span>
      </div>
      {/* <div className="quote quote-end">"</div> */}
    </div>
    </section>
  );
}
