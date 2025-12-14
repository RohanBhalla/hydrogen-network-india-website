import { Plane, Zap, Gauge, Battery } from 'lucide-react';

export default function EnergySystems() {
  const systems = [
    {
      icon: Plane,
      title: 'Fuel Cell Drones',
      description: 'Advanced hydrogen-powered drones with extended flight times for surveillance, agriculture, and industrial applications.',
      features: ['Extended Flight Time', 'Zero Emissions', 'Quick Refueling', 'Heavy Payload Capacity'],
      gradient: 'from-blue-500 to-cyan-500',
      productId: 'drones',
    },
    {
      icon: Zap,
      title: 'Hydrogen Microgrids',
      description: 'Decentralized energy systems providing reliable, clean power for communities and industrial facilities.',
      features: ['24/7 Power Supply', 'Grid Independence', 'Scalable Solutions', 'Energy Storage'],
      gradient: 'from-green-500 to-emerald-500',
      productId: 'nanogrids',
    },
  ];

  const handleLearnMore = (productId: string) => {
    window.location.hash = `#product/${productId}`;
  };

  return (
    <section id="energy-systems" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Energy Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative hydrogen-powered solutions revolutionizing India's energy landscape
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {systems.map((system, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${system.gradient} p-8`}>
                <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <system.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {system.title}
                </h3>
              </div>

              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {system.description}
                </p>

                <div className="space-y-3">
                  {system.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleLearnMore(system.productId)}
                  className="mt-8 w-full py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
            <Gauge className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="font-semibold text-gray-900">High Efficiency</div>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
            <Battery className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <div className="font-semibold text-gray-900">Long Duration</div>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
            <Zap className="w-12 h-12 text-orange-500 mx-auto mb-3" />
            <div className="font-semibold text-gray-900">Fast Charging</div>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="font-semibold text-gray-900">Zero Carbon</div>
          </div>
        </div>
      </div>
    </section>
  );
}
