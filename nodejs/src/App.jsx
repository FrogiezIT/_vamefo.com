import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HomePage from '@/pages/HomePage';
import HealthPage from '@/pages/HealthPage';
import PublicPage from '@/pages/PublicPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import DemoPage from '@/pages/DemoPage';
import DocumentationPage from '@/pages/DocumentationPage';
import LegalDisclaimerPage from '@/pages/LegalDisclaimerPage';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import SiteFooter from '@/components/SiteFooter';
import { LanguageProvider } from '@/i18n/LanguageContext';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AppContent = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop>
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/legal-disclaimer" element={<LegalDisclaimerPage />} />
            <Route path="/health" element={<HealthPage />} />
            <Route path="/public" element={<PublicPage />} />
            <Route path="/energy" element={<PublicPage focusSection="energy" />} />
          </Routes>
        </PageTransition>
      </ScrollToTop>
      <SiteFooter />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
