import { useState, useEffect } from "react";
import type { Project } from "./types/project";
import { fetchProjects } from "./services/projectService";
import Alert from "./components/Alert";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import ContactForm from "./components/ContactForm";

export default function App() {
    // --- STATE ---
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // --- VERİ ÇEKME ---
    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchProjects();
                setProjects(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Bilinmeyen hata");
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    // --- UI ---
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-500/30 flex flex-col">
            <Header />
            <Hero />

            <main className="flex-1 w-full flex flex-col">
                {/* HATA DURUMU */}
                {error && (
                    <div className="max-w-6xl mx-auto w-full px-4 mt-8">
                        <Alert variant="error" title="Hata">
                            {error}
                        </Alert>
                    </div>
                )}

                {/* YÜKLENİYOR VE PROJELER */}
                {loading ? (
                    <p className="text-center text-slate-500 py-24 flex items-center justify-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-slate-400 border-t-transparent animate-spin"></span>
                        Projeler yükleniyor...
                    </p>
                ) : (
                    <ProjectList projects={projects} />
                )}

                <ContactForm />
            </main>

            <footer className="py-8 text-center text-sm font-medium text-slate-500 border-t border-slate-200 dark:border-slate-800">
                &copy; {new Date().getFullYear()} İbrahim Halil Şahin. Tüm hakları saklıdır.
            </footer>
        </div>
    );
}
