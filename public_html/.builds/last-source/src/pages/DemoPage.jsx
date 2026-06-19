import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AssessmentSection from '@/components/AssessmentSection';
import { submitWeb3Form } from '@/lib/web3forms';

const DemoPage = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    sector: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await submitWeb3Form({
        subject: `Assessment Follow-Up Request - ${form.company || form.name || 'VAMEFO Website'}`,
        from_name: 'VAMEFO Assessment Follow-Up',
        name: form.name,
        company: form.company,
        email: form.email,
        replyto: form.email,
        sector: form.sector,
        message: form.message || 'No extra notes provided.',
      });

      setSubmitted(true);
      setForm({
        name: '',
        company: '',
        email: '',
        sector: '',
        message: '',
      });
    } catch (submitError) {
      setError(submitError.message || 'There was a problem sending your request.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Helmet>
        <title>FREE Assessment | VAMEFO</title>
        <meta name="description" content="Start the VAMEFO assessment and share your organisation, goals and workforce priorities." />
      </Helmet>

      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700">
              FREE Assessment
            </span>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-950">
              Start with your priorities,
              <span className="block bg-gradient-to-r from-slate-950 via-slate-700 to-slate-400 bg-clip-text text-transparent">
                then assess your workforce architecture
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
              Begin with the assessment and tell us about your organisation, goals and workforce priorities. We will use that context for any follow-up conversation.
            </p>
          </motion.div>
        </div>
      </section>

      <AssessmentSection
        theme="light"
        intro="Complete this assessment first to give our team a sharper view of your maturity level. It helps us tailor any follow-up conversation to your governance, workforce planning and operating priorities."
      />

      <section className="py-20 bg-[#f4f7fb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
              <CalendarDays className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-slate-950">What happens next</h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <p>We review your message and align the conversation with your sector and workforce priorities.</p>
              <p>You receive a tailored follow-up based on the assessment and your stated priorities.</p>
              <p>Our team follows up directly through your email client once you send the request.</p>
            </div>
          </div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} onSubmit={handleSubmit} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)] space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400" />
              <input name="company" value={form.company} onChange={handleChange} required placeholder="Company name" className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Work email" className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400" />
              <input name="sector" value={form.sector} onChange={handleChange} placeholder="Sector or division" className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400" />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} rows="6" placeholder="What would you like us to focus on?" className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400" />
            <button disabled={submitting} type="submit" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60">
              {submitting ? 'Sending...' : 'Send Request'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            {submitted && <p className="text-sm text-emerald-700">Request sent successfully. We&apos;ll receive your contact details and priorities by email.</p>}
            {error && <p className="text-sm text-red-600">{error}</p>}
          </motion.form>
        </div>
      </section>

      <section className="py-24 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="rounded-[36px] border border-slate-200 bg-white p-10 md:p-14 shadow-[0_30px_80px_rgba(15,23,42,0.08)] text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                <Sparkles className="h-8 w-8 text-[#d4af37]" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950">
              You now have a strong starting point for the conversation
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Now that you have this assessment, we invite you to continue the conversation with VAMEFO. Our team can review your likely maturity profile, highlight the most relevant use cases for your organisation, and show how the platform can support your next stage of growth.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-500 max-w-3xl mx-auto">
              If you would like a more detailed review based on your results, please take contact with us and we will prepare a focused walkthrough for your sector, priorities and leadership team.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/documentation"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Review Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
