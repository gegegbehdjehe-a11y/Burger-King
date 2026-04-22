import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    text: "Best burger I've ever had. The flame-grilled taste is unreal. You can actually taste the quality difference.",
    author: "James T.",
    stars: 5
  },
  {
    id: 2,
    text: "Whopper Wednesday is a weekly ritual. Never disappoints. The app makes it so easy to grab a quick deal on the go.",
    author: "Sarah L.",
    stars: 5
  },
  {
    id: 3,
    text: "The app deals are insane. Got a free Whopper on my first order. My favorite fast food experience by far.",
    author: "Marcus D.",
    stars: 5
  }
];

export default function SocialProof() {
  return (
    <section className="bg-bk-offwhite py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="font-display text-5xl md:text-7xl text-bk-charcoal uppercase leading-none mb-4">
            People are talking
          </h2>
          <div className="w-24 h-1.5 bg-bk-red mx-auto mb-8"></div>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24 border-y border-bk-charcoal/10 py-16">
          {[
            { value: '70 YEARS', label: 'FLAME GRILLED' },
            { value: '18,000+', label: 'GLOBAL STORES' },
            { value: '11M+', label: 'DAILY GUESTS' }
          ].map((stat, i) => (
            <div key={i} className="text-center group flex flex-col">
              <span className="font-accent text-7xl md:text-8xl text-bk-red tracking-tighter group-hover:scale-110 transition-transform cursor-default leading-none mb-2">
                {stat.value}
              </span>
              <span className="font-body text-[10px] text-bk-charcoal/50 uppercase font-bold tracking-[0.2em] leading-none">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-bk-red/20 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={20} fill="#F2C12E" className="text-bk-yellow" />
                ))}
              </div>
              
              <blockquote className="font-body italic text-bk-charcoal/80 text-lg leading-relaxed mb-8">
                "{review.text}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-bk-red/10 rounded-full flex items-center justify-center font-display text-bk-red">
                  {review.author[0]}
                </div>
                <cite className="font-display text-bk-charcoal text-xl not-italic uppercase tracking-tighter">
                  {review.author}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
