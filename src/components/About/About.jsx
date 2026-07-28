import "./About.css";
import "../Layout/Layout.css";

function About() {
  return (
    <section className="about" id="about">
    <div className="layout">
        <p className="section-tag">ABOUT</p>

        <h2>
          I build software that solves
          <br />
          real problems.
        </h2>

        <p className="about-text">
          I'm a Computer Science student passionate about Full Stack
          Development, AI-powered applications, and building products that are
          useful, fast and beautifully designed.
        </p>

        <p className="about-text">
          Currently, I'm sharpening my DSA skills, building production-ready
          React projects, and looking for internship opportunities where I can
          contribute and grow.
        </p>
      </div>
    </section>
  );
}

export default About;