import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
    { name: "About", id: "about" },
    { name: "Journey", id: "journey" },
    { name: "Projects", id: "work" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" }
];

function Navbar() {
    const [active, setActive] = useState("about");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">
                SK<span>.</span>
            </div>

            <nav>
                {links.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={active === link.id ? "active" : ""}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Navbar;