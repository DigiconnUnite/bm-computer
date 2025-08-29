import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import ContactSection from '@/components/sections/ContactSection';
import FeatureSection from '@/components/sections/freature-section';
import BrandSection from '@/components/sections/brandSection';
import ProductSection from '@/components/sections/ProductSection';
import Background from '@/components/ui/Backround';
import { PromoBanner, PromoBannerProps } from '@/components/sections/Product-section';


export default function Home() {
  return (

    <main className="min-h-screen">
      <Background />
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <BrandSection />
      <ProductSection />
      <WhyChooseSection />
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2">
        <PromoBanner
          image="/products/promo-13.png"
          title="Professional PC Workstation"
          description='Intel Xeon W5 / 64GB ECC RAM / NVIDIA RTX A4000'
        />
        <PromoBanner
          image="/products/promo-3.jpg"
          title="Ultimate Gaming Expreince"
          description="AMD Ryzen 9 / 64GB RAM / NVIDIA GeForce RTX 4090"
        />
      </section>
      <ContactSection />  
    </main>
  );
}