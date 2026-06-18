'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { products, type BrandFilter } from '@/lib/products';
import ProductCard from './ui/ProductCard';

const FILTERS: BrandFilter[] = ['ALL', 'NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON'];

export default function ProductSection() {
  const [activeFilter, setActiveFilter] = useState<BrandFilter>('ALL');

  const filtered = activeFilter === 'ALL'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <section
      id="product"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(60px, 10vh, 100px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark background text */}
      <div
        className="watermark"
        style={{ top: '10%', left: '-4%', opacity: 1 }}
      >
        KING★STAR
      </div>

      {/* Bottom-right UTAPESSC watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: 24, right: 24,
          fontFamily: 'var(--font-graffiti)',
          fontSize: 'clamp(20px, 4vw, 42px)',
          color: 'rgba(255,107,0,0.15)',
          letterSpacing: '0.04em',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        UTAPESSC
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-tag" style={{ marginBottom: 6 }}>PRODUCT</p>
            <h2
              className="graffiti-heading"
              style={{
                fontSize: 'clamp(36px, 7vw, 72px)',
                color: 'var(--white)',
                lineHeight: 1,
              }}
            >
              THE LATEST
              <br />
              <span style={{ color: 'var(--orange)' }}>DROP</span>
            </h2>
          </motion.div>

          {/* Skull mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 200, damping: 18 }}
            animate={{ rotate: [0, 5, -5, 0] }}
          >
            <motion.div
              animate={{ rotate: [0, 6, -6, 0], y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/assets/maskot/Tengkorak.png"
                alt="Skull mascot"
                width={90}
                height={90}
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 12px rgba(255,107,0,0.5))' }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* "NEW ARRIVAL!" title */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: 32 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-graffiti)',
              fontSize: 'clamp(28px, 5vw, 48px)',
              letterSpacing: '0.05em',
              color: 'var(--white)',
            }}
          >
            NEW{' '}
            <span style={{ color: 'var(--orange)' }}>ARRIVAL!</span>
          </h3>
        </motion.div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(16px, 2.5vw, 28px)',
              marginBottom: 40,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Filter pills */}
        <motion.div
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {FILTERS.map((filter) => (
            <motion.button
              key={filter}
              id={`filter-${filter.toLowerCase()}`}
              className={`filter-pill${activeFilter === filter ? ' active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
