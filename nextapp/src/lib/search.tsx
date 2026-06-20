'use client'

import { createContext, useContext, useState } from 'react'
import { type BrandFilter } from '@/lib/products'

interface SearchContextType {
  query: string
  setQuery: (q: string) => void
  activeBrand: BrandFilter
  setActiveBrand: (b: BrandFilter) => void
}

const SearchContext = createContext<SearchContextType | null>(null)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery]             = useState('')
  const [activeBrand, setActiveBrand] = useState<BrandFilter>('ALL')

  return (
    <SearchContext.Provider value={{ query, setQuery, activeBrand, setActiveBrand }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const ctx = useContext(SearchContext)
  if (!ctx) throw new Error('useSearch must be inside SearchProvider')
  return ctx
}
