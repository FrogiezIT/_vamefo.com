import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const LegalDisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Helmet>
        <title>Legal Disclaimer | VAMEFO</title>
        <meta
          name="description"
          content="Read the legal disclaimer governing the indicative use of VAMEFO assessment outputs, reports and website materials."
        />
      </Helmet>

      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              Legal Disclaimer
            </span>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-950">
              Important legal and
              <span className="block bg-gradient-to-r from-slate-950 via-slate-700 to-slate-400 bg-clip-text text-transparent">
                usage notice
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
              This page sets out the legal limitations applicable to VAMEFO&apos;s automated assessment outputs, reports and related website materials.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 md:p-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
          >
            <div className="space-y-8 text-slate-600">
              <div>
                <h2 className="text-2xl font-bold text-slate-950">1. Indicative nature of the assessment</h2>
                <p className="mt-4 text-lg leading-relaxed">
                  The VAMEFO assessment is an automated, high-level and indicative summary produced solely on the basis of self-declared information submitted by the participant. It is intended for preliminary orientation only and should not be interpreted as a definitive diagnostic, audit, or implementation-ready conclusion.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950">2. No legal, financial or professional advice</h2>
                <p className="mt-4 text-lg leading-relaxed">
                  Nothing in the assessment, PDF report, website content or related communications constitutes legal, contractual, regulatory, financial or other professional advice. The assessment does not create any legal obligation, commitment, representation, warranty or advisory relationship between VAMEFO Management Consultancy and the participant unless and until a separate formal engagement is agreed in writing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950">3. Reliance and decision-making</h2>
                <p className="mt-4 text-lg leading-relaxed">
                  Any interpretation, decision, action or implementation undertaken on the basis of the assessment without the direct involvement of VAMEFO Management Consultancy is done entirely at the participant&apos;s own risk. For the assessment to become actionable, binding, implementation-ready or suitable for executive decision-making, a direct engagement and more in-depth review with VAMEFO Management Consultancy is required.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950">4. Limitation of liability</h2>
                <p className="mt-4 text-lg leading-relaxed">
                  To the fullest extent permitted by applicable law, VAMEFO Management Consultancy disclaims all liability for any direct, indirect, incidental, consequential or special outcomes, damages, losses, costs or claims arising from the use of, distribution of, or reliance upon the assessment, the PDF report, or any related website materials.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950">5. Intellectual property and restricted use</h2>
                <p className="mt-4 text-lg leading-relaxed">
                  The assessment, the report, the methodology, the wording, the layout and all related contents are protected by copyright and all applicable intellectual property laws. Any unauthorised reproduction, distribution, publication, adaptation, commercial use or other misuse is strictly prohibited without the prior written consent of VAMEFO Management Consultancy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950">6. Contact for formal engagement</h2>
                <p className="mt-4 text-lg leading-relaxed">
                  If you require a formal assessment, advisory opinion, implementation support or a legally scoped professional engagement, please contact VAMEFO Management Consultancy directly so that an appropriate mandate can be discussed and documented.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegalDisclaimerPage;
