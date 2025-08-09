import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  number: string;
  color: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  number,
  color,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.05 }}
      />
      
      {/* Number badge */}
      <motion.div
        className="absolute top-6 right-6 text-6xl font-bold text-gray-100 dark:text-gray-800 opacity-20"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {number}
      </motion.div>

      {/* Icon */}
      <motion.div
        className={`relative z-10 w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: 5 }}
      >
        <Icon size={32} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-elnuby-orange transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        {/* Features */}
        <motion.div
          className="space-y-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 rtl:space-x-reverse"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-2 h-2 rounded-full ${color.replace('bg-gradient-to-br', 'bg-orange-500')}`} />
              <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="sm"
            icon="arrow-right"
            onClick={onClick}
          >
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-elnuby-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

export default ServiceCard;
