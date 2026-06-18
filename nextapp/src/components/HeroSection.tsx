'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

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
        minHeight: '105vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '240px',
        paddingBottom: '260px',
        paddingLeft: 'clamp(24px, 5vw, 60px)',
        paddingRight: 'clamp(24px, 5vw, 60px)',
        backgroundColor: '#ffffff',
      }}
    >
      {/* ── BACKGROUND IMAGE BLEEDING TO PRODUCT SECTION ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '250vh', // Extends down to cover Hero, Ticker, and Product sections
          backgroundColor: '#ffffff', // Ensures the bleeding part isn't black
          backgroundImage: 'url("/assets/landing-asset/hero-asset/hero-product-background.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1440px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>

        {/* ── IMAGE UTAPES LOGO WITH CROWN ── */}
        <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9, marginTop: '60px' }}>

          {/* Crown / Mahkota (Absolutely positioned so it doesn't push layout) */}
          <motion.div
            initial={{ opacity: 0, y: -30, rotate: -20 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.6, ease: 'backOut' }}
            style={{
              position: 'absolute',
              bottom: '10%', // Push it up above the logo
              zIndex: 1, // <--- BEHIND LOGO
              marginLeft: '-20px',
              width: 'clamp(200px, 30vw, 450px)', // Scaled down for 100% zoom
              pointerEvents: 'none'
            }}
          >
            <Image
              src="/assets/landing-asset/hero-asset/mahkota.png"
              alt="Crown"
              width={800}
              height={560}
              loading="eager"
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'backOut', delay: 0.2 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }} // <--- IN FRONT
          >
            <Image
              src="/assets/landing-asset/hero-asset/hero-logo.png"
              alt="Utapes Logo"
              width={800}
              height={260}
              loading="eager"
              style={{
                objectFit: 'contain',
                width: '100%',
                height: 'auto',
                maxWidth: '600px',
                filter: 'drop-shadow(8px 8px 0px #FF6B00) drop-shadow(0px 12px 24px rgba(0,0,0,0.15))'
              }}
            />
          </motion.div>
        </div>

        {/* ── THRIFT BEST ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center', marginTop: '20px' }}
        >
          <div style={{ width: '60px', height: '1px', background: '#000' }} />
          <span
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(18px, 3vw, 24px)',
              letterSpacing: '0.05em',
              color: '#000',
            }}
          >
            THRIFT BEST
          </span>
          <div style={{ width: '60px', height: '1px', background: '#000' }} />
        </motion.div>

        {/* ── Bottom Content Row (Left: Box & Logos, Right: Buttons) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            width: '100%',
            marginTop: '50px',
            gap: '40px'
          }}
        >

          {/* LEFT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Black Box */}
            <div style={{
              background: '#000',
              color: '#fff',
              padding: '12px 24px',
              borderBottom: '4px solid #FF6B00',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 800,
              letterSpacing: '0.15em',
              fontSize: '0.9rem',
            }}>
              THRIFT SHOES STORE
            </div>

            {/* Logos */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', paddingLeft: '4px' }}>
              {BRAND_LOGOS.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={44}
                  loading="eager"
                  style={{ objectFit: 'contain', width: 'auto', height: '44px', filter: 'brightness(0)' }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="#product"
              style={{
                background: '#000',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: '999px',
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(255, 107, 0, 0.4), 0 2px 0 #FF6B00',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(255, 107, 0, 0.5), 0 2px 0 #FF6B00';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(255, 107, 0, 0.4), 0 2px 0 #FF6B00';
              }}
            >
              Browse Catalog
            </a>

            <a
              href="#product"
              style={{
                background: '#fff',
                color: '#000',
                border: '2px solid #000',
                padding: '14px 32px',
                borderRadius: '999px',
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 16px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
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
