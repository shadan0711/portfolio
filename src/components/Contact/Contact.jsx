import "./Contact.css";
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

function copyEmail() {
    navigator.clipboard.writeText("shadan0768khan@gmail.com");
}

function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("shadan0768khan@gmail.com");
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
    return (
        <section className="contact" id="contact">

            <div className="layout">

                <span className="section-tag">
                    CONTACT
                </span>

                <h2>
                    Lets's Connect.
                </h2>
                <h3>Open to internships, collaborations and interesting ideas.</h3>

                <div className="contact-links">

                    <a
                        href="https://github.com/shadan0711"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="left">
                            <FaGithub />
                            <span>GitHub</span>
                        </div>

                        <span className="arrow">↗</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/shadan-khan-jh213/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="left">
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </div>

                        <span className="arrow">↗</span>
                    </a>

                    <a
                        href="https://leetcode.com/u/CodeSmith_shadan/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="left">
                            <SiLeetcode />
                            <span>LeetCode</span>
                        </div>

                        <span className="arrow">↗</span>
                    </a>

                    <div className="contact-item">

                        <a
                            href="mailto:shadan0768khan@gmail.com"
                            className="contact-link"
                        >
                            <div className="left">
                                <HiOutlineMail />
                                <span>Email</span>
                            </div>

                            {/* <span className="arrow">↗</span> */}
                        </a>

                        <button
                            className="copy-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                copyEmail();
                            }}
                        >
                            {copied ? "Copied ✓" : "Copy"}
                        </button>

                    </div>

                </div>

                <div className="footer-sign">

                    <p>DESIGNED & DEVELOPED BY</p>

                    <h2>
                        SK<span>.</span>
                    </h2>

                    <small>2026</small>

                </div>

            </div>

        </section>
    );
}

export default Contact;