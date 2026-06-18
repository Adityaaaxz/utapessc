'use client'

const ITEMS = ['NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON', 'NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON', 'NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON']

export default function BrandTicker() {
  return (
    <section
      style={{
        background: '#000',
        borderTop: '3px solid #FF6B00',
        borderBottom: '3px solid #FF6B00',
        overflow: 'hidden',
        padding: '16px 0',
        position: 'relative',
      }}
    >
      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(90deg, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(270deg, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div className="marquee-track">
        {ITEMS.map((brand, i) => (
          <div
            key={i}
            style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '0 24px', flexShrink: 0 }}
          >
            <span style={{ color: '#FF6B00', fontSize: '10px', lineHeight: 1 }}>●</span>
            <span
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: 'clamp(22px, 4vw, 38px)',
                letterSpacing: '0.12em',
                color: '#fff',
                whiteSpace: 'nowrap',
              }}
            >
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
