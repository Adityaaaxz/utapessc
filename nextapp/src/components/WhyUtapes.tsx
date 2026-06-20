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
    delay: 0.15,
    variant: fadeUp,
  },
  {
    img: '/assets/maskot/3.png',
    title: 'Kualitas Terjamin',
    desc: 'kualitas terbaik dan harga terjangkau sudah terkurasi ketat',
    delay: 0.3,
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
      {/* Big faded watermark text */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: 'clamp(80px, 20vw, 220px)',
          color: 'rgba(0,0,0,0.04)',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '0.06em',
        }}
      >
        UTAPES
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: '8px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(40px, 8vw, 80px)',
              color: '#000',
              lineHeight: 1,
              margin: 0,
            }}
          >
            KENAPA <span style={{ color: '#FF6B00' }}>UTAPES?</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-inter)',
            color: '#888',
            fontSize: '1rem',
            marginBottom: '72px',
          }}
        >
          pilihan terbaik buat outfit lu!
        </motion.p>

        {/* 3 columns – clean, no dark box */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {REASONS.map((r) => (
            <motion.div
              key={r.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={r.variant}
              transition={{ delay: r.delay }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '20px',
              }}
            >
              {/* Illustration – hover bounce, no card behind it */}
              <motion.div
                whileHover={{ y: -12, scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                style={{ lineHeight: 0 }}
              >
                <Image
                  src={r.img}
                  alt={r.title}
                  width={220}
                  height={220}
                  style={{ objectFit: 'contain' }}
                />
              </motion.div>

              {/* Description only – matches reference image style */}
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.95rem',
                  color: '#555',
                  lineHeight: 1.75,
                  maxWidth: '220px',
                  margin: 0,
                }}
              >
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
