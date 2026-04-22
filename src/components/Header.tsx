import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Deals', href: '#deals' },
    { name: 'Nutrition', href: '#' },
    { name: 'Locations', href: '#locations' },
    { name: 'App', href: '#app' },
  ];

  return (
    <header
      id="header"
      className={`fixed top-[33px] left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-bk-charcoal/90 py-4 shadow-bk backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <Flame className="text-bk-red w-8 h-8 group-hover:animate-bounce" fill="currentColor" />
          <span className="font-display text-2xl md:text-3xl text-bk-offwhite tracking-tighter uppercase">
            Burger King
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-accent text-lg uppercase tracking-widest text-bk-offwhite hover:text-bk-red transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bk-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block btn-pill btn-primary text-sm px-6 py-2">
            Order Now
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-bk-offwhite hover:text-bk-red p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-[300px] bg-bk-charcoal z-50 p-10 flex flex-col gap-8 md:hidden shadow-[-10px_0_30px_rgba(0,0,0,0.5)] border-l border-white/5"
            >
              <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                    <Flame className="text-bk-red w-6 h-6" fill="currentColor" />
                    <span className="font-display text-xl uppercase tracking-tighter">BK</span>
                 </div>
                 <button onClick={() => setIsMenuOpen(false)} className="text-bk-offwhite">
                   <X size={24} />
                 </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-3xl uppercase text-bk-offwhite hover:text-bk-red transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <button className="btn-pill btn-primary mt-8 w-full">
                Order Now
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
