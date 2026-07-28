import "./Book.css";

function Book({ project, active, onClick }) {
    const Icon = project.icon;

    return (
        <div
            className={`book ${active ? "active" : ""}`}
            onClick={onClick}
            style={{
                "--book-width": `${project.width}px`,
                "--book-height": `${project.height}px`,
                "--book-color": project.color,
            }}
        >
            <div className="book-spine">
                <span className="book-year">{project.year}</span>

                <div className="book-icon">
                    <Icon />
                </div>

                <h3>{project.title}</h3>

                <div className="book-bottom-line"></div>
            </div>
        </div>
    );
}

export default Book;