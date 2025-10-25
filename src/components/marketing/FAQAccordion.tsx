"use client";

import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/components/marketing-language-provider';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const { t, currentLanguage } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  // FAQ data berdasarkan bahasa
  const faqData: Record<string, FAQItem[]> = {
    id: [
      {
        question: "Bagaimana cara memesan vendor di Hacara?",
        answer: "Sangat mudah! Anda bisa mencari vendor berdasarkan kategori acara, lokasi, dan budget. Setelah menemukan vendor yang cocok, klik 'Detail' untuk melihat portfolio dan review, lalu klik 'Pesan Sekarang' untuk memulai proses pemesanan."
      },
      {
        question: "Apakah Hacara menyediakan layanan pembayaran aman?",
        answer: "Ya, kami menggunakan sistem pembayaran yang aman dan terpercaya. Semua transaksi dienkripsi dan dilindungi dengan teknologi keamanan tingkat bank. Anda juga bisa memilih berbagai metode pembayaran yang nyaman untuk Anda."
      },
      {
        question: "Bisakah saya menjadi vendor di Hacara?",
        answer: "Tentu saja! Kami selalu terbuka untuk vendor berkualitas. Silakan daftar melalui portal vendor kami dan tim kami akan melakukan verifikasi. Setelah disetujui, Anda bisa mulai menerima pesanan dari pelanggan di seluruh Indonesia."
      },
      {
        question: "Bagaimana jika saya tidak puas dengan layanan vendor?",
        answer: "Kepuasan Anda adalah prioritas kami. Jika ada masalah dengan vendor, Anda bisa melaporkannya melalui customer support. Kami akan membantu menyelesaikan masalah dan memastikan pengalaman terbaik untuk acara Anda."
      },
      {
        question: "Apakah ada biaya tambahan untuk menggunakan platform Hacara?",
        answer: "Tidak ada biaya tambahan untuk browsing dan mencari vendor. Anda hanya membayar sesuai dengan harga yang telah disepakati dengan vendor. Hacara mendapat komisi kecil dari vendor, bukan dari customer."
      }
    ],
    en: [
      {
        question: "How do I book a vendor on Hacara?",
        answer: "It's very easy! You can search for vendors based on event category, location, and budget. After finding the right vendor, click 'Detail' to view their portfolio and reviews, then click 'Book Now' to start the booking process."
      },
      {
        question: "Does Hacara provide secure payment services?",
        answer: "Yes, we use a safe and trusted payment system. All transactions are encrypted and protected with bank-level security technology. You can also choose from various payment methods that are convenient for you."
      },
      {
        question: "Can I become a vendor on Hacara?",
        answer: "Absolutely! We're always open to quality vendors. Please register through our vendor portal and our team will conduct verification. Once approved, you can start receiving orders from customers across Indonesia."
      },
      {
        question: "What if I'm not satisfied with the vendor's service?",
        answer: "Your satisfaction is our priority. If there are any issues with the vendor, you can report it through customer support. We'll help resolve the problem and ensure the best experience for your event."
      },
      {
        question: "Are there additional fees for using the Hacara platform?",
        answer: "There are no additional fees for browsing and searching for vendors. You only pay according to the price agreed upon with the vendor. Hacara receives a small commission from vendors, not from customers."
      }
    ]
  };

  const currentFAQs = faqData[currentLanguage] || faqData.id;

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-midnight relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
            <span className="text-gold text-sm font-medium">
              ❓ {t('faq.title')}
            </span>
          </div>
          
          <div className="heading-2 text-gray-900 dark:text-white mb-6">
            Pertanyaan yang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-600">
              Sering Diajukan
            </span>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang platform Hacara dan layanan kami.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {currentFAQs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="mb-4"
              >
                <div className="bg-gray-50 dark:bg-midnight-50 rounded-xl border border-gray-200 dark:border-gold/10 overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gold/5 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="heading-6 text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </div>
                    
                    <div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      {isOpen ? (
                        <Minus className="h-6 w-6 text-gold" />
                      ) : (
                        <Plus className="h-6 w-6 text-gold" />
                      )}
                    </div>
                  </button>

                  {/* Answer Panel */}
                  <div
                    initial={false}
                    animate={{ 
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: "easeInOut"
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-200 dark:border-gold/10 pt-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact CTA */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl border border-gold/20"
        >
          <div className="heading-4 text-gray-900 dark:text-white mb-4">
            Masih ada pertanyaan lain?
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Tim customer support kami siap membantu Anda 24/7
          </p>
          <button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gold hover:bg-gold-600 text-midnight font-semibold rounded-lg shadow-lg hover:shadow-gold/25 transition-all duration-300"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}