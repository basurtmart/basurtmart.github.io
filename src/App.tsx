import { profile } from "./data/profile";

export default function App() {
    return (
        <main
            style={{
                minHeight: "100vh",
                background: "#0f172a",
                color: "#e5e7eb",
                fontFamily: "system-ui, -apple-system, sans-serif",
                padding: "40px 24px",
            }}
        >
            <div style={{ maxWidth: 960, margin: "0 auto" }}>
                {/* ================= HERO ================= */}
                <section style={{ marginBottom: 60 }}>
                    <h1 style={{ fontSize: 40, marginBottom: 8 }}>
                        {profile.name}
                    </h1>

                    <h2
                        style={{
                            fontSize: 22,
                            opacity: 0.8,
                            marginBottom: 16,
                            fontWeight: 500,
                        }}
                    >
                        {profile.title}
                    </h2>

                    <p style={{ maxWidth: 640, lineHeight: 1.6 }}>
                        {profile.tagline}
                    </p>
                </section>

                {/* ================= TECH STACK ================= */}
                <section style={{ marginBottom: 60 }}>
                    <h3 style={{ fontSize: 26, marginBottom: 20 }}>
                        Tech Stack
                    </h3>

                    {Object.entries(profile.tech).map(([category, items]) => (
                        <div key={category} style={{ marginBottom: 20 }}>
                            <strong
                                style={{
                                    textTransform: "capitalize",
                                    display: "block",
                                    marginBottom: 8,
                                    opacity: 0.9,
                                }}
                            >
                                {category}
                            </strong>

                            <div
                                style={{
                                    display: "flex",
                                    gap: 8,
                                    flexWrap: "wrap",
                                }}
                            >
                                {items.map((tech: string) => (
                                    <span
                                        key={tech}
                                        style={{
                                            padding: "6px 12px",
                                            background: "#1f2937",
                                            borderRadius: 999,
                                            fontSize: 12,
                                            border: "1px solid #374151",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* ================= FEATURED PROJECTS ================= */}
                <section style={{ marginBottom: 60 }}>
                    <h3 style={{ fontSize: 26, marginBottom: 20 }}>
                        Proyectos Destacados
                    </h3>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                            gap: 16,
                        }}
                    >
                        {profile.featuredProjects.map((project) => (
                            <a
                                key={project.name}
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    display: "block",
                                    padding: 20,
                                    background: "#111827",
                                    borderRadius: 12,
                                    border: "1px solid #374151",
                                    textDecoration: "none",
                                    color: "inherit",
                                    transition: "transform .15s ease, border-color .15s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.transform =
                                        "translateY(-2px)";
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                        "#6b7280";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.transform =
                                        "translateY(0)";
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                        "#374151";
                                }}
                            >
                                <h4 style={{ marginBottom: 8 }}>
                                    {project.name}
                                </h4>

                                <p
                                    style={{
                                        fontSize: 14,
                                        opacity: 0.8,
                                        marginBottom: 12,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {project.description}
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: 6,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            style={{
                                                fontSize: 11,
                                                padding: "3px 8px",
                                                background: "#1f2937",
                                                borderRadius: 999,
                                                border: "1px solid #374151",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* ================= FOOTER ================= */}
                <footer
                    style={{
                        paddingTop: 24,
                        borderTop: "1px solid #374151",
                        opacity: 0.7,
                        fontSize: 14,
                    }}
                >
                    © {new Date().getFullYear()} {profile.name}
                </footer>
            </div>
        </main>
    );
}