'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Trash2, Plus, Minus, ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart'

function formatPrice(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace('.0', '')}JT`
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`
  return `${n}`
}

export default function CartDrawer() {
  const { items, totalCount, totalPrice, removeItem, addItem, decreaseQuantity, closeCart, isOpen, clearCart } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            style={{
              position: 'fixed', inset: 0, zIndex: 1100,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: 'clamp(300px, 90vw, 420px)',
              zIndex: 1101,
              background: '#0d0d0d',
              borderLeft: '1px solid rgba(255,107,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 24px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              background: '#111',
              position: 'sticky', top: 0, zIndex: 1,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShoppingBag size={20} color="#FF6B00" />
                <span style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 900,
                  fontSize: '1.2rem', letterSpacing: '0.04em', color: '#fff',
                }}>
                  CART ({totalCount})
                </span>
              </div>
              <motion.button
                onClick={closeCart}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer',
                  borderRadius: '50%', padding: '8px', display: 'flex', color: '#fff',
                }}
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Items */}
            <div style={{ flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <AnimatePresence>
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      justifyContent: 'center', height: '260px', gap: '14px',
                      color: 'rgba(255,255,255,0.25)',
                    }}
                  >
                    <ShoppingCart size={52} strokeWidth={1.2} />
                    <p style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontWeight: 500,
                      fontSize: '0.9rem', letterSpacing: '0.05em', textAlign: 'center',
                    }}>
                      Cart kamu kosong bro!<br />
                      <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '0.8rem' }}>Tambahkan sepatu dulu yuk.</span>
                    </p>
                  </motion.div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        display: 'flex', gap: '14px', alignItems: 'center',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '12px',
                        padding: '12px 14px',
                      }}
                    >
                      {/* Image */}
                      <div style={{
                        position: 'relative', width: '72px', height: '56px', flexShrink: 0,
                        background: 'rgba(255,255,255,0.06)', borderRadius: '8px', overflow: 'hidden',
                      }}>
                        <Image src={item.image} alt={item.name} fill style={{ objectFit: 'contain', padding: '4px' }} sizes="72px" />
                      </div>

                      {/* Info */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{
                          fontFamily: 'var(--font-inter), sans-serif',
                          fontWeight: 800,
                          fontSize: '0.95rem', letterSpacing: '0.02em', color: '#fff', margin: 0,
                        }}>{item.brand}</p>
                        <p style={{
                          fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)',
                          margin: '2px 0 0', fontFamily: 'var(--font-inter), sans-serif',
                        }}>{item.name}</p>
                        <p style={{
                          fontFamily: 'var(--font-inter), sans-serif',
                          fontWeight: 900,
                          fontSize: '0.9rem', color: '#FF6B00', margin: '4px 0 0',
                        }}>{item.price}</p>
                      </div>

                      {/* Qty + Remove */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={() => item.quantity > 1 ? decreaseQuantity(item.id) : removeItem(item.id)}
                            style={{
                              background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer',
                              width: '24px', height: '24px', borderRadius: '50%',
                              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                            }}
                          >
                            <Minus size={11} />
                          </motion.button>
                          <span style={{
                            fontFamily: 'var(--font-inter), sans-serif',
                            fontWeight: 700,
                            color: '#fff', fontSize: '0.9rem', minWidth: '16px', textAlign: 'center',
                          }}>{item.quantity}</span>
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={() => addItem(item)}
                            style={{
                              background: 'rgba(255,107,0,0.2)', border: 'none', cursor: 'pointer',
                              width: '24px', height: '24px', borderRadius: '50%',
                              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00',
                            }}
                          >
                            <Plus size={11} />
                          </motion.button>
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          onClick={() => removeItem(item.id)}
                          style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            color: 'rgba(255,80,80,0.6)', display: 'flex',
                          }}
                        >
                          <Trash2 size={13} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div style={{
                padding: '20px 24px',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                background: '#111',
                position: 'sticky', bottom: 0,
                display: 'flex', flexDirection: 'column', gap: '14px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem',
                  }}>Total</span>
                  <span style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 900,
                    fontSize: '1.2rem', color: '#FF6B00', letterSpacing: '0.02em',
                  }}>
                    Rp {formatPrice(totalPrice)}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'linear-gradient(135deg, #FF6B00, #e55f00)',
                    color: '#000', border: 'none', borderRadius: '12px',
                    padding: '15px', cursor: 'pointer', width: '100%',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '1rem', letterSpacing: '0.06em', fontWeight: 900,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    boxShadow: '0 4px 24px rgba(255,107,0,0.35)',
                  }}
                >
                  <ShoppingBag size={18} />
                  CHECKOUT SEKARANG
                </motion.button>

                <button
                  onClick={clearCart}
                  style={{
                    background: 'none', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px', padding: '10px', cursor: 'pointer',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.05em',
                  }}
                >
                  Hapus Semua
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
