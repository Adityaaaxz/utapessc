'use client'

const ITEMS = ['NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON', 'NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON', 'NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON']

export default function BrandTicker() {
  return (
    <section
      style={{
        background: '#000',
        borderTop: '6px solid #FF6B00',
        overflow: 'hidden',
        padding: '16px 0',
        position: 'relative',
        transform: 'rotate(-4deg) scale(1.05)',
        transformOrigin: 'center',
        marginTop: '60px', /* push down so left edge doesn't poke into hero 100vh */
        marginBottom: '60px',
        zIndex: 10,
        boxShadow: '0 -10px 40px rgba(0,0,0,0.2)',
      }}
    >
      <div className="marquee-track">
        {ITEMS.map((brand, i) => (
          <div
            key={i}
            style={{ display: 'flex', alignItems: 'center', gap: '40px', padding: '0 30px', flexShrink: 0 }}
          >
            <span style={{
              color: '#d1d5db', /* light gray */
              fontSize: '12px',
              filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))'
            }}>
              ●
            </span>
            <span
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(24px, 4vw, 36px)',
                letterSpacing: '0.1em',
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
