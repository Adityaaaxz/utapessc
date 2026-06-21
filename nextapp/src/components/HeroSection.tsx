'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const BRAND_LOGOS = [
  { name: 'Nike', src: '/assets/logos/nike.png' },
  { name: 'Adidas', src: '/assets/logos/adidas.png' },
  { name: 'Vans', src: '/assets/logos/vans.png' },
  { name: 'Puma', src: '/assets/logos/puma.png' },
  { name: 'Salomon', src: '/assets/logos/salomon.png' },
]

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '96px',
        paddingBottom: '48px',
        paddingLeft: 'clamp(20px, 4vw, 60px)',
        paddingRight: 'clamp(20px, 4vw, 60px)',
        backgroundColor: 'transparent',
        zIndex: 1,
      }}
    >
      {/* Background now provided by parent wrapper in page.tsx */}

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          position: 'relative',
          zIndex: 1,
        }}
      >

        {/* ── CENTER LOGO BLOCK (Crown + UTAPES + THRIFT BEST) ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: 'clamp(30px, 7vh, 80px)',
            marginBottom: 'clamp(24px, 5vh, 48px)',
          }}
        >
          {/* Crown + Logo stacked — crown on top, logo below */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

            {/* Crown — floats above logo */}
            <motion.div
              initial={{ y: -300, opacity: 0, rotate: -20 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              style={{ zIndex: 0, pointerEvents: 'none' }}
            >
              <motion.div
                animate={{ y: [-4, 10, -4] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
              >
                <Image
                  src="/assets/landing-asset/hero-asset/mahkota.png"
                  alt="Crown"
                  width={210}
                  height={150}
                  loading="eager"
                  style={{ objectFit: 'contain', width: 'clamp(220px, 22vw, 260px)', height: 'auto', display: 'block' }}
                />
              </motion.div>
            </motion.div>

            {/* UTAPES Logo — pulled up to be close to crown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'backOut', delay: 0.1 }}
              style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 'clamp(-80px, -8vw, -100px)', zIndex: 2 }}
            >
              <Image
                src="/assets/landing-asset/hero-asset/hero-logo.png"
                alt="UTAPES"
                width={900}
                height={280}
                loading="eager"
                priority
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  maxWidth: 'clamp(280px, 70vw, 700px)',
                  height: 'auto',
                  filter: 'drop-shadow(6px 6px 0px #FF6B00) drop-shadow(0px 8px 20px rgba(0,0,0,0.18))',
                }}
              />
            </motion.div>
          </div>

          {/* THRIFT BEST divider */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              marginTop: '10px',
            }}
          >
            <div style={{ width: '60px', height: '2px', background: '#000' }} />
            <span
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(14px, 2.5vw, 22px)',
                letterSpacing: '0.18em',
                color: '#000',
              }}
            >
              THRIFT BEST
            </span>
            <div style={{ width: '60px', height: '2px', background: '#000' }} />
          </motion.div>
        </div>

        {/* ── BOTTOM ROW: Left (badge + logos) | Right (buttons) ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="hero-bottom-row"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            flexWrap: 'wrap',
            gap: '28px',
          }}
        >
          {/* LEFT: Badge + Brand logos */}
          <div className="hero-left-col" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {/* THRIFT SHOES STORE badge */}
            <div
              style={{
                background: '#000',
                color: '#fff',
                padding: '10px 22px',
                borderBottom: '3px solid #FF6B00',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 800,
                letterSpacing: '0.18em',
                fontSize: 'clamp(0.7rem, 1.5vw, 0.88rem)',
                whiteSpace: 'nowrap',
              }}
            >
              THRIFT SHOES STORE
            </div>

            {/* Brand logos */}
            <div
              className="hero-brand-logos"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(12px, 2vw, 24px)',
                flexWrap: 'wrap',
              }}
            >
              {BRAND_LOGOS.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  width={90}
                  height={40}
                  loading="eager"
                  style={{
                    objectFit: 'contain',
                    width: 'auto',
                    height: 'clamp(28px, 3.5vw, 40px)',
                    filter: 'brightness(0)',
                    opacity: 0.85,
                    transition: 'opacity 0.2s',
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: CTA Buttons */}
          <div className="hero-right-col" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="#product"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                background: '#000',
                color: '#fff',
                padding: 'clamp(10px, 1.5vh, 14px) clamp(20px, 3vw, 32px)',
                borderRadius: '999px',
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(0.82rem, 1.4vw, 0.95rem)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 24px rgba(255, 107, 0, 0.35), 0 2px 0 #FF6B00',
                transition: 'transform 0.2s, box-shadow 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                  ; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 36px rgba(255, 107, 0, 0.5), 0 2px 0 #FF6B00'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  ; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(255, 107, 0, 0.35), 0 2px 0 #FF6B00'
              }}
            >
              Browse Catalog
            </a>

            <a
              href="#product"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                background: '#fff',
                color: '#000',
                border: '2px solid #000',
                padding: 'clamp(10px, 1.5vh, 14px) clamp(20px, 3vw, 32px)',
                borderRadius: '999px',
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(0.82rem, 1.4vw, 0.95rem)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                  ; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  ; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'
              }}
            >
              Shop Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
