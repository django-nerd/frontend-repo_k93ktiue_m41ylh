import React from 'react'
import { Home, Library, Search, User, Upload, BarChart3 } from 'lucide-react'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-white/10 bg-slate-900/60 p-4 md:block">
          <div className="mb-6 text-lg font-semibold">IndieStream</div>
          <nav className="space-y-1 text-sm">
            {[
              { icon: Home, label: 'Home' },
              { icon: Search, label: 'Search' },
              { icon: Library, label: 'Library' },
              { icon: Upload, label: 'Uploads' },
              { icon: BarChart3, label: 'Analytics' },
              { icon: User, label: 'Profile' }
            ].map(({ icon: Icon, label }) => (
              <button key={label} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5">
                <Icon size={18} /> {label}
              </button>
            ))}
          </nav>
        </aside>
        <main>
          <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-900/60 px-6 py-4 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
              <div className="text-base font-medium text-white/90">Indie-first music streaming</div>
              <div className="text-xs text-slate-300">Dark mode • Fair payouts</div>
            </div>
          </header>
          {children}
          <footer className="border-t border-white/10 bg-slate-900/60 px-6 py-4">
            <div className="mx-auto max-w-6xl text-xs text-slate-400">© IndieStream — Built for independent artists</div>
          </footer>
        </main>
      </div>
    </div>
  )
}
