import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import ContactSection from '@/components/sections/ContactSection';
import MarqueeSlider from '@/components/sections/marqueeSlider';
import FeatureSection from '@/components/sections/freature-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <MarqueeSlider />
      <AboutSection />
      <ServicesSection />
      <ShowcaseSection />
      <WhyChooseSection />
      <ContactSection />
    </main>
  );
}