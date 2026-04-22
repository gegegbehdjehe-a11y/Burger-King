import { useState, useEffect } from 'react';

const DEALS = [
  {
    id: 1,
    title: '2 FOR $5 MIX & MATCH',
    desc: 'Pick any 2 classics. Whopper, Chicken, or Fish.',
    code: 'PICK2'
  },
  {
    id: 2,
    title: 'FREE LARGE FRIES',
    desc: 'With any Burger transaction over $3 on the app.',
    code: 'FRIESFREE'
  },
  {
    id: 3,
    title: 'WHOPPER WEDNESDAY',
    desc: 'The original Whopper burger for just $3 every Wed.',
    code: 'WW3WEB'
  }
];

export default function Deals() {
  const [timeLeft, setTimeLeft] = useState('23:59:59');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      
      const diff = end.getTime() - now.getTime();
      const h = Math.floor(diff / (1000 * 60 * 60)).toString().padStart(2, '0');
      const m = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
      const s = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
      
      setTimeLeft(`${h}:${m}:${s}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="deals" className="bg-bk-red relative overflow-hidden">
      {/* Ticker Tape */}
      <div className="bg-black py-3 overflow-hidden border-y border-white/10 select-none">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 mx-5">
              <span className="font-accent text-xl text-white">🔥 LIMITED TIME OFFERS</span>
              <span className="font-accent text-xl text-white">ORDER NOW</span>
              <span className="font-accent text-xl text-white">🔥 LIMITED TIME OFFERS</span>
              <span className="font-accent text-xl text-white">ORDER NOW</span>
            </div>
          ))}
        </div>
      </div>

      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-7xl md:text-8xl text-white uppercase leading-none mb-4 italic">
            Today's <span className="text-bk-yellow underline decoration-wavy">🔥 Deals</span>
          </h2>
          <p className="font-body text-white/90 text-xl font-medium">
            Offers expire in <span className="font-accent text-bk-yellow bg-black px-4 py-1 rounded inline-block ml-2 text-2xl">{timeLeft}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEALS.map((deal) => (
            <div
              key={deal.id}
              className="bg-bk-yellow p-8 rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform cursor-pointer relative group overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="bg-bk-red text-white font-accent px-4 py-1 rounded-full text-sm">COUPON: {deal.code}</span>
              </div>
              
              <h3 className="font-display text-4xl text-bk-charcoal leading-none mb-6">
                {deal.title}
              </h3>
              
              <p className="font-body text-bk-charcoal/70 text-sm mb-8 font-medium">
                {deal.desc}
              </p>

              <button className="w-full btn-pill btn-primary text-2xl py-4 bg-bk-charcoal hover:bg-bk-red">
                Grab Deal
              </button>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <div className="font-display text-8xl">BK</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
