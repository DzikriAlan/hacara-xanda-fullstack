"use client";

import { useEffect, useState } from 'react';
import { Search, ChevronDown, MapPin, Calendar, Users, Star, ArrowRight, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero slider data
  const heroSlides = [
    {
      id: 1,
      title: "Event Musik Spektakuler",
      subtitle: "Konser terbesar tahun ini dengan artis internasional",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=800&fit=crop&auto=format",
      cta: "Beli Tiket Sekarang"
    },
    {
      id: 2,
      title: "Pernikahan Impian Anda",
      subtitle: "Temukan vendor terbaik untuk hari bahagia Anda",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=800&fit=crop&auto=format",
      cta: "Cari Vendor"
    },
    {
      id: 3,
      title: "Seminar Bisnis Premium",
      subtitle: "Tingkatkan skill dan networking Anda",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&h=800&fit=crop&auto=format",
      cta: "Daftar Sekarang"
    }
  ];

  // Popular events data
  const popularEvents = [
    {
      id: 1,
      title: "Jakarta Food Festival 2025",
      location: "Jakarta",
      date: "25 Nov 2025",
      price: "Rp 150.000",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&auto=format",
      attendees: 1200,
      rating: 4.8
    },
    {
      id: 2,
      title: "Tech Conference Indonesia",
      location: "Bandung", 
      date: "30 Nov 2025",
      price: "Rp 350.000",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&auto=format",
      attendees: 800,
      rating: 4.9
    },
    {
      id: 3,
      title: "Yoga & Wellness Retreat",
      location: "Bali",
      date: "5 Dec 2025", 
      price: "Rp 750.000",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop&auto=format",
      attendees: 150,
      rating: 4.7
    },
    {
      id: 4,
      title: "Stand Up Comedy Night",
      location: "Surabaya",
      date: "8 Dec 2025",
      price: "Rp 75.000", 
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop&auto=format",
      attendees: 300,
      rating: 4.6
    },
    {
      id: 5,
      title: "Art Exhibition Modern",
      location: "Yogyakarta",
      date: "12 Dec 2025",
      price: "Gratis",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format", 
      attendees: 500,
      rating: 4.5
    }
  ];

  // Wedding vendors data
  const weddingVendors = [
    {
      id: 1,
      name: "Royal Catering Service",
      category: "Catering",
      rating: 4.9,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop&auto=format",
      startingPrice: "Rp 150.000/pax"
    },
    {
      id: 2,  
      name: "Grand Ballroom Jakarta",
      category: "Gedung",
      rating: 4.8,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1519167758481-83f29da8530d?w=400&h=300&fit=crop&auto=format",
      startingPrice: "Rp 25.000.000"
    },
    {
      id: 3,
      name: "Perfect Wedding Organizer", 
      category: "Wedding Organizer",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop&auto=format",
      startingPrice: "Rp 50.000.000"
    },
    {
      id: 4,
      name: "Delicious Moments Catering",
      category: "Catering", 
      rating: 4.7,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&auto=format",
      startingPrice: "Rp 120.000/pax"
    },
    {
      id: 5,
      name: "Elite Garden Venue",
      category: "Gedung",
      rating: 4.8, 
      reviews: 167,
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=300&fit=crop&auto=format",
      startingPrice: "Rp 30.000.000"
    }
  ];

  // Seminar data
  const seminars = [
    {
      id: 1,
      title: "Digital Marketing Mastery 2025",
      instructor: "Dr. Sarah Johnson",
      date: "20 Nov 2025",
      price: "Rp 299.000",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&auto=format",
      participants: 150,
      duration: "6 jam"
    },
    {
      id: 2,
      title: "Financial Planning Workshop", 
      instructor: "Prof. Michael Chen",
      date: "22 Nov 2025",
      price: "Rp 350.000",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=250&fit=crop&auto=format",
      participants: 100,
      duration: "4 jam"
    },
    {
      id: 3,
      title: "Leadership & Management",
      instructor: "Andi Wijaya, MBA",
      date: "25 Nov 2025", 
      price: "Rp 450.000",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop&auto=format",
      participants: 80,
      duration: "8 jam"
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      instructor: "Lisa Amanda",
      date: "28 Nov 2025",
      price: "Rp 275.000", 
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop&auto=format",
      participants: 120,
      duration: "5 jam"
    },
    {
      id: 5,
      title: "Social Media Strategy",
      instructor: "Ravi Sharma",
      date: "30 Nov 2025",
      price: "Rp 225.000",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format", 
      participants: 200,
      duration: "3 jam"
    }
  ];

  // Gathering events data
  const gatheringEvents = [
    {
      id: 1,
      title: "Startup Founders Meetup",
      community: "Jakarta Startup Community",
      date: "18 Nov 2025",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop&auto=format",
      attendees: 85,
      type: "Networking"
    },
    {
      id: 2,
      title: "Photography Club Gathering",
      community: "Bandung Photo Society", 
      date: "21 Nov 2025",
      image: "https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?w=400&h=250&fit=crop&auto=format",
      attendees: 45,
      type: "Hobi"
    },
    {
      id: 3,
      title: "Book Lovers Discussion",
      community: "Reading Circle Surabaya",
      date: "24 Nov 2025",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&auto=format",
      attendees: 25,
      type: "Diskusi"
    },
    {
      id: 4,
      title: "Hiking Community Weekend",
      community: "Mountain Explorers",
      date: "26 Nov 2025",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop&auto=format",
      attendees: 60,
      type: "Outdoor"
    },
    {
      id: 5, 
      title: "Coding Bootcamp Alumni",
      community: "Tech Graduates ID",
      date: "29 Nov 2025",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop&auto=format",
      attendees: 95,
      type: "Tech"
    }
  ];

  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="bg-super-black text-primary-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-super-black/95 backdrop-blur-sm border-b border-subtle sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-white rounded-lg flex items-center justify-center">
                <span className="text-super-black font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-primary-white">Hacara</span>
            </div>

            {/* Search Bar & Dropdowns */}
            <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-gray w-4 h-4" />
                <Input 
                  placeholder="Cari event, vendor, atau lokasi…"
                  className="pl-10 bg-surface border-border-subtle text-primary-white placeholder:text-secondary-gray"
                />
              </div>
              <Button variant="outline" className="border-border-subtle text-primary-white hover:bg-hover-effect">
                Kategori <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-border-subtle text-primary-white hover:bg-hover-effect">
                Kota <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-border-subtle text-primary-white hover:bg-hover-effect">
                Masuk
              </Button>
              <Button className="bg-cta-gradient hover:bg-cta-gradient-hover text-super-black">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section dengan Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-super-black/40" />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="max-w-4xl px-4">
                  <h1 className="text-5xl md:text-7xl font-bold text-primary-white mb-6 animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-secondary-light mb-8 animate-fade-in-up">
                    {slide.subtitle}
                  </p>
                  <Button size="lg" className="bg-cta-gradient hover:bg-cta-gradient-hover text-super-black text-lg px-8 py-4 animate-fade-in-up">
                    {slide.cta} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary-white' : 'bg-primary-white/30'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <Button size="lg" className="bg-primary-white/10 backdrop-blur-sm border border-primary-white/20 text-primary-white hover:bg-primary-white/20">
            Jelajahi Event <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

            {/* Event Categories Section - Showcase kategori acara */}
            <section id="categories" className="py-24 bg-gray-50 dark:bg-midnight-50 relative overflow-hidden">
              {/* Soft gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/10"></div>
              
              <div className="container mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
                  <span className="text-gold text-sm font-medium">
                    🎉 Kategori Acara
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                  Acara Apa yang Ingin{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-600">
                    Anda Buat?
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                  Dari acara intim hingga celebration besar, kami punya vendor untuk semua kebutuhan Anda.
                </p>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                  {[
                    { 
                      name: 'Pernikahan', 
                      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop&auto=format',
                      count: '2.5K+ Vendor' 
                    },
                    { 
                      name: 'Ulang Tahun', 
                      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop&auto=format',
                      count: '1.8K+ Vendor' 
                    },
                    { 
                      name: 'Seminar', 
                      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop&auto=format',
                      count: '950+ Vendor' 
                    },
                    { 
                      name: 'Konser', 
                      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format',
                      count: '480+ Vendor' 
                    },
                    { 
                      name: 'Gathering', 
                      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&auto=format',
                      count: '720+ Vendor' 
                    },
                  ].map((category, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white dark:bg-midnight rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border border-gray-100 dark:border-gold/10 overflow-hidden"
                    >
                      <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {category.count}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Popular Vendors Section - Showcase vendor terbaik */}
            <section id="vendors" className="py-24 bg-white dark:bg-midnight relative overflow-hidden">
              {/* Organic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/3 to-transparent"></div>
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
                    <span className="text-gold text-sm font-medium">
                      ⭐ Vendor Populer
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Vendor Terpilih{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-600">
                      Minggu Ini
                    </span>
                  </h2>
                </div>

                {/* Vendors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { 
                      name: 'Elegant Catering', 
                      category: 'Catering', 
                      rating: 4.9, 
                      reviews: 156,
                      location: 'Jakarta',
                      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=500&h=300&fit=crop&auto=format'
                    },
                    { 
                      name: 'Golden Touch Decoration', 
                      category: 'Dekorasi', 
                      rating: 4.8, 
                      reviews: 203,
                      location: 'Bandung',
                      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=300&fit=crop&auto=format'
                    },
                    { 
                      name: 'Melody Entertainment', 
                      category: 'Hiburan', 
                      rating: 4.9, 
                      reviews: 187,
                      location: 'Surabaya',
                      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=300&fit=crop&auto=format'
                    },
                  ].map((vendor, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-midnight-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gold/10 overflow-hidden group"
                    >
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src={vendor.image} 
                          alt={vendor.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-2">
                          {vendor.name}
                        </h3>
                        <p className="text-gold font-medium mb-2">{vendor.category}</p>
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <span>📍 {vendor.location}</span>
                          <span>⭐ {vendor.rating} ({vendor.reviews})</span>
                        </div>
                        <button className="w-full py-2 bg-gold/10 hover:bg-gold/20 text-gold rounded-lg font-medium transition-colors">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section - Social proof */}
            <section id="testimonials" className="py-24 bg-gray-50 dark:bg-midnight-50 relative overflow-hidden">
              {/* Soft radial gradient */}
              <div className="absolute inset-0 bg-radial-gradient from-gold/5 via-transparent to-transparent"></div>
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
                    <span className="text-gold text-sm font-medium">
                      💝 Testimoni Pelanggan
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Cerita Sukses{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-600">
                      Pelanggan Kami
                    </span>
                  </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      name: 'Sarah & David',
                      event: 'Pernikahan',
                      quote: 'Hacara membantu kami menemukan vendor yang sempurna untuk pernikahan impian. Prosesnya mudah dan hasilnya luar biasa!',
                      rating: 5,
                      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=150&h=150&fit=crop&auto=format'
                    },
                    {
                      name: 'PT. Maju Jaya',
                      event: 'Corporate Event',
                      quote: 'Seminar tahunan kami berjalan sangat lancar berkat vendor-vendor berkualitas yang kami temukan di Hacara.',
                      rating: 5,
                      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop&auto=format'
                    },
                    {
                      name: 'Keluarga Sari',
                      event: 'Ulang Tahun Anak',
                      quote: 'Ulang tahun anak kami menjadi sangat memorable. Vendor yang recommended benar-benar profesional.',
                      rating: 5,
                      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=150&h=150&fit=crop&auto=format'
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="p-8 bg-white dark:bg-midnight rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gold/10"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-sm text-gold">{testimonial.event}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 italic leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex text-gold">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* CTA Section - Final push untuk conversion */}
            <CTASection />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}