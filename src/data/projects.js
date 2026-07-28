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

    subtitle: "AI Powered Resume Analysis",

    year: "2026",

    icon: TbCpu,

    color: "#5A3478",

    width: 78,

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
      "Render"
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

    subtitle: "Music Streaming UI",

    year: "2025",

    icon: FaSpotify,

    color: "#214F34",

    width: 70,

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
      "JavaScript"
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

    subtitle: "Password Strength Checker",

    year: "2025",

    icon: FaLock,

    color: "#202020",

    width: 74,

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
      "JavaScript"
    ],

    github: "https://github.com/yourusername/password-validator",

    live: "https://your-password-validator.vercel.app",

    screenshots: [
      "/projects/password-1.webp",
      "/projects/password-2.webp"
    ]
  },

  {
    id: 4,

    title: "Netflix Clone",

    subtitle: "Streaming Platform UI",

    year: "2025",

    icon: SiNetflix,

    color: "#1A1A1A",

    width: 80,

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
      "JavaScript"
    ],

    github: "https://github.com/yourusername/netflix-clone",

    live: "https://your-netflix-clone.vercel.app",

    screenshots: [
      "/projects/netflix-1.webp",
      "/projects/netflix-2.webp"
    ]
  },

  {
    id: 5,

    title: "Portfolio",

    subtitle: "Personal Developer Portfolio",

    year: "2026",

    icon: FaGlobe,

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
      "GSAP"
    ],

    github: "https://github.com/yourusername/portfolio",

    live: "https://yourportfolio.com",

    screenshots: [
      "/projects/portfolio-1.webp",
      "/projects/portfolio-2.webp"
    ]
  }
];

export default projects;