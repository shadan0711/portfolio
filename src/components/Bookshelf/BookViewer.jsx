import "./BookViewer.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function BookViewer({ project, onClose }) {
    if (!project) return null;

    const viewerRef = useRef(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [lightboxImage, setLightboxImage] = useState(null);

    useEffect(() => {
        gsap.fromTo(
            viewerRef.current,
            {
                opacity: 0,
                y: 25,
                scale: 0.96,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.45,
                ease: "power3.out",
            }
        );

        const handleEsc = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    const handleClose = () => {
        gsap.to(viewerRef.current, {
            opacity: 0,
            y: 20,
            scale: 0.96,
            duration: 0.3,
            ease: "power2.in",
            onComplete: onClose,
        });
    };

    return (
        <div
            className="viewer"
            // ref={viewerRef}
            onClick={handleClose}
        >
            <div className="viewer-book" ref={viewerRef} onClick={(e) => e.stopPropagation()}>

                <button
                    className="close-btn"
                    onClick={handleClose}
                >
                    ✕
                </button>

                <div className="page left-page">

                    <span className="viewer-year">
                        {project.year}
                    </span>

                    <h1>{project.title}</h1>

                    <p className="subtitle">
                        {project.subtitle}
                    </p>

                    <div className="divider"></div>

                    <h3>Overview</h3>

                    <p>{project.story}</p>

                    <h3>Challenges</h3>

                    <ul>
                        {project.challenges.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <div className="divider"></div>

                    <h3>Why I Built This</h3>

                    <p className="why-text">
                        {project.why}
                    </p>

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

                    <div className="divider"></div>

                    <h3>Gallery</h3>

                    <div className="gallery-slider">

                        <div className="gallery-shot">

                            <div className="browser-bar">

                                <span></span>
                                <span></span>
                                <span></span>

                            </div>

                            <img
                                key={currentImage}
                                src={project.screenshots[currentImage]}
                                alt={project.title}
                                className="gallery-image"
                                onClick={() =>
                                    setLightboxImage(project.screenshots[currentImage])
                                }
                            />

                        </div>

                        <div className="gallery-controls">

                            <button
                                onClick={() =>
                                    setCurrentImage((prev) =>
                                        prev === 0
                                            ? project.screenshots.length - 1
                                            : prev - 1
                                    )
                                }
                            >
                                ← Prev
                            </button>

                            <div className="gallery-dots">

                                {project.screenshots.map((_, index) => (

                                    <span
                                        key={index}
                                        className={
                                            currentImage === index
                                                ? "dot active"
                                                : "dot"
                                        }
                                        onClick={() =>
                                            setCurrentImage(index)
                                        }
                                    />

                                ))}

                            </div>

                            <button
                                onClick={() =>
                                    setCurrentImage((prev) =>
                                        prev === project.screenshots.length - 1
                                            ? 0
                                            : prev + 1
                                    )
                                }
                            >
                                Next →
                            </button>

                        </div>

                    </div>

                    <div className="viewer-buttons">

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn primary"
                        >
                            GitHub
                        </a>

                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="btn secondary"
                        >
                            Live Demo
                        </a>

                    </div>
                </div>

            </div>

            {lightboxImage && (

                <div
                    className="lightbox"
                    onClick={() => setLightboxImage(null)}
                >

                    <img
                        src={lightboxImage}
                        alt="Project Screenshot"
                    />

                </div>

            )}

        </div>
    );
}

export default BookViewer;