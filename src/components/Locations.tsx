import { MapPin, Search, Navigation } from 'lucide-react';
import React, { useState } from 'react';

const MOCK_LOCATIONS = [
  { id: 1, name: 'BK Times Square', address: '1540 Broadway, NY', hours: 'Open until 11pm' },
  { id: 2, name: 'BK Brooklyn', address: '427 Fulton St, Brooklyn', hours: 'Open 24 Hours' },
  { id: 3, name: 'BK Midtown', address: '110 W 34th St, NY', hours: 'Open until 10pm' }
];

export default function Locations() {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for location:', searchValue);
  };

  return (
    <section id="locations" className="bg-bk-charcoal py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase mb-8">
            Find your nearest BK
          </h2>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto relative group">
            <input
              type="text"
              placeholder="Enter your city or postcode..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-[#242424] border-2 border-white/10 rounded-full py-5 px-8 pr-40 text-xl text-white focus:outline-none focus:border-bk-red transition-all shadow-2xl"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-bk-red hover:bg-bk-orange text-white px-8 rounded-full font-accent text-xl transition-all"
            >
              <div className="flex items-center gap-2">
                <Search size={24} />
                <span className="hidden sm:inline">FIND RESTAURANTS</span>
              </div>
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="bg-[#242424] p-8 rounded-2xl border border-white/5 hover:border-bk-red/40 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl uppercase mb-1">{loc.name}</h3>
                  <div className="flex items-center gap-2 text-bk-offwhite/50 text-sm">
                    <MapPin size={16} className="text-bk-red" />
                    {loc.address}
                  </div>
                </div>
                <div className="bg-bk-red/10 p-2 rounded-lg text-bk-red group-hover:bg-bk-red group-hover:text-white transition-colors">
                   <Navigation size={20} />
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                <span className="text-bk-yellow font-accent text-lg">{loc.hours}</span>
                <button className="text-bk-red font-display text-lg hover:underline uppercase tracking-tighter">
                  Get Directions →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
