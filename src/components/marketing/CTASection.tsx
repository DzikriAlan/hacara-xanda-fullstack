"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/components/marketing-language-provider';

export function CTASection() {
  const { t } = useLanguage();

  const handleGetStarted = () => {
    // Redirect ke halaman registrasi atau form booking
    window.open('/register', '_blank');
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background dengan gradasi premium - smooth banget bro ini backgroundnya */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight-50 to-gold/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-midnight/40" />
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/15 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Sparkles Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold to-gold-600 rounded-full mb-8 shadow-xl animate-fade-in delay-200">
            <Sparkles className="h-10 w-10 text-white" />
          </div>

          {/* Main Headline */}
          <div
            className="animate-fade-in-up delay-[400ms]"
            style={{ 
              fontFamily: 'var(--font-playfair), "Crimson Text", "Cormorant Garamond", "EB Garamond", Georgia, serif',
              fontSize: '3.75rem',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.025em'
            }}
          >
            
          </div>
          <div className="text-white mb-6">{t('cta.title')}</div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-poppins animate-fade-in-up delay-600">
            Bergabunglah dengan ribuan pengguna yang telah mempercayai Hacara untuk 
            mewujudkan acara impian mereka. Mulai perjalanan Anda hari ini!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-[800ms]">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-gold to-gold-600 hover:from-gold-600 hover:to-gold-700 text-midnight font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-gold/50 transition-all duration-300 group"
            >
              {t('cta.button')}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-12 py-6 text-xl backdrop-blur-sm"
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up delay-[1000ms]">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">10K+</div>
              <div className="text-white/70 text-sm md:text-base">Vendor Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">25K+</div>
              <div className="text-white/70 text-sm md:text-base">Event Sukses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">4.9⭐</div>
              <div className="text-white/70 text-sm md:text-base">Rating User</div>
            </div>
          </div>

          {/* Bottom Note */}
          <p className="text-white/60 text-sm mt-8 animate-fade-in delay-[1200ms]">
            💳 Gratis mendaftar • 🔒 100% Aman • ⚡ Setup dalam 5 menit
          </p>
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}