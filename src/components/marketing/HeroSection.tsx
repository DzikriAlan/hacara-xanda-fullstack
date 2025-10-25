"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/components/marketing-language-provider';

export function HeroSection() {
  const { t } = useLanguage();

  const handleGetStarted = () => {
    const element = document.querySelector('#cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-super-black">
      {/* Background dengan gradasi monochrome */}
      <div className="absolute inset-0 bg-gradient-to-br from-super-black via-surface to-super-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-white/8 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-white/10 border border-primary-white/20 rounded-full mb-8 animate-fade-in delay-200">
            <span className="text-primary-white text-sm font-medium">
              ✨ Platform Event Terpercaya di Indonesia
            </span>
          </div>

          {/* Main Headline */}
          <div className="heading-1 font-poppins text-primary-white mb-6 leading-tight animate-fade-in-up delay-[400ms]">
            {t('hero.title')}
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-secondary-gray mb-8 max-w-3xl mx-auto leading-relaxed font-poppins animate-fade-in-up delay-[600ms]">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-[800ms]">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-cta-gradient hover:bg-cta-gradient-hover text-super-black font-semibold px-8 py-4 text-lg shadow-xl glow-neon transition-all duration-300 group"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary-white/30 text-primary-white hover:bg-hover-effect hover:border-primary-white/60 px-8 py-4 text-lg backdrop-blur-sm group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Lihat Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up delay-[1000ms]">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-white mb-2">10K+</div>
              <div className="text-secondary-gray text-sm md:text-base">Vendor Terpercaya</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-white mb-2">25K+</div>
              <div className="text-secondary-gray text-sm md:text-base">Acara Sukses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-white mb-2">5+</div>
              <div className="text-secondary-gray text-sm md:text-base">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-primary-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}