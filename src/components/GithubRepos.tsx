import { useEffect, useState } from "react";
import { fetchRepos, GithubRepo } from "../lib/github";

export default function GithubRepos() {
    const [repos, setRepos] = useState<GithubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchRepos()
            .then(setRepos)
            .catch(() => setError("No se pudieron cargar los repos"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p style={{ opacity: 0.7 }}>Cargando repos…</p>;
    }

    if (error) {
        return <p style={{ opacity: 0.7 }}>{error}</p>;
    }

    return (
        <div className="grid">
            {repos.map((repo) => (
                <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="card"
                >
                    <h4 className="card-title">{repo.name}</h4>

                    <p className="card-desc">{repo.description}</p>

                    <div className="chip-row">
                        <span className="chip">GitHub</span>
                        <span className="chip">
                            Updated {new Date(repo.updated_at).getFullYear()}
                        </span>
                    </div>
                </a>
            ))}
        </div>
    );
}