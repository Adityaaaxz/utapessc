'use client'

import { motion } from 'framer-motion'
import { tiltIn, staggerContainer, fadeUp } from '@/lib/animations'

export default function SejarahSection() {
  return (
    <section
      id="about"
      className="graffiti-bg"
      style={{
        position: 'relative',
        background: '#f5f5f0',
        padding: 'clamp(60px, 10vw, 100px) 24px',
        overflow: 'hidden',
      }}
    >
      {/* Big "GANGSTAR" watermark */}
      <div aria-hidden style={{
        position: 'absolute',
        bottom: '0', left: '0',
        fontFamily: 'var(--font-bebas), sans-serif',
        fontSize: 'clamp(100px, 18vw, 220px)',
        color: 'rgba(0,0,0,0.055)',
        letterSpacing: '0.02em',
        pointerEvents: 'none',
        userSelect: 'none',
        lineHeight: 1,
        transform: 'rotate(-10deg) translateX(-10%)',
      }}>GANGSTAR</div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Angled dark card */}
        <motion.div
          initial={{ opacity: 0, rotateX: 12, y: 50 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{
            background: '#111',
            borderRadius: '16px',
            padding: 'clamp(32px, 6vw, 60px)',
            transform: 'rotate(-1.5deg)',
            boxShadow: '8px 8px 0 #FF6B00',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Inner watermark */}
          <div aria-hidden style={{
            position: 'absolute', bottom: '-20px', right: '-10px',
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '120px',
            color: 'rgba(255,107,0,0.06)',
            pointerEvents: 'none',
          }}>UTAPESSC</div>

          {/* Staples Effect */}
          <div style={{
            position: 'absolute', top: '24px', left: '24px',
            width: '32px', height: '5px',
            background: 'linear-gradient(90deg, #999, #ddd, #999)',
            boxShadow: '1px 2px 3px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.5)',
            transform: 'rotate(-25deg)', borderRadius: '1px', zIndex: 10
          }} />
          <div style={{
            position: 'absolute', bottom: '30px', right: '30px',
            width: '32px', height: '5px',
            background: 'linear-gradient(90deg, #999, #ddd, #999)',
            boxShadow: '1px 2px 3px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.5)',
            transform: 'rotate(15deg)', borderRadius: '1px', zIndex: 10
          }} />

          {/* Content — un-rotate so text is straight */}
          <div style={{ transform: 'rotate(1.5deg)' }}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', letterSpacing: '0.2em', color: '#FF6B00', textTransform: 'uppercase', marginBottom: '8px' }}>
                Tentang Kami
              </motion.p>

              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(40px, 8vw, 72px)', lineHeight: 1, margin: '0 0 24px', color: '#fff' }}>
                SEJARAH{' '}
                <span style={{ color: '#FF6B00' }}>UTAPES</span>
              </motion.h2>

              <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', color: '#aaa', lineHeight: 1.8, maxWidth: '700px', marginBottom: '16px' }}>
                UTAPES lahir dari kecintaan terhadap sneaker culture dan streetwear. Dimulai sebagai toko kecil di pinggiran kota, kami tumbuh menjadi destinasi utama bagi para pecinta sepatu thrift berkualitas. Setiap pasang sepatu yang kami jual melewati seleksi ketat — hanya yang terbaik yang sampai ke tangan kalian.
              </motion.p>

              <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', color: '#888', lineHeight: 1.8, maxWidth: '700px' }}>
                Dari Nike Dunk Low sampai Adidas Samba OG, koleksi kami selalu up-to-date dengan tren global. Karena kami percaya: <strong style={{ color: '#FF6B00' }}>sepatu bukan cuma alas kaki, tapi identitas lo.</strong>
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={staggerContainer}
                style={{ display: 'flex', gap: '40px', marginTop: '32px', flexWrap: 'wrap' }}
              >
                {[
                  { num: '500+', label: 'Koleksi Sepatu' },
                  { num: '2K+', label: 'Pelanggan Puas' },
                  { num: '5★',  label: 'Rating Rata-rata' },
                ].map((stat) => (
                  <motion.div key={stat.num} variants={fadeUp}>
                    <p style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(32px, 5vw, 48px)', color: '#FF6B00', margin: 0, lineHeight: 1 }}>
                      {stat.num}
                    </p>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#666', margin: '4px 0 0', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
