import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Landmark, Scale, FileText, Shield, CheckCircle2, Award, ArrowRight, HardHat, Wrench, TrendingUp, Zap } from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PublicPage = ({ focusSection = null }) => {
  const benefits = [{
    icon: Scale,
    title: 'Government Compliance',
    description: 'Automated compliance with civil service regulations, labor laws, and public sector requirements.'
  }, {
    icon: FileText,
    title: 'Transparent Processes',
    description: 'Audit-ready HR processes with complete documentation and accountability tracking.'
  }, {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'Government-grade security standards for sensitive employee and citizen data protection.'
  }, {
    icon: Landmark,
    title: 'Budget Management',
    description: 'Integrated budget tracking and workforce cost optimization for public accountability.'
  }];
  
  const solutions = [{
    title: 'Civil Service Management',
    description: 'Complete lifecycle management for civil servants from recruitment to retirement.'
  }, {
    title: 'Merit-Based Hiring',
    description: 'Unbiased recruitment processes with automated scoring and compliance tracking.'
  }, {
    title: 'Performance Evaluations',
    description: 'Standardized performance review systems aligned with public sector standards.'
  }, {
    title: 'Pension Administration',
    description: 'Comprehensive pension and benefits management for government employees.'
  }, {
    title: 'Public Records Management',
    description: 'FOIA-compliant document management and public records request handling.'
  }, {
    title: 'Multi-Department Integration',
    description: 'Seamless HR coordination across government departments and agencies.'
  }];
  
  const compliance = ['FOIA Compliance', 'Equal Employment Opportunity', 'Veterans Preference', 'Public Sector Labor Relations', 'Ethics & Conduct Standards', 'Transparency Requirements'];

  const energyBenefits = [{
    icon: HardHat,
    title: 'Safety-First Operations',
    description: 'Industrial workforce oversight with strong governance, incident prevention, and workforce readiness controls.'
  }, {
    icon: Wrench,
    title: 'Technical Workforce Planning',
    description: 'Structured planning for engineers, field technicians, and critical project-based roles across complex environments.'
  }, {
    icon: TrendingUp,
    title: 'Project Staffing Visibility',
    description: 'Clear allocation of people and skills across capital projects, maintenance programs, and operational priorities.'
  }, {
    icon: Zap,
    title: 'Continuous Operations Support',
    description: 'HR processes designed for shifts, rotation models, remote sites, and operational resilience.'
  }];

  const energySolutions = ['Field Workforce Management', 'Certification Tracking', 'Shift & Rotation Planning', 'Contractor Management', 'Safety Compliance', 'Engineering Career Paths'];

  const energyExpertise = ['Oil & Gas Operations', 'Renewable Energy', 'Power Generation', 'Construction & EPC', 'Mining Operations', 'Industrial Manufacturing'];

  useEffect(() => {
    const shouldScroll = focusSection === 'energy' || window.location.hash === '#energy-engineering';

    if (!shouldScroll) {
      return;
    }

    const timer = window.setTimeout(() => {
      document.getElementById('energy-engineering')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);

    return () => window.clearTimeout(timer);
  }, [focusSection]);
  
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Public Sector & Energy HR Solutions | VAMEFO</title>
        <meta name="description" content="Specialized HR technology for public sector organizations, government bodies, and energy or engineering organizations with a unified governance-first approach." />
      </Helmet>

      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(9,115,146,0.14),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f4fbfd_100%)]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-sky-100 blur-3xl opacity-70" />
        <div className="absolute left-10 top-32 h-56 w-56 rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center rounded-full border border-sky-200 bg-white px-5 py-2 text-sm font-semibold text-public-primary shadow-sm">
                Public Sector Division
              </span>
              <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-950">
                Public Sector
                <span className="block bg-gradient-to-r from-public-primary via-sky-600 to-blue-400 bg-clip-text text-transparent">
                  HR Leadership
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-600">
                Trusted HR technology for government agencies and public sector organisations, built on principles of transparency, accountability and service excellence.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="public-primary" size="lg" className="rounded-full text-lg px-8 py-6" onClick={() => document.getElementById('public-solutions')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                  Explore Platform <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 border-sky-200 bg-white text-public-primary hover:bg-sky-50 hover:text-public-primary">
                  <Link to="/contact">
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <div className="rounded-[32px] border border-white bg-white/90 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <img
                  src="https://horizons-cdn.hostinger.com/da479a32-1c3b-46e9-97ae-0975870a6de4/shubham-mittal-orcuzgy16bi-unsplash-zGuYu.jpg"
                  alt="Government building"
                  className="h-[520px] w-full rounded-[24px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why VAMEFO Section */}
      <section className="py-24 bg-white relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-public-primary">
              Why VAMEFO for the Public Sector
            </h2>
            <p className="text-xl text-public-neutral max-w-3xl mx-auto">
              Designed specifically for the unique requirements of government and public sector HR
            </p>
            <div className="mt-4 w-24 h-1 bg-public-highlight mx-auto rounded-full"></div>
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 h-full shadow-lg hover:shadow-xl hover:border-public-secondary transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-public-secondary/20 border border-public-secondary/30 flex items-center justify-center mb-6 group-hover:bg-public-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7 text-public-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-public-primary">
                      {benefit.title}
                    </h3>

                    <p className="text-public-neutral leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* Solutions Section - Alternating Background */}
      <section id="public-solutions" className="py-24 bg-public-secondary/20 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-public-primary opacity-5 rounded-bl-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-public-primary">
              Our Solutions
            </h2>
            <p className="text-xl text-public-neutral max-w-3xl mx-auto">
              Comprehensive HR platform for transparent and efficient public sector management
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
                <div className="relative overflow-hidden rounded-xl bg-white p-6 h-full shadow-md hover:shadow-xl border-t-4 border-public-secondary hover:border-public-highlight transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6 text-public-highlight mb-4" />
                  
                  <h3 className="text-xl font-bold mb-3 text-public-primary group-hover:text-public-highlight transition-colors duration-300">
                    {solution.title}
                  </h3>

                  <p className="text-public-neutral text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Government Compliance Section - White Background */}
      <section className="py-24 bg-white">
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
              <Award className="w-16 h-16 text-public-highlight" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-public-primary">
              Government Compliance
            </h2>
            <p className="text-xl text-public-neutral max-w-3xl mx-auto">
              Full compliance with public sector regulations and standards
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
            {compliance.map((item, index) => <motion.div key={index} initial={{
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
          }} className="px-6 py-3 bg-public-secondary/10 border border-public-secondary text-public-primary font-semibold rounded-full hover:bg-public-highlight hover:text-white hover:border-public-highlight transition-all duration-300 cursor-default">
                {item}
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      <section id="energy-engineering" className="py-24 bg-public-secondary/10 scroll-mt-28">
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
            <span className="px-6 py-2 bg-public-primary/10 border border-public-secondary/40 rounded-full text-public-primary text-sm font-semibold backdrop-blur-sm">
              Energy & Engineering
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-public-primary">
              Energy & Engineering Within the Public Sector Hub
            </h2>
            <p className="text-xl text-public-neutral max-w-3xl mx-auto">
              The same governance-led VAMEFO platform also supports technical, industrial and infrastructure workforces with the visual framework of our Public Sector offering.
            </p>
            <div className="mt-4 w-24 h-1 bg-public-highlight mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {energyBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return <motion.div key={benefit.title} initial={{
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
              y: -4
            }} className="group">
                  <div className="rounded-2xl bg-white border border-gray-200 p-8 h-full shadow-lg hover:shadow-xl hover:border-public-secondary transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-public-secondary/20 border border-public-secondary/30 flex items-center justify-center mb-6 group-hover:bg-public-primary transition-colors duration-300">
                      <Icon className="w-7 h-7 text-public-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-public-primary">
                      {benefit.title}
                    </h3>

                    <p className="text-public-neutral leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>;
          })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="rounded-2xl bg-white border border-gray-200 shadow-lg p-8">
              <h3 className="text-3xl font-bold text-public-primary mb-6">
                Key Solutions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {energySolutions.map((solution, index) => <motion.div key={solution} initial={{
                opacity: 0,
                scale: 0.95
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.05
              }} className="rounded-xl border border-public-secondary/30 bg-public-secondary/10 p-5">
                    <CheckCircle2 className="w-5 h-5 text-public-highlight mb-3" />
                    <p className="font-semibold text-public-primary">{solution}</p>
                  </motion.div>)}
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="rounded-2xl bg-public-primary text-white shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-public-accent/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
              <h3 className="text-3xl font-bold mb-6 relative z-10">
                Sector Expertise
              </h3>
              <p className="text-lg text-blue-50 mb-6 relative z-10">
                We support public and quasi-public infrastructure environments where compliance, reliability and workforce continuity are mission-critical.
              </p>
              <div className="flex flex-wrap gap-3 relative z-10">
                {energyExpertise.map((item) => <div key={item} className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                    {item}
                  </div>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction 
        title="Modernize Your Public Sector and Technical Workforce HR" 
        subtitle="Join institutions and engineering-driven organizations trusting VAMEFO for workforce excellence"
        variant="public"
      />
    </div>
  );
};
export default PublicPage;
