'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

const brandLogos = [
  { name: 'nike',    src: '/assets/logos/nike.png' },
  { name: 'adidas',  src: '/assets/logos/adidas.png' },
  { name: 'vans',    src: '/assets/logos/vans.png' },
  { name: 'puma',    src: '/assets/logos/puma.png' },
  { name: 'salomon', src: '/assets/logos/salomon.png' },
];

const containerVar: any = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVar: any = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ onShopNow }: HeroProps) {
  return (
    <section
      id="home"
      className="hero-bg graffiti-texture"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(100px, 14vh, 140px) 24px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div className="hero-bg-img" />

      {/* Decorative graffiti spray circles */}
      {[
        { top: '10%', left: '5%', size: 300, opacity: 0.06 },
        { top: '60%', right: '3%', size: 250, opacity: 0.05 },
        { bottom: '10%', left: '40%', size: 200, opacity: 0.04 },
      ].map((circle, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: circle.size,
            height: circle.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,107,0,1) 0%, transparent 70%)',
            opacity: circle.opacity,
            ...{ top: circle.top, left: (circle as any).left, right: (circle as any).right, bottom: (circle as any).bottom },
            pointerEvents: 'none',
            filter: 'blur(40px)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [circle.opacity, circle.opacity * 1.5, circle.opacity] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 2 }}
        />
      ))}

      {/* Watermark */}
      <div
        className="watermark"
        style={{ bottom: '5%', right: '-2%', fontSize: 'clamp(60px, 12vw, 130px)' }}
      >
        UTAPESSC
      </div>

      <motion.div
        variants={containerVar}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(16px, 3vh, 28px)',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: 800,
          width: '100%',
        }}
      >
        {/* THRIFT SHOE STORE badge */}
        <motion.div variants={itemVar}>
          <span
            style={{
              fontFamily: 'var(--font-graffiti)',
              fontSize: 'clamp(11px, 1.5vw, 14px)',
              letterSpacing: '0.3em',
              color: 'var(--white)',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              padding: '6px 16px',
            }}
          >
            ★ THRIFT SHOES STORE ★
          </span>
        </motion.div>

        {/* Crown + Main logo */}
        <motion.div variants={itemVar} style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Crown / Mahkota */}
          <motion.div
            style={{ marginBottom: -10, zIndex: 2 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/assets/maskot/mahkota.png"
              alt="Crown"
              width={120}
              height={80}
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 16px rgba(255,107,0,0.6))' }}
              className="orange-glow"
            />
          </motion.div>

          {/* Big UTAPES heading */}
          <h1
            style={{
              fontFamily: 'var(--font-graffiti)',
              fontSize: 'clamp(72px, 18vw, 180px)',
              letterSpacing: '0.01em',
              lineHeight: 0.9,
              color: '#FFFFFF',
              textShadow: `
                3px 3px 0 #FF6B00,
                6px 6px 0 rgba(255,107,0,0.5),
                0 0 60px rgba(255,107,0,0.4)
              `,
              position: 'relative',
            }}
          >
            UTAPES
          </h1>
        </motion.div>

        {/* THRIFT BEST divider */}
        <motion.div
          variants={itemVar}
          style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%', justifyContent: 'center' }}
        >
          <div style={{ flex: 1, maxWidth: 120, height: 2, background: 'linear-gradient(90deg, transparent, var(--white))' }} />
          <span
            style={{
              fontFamily: 'var(--font-graffiti)',
              fontSize: 'clamp(16px, 2.5vw, 24px)',
              letterSpacing: '0.3em',
              color: 'var(--white)',
            }}
          >
            THRIFT BEST
          </span>
          <div style={{ flex: 1, maxWidth: 120, height: 2, background: 'linear-gradient(90deg, var(--white), transparent)' }} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVar}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <motion.button
            id="browse-catalog-btn"
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={onShopNow}
          >
            Browse Catalog
          </motion.button>
          <motion.button
            id="shop-now-btn"
            className="btn-orange"
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={onShopNow}
          >
            <ShoppingCart size={16} />
            Shop Now
          </motion.button>
        </motion.div>

        {/* Brand logos row */}
        <motion.div
          variants={itemVar}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(16px, 3vw, 32px)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '12px 24px',
            background: 'rgba(255,255,255,0.04)',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.08)',
            marginTop: 8,
          }}
        >
          {brandLogos.map((logo) => (
            <motion.div
              key={logo.name}
              whileHover={{ opacity: 1, filter: 'grayscale(0%) brightness(1)' }}
              style={{ transition: 'filter 0.25s', opacity: 0.6, filter: 'grayscale(60%) brightness(0.5)' }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={52}
                height={36}
                style={{
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(0.7)',
                  transition: 'filter 0.25s',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          opacity: 0.5,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--white)' }}>SCROLL</span>
        <div style={{ width: 1, height: 36, background: 'linear-gradient(180deg, var(--white), transparent)' }} />
      </motion.div>
    </section>
  );
}
