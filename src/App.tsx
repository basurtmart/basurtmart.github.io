import { profile } from "./data/profile";
import GithubRepos from "./components/GithubRepos";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="container">
                {/* ===== HERO ===== */}
                <section className="hero fade-in">
                    <h1 className="title">{profile.name}</h1>
                    <h2 className="subtitle">{profile.title}</h2>
                    <p className="tagline">{profile.tagline}</p>
                </section>

                {/* ===== TECH STACK ===== */}
                <section className="section fade-in">
                    <h3 className="section-title">Tech Stack</h3>

                    {Object.entries(profile.tech).map(([category, items]) => (
                        <div key={category} style={{ marginBottom: 20 }}>
                            <strong
                                style={{
                                    display: "block",
                                    marginBottom: 8,
                                    textTransform: "capitalize",
                                    color: "var(--text-dim)",
                                }}
                            >
                                {category}
                            </strong>

                            <div className="chip-row">
                                {items.map((tech: string) => (
                                    <span key={tech} className="chip">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* ===== FEATURED PROJECTS ===== */}
                <section className="section fade-in">
                    <h3 className="section-title">Proyectos Destacados</h3>

                    <div className="grid">
                        {profile.featuredProjects.map((project) => (
                            <a
                                key={project.name}
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="card"
                            >
                                <h4 className="card-title">{project.name}</h4>

                                <p className="card-desc">{project.description}</p>

                                <div className="chip-row">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="chip">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* ===== GITHUB REPOS ===== */}
                <section className="section fade-in">
                    <h3 className="section-title">Repositorios Recientes</h3>
                    <GithubRepos />
                </section>

                {/* ===== FOOTER ===== */}
                <footer className="footer">
                    © {new Date().getFullYear()} {profile.name}
                </footer>
            </main>
        </>
    );
}