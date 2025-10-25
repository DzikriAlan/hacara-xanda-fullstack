"use client";

import { Instagram, Twitter, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/components/marketing-language-provider';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('navbar.about'), href: '#about' },
    { label: t('navbar.features'), href: '#features' },
    { label: t('navbar.vendors'), href: '#vendors' },
    { label: t('navbar.faq'), href: '#faq' },
  ];

  const legalLinks = [
    { label: 'Syarat & Ketentuan', href: '/terms' },
    { label: 'Kebijakan Privasi', href: '/privacy' },
    { label: 'Bantuan', href: '/help' },
    { label: 'Karir', href: '/careers' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/hacara.id', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/hacara_id', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/@hacara', label: 'YouTube' },
    { icon: Facebook, href: 'https://facebook.com/hacara.indonesia', label: 'Facebook' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@hacara.id', href: 'mailto:hello@hacara.id' },
    { icon: Phone, text: '+62 21 1234 5678', href: 'tel:+622112345678' },
    { icon: MapPin, text: 'Jakarta, Indonesia', href: '#' },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer id="contact" className="bg-midnight text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight-50 to-gold/10" />
        <div className="absolute inset-0 opacity-5 bg-grid-pattern animate-pulse-slower" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1 animate-fade-in-up">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-600 rounded-xl flex items-center justify-center">
                  <span className="text-midnight font-bold text-xl">H</span>
                </div>
                <span className="text-3xl font-heading font-bold text-gold">
                  Hacara
                </span>
              </div>

              <p className="text-white/70 mb-6 leading-relaxed">
                Platform terpercaya untuk menemukan vendor terbaik untuk acara impian Anda. 
                Dari pernikahan hingga acara korporat, kami siap membantu.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleLinkClick(social.href)}
                      className="w-10 h-10 bg-white/10 hover:bg-gold/20 rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:-translate-y-0.5 active:scale-95"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5 text-white/70 group-hover:text-gold transition-colors" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up delay-100">
              <div className="heading-5 text-white mb-6">
                Menu Cepat
              </div>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-white/70 hover:text-gold transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="animate-fade-in-up delay-200">
              <div className="heading-5 text-white mb-6">
                Legal & Bantuan
              </div>
              <ul className="space-y-4">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-white/70 hover:text-gold transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up delay-300">
              <div className="heading-5 text-white mb-6">
                {t('footer.contact')}
              </div>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-white/70 hover:text-gold transition-all duration-300 group hover:translate-x-1"
                    >
                      <div className="w-8 h-8 bg-white/10 group-hover:bg-gold/20 rounded-lg flex items-center justify-center transition-colors">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span>{contact.text}</span>
                    </a>
                  );
                })}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 p-4 bg-gold/10 rounded-xl border border-gold/20">
                <div className="heading-6 text-white mb-3">Newsletter</div>
                <p className="text-white/70 text-sm mb-4">
                  Dapatkan tips event dan promo terbaru
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold"
                  />
                  <button className="px-4 py-2 bg-gold hover:bg-gold-600 text-midnight font-medium rounded-lg transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 animate-fade-in delay-[800ms]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>Made with ❤️ in Indonesia</span>
              <div className="flex items-center space-x-2">
                <span>Powered by</span>
                <span className="text-gold font-medium">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}