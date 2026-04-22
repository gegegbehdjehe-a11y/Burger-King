import { Instagram, Twitter, Facebook, Youtube, Flame } from 'lucide-react';
import { Apple, Smartphone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bk-footer pt-16 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Simplified Link Bar from theme */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12 border-b border-white/5 pb-12">
          <div className="flex space-x-12">
            {[
              { value: '70 YEARS', label: 'FLAME GRILLED' },
              { value: '18,000+', label: 'GLOBAL STORES' },
              { value: '11M+', label: 'DAILY GUESTS' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-bold font-accent text-bk-red leading-none">{stat.value}</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="ml-4 px-3 py-1 bg-bk-card rounded-full text-white">© 2024 BK Corp</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
             <Flame className="text-bk-red w-8 h-8" fill="currentColor" />
             <span className="font-display text-2xl uppercase tracking-tighter text-white">Burger King</span>
          </div>
          
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-bk-card flex items-center justify-center text-white hover:bg-bk-red transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
