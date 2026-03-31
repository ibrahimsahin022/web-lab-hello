import { useState, useEffect } from "react";
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import Card from "./components/Card";
import Alert from "./components/Alert";

export default function App() {
    // --- STATE ---
    const [projects, setProjects] = useState<Project[]>([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState<Category | "all">("all");
    const [sortField, setSortField] = useState<SortField>("year");
    const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
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

    // --- TÜRETİLMİŞ (DERIVED) VERİ ---
    const filtered = applyFilters(projects, search, category, sortField, sortOrder);

    const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

    // --- UI ---
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-500/30">
            {/* HERO SECTION */}
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
                <div className="max-w-6xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-6 relative z-10">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 p-1 shadow-2xl mb-4 hover:scale-105 transition-transform duration-300">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-extrabold text-white tracking-tighter">
                            İHŞ
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 tracking-tight drop-shadow-sm">
                        İbrahim Halil Şahin
                    </h1>
                    <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium tracking-wide">
                        Yazılım Mühendisi
                    </p>
                    <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mt-4">
                        Modern web teknolojileri ile kullanıcı odaklı, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.
                        Aşağıda üzerinde çalıştığım projeleri filtreleyebilir ve inceleyebilirsiniz.
                    </p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto p-4 md:p-8 mt-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
                        Projelerim
                    </h2>
                </div>

                {/* HATA DURUMU */}
                {error && (
                    <Alert variant="error" title="Hata" className="mb-4">
                        {error}
                    </Alert>
                )}

                {/* FİLTRELER TOOLBAR */}
                <div className="bg-white dark:bg-slate-900 p-2 sm:p-4 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800/60 mb-8 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
                    {/* Arama */}
                    <div className="relative flex-1 max-w-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            id="search"
                            type="text"
                            placeholder="Proje ara..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white transition-all shadow-inner"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 lg:items-center">
                        {/* Kategoriler */}
                        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-slate-800 sm:w-max">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${category === cat
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800"
                                        }`}
                                >
                                    {cat === "all" ? "Tümü" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Sıralama */}
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <select
                                    value={sortField}
                                    onChange={e => setSortField(e.target.value as SortField)}
                                    className="appearance-none bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                    <option value="year">Yıla Göre</option>
                                    <option value="title">Başlığa Göre</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            <button
                                onClick={() => setSortOrder(o => o === "asc" ? "desc" : "asc")}
                                className="p-2.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                title={sortOrder === "asc" ? "Artan Sıralama" : "Azalan Sıralama"}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 transition-transform duration-300 ${sortOrder === "desc" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* YÜKLENİYOR */}
                {loading && (
                    <p className="text-center text-gray-500">Yükleniyor...</p>
                )}

                {/* PROJE LİSTESİ */}
                {!loading && filtered.length === 0 && (
                    <p className="text-center text-gray-500">Eşleşen proje bulunamadı.</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(project => (
                        <Card
                            key={project.id}
                            variant="elevated"
                            title={project.title}
                            image={project.image}
                            imageAlt={`${project.title} ekran görüntüsü`}
                            className="flex flex-col"
                        >
                            <p className="text-sm mb-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-auto">
                                {project.tech.map(t => (
                                    <span
                                        key={t}
                                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <p className="text-xs text-gray-400 mt-3 pt-3 border-t dark:border-slate-800">
                                {project.year} &middot; {project.category}
                            </p>
                        </Card>
                    ))}
                </div>

                {/* SONUÇ SAYISI */}
                <p className="text-sm text-slate-500 mt-8 text-center">
                    {filtered.length} / {projects.length} proje gösteriliyor
                </p>
            </main>
        </div>
    );
}
