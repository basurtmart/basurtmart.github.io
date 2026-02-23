import { useState } from "react";
import { profile } from "../data/profile";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar-inner">
                <div className="navbar-brand">
                    {profile.name.split(" ")[0]}
                </div>

                {/* ===== Desktop nav ===== */}
                <nav className="navbar-nav desktop">
                    <a href="#tech">Stack</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#repos">Repos</a>
                    <a
                        href={profile.social.github}
                        target="_blank"
                        rel="noreferrer"
                        className="navbar-cta"
                    >
                        GitHub
                    </a>
                </nav>

                {/* ===== Mobile button ===== */}
                <button
                    className={`menu-btn ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* ===== Mobile panel ===== */}
            <div className={`mobile-menu ${open ? "show" : ""}`}>
                <a href="#tech" onClick={() => setOpen(false)}>
                    Stack
                </a>
                <a href="#projects" onClick={() => setOpen(false)}>
                    Proyectos
                </a>
                <a href="#repos" onClick={() => setOpen(false)}>
                    Repos
                </a>
                <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                >
                    GitHub
                </a>
            </div>
        </header>
    );
}