import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-tag">Computer Science Student • Full Stack Developer</p>

                <h1>
                    Shadan
                    <br />
                    Khan
                </h1>

                <p className="hero-description">
                    I build modern web applications and AI-powered tools that solve real problems with clean code and thoughtful design.
                </p>

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