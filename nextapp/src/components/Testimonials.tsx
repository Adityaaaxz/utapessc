'use client'

import { motion } from 'framer-motion'
import { staggerContainer, slideRight } from '@/lib/animations'

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
    text: 'Udah beli 3 kali di sini, nggak pernah kecewa. Nike Dunk Low yang gue beli masih mulus banget. Pelayanannya juga cepet dan ramah!',
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

export default function Testimonials() {
  return (
    <section
      style={{
        background: '#0a0a0a',
        padding: 'clamp(60px, 10vw, 100px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Big quotation mark */}
      <div aria-hidden style={{
        position: 'absolute', top: '20px', left: '24px',
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(120px, 20vw, 240px)',
        color: 'rgba(255,107,0,0.07)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        "
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(36px, 7vw, 64px)', color: '#fff', lineHeight: 1, margin: 0 }}>
            APA KATA <span style={{ color: '#FF6B00' }}>PELANGGAN?</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={slideRight}
              style={{
                background: '#111',
                borderRadius: '16px',
                padding: '28px',
                border: '1px solid #222',
                transition: 'border-color 0.3s, transform 0.3s',
                cursor: 'default',
              }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: '#FF6B00', fontSize: '16px' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#ccc', lineHeight: 1.8, marginBottom: '20px' }}>
                "{t.text}"
              </p>

              {/* User */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF6B00, #cc5500)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-bebas)', fontSize: '1.2rem', color: '#fff',
                  flexShrink: 0,
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: '#fff', margin: 0 }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#555', margin: '2px 0 0' }}>
                    {t.handle} · {t.platform}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
