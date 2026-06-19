import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { submitWeb3Form } from '@/lib/web3forms';

const WebinarRegistrationPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    title: '',
    location: '',
    company: '',
    email: '',
    phone: '',
    linkedin: '',
    joiningReason: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await submitWeb3Form({
        subject: `Webinar Registration - ${form.fullName}`,
        from_name: 'VAMEFO Webinar Registration',

        full_name: form.fullName,
        title: form.title,
        location: form.location,
        company: form.company,
        email: form.email,
        phone: form.phone,
        linkedin: form.linkedin,
        joining_reason: form.joiningReason,

        replyto: form.email,
      });

      setSubmitted(true);

      setForm({
        fullName: '',
        title: '',
        location: '',
        company: '',
        email: '',
        phone: '',
        linkedin: '',
        joiningReason: '',
      });
    } catch (submitError) {
      setError(
        submitError.message ||
          'There was a problem submitting your registration.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Helmet>
        <title>Webinar Registration | VAMEFO</title>
        <meta
          name="description"
          content="Register for our workforce transformation webinar."
        />
      </Helmet>

 
      <section className="pt-40 py-20 bg-[#f4f7fb]">

      {/* Heading */}
      <div className="text-center mb-12">
      
       <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
        Global Workforce Architecture 2030:
      </h2>

      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        Management, Strategy, Outcome
      </p>
      </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[3fr_2.5fr] gap-10">     
          {/* LEFT SIDE */}
          <div className="space-y-8">

        
      <section className="bg-[#eef6fc] py-12 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Speakers */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Speaker 1 */}
      <div className="text-center">
        <div className="overflow-hidden rounded-2xl border-4 border-yellow-400 bg-white">
          <img
            src="/image-2935360_1280 (1).png"
            alt="Orli Becker"
            className="w-full h-[120px] object-cover"
          />
        </div>

        <h3 className="mt-4 text-2xl font-bold text-[#003c7d]">
          Orli Becker
        </h3>

        <p className="text-lg text-gray-700">AMS</p>
      </div>

      {/* Speaker 2 */}
      <div className="text-center">
        <div className="overflow-hidden rounded-2xl border-4 border-blue-500 bg-white">
          <img
            src="/image-2935360_1280 (1).png"
            alt="Nick Clagnaz"
            className="w-full h-[120px] object-cover"
          />
        </div>

        <h3 className="mt-4 text-2xl font-bold text-[#003c7d]">
          Nick Clagnaz
        </h3>

        <p className="text-lg text-gray-700">Broadridge</p>
      </div>

      {/* Speaker 3 */}
      <div className="text-center">
        <div className="overflow-hidden rounded-2xl border-4 border-blue-500 bg-white">
          <img
            src="/image-2935360_1280 (1).png"
            alt="Tom Carrigan"
            className="w-full h-[120px] object-cover"
          />
        </div>

        <h3 className="mt-4 text-2xl font-bold text-[#003c7d]">
          Tom Carrigan
        </h3>

        <p className="text-lg text-gray-700">NatWest</p>
      </div>

      {/* Speaker 4 */}
      <div className="text-center">
        <div className="overflow-hidden rounded-2xl border-4 border-green-500 bg-white">
          <img
            src="/image-2935360_1280 (1).png"
            alt="Matthew Rodger"
            className="w-full h-[120px] object-cover"
          />
        </div>

        <h3 className="mt-4 text-2xl font-bold text-[#003c7d]">
          Matthew Rodger
        </h3>

        <p className="text-lg text-gray-700">AMS</p>
      </div>

      {/* Moderator */}
      <div className="text-center relative">
        <div className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full z-10">
          MODERATOR
        </div>

        <div className="overflow-hidden rounded-2xl border-4 border-blue-500 bg-white">
          <img
            src="/image-2935360_1280 (1).png"
            alt="Angela Price"
            className="w-full h-[120px] object-cover"
          />
        </div>

        <h4 className="mt-4 text-2xl font-bold text-[#003c7d]">
          Angela Price
        </h4>

        <p className="text-lg text-gray-700">SIIS</p>
      </div>

    </div>

    {/* Bottom Banner */}
    <div className="mt-12 rounded-full overflow-hidden">
      <div className="bg-gradient-to-r from-[#f4a000] to-[#00a7e1] text-white text-center py-5 px-6 font-semibold text-xl">
        Thursday, 30th June 2026 / 9AM CET / 11AM GST / 1PM AST / 5PM SGT
      </div>
    </div>

  </div>
</section>
          </div>

          {/* RIGHT SIDE FORM START */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)] space-y-5"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Register for the Webinar
            </h2>

            <p className="text-slate-600">
              Complete the form below to reserve your seat.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="Full Name *"
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400"
              />

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="Job Title *"
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                placeholder="City, Country *"
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400"
              />

              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                placeholder="Company Name *"
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400"
              />
            </div>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Business Email *"
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number (Optional)"
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400"
            />

            <input
              type="url"
              name="linkedin"
              value={form.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn Profile URL (Optional)"
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400"
            />

            <select
              name="joiningReason"
              value={form.joiningReason}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-slate-400"
            >
              <option value="">Why are you joining?</option>
              <option value="HR Technology">
                Learn about HR technology trends
              </option>
              <option value="Workforce Planning">
                Improve workforce planning
              </option>
              <option value="Digital Transformation">
                Support digital transformation initiatives
              </option>
              <option value="Leadership Development">
                Leadership and organizational development
              </option>
              <option value="Networking">
                Connect with industry professionals
              </option>
              <option value="General Interest">
                General interest
              </option>
              <option value="Other">
                Other
              </option>
            </select>

            <button
              disabled={submitting}
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
            >
              {submitting ? 'Registering...' : 'Register for Webinar'}
              <Send className="ml-2 h-5 w-5" />
            </button>

            {submitted && (
              <p className="text-sm text-emerald-700">
                Thank you for registering. Webinar access details will be
                sent to your email.
              </p>
            )}

            {error && (
              <p className="text-sm text-red-600">
                {error}
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default WebinarRegistrationPage;
