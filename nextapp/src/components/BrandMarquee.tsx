'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const BRANDS = ['NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON'];

const brandLogos: Record<string, string> = {
  NIKE:    '/assets/logos/nike.png',
  ADIDAS:  '/assets/logos/adidas.png',
  VANS:    '/assets/logos/vans.png',
  PUMA:    '/assets/logos/puma.png',
  SOLOMON: '/assets/logos/salomon.png',
};

// Duplicate for seamless loop
const ITEMS = [...BRANDS, ...BRANDS, ...BRANDS];

export default function BrandMarquee() {
  return (
    <section
      style={{
        background: '#0A0A0A',
        borderTop:    '2px solid var(--orange)',
        borderBottom: '2px solid var(--orange)',
        overflow: 'hidden',
        padding: '18px 0',
        position: 'relative',
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: 'absolute',
          left: 0, top: 0, bottom: 0,
          width: 120,
          background: 'linear-gradient(90deg, #0A0A0A, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0, top: 0, bottom: 0,
          width: 120,
          background: 'linear-gradient(270deg, #0A0A0A, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div className="marquee-track">
        {ITEMS.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              padding: '0 32px',
              flexShrink: 0,
            }}
          >
            {/* Dot separator */}
            <span
              style={{
                width: 8, height: 8,
                borderRadius: '50%',
                background: 'var(--orange)',
                flexShrink: 0,
                boxShadow: '0 0 8px var(--orange)',
              }}
            />

            {/* Brand Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                opacity: 0.75,
                transition: 'opacity 0.2s',
              }}
            >
              <Image
                src={brandLogos[brand]}
                alt={brand}
                width={36}
                height={28}
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </div>

            {/* Brand Text */}
            <span
              style={{
                fontFamily: 'var(--font-graffiti)',
                fontSize: 'clamp(20px, 3.5vw, 36px)',
                letterSpacing: '0.1em',
                color: 'var(--white)',
                whiteSpace: 'nowrap',
              }}
            >
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
