"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/components/marketing-language-provider';

interface NavItem {
  label: string;
  href: string;
}

export function MarketingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentLanguage, switchLanguage, t } = useLanguage();

  const navItems: NavItem[] = [
    { label: t('navbar.home'), href: '#home' },
    { label: t('navbar.about'), href: '#about' },
    { label: t('navbar.features'), href: '#features' },
    { label: t('navbar.vendors'), href: '#vendors' },
    { label: t('navbar.testimonials'), href: '#testimonials' },
    { label: t('navbar.faq'), href: '#faq' },
    { label: t('navbar.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar dengan sticky position dan backdrop blur */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in-down ${
          isScrolled
            ? 'bg-midnight/80 backdrop-blur-xl border-b border-gold/20 shadow-lg'
            : 'bg-white/90 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo - bisa diganti dengan logo actual */}
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-midnight font-bold text-xl">H</span>
              </div>
              <span className={`text-2xl font-heading font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gold' : 'text-midnight'
              }`}>
                Hacara
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`hover:text-gold transition-colors duration-300 font-medium animate-fade-in delay-[${index * 100}ms] ${
                    isScrolled ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Controls */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Toggle */}
              <div className={`flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors duration-300 ${
                isScrolled ? 'bg-midnight-50/20' : 'bg-gray-100'
              }`}>
                <Globe className="w-4 h-4 text-gold" />
                <button
                  onClick={() => switchLanguage('id')}
                  className={`text-sm font-medium transition-colors ${
                    currentLanguage === 'id' 
                      ? 'text-gold' 
                      : isScrolled 
                        ? 'text-white/70' 
                        : 'text-gray-600'
                  }`}
                >
                  ID
                </button>
                <span className={`transition-colors duration-300 ${
                  isScrolled ? 'text-white/50' : 'text-gray-400'
                }`}>|</span>
                <button
                  onClick={() => switchLanguage('en')}
                  className={`text-sm font-medium transition-colors ${
                    currentLanguage === 'en' 
                      ? 'text-gold' 
                      : isScrolled 
                        ? 'text-white/70' 
                        : 'text-gray-600'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Dark Mode Toggle */}
              <ModeToggle />

              {/* CTA Button */}
              <Button 
                className="bg-gradient-to-r from-gold to-gold-600 text-midnight hover:from-gold-600 hover:to-gold-700 font-semibold shadow-lg hover:shadow-gold/25 transition-all duration-300"
                onClick={() => handleNavClick('#cta')}
              >
                {t('navbar.getStarted')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden hover:text-gold transition-colors ${
                isScrolled ? 'text-white' : 'text-gray-800'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden backdrop-blur-xl border-t overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 max-h-screen animate-fade-in' 
              : 'opacity-0 max-h-0'
          } ${
            isScrolled 
              ? 'bg-midnight/95 border-gold/20' 
              : 'bg-white/95 border-gray-200'
          }`}
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left hover:text-gold transition-colors duration-300 font-medium py-2 ${
                  isScrolled ? 'text-white' : 'text-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Controls */}
            <div className={`pt-4 border-t space-y-4 ${
              isScrolled ? 'border-gold/20' : 'border-gray-200'
            }`}>
              {/* Language Toggle Mobile */}
              <div className="flex items-center justify-between">
                <span className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-gray-800'
                }`}>Language:</span>
                <div className={`flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors duration-300 ${
                  isScrolled ? 'bg-midnight-50/20' : 'bg-gray-100'
                }`}>
                  <Globe className="w-4 h-4 text-gold" />
                  <button
                    onClick={() => switchLanguage('id')}
                    className={`text-sm font-medium transition-colors ${
                      currentLanguage === 'id' 
                        ? 'text-gold' 
                        : isScrolled 
                          ? 'text-white/70' 
                          : 'text-gray-600'
                    }`}
                  >
                    ID
                  </button>
                  <span className={`transition-colors duration-300 ${
                    isScrolled ? 'text-white/50' : 'text-gray-400'
                  }`}>|</span>
                  <button
                    onClick={() => switchLanguage('en')}
                    className={`text-sm font-medium transition-colors ${
                      currentLanguage === 'en' 
                        ? 'text-gold' 
                        : isScrolled 
                          ? 'text-white/70' 
                          : 'text-gray-600'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Theme Toggle Mobile */}
              <div className="flex items-center justify-between">
                <span className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-gray-800'
                }`}>Theme:</span>
                <ModeToggle />
              </div>

              {/* CTA Button Mobile */}
              <Button 
                className="w-full bg-gradient-to-r from-gold to-gold-600 text-midnight hover:from-gold-600 hover:to-gold-700 font-semibold shadow-lg hover:shadow-gold/25 transition-all duration-300"
                onClick={() => handleNavClick('#cta')}
              >
                {t('navbar.getStarted')}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-20" />
    </>
  );
}