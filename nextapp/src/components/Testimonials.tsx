'use client'

import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Riya Nursidi',
    handle: '@riya.ns',
    rating: 5,
    text: 'Sepatu yang gue dapet dari UTAPES kondisinya PERFECT banget! Hampir ga keliatan bekas pake. Worth banget harganya, bakal balik lagi deh!',
    platform: 'Google',
  },
  {
    id: 2,
    name: 'Farhan Malik',
    handle: '@farhan.mlk',
    rating: 5,
    text: 'Udah beli 3 kali di sini, nggak pernah kecewa. Nike Dunk Low yang gue beli masih mulus banget. Pelayanannya cepet dan ramah!',
    platform: 'Google',
  },
  {
    id: 3,
    name: 'Siti Rahma',
    handle: '@sitii.rhm',
    rating: 5,
    text: 'Tempatnya bersih, koleksinya lengkap. UTAPES emang beda dari toko thrift lainnya. Recommended 100%!',
    platform: 'Google',
  },
]

// Duplicate for seamless loop
const LOOP_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS]

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < rating ? '#FF6B00' : '#2a2a2a', fontSize: '14px' }}>
          ★
        </span>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div
      style={{
        background: 'linear-gradient(145deg, #141414 0%, #111 100%)',
        borderRadius: '18px',
        padding: '26px 28px',
        border: '1px solid #1e1e1e',
        width: 'clamp(280px, 38vw, 360px)',
        flexShrink: 0,
        marginRight: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Orange accent top line */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '55%', height: '2px',
          background: 'linear-gradient(90deg, #FF6B00 0%, transparent 100%)',
        }}
      />

      <StarRating rating={t.rating} />

      <p
        style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '0.875rem',
          color: '#aaa',
          lineHeight: 1.8,
          margin: '16px 0 20px',
        }}
      >
        &ldquo;{t.text}&rdquo;
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '38px', height: '38px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B00, #cc5500)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-bebas)', fontSize: '1.1rem', color: '#fff',
            flexShrink: 0,
          }}
        >
          {t.name[0]}
        </div>
        <div>
          <p
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.06em',
              fontSize: '0.95rem',
              color: '#fff',
              margin: 0,
            }}
          >
            {t.name}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.7rem',
              color: '#444',
              margin: '2px 0 0',
            }}
          >
            {t.handle} · {t.platform}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      style={{
        background: '#0a0a0a',
        padding: 'clamp(60px, 10vw, 100px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Big faded quote */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '10px', left: '20px',
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(120px, 20vw, 260px)',
          color: 'rgba(255,107,0,0.05)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        &ldquo;
      </div>

      {/* Heading */}
      <div style={{ padding: '0 clamp(16px, 4vw, 24px)', position: 'relative', zIndex: 1, marginBottom: '48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ textAlign: 'center' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(36px, 7vw, 64px)',
                color: '#fff',
                lineHeight: 0.92,
                margin: 0,
                letterSpacing: '-0.03em',
              }}
            >
              APA KATA <span style={{ color: '#FF6B00' }}>PELANGGAN?</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                color: '#555',
                fontSize: '0.9rem',
                marginTop: '10px',
              }}
            >
              ribuan pelanggan puas belanja di UTAPES
            </p>
          </motion.div>
        </div>
      </div>

      {/* Single scrolling row */}
      <div style={{ overflow: 'hidden' }}>
        <div className="testimonials-track">
          {LOOP_ITEMS.map((t, i) => (
            <TestimonialCard key={`t-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Left edge fade */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: '0 auto 0 0',
          width: '120px',
          background: 'linear-gradient(90deg, #0a0a0a 30%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
      {/* Right edge fade */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: '0 0 0 auto',
          width: '120px',
          background: 'linear-gradient(-90deg, #0a0a0a 30%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </section>
  )
}
