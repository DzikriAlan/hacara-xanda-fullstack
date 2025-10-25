"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/components/marketing-language-provider';
import { HelpCircle } from 'lucide-react';

export function FAQSection() {
  const { t, currentLanguage } = useLanguage();

  const faqData = {
    id: [
      {
        question: "Bagaimana cara memesan vendor di Hacara?",
        answer: "Anda bisa mencari vendor berdasarkan kategori acara, lokasi, dan budget. Setelah menemukan vendor yang sesuai, klik 'Detail' untuk melihat portofolio dan reviews, lalu klik 'Pesan Sekarang' untuk memulai proses booking."
      },
      {
        question: "Apakah Hacara menyediakan layanan pembayaran yang aman?",
        answer: "Ya, Hacara menggunakan sistem pembayaran yang aman dan terpercaya dengan enkripsi tingkat tinggi. Anda bisa membayar melalui transfer bank, e-wallet, atau kartu kredit. Dana Anda akan disimpan aman hingga acara selesai."
      },
      {
        question: "Bisakah saya menjadi vendor di Hacara?",
        answer: "Tentu saja! Kami selalu terbuka untuk vendor berkualitas. Anda perlu mendaftar, melengkapi profil bisnis, mengunggah portofolio, dan melewati proses verifikasi kami. Tim kami akan membantu Anda dari awal hingga listing aktif."
      },
      {
        question: "Apa yang terjadi jika vendor tidak memenuhi ekspektasi?",
        answer: "Kami memiliki sistem dispute resolution dan jaminan kepuasan. Jika ada masalah, Anda bisa melaporkan melalui customer support kami. Kami akan mediasi dan memastikan solusi terbaik untuk kedua belah pihak."
      },
      {
        question: "Apakah ada biaya tersembunyi?",
        answer: "Tidak ada biaya tersembunyi di Hacara. Semua biaya platform sudah transparan dan tertera di awal booking. Anda hanya membayar harga vendor plus fee platform yang jelas tanpa ada tambahan biaya lain."
      },
      {
        question: "Bagaimana sistem review dan rating bekerja?",
        answer: "Setelah acara selesai, Anda bisa memberikan review dan rating untuk vendor. Review ini akan membantu pengguna lain dan juga membantu vendor meningkatkan kualitas layanan mereka."
      }
    ],
    en: [
      {
        question: "How do I book a vendor on Hacara?",
        answer: "You can search for vendors based on event category, location, and budget. After finding the right vendor, click 'Detail' to view their portfolio and reviews, then click 'Book Now' to start the booking process."
      },
      {
        question: "Does Hacara provide secure payment services?",
        answer: "Yes, Hacara uses a secure and trusted payment system with high-level encryption. You can pay via bank transfer, e-wallet, or credit card. Your funds will be safely held until the event is completed."
      },
      {
        question: "Can I become a vendor on Hacara?",
        answer: "Absolutely! We're always open to quality vendors. You need to register, complete your business profile, upload your portfolio, and pass our verification process. Our team will assist you from start to active listing."
      },
      {
        question: "What happens if the vendor doesn't meet expectations?",
        answer: "We have a dispute resolution system and satisfaction guarantee. If there are any issues, you can report through our customer support. We will mediate and ensure the best solution for both parties."
      },
      {
        question: "Are there any hidden fees?",
        answer: "There are no hidden fees on Hacara. All platform fees are transparent and stated upfront during booking. You only pay the vendor's price plus clearly stated platform fees without any additional charges."
      },
      {
        question: "How does the review and rating system work?",
        answer: "After the event is completed, you can give reviews and ratings for the vendor. These reviews will help other users and also help vendors improve their service quality."
      }
    ]
  };

  const currentFAQs = faqData[currentLanguage] || faqData.id;

  return (
    <section id="faq" className="py-24 bg-white dark:bg-midnight relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 border border-gold/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-gold/5 rounded-full animate-spin-reverse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-gold mr-2" />
            <span className="text-gold text-sm font-medium">
              {t('faq.title')}
            </span>
          </div>
          
          <div className="heading-2 text-gray-900 dark:text-white mb-6">
            Pertanyaan yang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-600">
              Sering Diajukan
            </span>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang platform Hacara dan cara kerjanya.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto animate-fade-in-up delay-300">
          <Accordion type="single" collapsible className="space-y-4">
            {currentFAQs.map((faq, index) => (
              <div
                key={index}
                className={`animate-fade-in-up delay-[${100 + index * 100}ms]`}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-gray-50 dark:bg-midnight-50 rounded-xl border border-gray-200 dark:border-gold/10 px-6 hover:shadow-lg transition-all duration-300 hover:border-gold/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-gold transition-colors py-6 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-600">
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 max-w-2xl mx-auto border border-gold/20">
            <div className="heading-5 text-gray-900 dark:text-white mb-4">
              Masih punya pertanyaan lain?
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Tim customer support kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami!
            </p>
            <button
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gold to-gold-600 hover:from-gold-600 hover:to-gold-700 text-midnight font-semibold rounded-xl shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => {
                // Bisa diarahkan ke contact section atau chat support
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <HelpCircle className="mr-2 h-5 w-5" />
              Hubungi Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}