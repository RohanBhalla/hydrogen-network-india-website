import { ArrowLeft, Download, Mail, Calendar } from 'lucide-react';

export default function DroneProduct() {
  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => (window.location.hash = '#products')}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hydrogen Fuel Cell Drones & Mobile Electrolyser-Refuelling Module
              </h1>
              <p className="text-2xl text-blue-700 font-semibold mb-4">
                Unlocking High-Endurance Drone Operations
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Achieve 2–3 hours of continuous flight, rapid refuelling, and operational savings with our next-generation hydrogen fuel cell UAV solution. Engineered for mission-critical applications—surveillance, industrial inspection, logistics, emergency response, and defence.
              </p>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="/fuelcelldrone.png"
                alt="Hydrogen Fuel Cell Drone System"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our integrated platform replaces conventional batteries with an ultralight PEM fuel cell stack and a mobile hydrogen production/refuelling module. UAVs deliver long endurance and high payload flexibility; the mobile refuelling unit generates high-purity hydrogen on-site (solar + battery assisted), compresses and stores it in Type-IV cylinders, and performs safe fast refuelling in under 3 minutes, eliminating complex hydrogen logistics in remote or contested environments.
          </p>
        </div>

        {/* Technology Differentiators */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Differentiators</h2>
          <ul className="space-y-4">
            {[
              'Ultralightweight Fuel Cell Stack (~1 kW/kg) for superior propulsion efficiency.',
              'Custom Form Factors & Stack Configurations adaptable to multirotor and fixed-wing UAVs.',
              'Advanced Fuel Cell Control System (FCC) with real-time diagnostics and adaptive power management.',
              'Scalable Modular Design for plug-and-play integration across UAV classes.',
              'Rapid Refuelling Workflow with automated leak checks and quick-connect couplings.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold text-xl">✓</span>
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Unit */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile Hydrogen Electrolyser & Refuelling Unit</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A field-deployable, solar-assisted module combining: high-efficiency PEM electrolyser, battery energy storage (BESS), hydrogen compressor, Type-IV storage cascade, and PLC/HMI control. Produces high-purity H₂ on demand and refuels UAVs in &lt;3 minutes to reduce operational downtime.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Key Features & Benefits</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '2–3 hour continuous flight times (typical)',
              'Fast field refuelling < 3 minutes',
              'Lower OPEX versus battery replacements over duty cycles',
              'All-weather and high-altitude capable',
              'Containerised for rapid deployment',
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-green-600 font-bold">→</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Snapshot</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">Item</th>
                  <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">Typical Value / Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: 'UAV Endurance', value: '2–3 hours (payload & profile dependent)' },
                  { item: 'Fuel Cell Specific Power', value: '~1 kW/kg' },
                  { item: 'Refuelling Time', value: '< 3 minutes' },
                  { item: 'Electrolyser Output', value: 'Modular: 1–5 kg H₂/day (site dependent)' },
                  { item: 'Storage', value: 'Type-IV high-pressure cylinders (cascade)' },
                  { item: 'Control', value: 'PLC + HMI; FCC w/ CAN / telemetry' },
                  { item: 'Safety', value: 'Leak detection, PRVs, gas sensors, E-stop' },
                ].map((spec, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-6 py-3 font-semibold text-gray-900">{spec.item}</td>
                    <td className="border border-gray-300 px-6 py-3 text-gray-700">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Areas of Application */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Areas of Application</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'High-altitude & remote military operations',
              'Wind turbine / solar farm inspection',
              'Portside and maritime infrastructure monitoring',
              'Logistics for industrial & gigafactory campuses',
              'Emergency response & disaster relief',
            ].map((app, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold">→</span>
                <span className="text-gray-700">{app}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safety & Compliance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety & Compliance</h2>
          <ul className="space-y-3">
            {[
              'Automated pre-refuel diagnostics and interlocks',
              'Multi-layer leak detection, pressure relief, and emergency isolation',
              'Designed to meet aviation integration and hydrogen handling best practice standards',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Integrate Hydrogen into Your Fleet?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us for technical specifications, integration support, and field trials.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Request Quotation</span>
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
              <Calendar size={20} />
              <span>Book a Demo / Field Trial</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
              <Download size={20} />
              <span>Download Datasheet (PDF)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
