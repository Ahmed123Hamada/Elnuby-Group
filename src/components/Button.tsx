import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ExternalLink, Loader2 } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'modern' | 'glass' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: 'arrow-right' | 'arrow-left' | 'external' | 'none';
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'none',
  iconPosition = 'right',
  loading = false,
  disabled = false,
  fullWidth = false,
  rounded = 'md',
  className = '',
  onClick,
  href,
  type = 'button'
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  // Rounded classes
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl border border-transparent',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl border border-transparent',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white bg-transparent',
    ghost: 'text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 bg-transparent border border-transparent',
    gradient: 'bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 text-white shadow-lg hover:shadow-xl border border-transparent',
    modern: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 shadow-lg hover:shadow-xl',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl',
    neon: 'bg-transparent border border-primary-500 text-primary-400 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/25 relative'
  };

  // Base classes
  const baseClasses = `
    inline-flex items-center justify-center font-semibold
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    relative overflow-hidden group
    ${fullWidth ? 'w-full' : ''}
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${sizeClasses[size]}
    ${roundedClasses[rounded]}
    ${variantClasses[variant]}
    ${className}
  `;

  // Icon component
  const getIcon = () => {
    const iconSize = size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 20 : 24;
    const iconClasses = `transition-transform duration-300 ${
      iconPosition === 'left' ? 'mr-2' : 'ml-2'
    } ${icon === 'arrow-right' ? 'group-hover:translate-x-1' : 
        icon === 'arrow-left' ? 'group-hover:-translate-x-1' : 
        icon === 'external' ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : ''
    }`;

    switch (icon) {
      case 'arrow-right':
        return <ArrowRight size={iconSize} className={iconClasses} />;
      case 'arrow-left':
        return <ArrowLeft size={iconSize} className={iconClasses} />;
      case 'external':
        return <ExternalLink size={iconSize} className={iconClasses} />;
      default:
        return null;
    }
  };

  // Loading spinner
  const LoadingSpinner = () => (
    <Loader2 
      size={size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 20 : 24} 
      className="animate-spin mr-2" 
    />
  );

  const buttonContent = (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.02, y: -1 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background effects */}
      {variant === 'gradient' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      )}

      {variant === 'glass' && (
        <motion.div
          className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}

      {variant === 'neon' && (
        <motion.div
          className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{
            boxShadow: [
              '0 0 5px rgba(99, 102, 241, 0.5)',
              '0 0 25px rgba(99, 102, 241, 0.5)',
              '0 0 50px rgba(99, 102, 241, 0.5)'
            ]
          }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
        />
      )}

      {/* Modern variant border animation */}
      {variant === 'modern' && (
        <motion.div
          className="absolute inset-0 border-2 border-primary-500 opacity-0 group-hover:opacity-100 rounded-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center">
        {loading && <LoadingSpinner />}
        {!loading && icon !== 'none' && iconPosition === 'left' && getIcon()}
        <span className={loading ? 'opacity-50' : ''}>{children}</span>
        {!loading && icon !== 'none' && iconPosition === 'right' && getIcon()}
      </span>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full scale-0 group-active:scale-100 transition-transform duration-300"
        style={{ borderRadius: 'inherit' }}
      />
    </motion.button>
  );

  // If href is provided, wrap with link
  if (href && !disabled && !loading) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default Button;
