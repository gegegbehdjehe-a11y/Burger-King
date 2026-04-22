import { motion } from 'motion/react';
import { Apple, Smartphone } from 'lucide-react';

export default function AppDownload() {
  const benefits = [
    'Earn BK Crown rewards on every order',
    'Exclusive app-only deals daily',
    'Skip the queue — order ahead',
    'Customize every single bite'
  ];

  return (
    <section id="app" className="relative py-24 bg-bk-charcoal overflow-hidden px-6">
      {/* Background Stripe */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-bk-orange to-bk-red diagonal-stripe opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 relative z-10">
        {/* Left Copy */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block bg-bk-red px-4 py-1 rounded-full font-accent text-sm text-white mb-6 tracking-widest uppercase">
            Exclusive App Deals
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase leading-[0.95] mb-8">
            Order Smarter.<br />
            Eat Better.
          </h2>

          <ul className="space-y-4 mb-10 text-left inline-block">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-4 font-body text-bk-offwhite/80 text-lg">
                <span className="text-xl">🔥</span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="flex items-center gap-4 bg-black border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/5 transition-all group scale-100 hover:scale-105 active:scale-95 shadow-xl">
              <Apple size={36} fill="white" />
              <div className="text-left">
                <div className="text-xs uppercase opacity-70 tracking-tighter">Download on the</div>
                <div className="text-xl font-bold leading-none">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-4 bg-black border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/5 transition-all group scale-100 hover:scale-105 active:scale-95 shadow-xl">
              <Smartphone size={36} className="text-white" />
              <div className="text-left">
                <div className="text-xs uppercase opacity-70 tracking-tighter">Get it on</div>
                <div className="text-xl font-bold leading-none">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Phone Mockup */}
        <div className="flex-1 flex justify-center">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [5, 4, 5]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
            className="w-[280px] h-[560px] bg-[#0F0F0F] border-[12px] border-[#222] rounded-[48px] relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)]"
          >
            {/* App UI Simulation */}
            <div className="bg-bk-red h-14 flex items-center justify-center p-4">
               <span className="text-white font-display text-2xl tracking-tighter">BK</span>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="w-full h-32 bg-bk-orange/20 rounded-xl border border-bk-orange/30 animate-pulse"></div>
              <div className="space-y-3">
                <div className="w-3/4 h-4 bg-white/10 rounded"></div>
                <div className="w-full h-20 bg-white/5 rounded-xl"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-bk-yellow/10 rounded-xl"></div>
                <div className="h-24 bg-bk-red/10 rounded-xl"></div>
              </div>
              <div className="w-full h-12 bg-bk-red rounded-full"></div>
            </div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
