import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedMenu from './components/FeaturedMenu';
import Deals from './components/Deals';
import AppDownload from './components/AppDownload';
import SocialProof from './components/SocialProof';
import Locations from './components/Locations';
import Footer from './components/Footer';
import { ArrowUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Reveal Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Scroll Top Visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    // Cookie Consent Check
    const consent = localStorage.getItem('bk_cookie_consent');
    if (!consent) {
       setTimeout(() => setShowCookieConsent(true), 2000);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('bk_cookie_consent', 'true');
    setShowCookieConsent(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-bk-charcoal selection:bg-bk-red selection:text-white">
      {/* Top Ticker */}
      <div className="bg-black py-2 border-b border-bk-red overflow-hidden whitespace-nowrap fixed top-0 w-full z-[60]">
        <div className="flex space-x-12 animate-[marquee_20s_linear_infinite]">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-bk-yellow font-bold uppercase text-[10px] tracking-[0.2em]">
              🔥 LIMITED TIME OFFERS • ORDER NOW • 🔥 LIMITED TIME OFFERS • ORDER NOW • 🔥 LIMITED TIME OFFERS • ORDER NOW
            </span>
          ))}
        </div>
      </div>

      <Header />
      
      <main>
        <Hero />
        <FeaturedMenu />
        <Deals />
        <AppDownload />
        <SocialProof />
        <Locations />
      </main>

      <Footer />

      {/* Floating Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[60] bg-bk-red text-white p-4 rounded-full shadow-[0_10px_30px_rgba(214,35,0,0.5)] hover:bg-bk-orange transition-all duration-300 group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showCookieConsent && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 right-6 md:left-12 md:right-auto md:max-w-md z-[70] bg-white p-6 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] flex flex-col gap-4 border-l-4 border-bk-red"
          >
            <div className="flex justify-between items-start">
               <h3 className="font-display text-2xl text-bk-charcoal uppercase italic">Flame-Grilled Cookies?</h3>
               <button onClick={() => setShowCookieConsent(false)} className="text-bk-charcoal/40 hover:text-bk-red transition-colors">
                 <X size={20} />
               </button>
            </div>
            <p className="font-body text-bk-charcoal/70 text-sm">
              We use cookies to improve your experience and show you the best deals. By continuing to browse, you agree to our use of cookies.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={acceptCookies}
                className="btn-pill btn-primary text-sm py-2 px-6 flex-1"
              >
                Accept All
              </button>
              <button 
                onClick={() => setShowCookieConsent(false)}
                className="font-body text-bk-charcoal/40 text-sm hover:text-bk-charcoal transition-colors px-4"
              >
                Manage
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NoScript Fallback */}
      <noscript>
        <div className="fixed top-0 left-0 w-full bg-bk-red text-white p-4 text-center z-[9999] font-bold">
          Please enable JavaScript to enjoy the flame-grilled Burger King experience.
        </div>
      </noscript>
    </div>
  );
}
