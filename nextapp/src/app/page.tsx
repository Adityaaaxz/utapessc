'use client';

import { useState, useCallback } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandMarquee from '@/components/BrandMarquee';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  const scrollToProduct = useCallback(() => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* Intro overlays on top — main content always visible underneath */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      <main>
        <Navbar />
        <Hero onShopNow={scrollToProduct} />
        <BrandMarquee />
        <ProductSection />
        <Footer />
      </main>
    </>
  );
}
