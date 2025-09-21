import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
  variant?: 'default' | 'gradient' | 'minimal';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  className = '', 
  variant = 'default' 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'gradient':
        return {
          line: 'bg-gradient-to-r from-transparent via-elnuby-orange/60 to-transparent',
          centerPoint: 'bg-elnuby-orange',
          centerPointBorder: 'border-elnuby-orange',
          sidePoints: 'bg-elnuby-orange/80',
          decorativePoints: 'bg-elnuby-orange/60',
          edgePoints: 'bg-elnuby-orange/40'
        };
      case 'minimal':
        return {
          line: 'bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent',
          centerPoint: 'bg-gray-400 dark:bg-gray-500',
          centerPointBorder: 'border-gray-400 dark:border-gray-500',
          sidePoints: 'bg-gray-400/80 dark:bg-gray-500/80',
          decorativePoints: 'bg-gray-400/60 dark:bg-gray-500/60',
          edgePoints: 'bg-gray-400/40 dark:bg-gray-500/40'
        };
      default:
        return {
          line: 'bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-500 to-transparent',
          centerPoint: 'bg-gray-500 dark:bg-gray-400',
          centerPointBorder: 'border-gray-500 dark:border-gray-400',
          sidePoints: 'bg-gray-500/80 dark:bg-gray-400/80',
          decorativePoints: 'bg-gray-500/60 dark:bg-gray-400/60',
          edgePoints: 'bg-gray-500/40 dark:bg-gray-400/40'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`relative w-full flex justify-center items-center py-4 sm:py-6 ${className}`}>
      {/* Main Line Container */}
      <div className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-px">
        {/* Background Line */}
        <div className={`absolute inset-0 ${styles.line}`} />
        
        {/* Animated Glow Line */}
        <motion.div
          className={`absolute inset-0 ${styles.line}`}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Center Point with Enhanced Animation */}
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Center Point */}
          <motion.div
            className={`w-2 h-2 sm:w-3 sm:h-3 ${styles.centerPoint} rounded-full shadow-lg relative z-10`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Inner Pulsing Ring */}
          <motion.div
            className={`absolute w-4 h-4 sm:w-6 sm:h-6 border ${styles.centerPointBorder} rounded-full`}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
          
          {/* Middle Ring */}
          <motion.div
            className={`absolute w-6 h-6 sm:w-8 sm:h-8 border ${styles.centerPointBorder} rounded-full`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
          />
          
          {/* Outer Ring */}
          <motion.div
            className={`absolute w-8 h-8 sm:w-10 sm:h-10 border ${styles.centerPointBorder} rounded-full`}
            animate={{
              scale: [1, 1.7, 1],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9
            }}
          />
        </motion.div>

        {/* Side Points with Staggered Animation */}
        <motion.div
          className={`absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 ${styles.sidePoints} rounded-full`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4
          }}
        />
        
        <motion.div
          className={`absolute right-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 ${styles.sidePoints} rounded-full`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.0
          }}
        />

        {/* Additional Decorative Points */}
        <motion.div
          className={`absolute left-1/5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 ${styles.decorativePoints} rounded-full`}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1
          }}
        />
        
        <motion.div
          className={`absolute right-1/5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 ${styles.decorativePoints} rounded-full`}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.3
          }}
        />

        {/* Edge Points */}
        <motion.div
          className={`absolute left-1/8 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 ${styles.edgePoints} rounded-full`}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        />
        
        <motion.div
          className={`absolute right-1/8 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 ${styles.edgePoints} rounded-full`}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.6
          }}
        />
      </div>
    </div>
  );
};

export default SectionDivider;