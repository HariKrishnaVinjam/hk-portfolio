import "./styling/Summary.css";

function Summary() {
  return (
    <>
      <div className="summary-container">
        <div className="left-section">
          <p class="summary-content">
            <h1 className="summary-title">Summary:</h1>I am a passionate
            developer with expertise in creating robust and efficient web
            applications. My technical skills include proficiency in{" "}
            <span className="skills">JavaScript (ES6+)</span>,{" "}
            <span className="skills">React.js</span>,{" "}
            <span className="skills">Node.js</span>, and various frontend and
            backend technologies. I have experience in developing dynamic user
            interfaces, implementing{" "}
            <span className="skills">RESTful APIs</span>, and managing state
            using <span className="skills">Redux</span> and{" "}
            <span className="skills">Context API</span>. Additionally, I am
            skilled in database management with{" "}
            <span className="skills">PostgreSQL</span> and{" "}
            <span className="skills">MongoDB</span>, and I have knowledge of
            testing frameworks like <span className="skills">Mocha</span>,{" "}
            <span className="skills">Chai</span>, and{" "}
            <span className="skills">Jest</span>. My projects have focused on
            improving system efficiency, implementing{" "}
            <span className="skills">CI/CD</span> pipelines for efficient
            deployment, and ensuring streamlined workflows through effective
            project management tools. With a commitment to continuous learning
            and innovation, I am dedicated to delivering high-quality solutions
            that meet and exceed client expectations.
          </p>
        </div>

        <div className="right-section">
          <img src="/images/trip_photo.jpg" className="image-container" />
        </div>
      </div>
    </>
  );
}

export default Summary;
