export default function Hero() {
    return (
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
            <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col items-center justify-center text-center space-y-6 relative z-10">
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
    );
}
