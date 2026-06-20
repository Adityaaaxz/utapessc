import Navbar        from '@/components/Navbar'
import HeroSection   from '@/components/HeroSection'
import BrandTicker   from '@/components/BrandTicker'
import ProductSection from '@/components/ProductSection'
import SejarahSection from '@/components/SejarahSection'
import WhyUtapes     from '@/components/WhyUtapes'
import HypeBanner    from '@/components/HypeBanner'
import Testimonials  from '@/components/Testimonials'
import LokasiToko    from '@/components/LokasiToko'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero + Ticker share the same background image */}
      <div style={{ position: 'relative', backgroundColor: '#fff', paddingBottom: '80px', overflowX: 'clip' }}>
        {/* Shared bg image — spans hero section AND ticker */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/assets/landing-asset/hero-asset/hero-product-background.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            opacity: 0.85,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        {/* Bottom fade to white — visible in the paddingBottom space below ticker */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(to bottom, transparent, #ffffff)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        <HeroSection />
        <BrandTicker />
      </div>
      <ProductSection />
      <SejarahSection />
      <WhyUtapes />
      <HypeBanner />
      <Testimonials />
      <LokasiToko />
      <Footer />
    </>
  )
}
