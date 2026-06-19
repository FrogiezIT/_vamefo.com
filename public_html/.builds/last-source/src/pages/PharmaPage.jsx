import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, BarChart3, CheckCircle2, Clock, Shield, Users } from 'lucide-react';

const PharmaPage = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Stay aligned with FDA, EMA and global quality expectations using structured audit-ready HR workflows.',
    },
    {
      icon: Users,
      title: 'Scientific Talent Management',
      description: 'Attract and retain specialist talent across R&D, quality, manufacturing and clinical operations.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Workforce Analytics',
      description: 'Surface sharper insights on productivity, capability, headcount planning and programme staffing.',
    },
    {
      icon: Clock,
      title: 'Time-to-Market Acceleration',
      description: 'Reduce organisational drag with faster approvals, cleaner governance and workforce planning discipline.',
    },
  ];

  const solutions = [
    {
      title: 'Clinical Trial Staffing',
      description: 'Coordinate research teams across multiple trial sites, sponsors and delivery timelines.',
    },
    {
      title: 'R&D Workforce Planning',
      description: 'Support scientific teams with strategic resourcing and capacity planning for innovation programmes.',
    },
    {
      title: 'Quality Assurance HR',
      description: 'Ensure QA and QC teams operate with the right governance, training and role coverage.',
    },
    {
      title: 'Regulatory Training',
      description: 'Automate compliance training pathways and certification monitoring for critical functions.',
    },
    {
      title: 'Lab Safety Management',
      description: 'Track protocols, responsibilities and incident readiness for laboratory environments.',
    },
    {
      title: 'Scientific Career Paths',
      description: 'Build retention with structured progression models for specialist and leadership talent.',
    },
  ];

  const expertise = [
    'FDA 21 CFR Part 11',
    'GMP / GLP Standards',
    'Clinical Trial Management',
    'Pharmaceutical R&D',
    'Biotech Innovation',
    'Drug Manufacturing',
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Helmet>
        <title>Pharma & Biotech HR Solutions | VAMEFO</title>
        <meta
          name="description"
          content="Premium HR technology for pharmaceutical and biotech organisations in Dubai. Strengthen compliance, optimise specialist workforces and support innovation."
        />
      </Helmet>

      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.14),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)]" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                Pharma & Biotech Division
              </span>
              <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-950">
                HR infrastructure for
                <span className="block bg-gradient-to-r from-blue-800 via-blue-600 to-sky-400 bg-clip-text text-transparent">
                  regulated scientific growth
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-600">
                A premium people platform for pharmaceutical and biotech organisations that need precision, governance and executive-ready visibility.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center rounded-full bg-blue-700 px-8 py-4 text-white font-semibold shadow-[0_18px_40px_rgba(37,99,235,0.24)] transition hover:bg-blue-800">
                  FREE Assessment
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-8 py-4 text-blue-700 font-semibold transition hover:border-blue-300 hover:bg-blue-50">
                  View Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <div className="rounded-[32px] border border-white bg-white/90 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <img
                  src="https://horizons-cdn.hostinger.com/da479a32-1c3b-46e9-97ae-0975870a6de4/national-cancer-institute-w6yy0wyv-hk-unsplash-mgEOv.jpg"
                  alt="Pharmaceutical laboratory"
                  className="h-[520px] w-full rounded-[24px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950">Why VAMEFO for Pharma & Biotech</h2>
            <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
              Enterprise-grade HR technology shaped around regulated workforces, specialist capability and board-level control.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-950">{benefit.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f5f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950">Solution Portfolio</h2>
            <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
              A refined operating stack for compliance-heavy environments where quality and speed both matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-[24px] border border-blue-100 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
              >
                <CheckCircle2 className="h-6 w-6 text-blue-700" />
                <h3 className="mt-4 text-xl font-bold text-slate-950">{solution.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <Award className="h-14 w-14 text-blue-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950">Industry Expertise</h2>
            <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
              Built for organisations working under intense regulatory scrutiny and specialist talent pressure.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {expertise.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-800"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950">Ready to modernise your pharma workforce model?</h2>
            <p className="mt-6 text-xl text-slate-600">
              Join leading pharmaceutical and biotech organisations using VAMEFO to scale with more control.
            </p>
            <button className="mt-10 inline-flex items-center justify-center rounded-full bg-slate-950 px-10 py-5 text-lg font-semibold text-white transition hover:bg-slate-800">
              FREE Assessment
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PharmaPage;
