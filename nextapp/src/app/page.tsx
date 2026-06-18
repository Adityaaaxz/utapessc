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
      <HeroSection />
      <BrandTicker />
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
