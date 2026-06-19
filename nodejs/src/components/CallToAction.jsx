import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = ({ 
  title = "Ready to Transform Your Organization?", 
  subtitle = "Join the leaders who are reshaping the future.",
  variant = "default" 
}) => {
  const isPublic = variant === 'public';

  const containerClasses = isPublic 
    ? "py-24 bg-public-secondary relative overflow-hidden" 
    : "py-24 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden";

  const titleColor = isPublic ? "text-public-neutral" : "text-white";
  const subtitleColor = isPublic ? "text-public-primary" : "text-gray-300";

  return (
    <section className={containerClasses}>
      {/* Decorative Accent Elements for Public Theme */}
      {isPublic && (
        <>
           <div className="absolute top-0 right-0 w-64 h-64 bg-public-accent opacity-20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-public-primary opacity-10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />
        </>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${titleColor}`}>
            {title}
          </h2>
          <p className={`text-xl mb-10 ${subtitleColor}`}>
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             {isPublic ? (
               <>
                <Button asChild variant="public-primary" size="lg" className="rounded-full text-lg px-8 py-6">
                  <Link to="/demo">
                    FREE Assessment <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 border-public-primary text-public-primary hover:bg-public-primary hover:text-white">
                  <Link to="/documentation">
                    View Documentation
                  </Link>
                </Button>
               </>
             ) : (
                <Button asChild className="px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#f4d57f] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-105">
                  <Link to="/demo">
                    FREE Assessment
                  </Link>
                </Button>
             )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
