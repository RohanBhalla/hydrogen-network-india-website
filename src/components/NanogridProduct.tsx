import { ArrowLeft, Download, Mail, Calendar } from 'lucide-react';

export default function NanogridProduct() {
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
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hydrogen Nanogrids
              </h1>
              <p className="text-2xl text-green-700 font-semibold mb-4">
                On-Demand Clean Energy for 24×7 Uptime
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Deliver resilient, emissions-free power with modular nanogrid systems that combine solar generation, battery storage, and hydrogen fuel cell backup—designed for continuous, autonomous operation in remote and mission-critical environments.
              </p>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="/microgrid.png"
                alt="Hydrogen Nanogrid System"
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
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hydrogen Nanogrids intelligently orchestrate renewable input, battery buffering, hydrogen production and storage, and fuel cell dispatching. Containerised or skid-mounted units scale from 1 kW to 20 kW continuous and provide steady, high-efficiency power with true 24×7 autonomy, significantly reducing diesel reliance.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <ul className="space-y-4">
            {[
              '24×7 Energy Autonomy via Solar + BESS + fuel cell dispatch',
              'Scalable & Modular Design: 1–20 kW continuous, stackable for higher loads',
              'Proprietary EMS for predictive dispatch, load switching, and remote telemetry',
              'Hybrid Storage combining batteries and hydrogen for long-duration outages',
              'Quick Commissioning: plug-and-play containerised modules',
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-gray-700 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas of Application */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Areas of Application</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Off-grid mobile workstations and field engineering units',
              'Medical emergency response camps & disaster relief',
              'Telecom tower backup and remote connectivity sites',
              'Rural construction sites, mining operations & mobile command centers',
            ].map((app, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-green-600 font-bold">→</span>
                <span className="text-gray-700">{app}</span>
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
                <tr className="bg-green-100">
                  <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">Item</th>
                  <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">Typical Value / Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: 'Continuous Output', value: '1–20 kW (modular)' },
                  { item: 'Primary Source', value: 'PV array (site dependent)' },
                  { item: 'Storage', value: 'BESS + hydrogen backup (modular)' },
                  { item: 'Fuel Cell Backup', value: 'PEM fuel cell modules (kW class)' },
                  { item: 'EMS', value: 'Remote monitoring + predictive dispatch' },
                  { item: 'Autonomy', value: 'Designed for 24×7 operation; fuel cell supports extended outages' },
                  { item: 'Mounting', value: 'Containerized / skid options' },
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

        {/* EMS Operation Modes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">EMS Operation Modes</h2>
          <div className="space-y-4">
            {[
              { mode: 'Day', desc: 'PV → Load; surplus → BESS / electrolyser' },
              { mode: 'Evening', desc: 'BESS → Load; EMS triggers fuel cell if BESS low' },
              { mode: 'Extended Outage', desc: 'Fuel cell prioritized; EMS optimizes load shedding' },
            ].map((op, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{op.mode}</h3>
                <p className="text-gray-700">{op.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Maintenance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety & Maintenance</h2>
          <p className="text-gray-700 text-lg">
            Routine preventive maintenance schedules; remote diagnostics; modular hot-swap subsystems.
          </p>
        </div>

        

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Deploy 24×7 Autonomous Energy?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us for site assessment, technical specifications, and rapid deployment planning.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Request Site Assessment</span>
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
              <Download size={20} />
              <span>Download Datasheet (PDF)</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
              <Calendar size={20} />
              <span>Talk to a Solutions Engineer</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
