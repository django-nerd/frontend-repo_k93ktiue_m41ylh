import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/60 to-slate-950"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pb-20 pt-28 md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 backdrop-blur">
          Indie-first • Fair payouts • Creator-owned
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Stream indie. Support creators. Build community.
        </h1>
        <p className="max-w-2xl text-slate-300">
          A modern music platform designed for independent artists. Fans can listen, follow, build playlists, and directly support the artists they love.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a href="#screens" className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400">View Screens</a>
          <a href="#architecture" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">Architecture</a>
        </div>
      </div>
    </section>
  )
}
