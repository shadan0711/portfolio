import {
    FaSpotify,
    FaLock,
    FaGlobe,
} from "react-icons/fa";

import { SiNetflix } from "react-icons/si";
import { TbCpu } from "react-icons/tb";

const projects = [
    {
        id: 1,

        title: "Resume Skill Analyzer",
        spineTitle: "RESUME ANALYZER",
        category: "AI",
        edition: "PROJECT I",
        spineColor: "#4A2A66",
        why: "I wanted to build something that genuinely helps students understand how their resumes match different roles while exploring AI integration in a practical product.",

        subtitle: "AI Powered Resume Analysis",

        year: "2026",

        color: "#5A3478",

        width: 92,

        height: 420,

        summary:
            "Analyze resumes against different job roles using AI and receive personalized skill recommendations.",

        story:
            "I wanted to build something beyond a CRUD application. This project extracts skills from resumes, compares them with different job roles, calculates a match percentage, identifies missing skills, and generates a personalized learning roadmap using AI.",

        challenges: [
            "Extracting text accurately from PDF resumes",
            "Designing a skill-matching algorithm",
            "Generating meaningful AI recommendations",
            "Deploying the Flask backend on Render"
        ],

        stack: [
            "React",
            "Flask",
            "Python",
            "OpenAI API",
            "PDFPlumber",
            "Render",
            "JavaScript",
            "CSS"
        ],

        github: "https://github.com/yourusername/resume-skill-analyzer",

        live: "https://resume-skill-analyzer.onrender.com",

        screenshots: [
            "/projects/resume-1.webp",
            "/projects/resume-2.webp"
        ]
    },

    {
        id: 2,

        title: "Spotify Clone",
        spineTitle: "SPOTIFY",
        category: "WEB",
        edition: "PROJECT II",
        spineColor: "#1B472C",

        subtitle: "Music Streaming Platform",
        why: "I built this project to strengthen my JavaScript fundamentals by creating something interactive instead of solving isolated coding exercises.",

        year: "2025",

        color: "#214F34",

        width: 85,

        height: 360,

        summary:
            "A responsive Spotify-inspired music player built using vanilla JavaScript.",

        story:
            "I built this project to improve my JavaScript fundamentals. It includes playlist management, play and pause controls, progress tracking, dynamic song loading, and a responsive interface inspired by Spotify.",

        challenges: [
            "Managing audio playback",
            "Synchronizing UI with music state",
            "Creating dynamic playlists",
            "Building responsive layouts"
        ],

        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
            "Audio API",
            "DOM Manipulation",
            "Local Storage"
        ],

        github: "https://github.com/yourusername/spotify-clone",

        live: "https://your-spotify-clone.vercel.app",

        screenshots: [
            "/projects/spotify-1.webp",
            "/projects/spotify-2.webp"
        ]
    },

    {
        id: 3,

        title: "Password Validator",
        spineTitle: "PASSWORD",
        category: "TOOLS",
        edition: "PROJECT III",
        spineColor: "#1C1C1C",

        subtitle: "Password Strength Checker",

        year: "2025",

        color: "#202020",
        why: "I built this project to understand JavaScript validation and create a tool that provides immediate feedback to users.",

        width: 92,

        height: 375,

        summary:
            "A password validation tool that evaluates password strength in real time.",

        story:
            "This project helped me understand JavaScript validation, regular expressions, and user experience. Users receive instant feedback while typing their passwords.",

        challenges: [
            "Building a scoring algorithm",
            "Handling multiple validation rules",
            "Providing instant visual feedback"
        ],

        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Regex",
            "DOM",
            "Form Validation",
            "Responsive Design"
        ],

        github: "https://github.com/yourusername/password-validator",

        live: "https://your-password-validator.vercel.app",

        screenshots: [
            "/projects/password-1.webp",
            "/projects/password-2.webp",
            "/projects/password-3.webp"
        ]
    },

    {
        id: 4,

        title: "Netflix Clone",
        spineTitle: "NETFLIX",
        category: "WEB",
        edition: "PROJECT IV",
        spineColor: "#4B1F26",

        subtitle: "UI Clone",
        year: "2025",

        color: "#1A1A1A",
        why: "I wanted to create a visually appealing and responsive clone that demonstrates my ability to recreate complex UIs.",

        width: 92,

        height: 365,

        summary:
            "A responsive Netflix landing page recreated with modern front-end techniques.",

        story:
            "This project focused on recreating Netflix's interface with attention to layout, responsiveness, spacing, typography, and visual hierarchy.",

        challenges: [
            "Responsive hero section",
            "Complex grid layouts",
            "Pixel-perfect UI recreation"
        ],

        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Flexbox",
            "CSS Grid",
            "Responsive Design",
            "Animations"
        ],

        github: "https://github.com/yourusername/netflix-clone",

        live: "https://your-netflix-clone.vercel.app",

        screenshots: [
            "/projects/netflix-1.webp",
            "/projects/netflix-2.webp",
            "/projects/netflix-3.webp"
        ]
    },

    {
        id: 5,

        title: "Portfolio",
        spineTitle: "PORTFOLIO",
        category: "PERSONAL",
        edition: "PROJECT V",
        spineColor: "#1C355D",

        subtitle: "Personal Developer Portfolio",
        why: "Rather than displaying projects as cards, I wanted to create an experience that reflects my personality and makes exploring my work enjoyable.",

        year: "2026",


        color: "#173560",

        width: 85,

        height: 400,

        summary:
            "My personal portfolio showcasing projects, skills, and my journey as a developer.",

        story:
            "Instead of building another card-based portfolio, I wanted to create something memorable. This bookshelf experience reflects how I see my projects—as books representing different stages of my learning journey.",

        challenges: [
            "Designing a unique UI",
            "Creating reusable React components",
            "Responsive layouts",
            "Planning complex animations"
        ],

        stack: [
            "React",
            "Vite",
            "CSS",
            "GSAP",
            "Responsive Design",
            "Component Architecture",
            "JavaScript"
        ],

        github: "https://github.com/yourusername/portfolio",

        live: "https://yourportfolio.com",

        screenshots: [
            "/projects/portfolio-1.webp",
            "/projects/portfolio-2.webp"
        ]
    },
    {
    id: 6,

    title: "CareTrack",

    spineTitle: "CARETRACK",

    category: "HEALTHTECH",

    subtitle: "Health Tracking for Senior Citizens",
    edition: "PROJECT VI",

    why:
    "The idea came from a simple thought: when we move away for studies or work, there's always a quiet worry about our parents. I wanted to build something that could provide peace of mind through simple daily check-ins instead of constant phone calls.",

    year: "2026",

    color: "#2F7D5B",

    width: 92,

    height: 420,

    summary:
        "A frontend prototype that helps senior citizens log daily activities while allowing family members to quickly check on their wellbeing.",

    story:
        "The idea came from a personal concern shared by many students and professionals living away from home: wondering whether their parents are doing okay. Instead of constant calls or messages, I wanted to explore a simple solution that gives families peace of mind. CareTrack lets seniors record everyday activities like meals, walks and medicines, while a separate family dashboard provides an easy way to check their status. The goal was to design something simple enough for elderly users rather than building a feature-heavy healthcare application.",

    challenges: [
        "Designing an interface suitable for senior citizens",
        "Keeping the experience simple without unnecessary features",
        "Creating separate views for seniors and family members",
        "Building a responsive frontend prototype"
    ],

    stack: [
        "React",
        "JavaScript",
        "CSS",
        "Responsive Design",
        "UI/UX"
    ],

    github: "YOUR_GITHUB_LINK",

    live: "YOUR_LIVE_LINK",

    screenshots: [
        "/projects/caretrack-1.webp",
        "/projects/caretrack-2.webp",
        "/projects/caretrack-3.webp"
    ]
}
];

export default projects;