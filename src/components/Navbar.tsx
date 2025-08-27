import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTranslatedData } from "../hooks/useTranslatedData";
import logoee from "../logo192.png";

const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { getNavigation } = useTranslatedData();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize theme from localStorage/system and keep <html> class in sync
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const navigationItems = getNavigation();

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
          isScrolled
            ? "w-full mx-auto   bg-white/30 dark:bg-gray-900/20 backdrop-blur-xxl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="">
          <div className="bg-white/30 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg px-4 ">
            <div className="container mx-auto flex items-center justify-between h-24 py-6">
              {/* Logo */}
              <Link to="/" className="flex items-center" onClick={closeMenu}>
                <img
                  src={logoee}
                  alt="Elnuby Logo"
                  className="h-full lg:h-14 max-md:h-10 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    }`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      closeMenu();
                    }}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>

              {/* Language/Theme Toggle & Mobile Menu Button */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="hidden sm:flex items-center justify-center h-9 w-9 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                  title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <Globe size={16} />
                  <span>{language === "en" ? "العربية" : "English"}</span>
                </button>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden relative p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 z-50"
                  aria-label="Toggle mobile menu"
                >
                  <motion.div
                    animate={isOpen ? "open" : "closed"}
                    className="flex flex-col items-center justify-center w-6 h-6"
                  >
                    <motion.span
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: 45, y: 6 },
                      }}
                      className="w-6 h-0.5 bg-current block transition-all duration-300"
                    />
                    <motion.span
                      variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                      }}
                      className="w-6 h-0.5 bg-current block mt-1 transition-all duration-300"
                    />
                    <motion.span
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: -45, y: -6 },
                      }}
                      className="w-6 h-0.5 bg-current block mt-1 transition-all duration-300"
                    />
                  </motion.div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.4,
              }}
              className="mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <Link
                  to="/"
                  className="flex items-center"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    closeMenu();
                  }}
                >
                  <img src={logoee} alt="Elnuby Logo" className="h-8 w-auto" />
                </Link>

                {/* Mobile Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <Globe size={16} />
                  <span>{language === "en" ? "العربية" : "English"}</span>
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className="py-6">
                <nav className="space-y-1">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        className={`block px-6 py-4 text-base font-medium transition-all duration-200 ${
                          location.pathname === item.href
                            ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 border-r-2 border-primary-600 dark:border-primary-400"
                            : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                                               onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          closeMenu();
                        }}
                      >
                        {item.text}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                {/* Theme toggle in mobile menu */}
                <div className="px-6 pt-4">
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    <span>{isDark ? 'Light mode' : 'Dark mode'}</span>
                  </button>
                </div>
              </div>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {language === "en"
                      ? "Elnuby Construction"
                      : "النبى للإنشاءات"}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {language === "en"
                      ? "Building the future together"
                      : "نبني المستقبل معاً"}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
