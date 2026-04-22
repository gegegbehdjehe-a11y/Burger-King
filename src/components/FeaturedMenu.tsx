import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

const MENU_ITEMS = [
  {
    id: 1,
    name: 'The Whopper',
    desc: 'The original flame-grilled 1/4 lb beef burger.',
    price: '$5.99',
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Double Cheeseburger',
    desc: 'Two flame-grilled beef patties with melted cheese.',
    price: '$3.49',
    badge: 'CLASSIC',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=400&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Crispy Chicken Sandwich',
    desc: 'Premium white meat chicken, toasted bun, crisp mayo.',
    price: '$4.99',
    badge: 'POPULAR',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a46280?q=80&w=400&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Impossible Whopper',
    desc: '100% Whopper, 0% Beef. Plant-based perfection.',
    price: '$6.49',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&h=300&fit=crop'
  }
];

export default function FeaturedMenu() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-24 bg-bk-charcoal overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <h2 className="font-display text-6xl md:text-7xl uppercase mb-2">The Classics</h2>
          <div className="w-20 h-1 bg-bk-orange mb-6"></div>
          <p className="font-body text-bk-offwhite/60 text-lg max-w-xl">
            Flame-grilled since 1954. Some things you just don't mess with.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              style={{ transitionDelay: `${idx * 0.15}s` }}
              className="reveal bg-bk-card border border-white/10 rounded-2xl overflow-hidden group hover:border-bk-red transition-all duration-300 flex flex-col hover:rotate-0 rotate-2 even:-rotate-2"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-bk-red text-white font-accent px-3 py-1 text-sm tracking-widest rotate-2">
                  {item.badge}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl uppercase mb-2 group-hover:text-bk-red transition-colors">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-bk-offwhite/50 mb-6 flex-1">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between mt-auto gap-4">
                  <span className="font-accent text-3xl text-bk-yellow">{item.price}</span>
                  <button className="bg-bk-red hover:bg-bk-orange text-white font-accent py-2 px-6 rounded-lg text-lg transition-all duration-300 flex-1">
                    Add to Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <button className="btn-pill btn-ghost-red px-10">
            View Full Menu →
          </button>
        </div>
      </div>
    </section>
  );
}
