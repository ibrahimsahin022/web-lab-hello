export default function Header() {
    return (
        <nav className="flex items-center justify-between px-4 sm:px-8 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
            <span className="font-extrabold text-xl tracking-tighter text-blue-600 dark:text-blue-400">
                İHŞ.
            </span>
            <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden sm:block">Projeler</a>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">İletişim</a>
            </div>
        </nav>
    );
}
