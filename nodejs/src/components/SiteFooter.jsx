import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const SiteFooter = () => {
  const { t } = useLanguage();
  const navGroups = [
    {
      title: t('Navigation', 'التنقل'),
      links: [
        { label: t('Home', 'الرئيسية'), to: '/' },
        { label: t('About', 'من نحن'), to: '/about' },
        { label: t('Contact', 'تواصل معنا'), to: '/contact' },
        { label: t('Documentation', 'الوثائق'), to: '/documentation' },
        { label: t('Legal Disclaimer', 'إخلاء المسؤولية القانونية'), to: '/legal-disclaimer' },
      ],
    },
    {
      title: t('Sectors', 'القطاعات'),
      links: [
        { label: t('Private Sector', 'القطاع الخاص'), to: '/health' },
        { label: t('Public Sector', 'القطاع العام'), to: '/public' },
        { label: t('Energy & Engineering', 'الطاقة والهندسة'), to: '/energy' },
        { label: t('FREE Assessment', 'التقييم المجاني'), to: '/demo' },
      ],
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eef5fb_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <img src="/vamefo-brandmark-v2.png" alt="VAMEFO logo" className="h-14 w-14 rounded-2xl object-contain" />
              <div>
                <div className="text-2xl font-bold tracking-tight text-slate-950">VAMEFO</div>
                <div className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">{t('Management Consultancy', 'استشارات إدارية')}</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
              {t(
                'Workforce strategy, sourcing governance and resilient operating models for private and public sector organisations.',
                'استراتيجية القوى العاملة، وحوكمة التوريد، ونماذج تشغيل مرنة للمؤسسات في القطاعين الخاص والعام.'
              )}
            </p>
          </div>

          {navGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{group.title}</h3>
              <div className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <Link key={link.label} to={link.to} className="group inline-flex items-center text-base font-medium text-slate-700 transition hover:text-slate-950">
                    {link.label}
                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t('Contact Details', 'بيانات التواصل')}</h3>
            <div className="mt-5 space-y-4 text-base text-slate-700">
              <a href="mailto:info@vamefo.com" className="flex items-start gap-3 transition hover:text-slate-950">
                <Mail className="mt-1 h-5 w-5 text-slate-500" />
                <span>info@vamefo.com</span>
              </a>
              <a href="tel:+971561968643" className="flex items-start gap-3 transition hover:text-slate-950">
                <Phone className="mt-1 h-5 w-5 text-slate-500" />
                <span>+971 56 196 8643</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-slate-500" />
                <span>{t('IFZA Business Park, DDP, PO Box 342001, Dubai, United Arab Emirates.', 'مجمع أعمال IFZA، منطقة دبي الرقمية، ص.ب 342001، دبي، الإمارات العربية المتحدة.')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>{t('© 2026 VAMEFO Management Consultancy. All rights reserved.', '© 2026 فاميفو للاستشارات الإدارية. جميع الحقوق محفوظة.')}</p>
          <p>{t('Private Sector, Public Sector, Assessment and Documentation access available across the site.', 'يتوفر الوصول إلى القطاع الخاص والقطاع العام والتقييم والوثائق عبر الموقع.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
