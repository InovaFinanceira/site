import { useEffect } from 'react';
import HeroSection from '@/react-app/components/HeroSection';
import WhyChooseSection from '@/react-app/components/WhyChooseSection';
import FAQSection from '@/react-app/components/FAQSection';
import FinalCTASection from '@/react-app/components/FinalCTASection';
import Footer from '@/react-app/components/Footer';
import ScrollToTopButton from '@/react-app/components/ScrollToTopButton';

export default function Home() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Update document font family
    document.documentElement.style.fontFamily = 'Poppins, system-ui, sans-serif';

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
