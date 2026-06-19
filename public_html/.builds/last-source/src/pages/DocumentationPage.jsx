import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Layers3, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    icon: Layers3,
    title: 'Platform Overview',
    description: 'Understand how VAMEFO structures employee lifecycle workflows, approvals, reporting and sector configuration.',
  },
  {
    icon: Shield,
    title: 'Governance & Compliance',
    description: 'Explore documentation patterns for policy control, audit readiness and role-based accountability.',
  },
  {
    icon: FileText,
    title: 'Implementation Guides',
    description: 'Review rollout recommendations, operating model design and stakeholder enablement guidance.',
  },
];

const DocumentationPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Helmet>
        <title>Documentation | VAMEFO</title>
        <meta
          name="description"
          content="Browse VAMEFO documentation covering platform capabilities, governance patterns and implementation guidance."
        />
      </Helmet>

      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700">
              Documentation
            </span>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-950">
              Everything teams need
              <span className="block bg-gradient-to-r from-slate-950 via-slate-700 to-slate-400 bg-clip-text text-transparent">
                to understand the platform
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
              Browse core guidance on workforce governance, implementation design, executive adoption and sector-specific use cases.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-slate-950">{resource.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">{resource.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-4">
              <BookOpen className="h-10 w-10 text-[#d4af37]" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950">Need implementation help?</h2>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Our team can walk you through the documentation, translate it into your operating model and tailor the rollout plan to your organisation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/demo" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800">
                FREE Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-800 transition hover:bg-slate-50">
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage;
