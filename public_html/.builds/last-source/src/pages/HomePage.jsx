import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AssessmentSection from '@/components/AssessmentSection';
import { useLanguage } from '@/i18n/LanguageContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const departments = [{
    logo: 'https://horizons-cdn.hostinger.com/da479a32-1c3b-46e9-97ae-0975870a6de4/be186a63654d4476aa71372dbcbd7746.png',
    name: t('Private Sector', 'القطاع الخاص'),
    description: t('Strategic HR technology for private organisations, growth-focused teams and multi-entity operations', 'تقنية موارد بشرية استراتيجية للمؤسسات الخاصة وفرق النمو والعمليات متعددة الكيانات'),
    gradient: 'from-[#10b981] via-[#34d399] to-[#10b981]',
    accentColor: '#10b981',
    path: '/health',
    bgImage: '/private-sector-hero-v2.jpg',
    removeOverlay: true,
    titleClass: 'text-emerald-950 group-hover:text-emerald-700',
    textClass: 'text-emerald-950/90 bg-white/58',
    ctaClass: 'text-emerald-700'
  }, {
    logo: '/public-institution-logo.png',
    name: t('Public Sector', 'القطاع العام'),
    description: t('Specialized HR tech solutions for government and public sector', 'حلول تقنية متخصصة للموارد البشرية للجهات الحكومية والقطاع العام'),
    gradient: 'from-[#1e3a8a] via-[#3b82f6] to-[#1e3a8a]',
    accentColor: '#1e3a8a',
    path: '/public',
    bgImage: 'https://horizons-cdn.hostinger.com/da479a32-1c3b-46e9-97ae-0975870a6de4/shubham-mittal-orcuzgy16bi-unsplash-zGuYu.jpg',
    titleClass: 'text-sky-50 group-hover:text-sky-200',
    textClass: 'text-slate-50 bg-slate-950/34',
    ctaClass: 'text-[#d4af37]'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return <div className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_45%,#f4f7fb_100%)]">
      <Helmet>
        <title>{t('VAMEFO | Your Workforce Architecture', 'فاميفو | هندسة القوى العاملة')}</title>
        <meta name="description" content={t('VAMEFO provides premium HR technology solutions for private sector and public sector organizations.', 'تقدم فاميفو حلولاً متقدمة في تقنية واستراتيجية الموارد البشرية للمؤسسات في القطاعين الخاص والعام.')} />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/home-background-v2.jpg" alt="Modern office environment" className="w-full h-full object-cover scale-110" style={{ filter: 'blur(26px)' }} />
          <div className="absolute inset-0 bg-white/36" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.40)_0%,rgba(248,250,252,0.60)_100%)]" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/14 rounded-full blur-3xl" />
          <motion.div animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90]
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: 'easeOut'
      }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center -mt-16">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="mb-16 mt-16 -ml-6"
          >
             <motion.img 
                src="https://horizons-cdn.hostinger.com/da479a32-1c3b-46e9-97ae-0975870a6de4/c3a0cfa5a46755cd4edca978259f126d.png" 
                alt="VAMEFO Diamond Logo" 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              />
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 bg-clip-text text-transparent leading-tight">
            VAMEFO
          </motion.h1>

          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#d4af37] to-[#f4d57f] bg-clip-text text-transparent tracking-wide">
            {t('MANAGEMENT CONSULTANCY', 'استشارات إدارية')}
          </motion.h2>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">{t('Value, Mentorship & Focus in your Workforce Architecture', 'قيمة وإرشاد وتركيز في هندسة قواك العاملة')}</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => document.getElementById('home-solutions')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#f4d57f] text-black font-bold rounded-full hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              {t('Explore', 'استكشف')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button onClick={() => navigate('/demo')} className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-800 font-semibold rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm">
              {t('FREE Assessment', 'التقييم المجاني')}
            </button>
          </motion.div>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        y: [0, 10, 0]
      }} transition={{
        opacity: {
          delay: 1.5,
          duration: 0.5
        },
        y: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        }
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-slate-800/80 rounded-full flex justify-center p-2 bg-white/20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-slate-900 rounded-full" />
          </div>
        </motion.div>
      </section>

      <section id="home-solutions" className="py-24 relative bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)]">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
              {t('Choose Your Sector', 'اختر قطاعك')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('Tailored HR technology platforms designed for the unique needs of your industry', 'منصات تقنية واستشارية للموارد البشرية مصممة وفقاً لاحتياجات قطاعك')}
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => {
            return <motion.div key={dept.path} variants={itemVariants} whileHover={{
              scale: 1.03,
              y: -5
            }} onClick={() => navigate(dept.path)} className="group relative cursor-pointer h-full">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 h-full min-h-[400px] flex flex-col transition-all duration-300 hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)] bg-white">
                    <div className="absolute inset-0 z-0">
                        <img src={dept.bgImage} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className={`absolute inset-0 ${dept.removeOverlay ? 'bg-white/20 group-hover:bg-white/10' : 'bg-slate-950/45 group-hover:bg-slate-950/35'} transition-colors duration-300 z-0`} />
                    {!dept.removeOverlay && <div className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-20 mix-blend-screen z-0`} />}
                    <div className="relative z-10 flex flex-col items-center text-center mt-auto p-8 h-full justify-center">
                      <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300 p-4 rounded-full bg-white/70 backdrop-blur-md shadow-xl border border-white/60">
                        <img src={dept.logo} alt={`${dept.name} Logo`} className="h-20 w-auto object-contain drop-shadow-2xl filter brightness-110" />
                      </div>
                      <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 drop-shadow-lg text-shadow-md ${dept.titleClass}`}>
                        {dept.name}
                      </h3>
                      <p className={`mb-8 leading-relaxed font-medium drop-shadow-lg text-lg text-shadow-sm rounded-lg p-3 backdrop-blur-sm ${dept.textClass}`}>
                        {dept.description}
                      </p>
                      <div className={`mt-auto flex items-center gap-2 font-bold tracking-wide uppercase text-sm group-hover:gap-4 transition-all duration-300 bg-white/90 px-6 py-2 rounded-full border border-white/80 backdrop-blur-md hover:bg-white shadow-lg ${dept.ctaClass}`}>
                        {t('Learn More', 'اعرف المزيد')}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </motion.div>;
          })}
          </motion.div>
        </div>
      </section>

      <AssessmentSection theme="light" />

      <section className="py-24 bg-[linear-gradient(180deg,#f4f7fb_0%,#ffffff_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{
            number: '25+',
            label: t('Companies Served', 'شركات تم دعمها')
          }, {
            number: '1.2K+',
            label: t('Active Users', 'مستخدمون نشطون')
          }, {
            number: '99.9%',
            label: t('Uptime', 'جاهزية المنصة')
          }, {
            number: '24/7',
            label: t('Support', 'دعم')
          }].map((stat, index) => <motion.div key={index} initial={{
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
          }} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4d57f] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-500 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>
    </div>;
};

export default HomePage;
