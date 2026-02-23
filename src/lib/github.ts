export type GithubRepo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    fork: boolean;
    updated_at: string;
};

const USERNAME = "basurtmart";

export async function fetchRepos(): Promise<GithubRepo[]> {
    const res = await fetch(
        `https://api.github.com/users/${USERNAME}/repos?per_page=100`
    );

    if (!res.ok) {
        throw new Error("Error fetching GitHub repos");
    }

    const data: GithubRepo[] = await res.json();

    // 🧠 filtrado profesional
    return data
        .filter((repo) => !repo.fork)
        .filter((repo) => repo.description)
        .sort(
            (a, b) =>
                new Date(b.updated_at).getTime() -
                new Date(a.updated_at).getTime()
        )
        .slice(0, 6);
}