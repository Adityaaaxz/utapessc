'use client'

import { motion } from 'framer-motion'
import { slideLeft, slideRight } from '@/lib/animations'

const STORE_INFO = [
  { label: 'Alamat',    value: '45P4+VCM, Ciharashas, Kec. Cilaku, Kabupaten Cianjur, Jawa Barat 43285' },
  { label: 'Jam Buka', value: 'Senin – Sabtu: 10.00 – 21.00 WIB' },
  { label: 'Telepon',  value: '+62 812-3456-7890' },
  { label: 'Email',    value: 'hello@utapes.sc' },
  { label: 'IG',       value: '@utapessc' },
]

export default function LokasiToko() {
  return (
    <section
      id="contact"
      style={{
        background: '#fff',
        padding: 'clamp(60px, 10vw, 100px) 24px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginBottom: '48px' }}
        >
          <h2 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(40px, 8vw, 80px)', color: '#000', lineHeight: 1, margin: 0 }}>
            LOKASI <span style={{ color: '#FF6B00' }}>TOKO</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', color: '#888', marginTop: '8px' }}>
            Kunjungi kami langsung atau hubungi via sosmed!
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'stretch' }}>

          {/* LEFT: Map embed */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideLeft}
            style={{ borderRadius: '16px', overflow: 'hidden', border: '3px solid #000', boxShadow: '6px 6px 0 #FF6B00', display: 'flex', flexDirection: 'column' }}
          >
            <iframe
              src="https://maps.google.com/maps?q=45P4%2BVCM%2C%20Ciharashas%2C%20Kec.%20Cilaku%2C%20Kabupaten%20Cianjur%2C%20Jawa%20Barat%2043285&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              style={{ border: 0, display: 'block', flexGrow: 1, minHeight: '360px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi UTAPES"
            />
          </motion.div>

          {/* RIGHT: Info cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideRight}
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            {STORE_INFO.map((info) => (
              <div
                key={info.label}
                style={{
                  background: '#111',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  border: '1px solid #222',
                  borderLeft: '4px solid #FF6B00',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateX(6px)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateX(0)' }}
              >
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', letterSpacing: '0.15em', color: '#FF6B00', textTransform: 'uppercase', margin: '0 0 4px' }}>
                  {info.label}
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#fff', margin: 0, lineHeight: 1.5 }}>
                  {info.value}
                </p>
              </div>
            ))}

            {/* CTA */}
            <a
              href="https://instagram.com/utapessc"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'block',
                background: '#FF6B00',
                color: '#000',
                fontFamily: 'var(--font-bebas)',
                fontSize: '1.2rem',
                letterSpacing: '0.1em',
                textAlign: 'center',
                padding: '14px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 900,
                marginTop: '6px',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(255,107,0,0.4)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              FOLLOW @UTAPESSC ↗
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
