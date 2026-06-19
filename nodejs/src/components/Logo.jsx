import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({
  className = '',
  size = 'default',
  showText = true,
  showSubtitle = true,
  theme = 'light',
  layout = 'stacked'
}) => {
  const imageClasses = {
    small: 'h-8 w-8',
    default: 'h-[42px] w-[42px]',
    large: 'h-20 w-20'
  };

  const textSizes = {
    small: 'text-sm',
    default: 'text-lg',
    large: 'text-3xl'
  };

  const subtitleSizes = {
    small: 'text-[0.6rem]',
    default: 'text-xs',
    large: 'text-sm'
  };

  const textClass = theme === 'dark'
    ? 'text-slate-900 bg-none'
    : 'text-white bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent';

  const subtitleClass = theme === 'dark' ? 'text-[#097392]' : 'text-[#d4af37]';
  const isInline = layout === 'inline';
  const wrapperClass = isInline
    ? 'flex-row items-center gap-3'
    : 'flex-col items-center justify-center';
  const textWrapperClass = isInline
    ? 'flex flex-col items-start text-left leading-none'
    : 'flex flex-col items-center text-center mt-1';
  const subtitleSpacingClass = isInline ? 'mt-0.5' : 'mt-1';

  return (
    <motion.div 
      className={`flex ${wrapperClass} ${className} py-0`} 
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="relative"
        initial={{ rotate: -90, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
      >
        <img 
          src="https://horizons-cdn.hostinger.com/da479a32-1c3b-46e9-97ae-0975870a6de4/lloo-ncOV6.png" 
          alt="VAMEFO Logo" 
          className={`${imageClasses[size]} object-contain drop-shadow-md`}
        />
        {/* Subtle glow effect behind the diamond logo */}
        <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full -z-10" />
      </motion.div>
      
      {showText && (
        <div className={textWrapperClass}>
          <motion.span 
            className={`${textSizes[size]} font-bold tracking-wider leading-none ${textClass}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            VAMEFO
          </motion.span>
          {showSubtitle && (
            <motion.span 
              className={`${subtitleSizes[size]} tracking-[0.2em] uppercase font-medium ${subtitleSpacingClass} ${subtitleClass}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Management Consultancy
            </motion.span>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
