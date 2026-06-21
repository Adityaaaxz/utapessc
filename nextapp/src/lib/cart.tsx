'use client'

import { createContext, useContext, useState, ReactNode, useCallback } from 'react'
import { type Product } from '@/lib/products'

export interface CartItem extends Product {
  quantity: number
}

interface CartCtx {
  items: CartItem[]
  totalCount: number
  totalPrice: number
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  decreaseQuantity: (id: string) => void
  clearCart: () => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const decreaseQuantity = useCallback((id: string) => {
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totalCount = items.reduce((s, i) => s + i.quantity, 0)
  const totalPrice = items.reduce((s, i) => s + i.priceNum * i.quantity, 0)

  return (
    <CartContext.Provider value={{
      items, totalCount, totalPrice,
      addItem, removeItem, decreaseQuantity, clearCart,
      isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
