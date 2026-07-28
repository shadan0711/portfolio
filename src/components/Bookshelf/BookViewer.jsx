import "./BookViewer.css";

function BookViewer({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="viewer">

            <button
                className="close-btn"
                onClick={onClose}
            >
                ✕
            </button>

            <div className="page left-page">

                <span className="viewer-year">
                    {project.year}
                </span>

                <h2>{project.title}</h2>

                <p className="subtitle">
                    {project.subtitle}
                </p>

                <h3>The Story</h3>

                <p>{project.story}</p>

                <h3>Challenges</h3>

                <ul>
                    {project.challenges.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

            </div>

            <div className="page right-page">

                <h3>Tech Stack</h3>

                <div className="stack">

                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="chip"
                        >
                            {tech}
                        </span>
                    ))}

                </div>

                <div className="links">

                    <div className="buttons">

                        <a
                            className="btn primary"
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            className="btn secondary"
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BookViewer;