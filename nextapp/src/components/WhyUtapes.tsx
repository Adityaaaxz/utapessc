'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideLeft, fadeUp, slideRight } from '@/lib/animations'

const REASONS = [
  {
    img: '/assets/maskot/1.png',
    title: 'Promo Setiap Bulan',
    desc: 'sering ada promo setiap bulannya untuk pelanggan setia kami',
    delay: 0,
    variant: slideLeft,
  },
  {
    img: '/assets/maskot/2.png',
    title: 'Barang Lengkap',
    desc: 'barang lengkap dan ter update mengikuti trend sneaker global',
    delay: 0.1,
    variant: fadeUp,
  },
  {
    img: '/assets/maskot/3.png',
    title: 'Kualitas Terjamin',
    desc: 'kualitas terbaik dan harga terjangkau sudah terkurasi ketat',
    delay: 0,
    variant: slideRight,
  },
]

export default function WhyUtapes() {
  return (
    <section
      style={{
        background: '#fff',
        padding: 'clamp(60px, 10vw, 100px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: '16px' }}
        >
          <h2 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(40px, 8vw, 80px)', color: '#000', lineHeight: 1, margin: 0 }}>
            KENAPA <span style={{ color: '#FF6B00' }}>UTAPES?</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          style={{ textAlign: 'center', fontFamily: 'var(--font-inter)', color: '#666', fontSize: '1rem', marginBottom: '56px' }}
        >
          pilihan terbaik buat outfit lu!
        </motion.p>

        {/* 3 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={r.variant}
              transition={{ delay: r.delay }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}
            >
              {/* Illustration box */}
              <div style={{
                background: '#111',
                borderRadius: '16px',
                padding: '28px',
                width: '100%',
                maxWidth: '280px',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #222',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#FF6B00'
                    ; (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#222'
                    ; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                <Image
                  src={r.img}
                  alt={r.title}
                  width={140}
                  height={140}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </div>

              <h3 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '1.5rem', color: '#000', margin: 0, letterSpacing: '0.05em' }}>
                {r.title}
              </h3>

              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#666', lineHeight: 1.7, maxWidth: '240px', margin: 0 }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
