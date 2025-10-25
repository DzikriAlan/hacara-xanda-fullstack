"use client";

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import { useLanguage } from '@/components/marketing-language-provider';

export function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Users,
      label: t('about.stats.vendors'),
      value: "10.000+",
      description: "Vendor terpercaya"
    },
    {
      icon: Award,
      label: t('about.stats.events'),
      value: "25.000+", 
      description: "Acara berhasil"
    },
    {
      icon: Clock,
      label: t('about.stats.experience'),
      value: "5+",
      description: "Tahun pengalaman"
    }
  ];

  const features = [
    "Platform yang aman dan terpercaya",
    "Verifikasi vendor berkualitas",
    "Sistem pembayaran yang secure",
    "Customer support 24/7"
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-midnight relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 border border-gold/10 rounded-full animate-spin-slow" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 border border-gold/5 rounded-full animate-spin-reverse" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div
            className="opacity-0 animate-fade-in-left"
            style={{ animationDelay: isInView ? '0ms' : '9999ms' }}
          >
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
              <span className="text-gold text-sm font-medium">
                ✨ {t('about.title')}
              </span>
            </div>

            {/* Title */}
            <div className="heading-2 text-gray-900 dark:text-white mb-6">
              Platform Terdepan untuk{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-600">
                Event Impian Anda
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t('about.description')} Dengan teknologi modern dan jaringan vendor terluas, 
              kami memastikan setiap acara Anda menjadi momen yang tak terlupakan.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: isInView ? `${200 + index * 100}ms` : '9999ms' }}
                >
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Column */}
          <div
            className="grid gap-8 opacity-0 animate-fade-in-right"
            style={{ animationDelay: isInView ? '200ms' : '9999ms' }}
          >
            {/* Image Placeholder - bisa diganti dengan foto real tim/aplikasi */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gold/20 to-midnight/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-gold" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mockup aplikasi Hacara
                  </p>
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 to-transparent" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-white dark:bg-midnight-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gold/10 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: isInView ? `${400 + index * 100}ms` : '9999ms' }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}