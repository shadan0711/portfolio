import { forwardRef } from "react";
import "./Book.css";

const Book = forwardRef(function Book(
    {
        project,
        active,
        dim,
        onClick,
    },
    ref
) {
    return (
        <div
            ref={ref}
            className={`
        book
        ${active ? "selected" : ""}
        ${dim ? "dim" : ""}
    `}
            style={{
                "--book-color": project.color,
                "--spine-color": project.spineColor || project.color,
            }}
            onClick={onClick}
        >
            <div className="book-shell">

                <div className="book-spine">

                    {/* <span className="spine-project">
                        PROJECT {project.edition}
                    </span> */}

                    <span className="spine-title">
                        {project.spineTitle}
                    </span>

                    <span className="spine-year">
                        {project.year}
                    </span>

                </div>

                <div className="book-cover">

                    <p className="cover-project">
                         {project.edition}
                    </p>

                    <div className={`cover-art art-${project.id}`}></div>

                    <header className="cover-content">

                        <h2 className="cover-title">
                            {project.spineTitle}
                        </h2>

                        <p className="cover-subtitle">
                            {project.subtitle}
                        </p>

                    </header>

                    <footer className="cover-footer">

                        <span></span>

                        <p>{project.year}</p>

                    </footer>

                </div>

                <div className="book-pages"></div>

            </div>
        </div>
    );
});

export default Book;