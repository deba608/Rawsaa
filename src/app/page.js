import SmoothScroll from '@/components/SmoothScroll';
import { FlavorProvider } from '@/context/FlavorContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FlavorsGallery from '@/components/FlavorsGallery';
import WhyRawsa from '@/components/WhyRawsa';
import BrandStory from '@/components/BrandStory';
import Lifestyle from '@/components/Lifestyle';
import ProductFamily from '@/components/ProductFamily';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <FlavorProvider>
      <SmoothScroll>
        <div className="app-container">
          <Navbar />
          <main>
            <Hero />
            <FlavorsGallery />
            <WhyRawsa />
            <BrandStory />
            <Lifestyle />
            <ProductFamily />
            <ContactForm />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </FlavorProvider>
  );
}
