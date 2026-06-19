import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Compass, Globe2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: Compass,
    title: 'Value, Mentorship & Focus',
    description:
      'VAMEFO was born from a simple belief: real value is created when people and organisations focus on what truly matters.',
  },
  {
    icon: ShieldCheck,
    title: 'Structured Workforce Governance',
    description:
      'We help leaders design, structure and govern workforce models that support performance, resilience and sustainable growth.',
  },
  {
    icon: Globe2,
    title: 'Built for High-Growth Markets',
    description:
      'Our work is shaped for ambitious, fast-transforming and highly regulated environments across Dubai, the UAE and the wider MENA region.',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Helmet>
        <title>About VAMEFO | Management Consultancy</title>
        <meta
          name="description"
          content="Learn about VAMEFO Management Consultancy, a Dubai-based advisory firm helping organisations build disciplined, resilient and future-ready workforce models."
        />
      </Helmet>

      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-slate-200/50 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              About- VAMEFO
            </span>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-950">
              A new generation advisory firm
              <span className="block bg-gradient-to-r from-slate-950 via-slate-700 to-slate-400 bg-clip-text text-transparent">
                for workforce architecture and growth
              </span>
            </h1>
            <p className="mt-6 max-w-4xl text-xl leading-relaxed text-slate-600">
              VAMEFO Management Consultancy was born from a simple yet powerful belief: that real value is created by helping people and organisations focus on what truly matters.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-500">
              What began as an individual mindset centred on value creation, guided mentorship and purposeful focus has evolved into a collective of experienced professionals serving both public and private sector organisations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-slate-950">{pillar.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f4f7fb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 lg:grid-cols-[1fr_1fr]"
          >
            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-4 text-slate-900">
                <Building2 className="h-10 w-10 text-[#d4af37]" />
                <h2 className="text-3xl md:text-4xl font-bold">Why we exist</h2>
              </div>
              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                With humility and pride, we count ourselves among a new generation of advisory firms dedicated to one critical question: how to design, structure and govern a workforce that enables performance, resilience and sustainable growth.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-slate-500">
                At its core, VAMEFO&apos;s mission remains unchanged: to help others grow, turning intent into structure, vision into execution and ambition into sustainable workforce outcomes.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-4 text-slate-900">
                <Globe2 className="h-10 w-10 text-slate-800" />
                <h2 className="text-3xl md:text-4xl font-bold">Where we operate</h2>
              </div>
              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                Operating in some of the world&apos;s most ambitious and fast-transforming markets, we work in environments shaped by economic diversification, record employment growth, intensifying competition for talent, evolving labour regulations and workforce nationalisation goals.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-slate-500">
                VAMEFO is strategically based in IFZA, Dubai, UAE, at the intersection of global talent flows, regional decision-making and international business ecosystems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950">Our perspective on workforce management</h2>
            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              We view workforce management not as an operational function, but as a cornerstone of growth, innovation and socio-economic stability. It enables organisations to perform while contributing to secure, meaningful livelihoods for individuals.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Our expertise is rooted in extensive EMEA experience, refined over years of supporting multinational and complex organisations, and adapted to the unique needs, ambitions and sensitivities of markets across MENA today.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Through structured approaches spanning in-house models, RPO, MSP, hybrid solutions and enabling technology, we help organisations build coherent workforce architectures aligned with their mission, values and long-term objectives.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#f4f7fb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950">How we work</h2>
            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              We work patiently and deliberately: mentoring leaders, strengthening governance and designing systems that allow institutions, companies and ultimately people to thrive.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              In fast-growth and highly regulated environments, this means helping organisations create disciplined, compliant, scalable and future-ready workforce models that bring clarity under pressure.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800">
                Contact VAMEFO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/demo" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-800 transition hover:bg-slate-50">
                FREE Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
