import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Eye, Network, ShieldCheck, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

const HealthPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const activeBenefitRef = useRef(null);
  const benefits = [
    {
      icon: Wallet,
      key: 'cost-control',
      title: t('Workforce Cost Control', 'ضبط تكلفة القوى العاملة'),
      description: t('Design workforce models that balance capability, cost efficiency and business continuity without losing operational control.', 'تصميم نماذج قوى عاملة توازن بين القدرات وكفاءة التكلفة واستمرارية الأعمال من دون فقدان السيطرة التشغيلية.'),
      detailTitle: t('Control cost with clearer workforce choices', 'تحكم أفضل بالتكلفة من خلال خيارات قوى عاملة أوضح'),
      detailCopy: t('VAMEFO helps leadership teams reduce fragmented sourcing decisions and build workforce models that protect both cost discipline and delivery quality.', 'تساعد فاميفو فرق القيادة على تقليل قرارات التوريد المجزأة وبناء نماذج قوى عاملة تحمي الانضباط المالي وجودة التنفيذ معاً.'),
      bullets: [t('Align workforce cost with business priorities', 'مواءمة تكلفة القوى العاملة مع أولويات الأعمال'), t('Reduce fragmented sourcing decisions', 'تقليل قرارات التوريد المجزأة'), t('Strengthen continuity without over-hiring', 'تعزيز الاستمرارية من دون الإفراط في التوظيف')],
      models: ['MSP', 'RPO', 'Hybrid Workforce'],
    },
    {
      icon: ShieldCheck,
      key: 'governance',
      title: t('Governance-Driven Delivery', 'تنفيذ قائم على الحوكمة'),
      description: t('Strengthen governance across workforce processes, supplier decisions and talent flows with a clearer operating framework.', 'تعزيز الحوكمة عبر عمليات القوى العاملة وقرارات الموردين وتدفقات المواهب ضمن إطار تشغيلي أوضح.'),
      detailTitle: t('Make governance part of workforce execution', 'اجعل الحوكمة جزءاً من تنفيذ القوى العاملة'),
      detailCopy: t('We embed stronger controls across supplier choices, approvals and workforce accountability so growth does not create unmanaged risk.', 'نرسخ ضوابط أقوى في اختيارات الموردين والموافقات والمساءلة حتى لا يتحول النمو إلى مخاطر غير مُدارة.'),
      bullets: [t('Clearer controls across sourcing and suppliers', 'ضوابط أوضح عبر التوريد والموردين'), t('Improved compliance and audit readiness', 'امتثال أفضل واستعداد أعلى للتدقيق'), t('More disciplined workforce decision-making', 'قرارات قوى عاملة أكثر انضباطاً')],
      models: ['MSP', 'VMS', 'Governance Design'],
    },
    {
      icon: Network,
      key: 'architecture',
      title: t('Structured Talent Architecture', 'هندسة مواهب منظمة'),
      description: t('Transform fragmented labour streams into structured, transparent and scalable workforce models aligned with business priorities.', 'تحويل تدفقات العمل المجزأة إلى نماذج قوى عاملة منظمة وشفافة وقابلة للتوسع ومتوافقة مع أولويات الأعمال.'),
      detailTitle: t('Turn fragmented hiring into a scalable model', 'حوّل التوظيف المجزأ إلى نموذج قابل للتوسع'),
      detailCopy: t('We help organisations architect fit-for-purpose sourcing strategies that create more transparent, structured and scalable talent flows.', 'نساعد المؤسسات على تصميم استراتيجيات توريد مناسبة للغرض تخلق تدفقات مواهب أكثر شفافية وتنظيماً وقابلية للتوسع.'),
      bullets: [t('Structure in-house, outsourced and hybrid delivery models', 'هيكلة نماذج التنفيذ الداخلية والخارجية والهجينة'), t('Create transparency across labour channels', 'إيجاد شفافية عبر قنوات العمل'), t('Support scale with a fit-for-purpose design', 'دعم التوسع بتصميم مناسب للغرض')],
      models: ['RPO', 'MSP', 'Hybrid Workforce'],
    },
    {
      icon: Eye,
      key: 'visibility',
      title: t('Visibility Across Delivery Models', 'رؤية أوضح عبر نماذج التنفيذ'),
      description: t('Gain sharper visibility across in-house, RPO, MSP and hybrid workforce approaches to improve resilience and decision quality.', 'احصل على رؤية أدق عبر النماذج الداخلية وRPO وMSP والنماذج الهجينة لتحسين المرونة وجودة القرار.'),
      detailTitle: t('See the model clearly before risk builds', 'شاهد النموذج بوضوح قبل تراكم المخاطر'),
      detailCopy: t('With better visibility across in-house, MSP, VMS and RPO structures, leaders can make stronger decisions on cost, risk and workforce quality.', 'مع رؤية أفضل عبر هياكل العمل الداخلية وMSP وVMS وRPO، يستطيع القادة اتخاذ قرارات أقوى حول التكلفة والمخاطر وجودة القوى العاملة.'),
      bullets: [t('Improve decision quality across sourcing models', 'تحسين جودة القرار عبر نماذج التوريد'), t('Manage risk through better visibility', 'إدارة المخاطر عبر رؤية أوضح'), t('Elevate workforce quality with clearer data', 'رفع جودة القوى العاملة ببيانات أوضح')],
      models: ['VMS', 'RPO', 'MSP'],
    },
  ];
  const [activeBenefit, setActiveBenefit] = useState(benefits[0]);

  const handleBenefitSelect = (benefit) => {
    setActiveBenefit(benefit);

    if (window.innerWidth < 1024) {
      window.setTimeout(() => {
        activeBenefitRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
  };

  const solutions = [
    {
      title: t('Sourcing Model Design', 'تصميم نماذج التوريد'),
      description: t('Fit-for-purpose in-house, RPO, MSP and hybrid sourcing strategies aligned with business priorities.', 'استراتيجيات توريد داخلية وRPO وMSP وهجينة مناسبة للغرض ومتوافقة مع أولويات الأعمال.'),
    },
    {
      title: t('Supplier Governance', 'حوكمة الموردين'),
      description: t('Clear supplier controls, performance visibility and compliant decision frameworks.', 'ضوابط واضحة للموردين ورؤية للأداء وأطر قرار متوافقة.'),
    },
    {
      title: t('Workforce Continuity', 'استمرارية القوى العاملة'),
      description: t('Operating models that protect delivery quality through demand shifts and growth cycles.', 'نماذج تشغيل تحمي جودة التنفيذ خلال تغير الطلب ودورات النمو.'),
    },
    {
      title: t('Cost Visibility', 'رؤية التكلفة'),
      description: t('Sharper reporting on workforce spend, hiring economics and delivery efficiency.', 'تقارير أوضح حول إنفاق القوى العاملة واقتصاديات التوظيف وكفاءة التنفيذ.'),
    },
    {
      title: t('Risk & Compliance', 'المخاطر والامتثال'),
      description: t('Controls that reduce fragmented hiring, unmanaged suppliers and compliance exposure.', 'ضوابط تقلل التوظيف المجزأ والموردين غير المُدارين والتعرض للامتثال.'),
    },
    {
      title: t('Technology Enablement', 'التمكين التقني'),
      description: t('VMS and reporting structures that bring transparency to workforce decisions.', 'هياكل VMS وتقارير تضيف الشفافية إلى قرارات القوى العاملة.'),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-900">
      <Helmet>
        <title>{t('Private Sector HR Solutions | VAMEFO', 'حلول الموارد البشرية للقطاع الخاص | فاميفو')}</title>
        <meta
          name="description"
          content={t('Premium HR technology for private sector organisations in Dubai. Improve workforce execution, compliance and people performance.', 'حلول تقنية واستشارية متقدمة للموارد البشرية لمؤسسات القطاع الخاص في دبي، لتحسين التنفيذ والامتثال وأداء القوى العاملة.')}
        />
      </Helmet>

      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f6fbf8_100%)]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                {t('Private Sector Division', 'قسم القطاع الخاص')}
              </span>
              <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-950">
                {t('Workforce architecture for', 'هندسة قوى عاملة من أجل')}
                <span className="block bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  {t('resilient private sector growth', 'نمو مرن في القطاع الخاص')}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-600">
                {t('VAMEFO Management Consultancy partners with private-sector organizations to help them embed control, cost efficiency and business continuity in their workforce models.', 'تتعاون فاميفو للاستشارات الإدارية مع مؤسسات القطاع الخاص لترسيخ الضبط وكفاءة التكلفة واستمرارية الأعمال داخل نماذج القوى العاملة.')}
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-500">
                {t('We advise on how to architect different types of workforce, transforming fragmented talent flows into structured, transparent and scalable labor models.', 'نقدم المشورة حول كيفية هندسة أنواع مختلفة من القوى العاملة، وتحويل تدفقات المواهب المجزأة إلى نماذج عمل منظمة وشفافة وقابلة للتوسع.')}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button onClick={() => document.getElementById('health-solutions')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-white font-semibold shadow-[0_18px_40px_rgba(16,185,129,0.24)] transition hover:bg-emerald-700">
                  {t('Discover Solutions', 'استكشف الحلول')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button onClick={() => navigate('/demo')} className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-8 py-4 text-emerald-700 font-semibold transition hover:border-emerald-300 hover:bg-emerald-50">
                  {t('FREE Assessment', 'التقييم المجاني')}
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <div className="rounded-[32px] border border-white bg-white/90 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <img
                  src="/private-sector-hero-v2.jpg"
                  alt="Healthcare clinic"
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950">{t('Why VAMEFO for the Private Sector', 'لماذا فاميفو للقطاع الخاص')}</h2>
            <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
              {t('By aligning strategy with governance, processes, suppliers and enabling technology, we help organizations gain clarity, resilience and stronger continuity across workforce delivery.', 'من خلال مواءمة الاستراتيجية مع الحوكمة والعمليات والموردين والتقنية الداعمة، نساعد المؤسسات على اكتساب وضوح أكبر ومرونة واستمرارية أقوى في تنفيذ القوى العاملة.')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isActive = activeBenefit.key === benefit.key;
                return (
                  <motion.button
                    key={benefit.title}
                    type="button"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    whileHover={{ y: -4 }}
                    onClick={() => handleBenefitSelect(benefit)}
                    className={`rounded-[28px] border p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)] text-left cursor-pointer transition-all duration-300 ${
                      isActive
                        ? 'border-emerald-300 bg-[linear-gradient(180deg,#ffffff_0%,#f2fbf7_100%)] shadow-[0_28px_70px_rgba(16,185,129,0.12)]'
                        : 'border-slate-200 bg-white hover:border-emerald-200'
                    }`}
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-emerald-50 text-emerald-700'}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold text-slate-950">{benefit.title}</h3>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${isActive ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {isActive ? t('Selected', 'محدد') : t('Open', 'افتح')}
                      </span>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">{benefit.description}</p>
                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-700">
                      {isActive ? t('Viewing details', 'عرض التفاصيل') : t('View details', 'عرض التفاصيل')}
                      <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${isActive ? 'translate-x-1' : ''}`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              ref={activeBenefitRef}
              key={activeBenefit.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:sticky lg:top-28 rounded-[32px] border border-emerald-200 bg-[linear-gradient(135deg,#ffffff_0%,#f4fbf7_100%)] p-8 md:p-10 shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
            >
              <div className="grid gap-8">
                <div>
                  <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    {t('VAMEFO Approach', 'منهجية فاميفو')}
                  </span>
                  <h3 className="mt-6 text-3xl md:text-4xl font-bold text-slate-950">{activeBenefit.detailTitle}</h3>
                  <p className="mt-5 text-lg leading-relaxed text-slate-600">{activeBenefit.detailCopy}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {activeBenefit.models.map((model) => (
                      <span key={model} className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white bg-white/90 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{t('What This Unlocks', 'ما الذي يتيحه ذلك')}</div>
                  <div className="mt-5 space-y-4">
                    {activeBenefit.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <p className="text-base leading-relaxed text-slate-600">{bullet}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate('/demo')}
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    {t('Request Assessment', 'اطلب التقييم')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="health-solutions" className="py-24 bg-[#f4faf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950">{t('Private Sector Solutions', 'حلول القطاع الخاص')}</h2>
            <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
              {t('In fast-growing, highly regulated markets, access to the right talent at the right cost and under the right controls is a critical business enabler.', 'في الأسواق سريعة النمو وعالية التنظيم، يعد الوصول إلى المواهب المناسبة بالتكلفة المناسبة وتحت الضوابط الصحيحة عاملاً حاسماً لتمكين الأعمال.')}
            </p>
            <p className="mt-4 text-lg text-slate-500 max-w-4xl mx-auto leading-relaxed">
              {t('VAMEFO helps leadership teams strengthen workforce control, improve visibility and align in-house, RPO, MSP and hybrid sourcing models with sustainable business growth.', 'تساعد فاميفو فرق القيادة على تعزيز ضبط القوى العاملة وتحسين الرؤية ومواءمة النماذج الداخلية وRPO وMSP والهجينة مع النمو المستدام للأعمال.')}
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
                className="rounded-[24px] border border-emerald-100 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
              >
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-950">{solution.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[linear-gradient(180deg,#ffffff_0%,#effaf4_100%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
              {t('Next Step', 'الخطوة التالية')}
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-950">{t('Continue the conversation with VAMEFO', 'تابع الحوار مع فاميفو')}</h2>
            <p className="mt-5 text-xl leading-relaxed text-slate-600">
              {t('If you would like to discuss your workforce model, supplier strategy or governance priorities, our team can guide the next step.', 'إذا كنت ترغب في مناقشة نموذج القوى العاملة أو استراتيجية الموردين أو أولويات الحوكمة، يستطيع فريقنا إرشادك إلى الخطوة التالية.')}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {t('Contact', 'تواصل معنا')}
              </button>
              <button
                onClick={() => navigate('/demo')}
                className="inline-flex min-w-[190px] items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(16,185,129,0.22)] transition hover:bg-emerald-700"
              >
                {t('FREE Assessment', 'التقييم المجاني')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthPage;
