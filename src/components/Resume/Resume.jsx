import "./Resume.css";
import Layout from "../Layout/Layout";

function Resume() {
    return (
        <section className="resume" id="resume">
            <Layout>

                <div className="resume-content">

                    <div className="resume-left">

                        <p className="section-tag">
                            RESUME
                        </p>

                        <h2>
                            One Page.
                            <br />
                            Everything Important.
                        </h2>

                        <p className="resume-text">
                            A concise overview of my projects, technical skills
                            and experience. If you're short on time, this is the
                            quickest way to understand my work.
                        </p>

                        <div className="resume-buttons">

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="primary-btn"
                            >
                                View Resume
                            </a>

                            <a
                                href="/resume.pdf"
                                download
                                className="secondary-btn"
                            >
                                Download PDF
                            </a>

                        </div>

                    </div>

                    <div className="resume-right">

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="resume-preview"
                        >

                            <img
                                src="/resume-preview.webp"
                                alt="Resume Preview"
                            />

                        </a>

                    </div>

                </div>

            </Layout>
        </section>
    );
}

export default Resume;