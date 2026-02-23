import { profile } from "../data/profile";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-inner">
                <div className="navbar-brand">
                    {profile.name.split(" ")[0]}
                </div>

                <nav className="navbar-nav">
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
            </div>
        </header>
    );
}