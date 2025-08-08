import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Languages } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage, setLanguage, forceLanguage } = useLanguage();

  return (
    <div className="flex flex-col space-y-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Language Settings
      </h3>
      
      {/* Current Language Display */}
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <Globe size={16} className="text-primary-600" />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Current: {language === 'en' ? 'English' : 'العربية'}
        </span>
      </div>

      {/* Quick Toggle */}
      <button
        onClick={toggleLanguage}
        className="flex items-center justify-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        <Languages size={16} />
        <span>Switch to {language === 'en' ? 'العربية' : 'English'}</span>
      </button>

      {/* Direct Language Selection */}
      <div className="flex space-x-2 rtl:space-x-reverse">
        <button
          onClick={() => setLanguage('en')}
          className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            language === 'en'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('ar')}
          className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            language === 'ar'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          العربية
        </button>
      </div>

      {/* Force Language (clears saved preference) */}
      <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          Force language (clears saved preference):
        </p>
        <div className="flex space-x-2 rtl:space-x-reverse">
          <button
            onClick={() => forceLanguage('en')}
            className="flex-1 px-3 py-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
          >
            Force English
          </button>
          <button
            onClick={() => forceLanguage('ar')}
            className="flex-1 px-3 py-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
          >
            Force العربية
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 