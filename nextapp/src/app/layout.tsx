import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UTAPES — Thrift Best Shoe Store',
  description: 'UTAPES adalah toko sepatu thrift terbaik. Temukan koleksi Nike, Adidas, Vans, Puma, dan Salomon dengan harga terjangkau.',
  keywords: 'sepatu thrift, second hand shoes, nike, adidas, vans, puma, salomon, utapes',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif', background: '#000', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}
