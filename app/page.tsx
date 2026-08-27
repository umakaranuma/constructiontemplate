import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BackToTop from '@/components/BackToTop';
import SocialSidebar from '@/components/SocialSidebar';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Projects />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
      <SocialSidebar />
    </>
  );
}
