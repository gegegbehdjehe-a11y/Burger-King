import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col md:flex-row items-stretch overflow-hidden bg-bk-charcoal pt-[84px]">
      {/* Hero Left (55%) */}
      <div className="w-full md:w-[55%] p-8 md:p-16 flex flex-col justify-center relative bg-bk-charcoal radial-flame">
        <div className="absolute -left-20 bottom-0 w-96 h-96 bg-bk-red/10 blur-[100px] rounded-full"></div>
        
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block bg-bk-red text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase mb-6 w-fit relative z-10"
        >
          Flame-Grilled Since 1953
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.9] uppercase text-bk-offwhite mb-8 relative z-10 drop-shadow-2xl"
        >
          Flame-Grilled.<br />
          <span className="text-bk-orange">Not Just Fast.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="font-body text-lg md:text-xl text-bk-offwhite/80 mb-12 max-w-lg relative z-10 leading-relaxed"
        >
          Real fire. Real taste. Experience the Whopper® that started it all. Every burger is grilled over real flames for that signature smokey flavor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-6 relative z-10"
        >
          <button className="btn-hero-primary w-full sm:w-auto">
            Order Now &rarr;
          </button>
          <button className="btn-hero-ghost w-full sm:w-auto">
            Explore the Menu
          </button>
        </motion.div>
      </div>

      {/* Hero Right (45%) */}
      <div className="w-full md:w-[45%] bg-bk-red relative flex items-center justify-center p-8 md:p-12 min-h-[400px]">
        <div className="absolute inset-0 opacity-10 dot-pattern pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 2, scale: 1 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-bk-card w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative z-10 group transition-transform duration-500"
        >
          <div className="h-56 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800"
              alt="The Whopper"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-display text-3xl uppercase tracking-tighter">The Whopper</h3>
              <span className="bg-bk-orange text-black px-2 py-0.5 text-[10px] font-bold rounded">BESTSELLER</span>
            </div>
            <p className="text-sm text-bk-offwhite/50 mb-6 font-body">1/4 lb of savory flame-grilled beef topped with juicy tomatoes and fresh lettuce.</p>
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-bk-yellow font-accent tracking-tighter">$5.99</span>
              <button className="bg-bk-red px-6 py-2 rounded font-bold text-xs uppercase tracking-widest text-white hover:bg-bk-orange transition-colors">Add to Order</button>
            </div>
          </div>
        </motion.div>

        {/* Urgency Floater */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [12, 10, 12] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-10 -right-10 md:top-20 md:-left-16 w-32 h-32 bg-bk-yellow rounded-full flex flex-col items-center justify-center text-bk-charcoal p-2 text-center shadow-2xl border-4 border-bk-charcoal z-20"
        >
          <span className="text-[10px] font-black uppercase leading-none mb-1">Wednesday Deal</span>
          <span className="text-5xl font-display leading-none">$3</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Whopper</span>
        </motion.div>
      </div>

      {/* App Promo Floater */}
      <div className="absolute bottom-12 right-12 hidden lg:flex bg-[#1A1A1A] p-4 rounded-xl border border-white/10 shadow-xl items-center space-x-4 max-w-[260px] z-30">
        <div className="w-12 h-12 bg-bk-red rounded-lg flex items-center justify-center font-black text-white text-xl">BK</div>
        <div>
          <p className="text-[10px] font-bold text-bk-orange uppercase tracking-wider">App Exclusive</p>
          <p className="text-xs font-bold text-bk-offwhite">Free Fries with your first order</p>
        </div>
      </div>
    </section>
  );
}
