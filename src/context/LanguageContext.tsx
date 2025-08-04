import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  setLanguage: (lang: 'en' | 'ar') => void;
  forceLanguage: (lang: 'en' | 'ar') => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<'en' | 'ar'>(() => {
    // Get language from localStorage or default to 'ar' (Arabic)
    const savedLang = localStorage.getItem('elnuby-language') as 'en' | 'ar';
    return savedLang || 'ar';
  });

  const isRTL = language === 'ar';

  const setLanguage = (lang: 'en' | 'ar') => {
    setLanguageState(lang);
    localStorage.setItem('elnuby-language', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  const forceLanguage = (lang: 'en' | 'ar') => {
    localStorage.removeItem('elnuby-language'); // Clear saved preference
    setLanguage(lang);
  };

  useEffect(() => {
    // Update i18n language
    i18n.changeLanguage(language);
    
    // Update document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.setAttribute('data-lang', language);
    
    // Add/remove RTL class to body
    if (isRTL) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }, [language, i18n, isRTL]);

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    setLanguage,
    forceLanguage,
    isRTL
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 