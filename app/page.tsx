import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import ContactSection from '@/components/sections/ContactSection';
import FeatureSection from '@/components/sections/freature-section';
import BrandSection from '@/components/sections/brandSection';
import ProductSection from '@/components/sections/ProductSection';


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <BrandSection />
      <ProductSection />
      <WhyChooseSection />
      <ContactSection />
    </main>
  );
}