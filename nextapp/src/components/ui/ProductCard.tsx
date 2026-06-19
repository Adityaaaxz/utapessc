'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, RotateCcw, Tag, Star, Package } from 'lucide-react';
import { type Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      style={{
        perspective: '1000px',
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      {/* Flip container */}
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* ── FRONT FACE ── */}
        <div
          className="product-card"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            position: 'relative',
          }}
        >
          {/* NEW badge */}
          {product.isNew && (
            <div
              style={{
                position: 'absolute',
                top: 12, left: 12,
                background: 'var(--orange)',
                color: '#fff',
                fontFamily: 'var(--font-graffiti)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                padding: '3px 10px',
                borderRadius: 4,
                zIndex: 2,
              }}
            >
              NEW
            </div>
          )}

          {/* Flip hint */}
          <div
            style={{
              position: 'absolute',
              top: 12, right: 12,
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              opacity: 0.6,
            }}
          >
            <RotateCcw size={13} color="#fff" />
          </div>

          {/* Image container */}
          <div
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #222 100%)',
              padding: '32px 24px 20px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Watermark brand name */}
            <span
              style={{
                position: 'absolute',
                bottom: 4, right: 8,
                fontFamily: 'var(--font-graffiti)',
                fontSize: '3rem',
                color: 'rgba(255,255,255,0.04)',
                pointerEvents: 'none',
                lineHeight: 1,
              }}
            >
              {product.brand}
            </span>

            <div style={{ width: '100%', aspectRatio: '1/0.75', position: 'relative' }}>
              <Image
                src={product.image}
                alt={`${product.brand} ${product.name}`}
                fill
                sizes="(max-width: 768px) 90vw, 33vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Card body */}
          <div style={{ padding: '14px 16px 16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-graffiti)',
                    fontSize: '1.15rem',
                    letterSpacing: '0.05em',
                    color: 'var(--white)',
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {product.brand}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--gray)', marginTop: 3, margin: 0 }}>
                  {product.name}
                </p>
              </div>

              {/* Price */}
              <span
                style={{
                  fontFamily: 'var(--font-graffiti)',
                  fontSize: '1.15rem',
                  color: 'var(--white)',
                  letterSpacing: '0.04em',
                }}
              >
                {product.price}
              </span>
            </div>

            <div
              style={{
                marginTop: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '8px 0',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                opacity: 0.5,
                fontSize: '0.7rem',
                color: 'var(--gray)',
                fontFamily: 'var(--font-inter), sans-serif',
                letterSpacing: '0.1em',
              }}
            >
              <RotateCcw size={11} />
              KLIK UNTUK DETAIL
            </div>
          </div>
        </div>

        {/* ── BACK FACE ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(145deg, #111 0%, #1a1a1a 100%)',
            border: '2px solid #FF6B00',
            borderRadius: '14px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px 20px',
            gap: '16px',
            overflow: 'hidden',
          }}
        >
          {/* Back decorative glow */}
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255,107,0,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Brand image small */}
          <div style={{ position: 'relative', width: '100px', height: '70px' }}>
            <Image
              src={product.image}
              alt={`${product.brand} ${product.name}`}
              fill
              sizes="100px"
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(255,107,0,0.4))' }}
            />
          </div>

          {/* Brand & name */}
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: 'var(--font-graffiti)',
              fontSize: '1.6rem',
              color: '#FF6B00',
              letterSpacing: '0.06em',
              lineHeight: 1,
              margin: 0,
            }}>
              {product.brand}
            </p>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.7)',
              marginTop: '4px',
              margin: 0,
              letterSpacing: '0.04em',
            }}>
              {product.name}
            </p>
          </div>

          {/* Info rows */}
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '10px',
            padding: '14px 16px',
            border: '1px solid rgba(255,255,255,0.07)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontFamily: 'var(--font-inter), sans-serif' }}>
                <Tag size={12} /> Harga
              </span>
              <span style={{ fontFamily: 'var(--font-graffiti)', color: '#fff', fontSize: '1.1rem', letterSpacing: '0.04em' }}>
                {product.price}
              </span>
            </div>
            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontFamily: 'var(--font-inter), sans-serif' }}>
                <Star size={12} /> Kondisi
              </span>
              <span style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#FF6B00', fontSize: '0.82rem', fontWeight: 700 }}>
                Second / Thrift
              </span>
            </div>
            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontFamily: 'var(--font-inter), sans-serif' }}>
                <Package size={12} /> Brand
              </span>
              <span style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#fff', fontSize: '0.82rem', fontWeight: 600 }}>
                {product.brand}
              </span>
            </div>
          </div>

          {/* BUY NOW */}
          <button
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              background: '#FF6B00',
              color: '#000',
              fontFamily: 'var(--font-graffiti)',
              fontSize: '1rem',
              letterSpacing: '0.1em',
              padding: '11px 0',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#e55f00' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#FF6B00' }}
          >
            <ShoppingCart size={15} />
            BUY NOW
          </button>

          {/* Back hint */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            opacity: 0.35,
            fontSize: '0.68rem',
            color: '#fff',
            fontFamily: 'var(--font-inter), sans-serif',
            letterSpacing: '0.08em',
          }}>
            <RotateCcw size={10} />
            KLIK UNTUK KEMBALI
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
