"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  switchLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation object
const translations = {
  id: {
    // Navbar
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.schemes': 'Skema',
    'nav.process': 'Proses',
    'nav.testimonials': 'Testimoni',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontak',
    'nav.register': 'Daftar',
    
    // Hero Section
    'hero.title': 'Tingkatkan Kredibilitas Anda dengan Sertifikasi Profesi Resmi',
    'hero.subtitle': 'LSP Xanda membantu profesional Indonesia mendapatkan pengakuan kompetensi bersertifikat BNSP.',
    'hero.cta': 'Daftar Sekarang',
    
    // About Section
    'about.title': 'Tentang LSP Xanda',
    'about.description': 'Lembaga Sertifikasi Profesi yang terpercaya dalam mengembangkan dan mengakui kompetensi profesional di Indonesia.',
    'about.certified': 'Peserta Tersertifikasi',
    'about.schemes': 'Skema Sertifikasi',
    'about.experience': 'Tahun Pengalaman',
    
    // Schemes Section
    'schemes.title': 'Skema Sertifikasi',
    'schemes.subtitle': 'Pilih skema sertifikasi yang sesuai dengan bidang keahlian Anda',
    'schemes.it': 'Teknologi Informasi',
    'schemes.it.desc': 'Sertifikasi untuk profesional IT dan teknologi',
    'schemes.hospitality': 'Perhotelan',
    'schemes.hospitality.desc': 'Sertifikasi untuk industri perhotelan dan pariwisata',
    'schemes.finance': 'Keuangan',
    'schemes.finance.desc': 'Sertifikasi untuk profesional keuangan dan perbankan',
    'schemes.construction': 'Konstruksi',
    'schemes.construction.desc': 'Sertifikasi untuk profesional konstruksi dan bangunan',
    'schemes.detail': 'Lihat Detail',
    
    // Process Section
    'process.title': 'Alur Sertifikasi',
    'process.subtitle': 'Proses mudah dalam 4 langkah',
    'process.step1': 'Pendaftaran',
    'process.step1.desc': 'Daftar online dan lengkapi dokumen',
    'process.step2': 'Verifikasi',
    'process.step2.desc': 'Tim kami memverifikasi kelengkapan data',
    'process.step3': 'Uji Kompetensi',
    'process.step3.desc': 'Ikuti ujian sesuai skema yang dipilih',
    'process.step4': 'Sertifikat Terbit',
    'process.step4.desc': 'Dapatkan sertifikat resmi BNSP',
    
    // Testimonials
    'testimonials.title': 'Testimoni',
    'testimonials.subtitle': 'Apa kata mereka yang telah tersertifikasi',
    
    // Partners
    'partners.title': 'Partner & Klien',
    'partners.subtitle': 'Dipercaya oleh perusahaan terkemuka',
    
    // FAQ
    'faq.title': 'Pertanyaan Umum',
    'faq.subtitle': 'Temukan jawaban atas pertanyaan yang sering diajukan',
    'faq.q1': 'Apa itu LSP?',
    'faq.a1': 'Lembaga Sertifikasi Profesi (LSP) adalah lembaga yang melaksanakan sertifikasi kompetensi kerja sesuai ruang lingkup yang ditetapkan.',
    'faq.q2': 'Bagaimana cara mendaftar?',
    'faq.a2': 'Anda dapat mendaftar secara online melalui website kami atau datang langsung ke kantor LSP Xanda.',
    'faq.q3': 'Berapa lama proses sertifikasi?',
    'faq.a3': 'Proses sertifikasi biasanya memakan waktu 2-4 minggu tergantung skema yang dipilih.',
    'faq.q4': 'Apakah sertifikat berlaku selamanya?',
    'faq.a4': 'Sertifikat berlaku selama 3 tahun dan dapat diperpanjang melalui proses resertifikasi.',
    
    // Final CTA
    'cta.title': 'Siap menjadi Profesional Bersertifikat?',
    'cta.subtitle': 'Bergabunglah dengan ribuan profesional yang telah meningkatkan karir mereka',
    'cta.button': 'Daftar Sekarang',
    
    // Footer
    'footer.contact': 'Kontak',
    'footer.address': 'Alamat',
    'footer.phone': 'Telepon',
    'footer.email': 'Email',
    'footer.license': 'Lisensi BNSP',
    'footer.copyright': 'Hak Cipta',
    'footer.rights': 'Seluruh hak dilindungi',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.schemes': 'Schemes',
    'nav.process': 'Process',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.register': 'Register',
    
    // Hero Section
    'hero.title': 'Enhance Your Credibility with Official Professional Certification',
    'hero.subtitle': 'LSP Xanda helps Indonesian professionals gain BNSP-recognized competence.',
    'hero.cta': 'Register Now',
    
    // About Section
    'about.title': 'About LSP Xanda',
    'about.description': 'A trusted Professional Certification Body in developing and recognizing professional competence in Indonesia.',
    'about.certified': 'Certified Participants',
    'about.schemes': 'Certification Schemes',
    'about.experience': 'Years Experience',
    
    // Schemes Section
    'schemes.title': 'Certification Schemes',
    'schemes.subtitle': 'Choose certification schemes that match your expertise',
    'schemes.it': 'Information Technology',
    'schemes.it.desc': 'Certification for IT and technology professionals',
    'schemes.hospitality': 'Hospitality',
    'schemes.hospitality.desc': 'Certification for hospitality and tourism industry',
    'schemes.finance': 'Finance',
    'schemes.finance.desc': 'Certification for finance and banking professionals',
    'schemes.construction': 'Construction',
    'schemes.construction.desc': 'Certification for construction and building professionals',
    'schemes.detail': 'View Details',
    
    // Process Section
    'process.title': 'Certification Process',
    'process.subtitle': 'Easy process in 4 steps',
    'process.step1': 'Registration',
    'process.step1.desc': 'Register online and complete documents',
    'process.step2': 'Verification',
    'process.step2.desc': 'Our team verifies data completeness',
    'process.step3': 'Competency Test',
    'process.step3.desc': 'Take the test according to chosen scheme',
    'process.step4': 'Certificate Issued',
    'process.step4.desc': 'Get official BNSP certificate',
    
    // Testimonials
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What certified professionals say',
    
    // Partners
    'partners.title': 'Partners & Clients',
    'partners.subtitle': 'Trusted by leading companies',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to commonly asked questions',
    'faq.q1': 'What is LSP?',
    'faq.a1': 'Professional Certification Body (LSP) is an institution that conducts work competency certification according to established scope.',
    'faq.q2': 'How to register?',
    'faq.a2': 'You can register online through our website or visit LSP Xanda office directly.',
    'faq.q3': 'How long does certification take?',
    'faq.a3': 'Certification process usually takes 2-4 weeks depending on chosen scheme.',
    'faq.q4': 'Is the certificate valid forever?',
    'faq.a4': 'Certificate is valid for 3 years and can be renewed through recertification process.',
    
    // Final CTA
    'cta.title': 'Ready to Become a Certified Professional?',
    'cta.subtitle': 'Join thousands of professionals who have advanced their careers',
    'cta.button': 'Register Now',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.address': 'Address',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.license': 'BNSP License',
    'footer.copyright': 'Copyright',
    'footer.rights': 'All rights reserved',
  }
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('id')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  // Translation function
  const t = (key: string): string => {
    const currentTranslations = translations[language] as Record<string, string>
    return currentTranslations[key] || key
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      currentLanguage: language,
      setLanguage: handleSetLanguage, 
      switchLanguage: handleSetLanguage,
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}