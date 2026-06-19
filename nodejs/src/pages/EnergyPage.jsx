import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Zap, HardHat, Wrench, TrendingUp, CheckCircle2, Trophy } from 'lucide-react';
const EnergyPage = () => {
  const benefits = [{
    icon: HardHat,
    title: 'Safety-First Culture',
    description: 'Integrated safety management systems with incident tracking and prevention protocols for industrial environments.'
  }, {
    icon: Wrench,
    title: 'Technical Workforce Planning',
    description: 'Specialized tools for managing engineers, technicians, and skilled trades across projects and facilities.'
  }, {
    icon: TrendingUp,
    title: 'Project-Based Staffing',
    description: 'Dynamic workforce allocation for energy projects, construction, and maintenance operations.'
  }, {
    icon: Zap,
    title: 'Operational Efficiency',
    description: 'Optimize workforce productivity for 24/7 operations, shift work, and remote site management.'
  }];
  const solutions = [{
    title: 'Field Workforce Management',
    description: 'Mobile-first solutions for managing dispersed teams across remote sites and projects.'
  }, {
    title: 'Certification Tracking',
    description: 'Automated tracking of technical certifications, licenses, and safety qualifications.'
  }, {
    title: 'Shift & Rotation Planning',
    description: 'Complex scheduling for continuous operations with rotation and on-call management.'
  }, {
    title: 'Contractor Management',
    description: 'Streamlined onboarding and compliance for contractors and temporary workers.'
  }, {
    title: 'Safety Compliance',
    description: 'Comprehensive safety training tracking and incident reporting systems.'
  }, {
    title: 'Engineering Career Paths',
    description: 'Structured development programs for technical and engineering professionals.'
  }];
  const expertise = ['Oil & Gas Operations', 'Renewable Energy', 'Power Generation', 'Construction & EPC', 'Mining Operations', 'Industrial Manufacturing'];
  return <div className="min-h-screen bg-gradient-to-b from-[#6b5344] via-stone-900 to-black">
      <Helmet>
        <title>Energy & Engineering HR Solutions | VAMEFO</title>
        <meta name="description" content="Robust HR technology for energy and engineering sectors. Manage technical workforces, ensure safety compliance, and optimize project staffing." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="https://horizons-cdn.hostinger.com/da479a32-1c3b-46e9-97ae-0975870a6de4/kate-trysh-f9w4q70-uxe-unsplash-g0QTR.jpg" alt="Industrial facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#6b5344]/90 via-stone-800/70 to-black/90" />
        </div>

        {/* Content */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1
      }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="inline-block mb-6">
            <span className="px-6 py-2 bg-amber-700/20 border border-amber-600/30 rounded-full text-amber-300 text-sm font-semibold backdrop-blur-sm">
              Energy & Engineering Division
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Industrial
            <span className="block bg-gradient-to-r from-amber-500 to-[#d4af37] bg-clip-text text-transparent">
              Workforce Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Power your energy and engineering operations with HR technology built for technical excellence, safety, and operational efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 hover:scale-105">
              View Solutions
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </section>

      {/* Why VAMEFO Section */}
      <section className="py-24 bg-gradient-to-b from-black via-stone-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why VAMEFO for Energy & Engineering
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built to handle the complexity and demands of industrial and technical workforces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} whileHover={{
              scale: 1.02,
              y: -5
            }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 h-full hover:bg-white/10 hover:border-amber-600/30 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-600/20 to-amber-600/5 border border-amber-600/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-amber-500" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gradient-to-b from-black via-stone-950/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive HR platform for energy and engineering excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.05
          }} whileHover={{
            scale: 1.05
          }} className="group">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 h-full hover:border-amber-600/50 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CheckCircle2 className="w-6 h-6 text-[#d4af37] mb-4" />
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-500 transition-colors duration-300">
                    {solution.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-24 bg-gradient-to-b from-black to-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Trophy className="w-16 h-16 text-[#d4af37]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Technical Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep expertise across energy and engineering sectors
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="flex flex-wrap justify-center gap-4">
            {expertise.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            delay: index * 0.1
          }} whileHover={{
            scale: 1.1
          }} className="px-6 py-3 bg-gradient-to-r from-amber-600/20 to-amber-600/10 border border-amber-600/30 rounded-full text-white font-semibold backdrop-blur-sm hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300">
                {item}
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-stone-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Power Your Industrial Workforce
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join energy and engineering leaders who rely on VAMEFO
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#f4d57f] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-105">
              Start Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default EnergyPage;