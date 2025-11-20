import React from 'react'

const tokens = {
  colors: {
    background: {
      default: '#0B1220',
      elevated: '#0F192A',
      muted: '#0D1726'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#C9D2E1',
      muted: '#7B8CA5'
    },
    brand: {
      primary: '#1DB954',
      secondary: '#14B8A6',
      accent: '#22D3EE'
    },
    surface: '#0B1220',
    border: 'rgba(255,255,255,0.08)'
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px'
  },
  shadows: {
    sm: '0 8px 24px rgba(0,0,0,0.25)',
    md: '0 16px 40px rgba(0,0,0,0.35)',
    glow: '0 0 40px rgba(29,185,84,0.25)'
  }
}

export function DesignTokens() {
  return (
    <section id="design-system" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold text-white">Design Tokens</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-4 font-medium text-white/90">Colors</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(tokens.colors.brand).map(([k, v]) => (
              <div key={k} className="flex items-center gap-2 rounded-xl border border-white/10 p-3">
                <span className="h-6 w-6 rounded-full" style={{ backgroundColor: v }} />
                <span className="text-sm text-white/80">{k}: {v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-4 font-medium text-white/90">Radii</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(tokens.radii).map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80" style={{ borderRadius: v }}>
                {k}: {v}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-4 font-medium text-white/90">Shadows</h3>
          <div className="flex flex-col gap-3">
            {Object.entries(tokens.shadows).map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80" style={{ boxShadow: v }}>
                {k}: {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default tokens
