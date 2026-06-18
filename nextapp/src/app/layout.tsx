import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UTAPES — Thrift Best Shoe Store",
  description: "UTAPES adalah toko sepatu thrift terbaik. Temukan koleksi Nike, Adidas, Vans, Puma, dan Salomon dengan harga terjangkau.",
  keywords: "sepatu thrift, second hand shoes, nike, adidas, vans, puma, salomon, utapes",
  openGraph: {
    title: "UTAPES — Thrift Best Shoe Store",
    description: "Koleksi sepatu thrift premium terbaik",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;900&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
