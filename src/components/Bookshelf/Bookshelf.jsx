import "./Bookshelf.css";
import "../Layout/Layout.css";
import Book from "./Book";
import projects from "../../data/projects";
// import useBookshelfAnimation from "../../hooks/useBookshelfAnimation";
import { useState } from "react";
import BookViewer from "./BookViewer";

function Bookshelf() {
    // const {
    //     booksRef,
    //     handleEnter,
    //     handleLeave,
    // } = useBookshelfAnimation();

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="bookshelf" id="work">
            <div className="layout">

                <p className="section-tag">MY SPACE</p>

                <h2 className="bookshelf-title">
                    Projects.
                </h2>

                <p className="bookshelf-description">
                    Every project on this shelf represents something I wanted to
                    understand, build, or solve.
                </p>

                <div className="bookshelf-stage">

                    {!selectedProject && (
                        <div className="shelf">

                            {projects.map((project) => (
                                <Book
                                    key={project.id}
                                    project={project}
                                    active={selectedProject?.id === project.id}
                                    onClick={() => setSelectedProject(project)}
                                />
                            ))}

                        </div>
                    )}

                    {selectedProject && (

                        <BookViewer
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />

                    )}

                </div>

            </div>
        </section>
    );
}

export default Bookshelf;