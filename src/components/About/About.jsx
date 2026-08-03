import "./About.css";
import Highlight from "../Highlight";

function About() {
    return (
        <>
        <section className="about" id="about">

            <div className="layout">

                <p className="section-tag">
                    MY STORY
                </p>

                <h2 className="about-title">

                    Building

                    <span>Products.</span>

                </h2>

                <p className="about-text">

                    I'm a Computer Science student who enjoys turning ideas
                    into <Highlight>products</Highlight> that people actually use.

                    <br /><br />

                    Most of my learning came from
                    <Highlight> building applications</Highlight>,
                    debugging problems, and improving them.

                    <br /><br />

                    I enjoy
                    <Highlight> AI-powered tools</Highlight>,
                    <Highlight> full-stack development</Highlight>,
                    and creating thoughtful user experiences.

                </p>

            </div>

        </section>

                </>
    );
}

export default About;