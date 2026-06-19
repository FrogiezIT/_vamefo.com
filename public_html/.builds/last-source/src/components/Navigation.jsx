import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/Logo';
import { useLanguage } from '@/i18n/LanguageContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isArabic, t, toggleLanguage } = useLanguage();
  const isHomePage = location.pathname === '/';
  const useTransparentTopNav = isHomePage;

  const accent = location.pathname.startsWith('/health')
    ? {
        primary: 'text-emerald-700',
        hover: 'hover:text-emerald-700',
        pill: 'bg-emerald-600 text-white hover:bg-emerald-700',
        border: 'border-emerald-100',
        activeBg: 'bg-emerald-50',
      }
    : location.pathname.startsWith('/public') || location.pathname.startsWith('/energy')
        ? {
            primary: 'text-public-primary',
            hover: 'hover:text-public-primary',
            pill: 'bg-public-highlight text-white hover:bg-public-highlight/90',
            border: 'border-slate-100',
            activeBg: 'bg-slate-50',
          }
        : {
            primary: 'text-[#d4af37]',
            hover: 'hover:text-[#d4af37]',
            pill: 'bg-slate-900 text-white hover:bg-slate-800',
            border: 'border-slate-100',
            activeBg: 'bg-slate-50',
          };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('Home', 'الرئيسية'), path: '/' },
    { name: t('About', 'من نحن'), path: '/about' },
    { name: t('Contact', 'تواصل معنا'), path: '/contact' }
  ];

  const navBgClass = isHomePage
    ? 'bg-white/72 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.08)]'
    : isScrolled || !useTransparentTopNav
    ? 'bg-white/88 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.08)]'
    : 'bg-slate-950/48 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_40px_rgba(15,23,42,0.22)]';

  const textColorClass = isHomePage
    ? 'text-slate-700 hover:text-slate-950'
    : isScrolled || !useTransparentTopNav
    ? `text-slate-600 ${accent.hover}`
    : 'text-white hover:text-white/80';

  const activeColorClass = isHomePage ? 'text-slate-950' : isScrolled || !useTransparentTopNav ? accent.primary : 'text-white';
  const buttonClass = isHomePage
    ? 'bg-white text-slate-950 border border-slate-200 hover:bg-slate-50 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'
    : isScrolled || !useTransparentTopNav
    ? accent.pill
    : 'bg-white text-slate-950 border border-white/60 hover:bg-white/90 shadow-[0_10px_30px_rgba(255,255,255,0.18)]';
  const mobilePanelClass = isScrolled || !useTransparentTopNav
    ? 'bg-white/95 border-slate-200 text-slate-700'
    : 'bg-slate-950/78 backdrop-blur-xl border-white/10 text-white';
  const mobileLinkBase = isScrolled || !useTransparentTopNav ? 'text-slate-700 hover:bg-slate-50' : 'text-white hover:bg-white/10';
  const mobileActiveClass = isScrolled || !useTransparentTopNav ? `${accent.primary} ${accent.activeBg}` : 'bg-white/10 text-white';
  const logoTheme = isHomePage ? 'dark' : 'dark';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Logo */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="shrink-0">
            <Logo
              size="default"
              theme={logoTheme}
              layout="inline"
              showSubtitle={false}
              className="max-w-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 min-w-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path 
                    ? activeColorClass 
                    : textColorClass
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105 ${isHomePage || isScrolled || !useTransparentTopNav ? 'border-slate-200 bg-white/70 text-slate-800 hover:bg-white' : 'border-white/20 bg-white/10 text-white hover:bg-white/15'}`}
              type="button"
            >
              <Globe2 className="h-4 w-4" />
              {isArabic ? 'EN' : 'العربية'}
            </button>

            <Link
              to="/demo"
              className={`px-6 py-2.5 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105 ${buttonClass}`}
            >
              {t('FREE Assessment', 'التقييم المجاني')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${isScrolled || !useTransparentTopNav ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t ${mobilePanelClass}`}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    location.pathname === link.path 
                      ? mobileActiveClass
                      : mobileLinkBase
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block mt-4 px-6 py-3 font-semibold rounded-full text-center hover:shadow-lg transition-all duration-200 ${buttonClass}`}
              >
                {t('FREE Assessment', 'التقييم المجاني')}
              </Link>
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className={`flex w-full items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition ${isScrolled || !useTransparentTopNav ? 'border-slate-200 bg-white text-slate-800' : 'border-white/20 bg-white/10 text-white'}`}
                type="button"
              >
                <Globe2 className="h-4 w-4" />
                {isArabic ? 'English' : 'العربية'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
