import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-glow"></div>
                <p className="hero-tag">Computer Science Student • Full Stack Developer</p>

                <h1>
                    Hi, I'm
                    <br />
                    <span className="initial">S</span>hadan
                    <br />
                    <span className="initial">K</span>han
                </h1>

                <p className="hero-description">
                    I build modern web applications and AI-powered tools that solve real problems with clean code and thoughtful design.
                </p>

                <div className="hero-line"></div>

                <div className="hero-buttons">

                    <a href="#work">

                        View Projects

                    </a>

                    <a href="#contact">

                        Let's Talk

                    </a>

                </div>
            </div>
        </section>
    );
}

export default Hero;