'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { type Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      whileHover="hover"
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

      {/* Image container */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1E1E1E 0%, #252525 100%)',
          padding: '24px 16px 12px',
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

        <motion.div
          variants={{
            hover: { scale: 1.08, rotate: -3, y: -6 },
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ width: '100%', aspectRatio: '1/0.75', position: 'relative' }}
        >
          <Image
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            fill
            sizes="(max-width: 768px) 90vw, 33vw"
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
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
              }}
            >
              {product.brand}
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                color: 'var(--gray)',
                marginTop: 3,
              }}
            >
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

        <motion.button
          id={`buy-btn-${product.id}`}
          className="btn-orange"
          style={{
            width: '100%',
            marginTop: 12,
            fontSize: '0.9rem',
            padding: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <ShoppingCart size={14} />
          BUY NOW
        </motion.button>
      </div>
    </motion.div>
  );
}
