"use client";

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Filter, CreditCard, Star, Shield, Users } from 'lucide-react';
import { useLanguage } from '@/components/marketing-language-provider';

export function FeaturesSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Search,
      title: t('features.items.search.title'),
      description: t('features.items.search.description'),
      gradient: "from-blue-500 to-blue-600",
      delay: 0
    },
    {
      icon: Filter,
      title: t('features.items.filter.title'),
      description: t('features.items.filter.description'),
      gradient: "from-green-500 to-green-600",
      delay: 0.1
    },
    {
      icon: CreditCard,
      title: t('features.items.payment.title'),
      description: t('features.items.payment.description'),
      gradient: "from-purple-500 to-purple-600",
      delay: 0.2
    },
    {
      icon: Star,
      title: t('features.items.review.title'),
      description: t('features.items.review.description'),
      gradient: "from-yellow-500 to-yellow-600",
      delay: 0.3
    },
    {
      icon: Shield,
      title: "Jaminan Kualitas",
      description: "Setiap vendor telah melalui proses verifikasi ketat untuk memastikan kualitas layanan terbaik.",
      gradient: "from-red-500 to-red-600",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Tim support yang berpengalaman siap membantu Anda 24/7 untuk memastikan acara berjalan sempurna.",
      gradient: "from-indigo-500 to-indigo-600",
      delay: 0.5
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-midnight-50 relative overflow-hidden">
            {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-midnight/5 animate-pulse-slow" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16 opacity-0 animate-fade-in-up"
          style={{ animationDelay: isInView ? '0ms' : '9999ms' }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
            <span className="text-gold text-sm font-medium">
              ⚡ {t('features.title')}
            </span>
          </div>
          
          <div className="heading-2 text-gray-900 dark:text-white mb-6">
            Solusi Lengkap untuk{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-600">
              Event Sempurna
            </span>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nikmati pengalaman mencari dan memesan vendor dengan fitur-fitur canggih yang 
            dirancang khusus untuk kemudahan Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div
                key={index}
                className="group opacity-0 animate-fade-in-up hover:-translate-y-2 transition-transform duration-300"
                style={{ animationDelay: isInView ? `${feature.delay * 1000}ms` : '9999ms' }}
              >
                <div className="relative p-8 bg-white dark:bg-midnight rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gold/10 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="heading-5 text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect - glow border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/20 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-[800ms]">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Siap merasakan kemudahan mencari vendor untuk acara impian Anda?
          </p>
          <button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold to-gold-600 hover:from-gold-600 hover:to-gold-700 text-midnight font-semibold rounded-xl shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => {
              const element = document.getElementById('cta-section');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Mulai Eksplorasi Sekarang
            <Search className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}