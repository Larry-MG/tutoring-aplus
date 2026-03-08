import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Pricing from '@/components/Pricing/Pricing';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
