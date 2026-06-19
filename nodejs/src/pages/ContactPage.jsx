import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { submitWeb3Form } from '@/lib/web3forms';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
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
        subject: `Website Contact - ${form.company || form.name || 'VAMEFO'}`,
        from_name: 'VAMEFO Website Contact',
        name: form.name,
        company: form.company,
        email: form.email,
        replyto: form.email,
        message: form.message || 'No message provided.',
      });

      setSubmitted(true);
      setForm({
        name: '',
        company: '',
        email: '',
        message: '',
      });
    } catch (submitError) {
      setError(submitError.message || 'There was a problem sending your message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Helmet>
        <title>Contact VAMEFO</title>
        <meta name="description" content="Contact VAMEFO for HR technology consulting, workforce strategy and implementation support." />
      </Helmet>

      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700">
              Contact
            </span>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-950">
              Let&apos;s talk about
              <span className="block bg-gradient-to-r from-slate-950 via-slate-700 to-slate-400 bg-clip-text text-transparent">
                your workforce priorities
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
              Reach out for a documentation review or a broader conversation about HR operating model transformation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#f4f7fb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                <Mail className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-slate-950">Email us</h2>
              <a href="mailto:info@vamefo.com" className="mt-4 inline-block text-lg font-semibold text-slate-700 hover:text-slate-950">
                info@vamefo.com
              </a>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                <Phone className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-slate-950">Call us</h2>
              <a href="tel:+971561968643" className="mt-4 inline-block text-lg font-semibold text-slate-700 hover:text-slate-950">
                +971 56 196 8643
              </a>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                <MapPin className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-slate-950">Address</h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-700">
                IFZA Business Park, DDP, PO Box 342001, Dubai, United Arab Emirates.
              </p>
            </div>
          </div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} onSubmit={handleSubmit} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)] space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400" />
              <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400" />
            </div>
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Work email" className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400" />
            <textarea name="message" value={form.message} onChange={handleChange} rows="7" placeholder="Tell us what you need" className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400" />
            <button disabled={submitting} type="submit" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60">
              {submitting ? 'Sending...' : 'Send Message'}
              <Send className="ml-2 h-5 w-5" />
            </button>
            {submitted && <p className="text-sm text-emerald-700">Message sent successfully. We&apos;ll receive your contact details and message by email.</p>}
            {error && <p className="text-sm text-red-600">{error}</p>}
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
