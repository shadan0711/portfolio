import "./Bookshelf.css";
import "../Layout/Layout.css";
import Book from "./ProjectCard";
import projects from "../../data/projects";
import useBookAnimation from "../../hooks/useBookAnimation";
import { useState } from "react";
import BookViewer from "./BookViewer";

function Bookshelf() {
    // const {
    //     booksRef,
    //     animateOpen,
    //     animateClose,
    // } = useBookAnimation();

    const booksRef = { current: [] };

    const animateOpen = () => { };

    const animateClose = () => { };

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

                    <div className="library">

                        {projects.map((project, index) => (
                            <Book
                                key={project.id}
                                ref={(el) => (booksRef.current[index] = el)}
                                project={project}
                                active={selectedProject?.id === project.id}
                                dim={
                                    selectedProject &&
                                    selectedProject.id !== project.id
                                }
                                onClick={() => {
                                    setSelectedProject(project);
                                }}
                            />
                        ))}

                    </div>

                    {selectedProject && (
                        <BookViewer
                            project={selectedProject}
                            onClose={() => {
                                setSelectedProject(null);

                                setTimeout(() => {
                                    animateClose();
                                }, 20);
                            }}
                        />
                    )}

                </div>


            </div>
        </section>
    );
}

export default Bookshelf;