import { Zap, Cpu, Wrench, TrendingUp, CheckCircle, Users, Clock, Award } from 'lucide-react';

export default function ConsultingPage() {
  const services = [
    {
      title: 'Feasibility & Techno-Commercial Assessment',
      description: 'Comprehensive evaluation of sites, renewable resource potential, electrolyser sizing, water demand, LCOH modelling, and financial viability.',
      icon: Zap,
      gradient: 'from-cyan-50 to-blue-50',
      borderColor: 'border-l-4 border-cyan-400',
    },
    {
      title: 'Process Design & System Engineering',
      description: 'Detailed design of electrolysers, balance-of-plant, hydrogen compression, storage, and dispensing systems. Digital simulations optimise plant performance, safety, and energy efficiency.',
      icon: Cpu,
      gradient: 'from-blue-50 to-indigo-50',
      borderColor: 'border-l-4 border-blue-400',
    },
    {
      title: 'EPC & Project Delivery Support',
      description: 'FEED development, vendor/OEM evaluation, procurement support, and commissioning oversight aligned with global hydrogen safety and engineering standards.',
      icon: Wrench,
      gradient: 'from-emerald-50 to-cyan-50',
      borderColor: 'border-l-4 border-emerald-400',
    },
    {
      title: 'Technology Commercialisation & Investment Advisory',
      description: 'TRL assessment, certification pathways, business model design, investor documentation, and strategic partnerships to scale emerging hydrogen and fuel-cell technologies.',
      icon: TrendingUp,
      gradient: 'from-teal-50 to-blue-50',
      borderColor: 'border-l-4 border-teal-400',
    },
  ];

  const whyChooseUs = [
    { icon: Zap, text: 'Deep technical understanding of hydrogen systems and fuel-cell technology' },
    { icon: Users, text: 'Strong engineering approach rooted in global best practices' },
    { icon: TrendingUp, text: 'Market insight across the evolving hydrogen value chain' },
    { icon: Clock, text: 'Fast-track project development and reduced time-to-deployment' },
    { icon: Award, text: 'Proven track record mitigating risk and reducing project costs' },
    { icon: Cpu, text: 'Integrated digital tools and advanced modelling capabilities' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 bg-clip-text text-transparent mb-6 leading-tight">
            Green Hydrogen Consulting & Engineering Services
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-6 font-light leading-relaxed">
            We provide end-to-end consulting and technical advisory solutions to accelerate the deployment of green hydrogen, fuel-cell systems, and renewable-powered hydrogen infrastructure.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Our multidisciplinary team supports clients across the full project lifecycle—from early-stage feasibility and engineering design to technology selection, commercial structuring, and project execution.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We help developers, industries, utilities, EPCs, and government agencies evaluate and implement bankable green hydrogen projects. Our services include:
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${service.gradient} ${service.borderColor} p-8 sm:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] max-w-4xl mx-auto w-full`}
                >
                  <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg group-hover:shadow-xl transition-shadow">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 text-center">Why Clients Choose Us</h2>

          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              We bring a deep technical understanding of hydrogen systems, a strong engineering approach, and market insight across the rapidly evolving hydrogen value chain. Our goal is to help organisations mitigate risk, reduce cost, and accelerate time-to-deployment—turning ambitious hydrogen strategies into operational reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4 p-6 rounded-xl hover:bg-blue-50/50 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100">
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-800 font-medium leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h3 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Partner with Hydrogen Network India to accelerate your green hydrogen journey.
          </h3>
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-lg"
          >
            Get in Touch
            <Zap className="ml-3 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
