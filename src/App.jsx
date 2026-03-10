import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Portfolio from './pages/Portfolio';
import UIKit from './pages/UIKit';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-200 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <a href="#main-content" className="skip-link">
          Ana icerige atla
        </a>

        <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary-600 dark:text-primary-500">
              Lab 4
            </h1>

            <nav aria-label="Ana navigasyon" className="flex items-center gap-6">
              <ul className="flex items-center gap-4 text-sm font-medium">
                <li>
                  <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500 rounded px-2 py-1 transition-colors">Portföy</Link>
                </li>
                <li>
                  <Link to="/ui-kit" className="hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500 rounded px-2 py-1 transition-colors">UI Kit</Link>
                </li>
              </ul>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main id="main-content" className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/ui-kit" element={<UIKit />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-200 dark:border-slate-800 py-6 mt-12 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
            <p>&copy; 2026 İbrahim Halil Şahin. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;