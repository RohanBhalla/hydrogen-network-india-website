import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Advanced Simulation Tools in the Green Hydrogen Economy: Optimizing Plant Operation & Fast-Tracking R&D',
      excerpt: 'Simulation tools—spanning multiphysics CFD, process modelling, 1D system simulation, and full plant digital twins—now sit at the heart of successful hydrogen projects globally. Their impact is most visible across two domains: electrolyzer operations and fuel-cell system design.',
      date: 'Dec 5, 2025',
      category: 'Industry Insights',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://h2network.beehiiv.com/p/advanced-simulation-tools-in-the-green-hydrogen-economy-optimizing-plant-operation-fast-tracking-r-d',
    },
    {
      title: 'Efficiency of PEM Electrolyzers & the Real Cost of Green Hydrogen in India',
      excerpt: 'Electrolysis may seem simple — splitting water into hydrogen and oxygen — but behind every kilogram of green hydrogen lies a deep interplay between physics, efficiency, and economics. In India, PEM electrolyzers typically consume 50–55 kWh per kg of H₂, with electricity contributing 70–80% of the total production cost.',
      date: 'Oct 14, 2025',
      category: 'Industry Insights',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://h2network.beehiiv.com/p/efficiency-of-pem-electrolyzers-the-real-cost-of-green-hydrogen-in-india',
    },
    {
      title: 'India-Japan JCM: Unlocking Article 6.2 Pathways for Indian P2X Exports',
      excerpt: 'India and Japan\'s new JCM pact creates India\'s first bilateral carbon market mechanism, enabling P2X projects to pair hydrogen exports with ITMO-based revenue. The agreement shifts the model from pure commodity arbitrage to a dual-revenue structure combining hydrogen exports with Internationally Transferred Mitigation Outcomes monetization.',
      date: 'Nov 18, 2025',
      category: 'Industry Insights',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://h2network.beehiiv.com/p/india-japan-jcm-unlocking-article-6-2-pathways-for-indian-p2x-exports',
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and developments in hydrogen technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => window.open(post.url, '_blank')}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
