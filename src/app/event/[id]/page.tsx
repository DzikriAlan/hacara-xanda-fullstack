'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Clock, 
  Car,
  Users, 
  Star, 
  Snowflake,
  Camera,
  ArrowLeft,
  Search, 
  ChevronDown, 
  Moon, 
  Sun,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function EventDetailPage() {
  const [activeVendorCategory, setActiveVendorCategory] = useState<'gedung' | 'event organizer' | 'catering'>('gedung');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [hoveredReview, setHoveredReview] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Mock event data
  const eventData = {
    id: 1,
    title: "Wedding Expo Jakarta 2025",
    tagline: "Pernikahan impian dimulai dari sini",
    location: "Jakarta Convention Center",
    fullAddress: "Jl. Gatot Subroto, Gelora, Tanah Abang, Jakarta Pusat 10270",
    date: "20 November 2025",
    time: "09:00 - 18:00 WIB",
    capacity: "2000+ pengunjung",
    description: "Wedding Expo Jakarta 2025 merupakan pameran pernikahan terbesar di Indonesia yang menghadirkan lebih dari 200 vendor pilihan terbaik. Event ini akan menampilkan berbagai inovasi terbaru dalam industri pernikahan, mulai dari gaun pengantin eksklusif, dekorasi mewah, katering berkualitas, hingga teknologi terbaru untuk dokumentasi pernikahan. Para pengunjung akan mendapatkan kesempatan bertemu langsung dengan para ahli wedding planner, mencoba berbagai produk, dan mendapatkan penawaran spesial khusus selama pameran. Jangan lewatkan kesempatan untuk merencanakan pernikahan impian Anda di satu tempat.",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=800&fit=crop&auto=format",
    organizerName: "Jakarta Wedding International",
    organizerDescription: "Penyelenggara acara pernikahan terpercaya dengan pengalaman lebih dari 15 tahun",
    organizerLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&auto=format"
  };

  // Gallery photos - only show 3
  const galleryPhotos = [
    { url: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop&auto=format", caption: "Dekorasi" },
    { url: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop&auto=format", caption: "Catering" },
    { url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop&auto=format", caption: "Venue" },
    { url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&auto=format", caption: "Hiburan" },
    { url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop&auto=format", caption: "Dokumentasi" },
    { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&auto=format", caption: "Pameran" },
    { url: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&h=400&fit=crop&auto=format", caption: "Gaun Pengantin" },
    { url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&auto=format", caption: "Wedding Cake" },
    { url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format", caption: "Makeup & Beauty" }
  ];

  // Review data for chart
  const reviewData = [
    { category: "Datang Tepat Waktu", rating: 4.8 },
    { category: "Harga Terjangkau", rating: 4.5 },
    { category: "Acara Meriah", rating: 4.9 },
    { category: "Tampilannya Mewah", rating: 4.7 },
    { category: "Respons Cepat", rating: 4.6 },
    { category: "Ramah & Profesional", rating: 4.8 },
    { category: "Kualitas Produk / Jasa", rating: 4.9 },
    { category: "Sesuai Ekspektasi", rating: 4.7 },
    { category: "Fleksibilitas", rating: 4.4 }
  ];

  // Venue facilities
  const venueFacilities = [
    { name: "Kapasitas", value: "2000+ tamu", icon: Users },
    { name: "Area Parkir", value: "500 slot", icon: Car },
    { name: "AC Central", value: "Tersedia", icon: Snowflake },
    { name: "Dokumentasi", value: "Area foto", icon: Camera }
  ];

  // Vendor categories dengan 11 vendors each - Updated categories
  const vendorCategories = {
    gedung: [
      {
        name: "Grand Ballroom Jakarta",
        rating: 4.9,
        price: "Rp 35.000.000",
        location: "Jakarta Pusat",
        image: "https://images.unsplash.com/photo-1519167758481-83f29c852c26?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Imperial Wedding Hall",
        rating: 4.8,
        price: "Rp 28.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Crystal Palace Ballroom",
        rating: 4.9,
        price: "Rp 42.000.000",
        location: "Jakarta Barat",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Emerald Garden Hall",
        rating: 4.7,
        price: "Rp 22.000.000",
        location: "Jakarta Timur",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Royal Convention Center",
        rating: 4.8,
        price: "Rp 38.000.000",
        location: "Jakarta Utara",
        image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Diamond Ballroom",
        rating: 4.9,
        price: "Rp 45.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Golden Palace Hall",
        rating: 4.6,
        price: "Rp 32.000.000",
        location: "Jakarta Pusat",
        image: "https://images.unsplash.com/photo-1465343161283-c1959138ddaa?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Paradise Wedding Venue",
        rating: 4.8,
        price: "Rp 26.000.000",
        location: "Jakarta Barat",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Majestic Function Hall",
        rating: 4.7,
        price: "Rp 30.000.000",
        location: "Jakarta Timur",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Elite Wedding Ballroom",
        rating: 4.5,
        price: "Rp 24.000.000",
        location: "Jakarta Utara",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Platinum Event Center",
        rating: 4.8,
        price: "Rp 40.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=250&fit=crop&auto=format"
      }
    ],
    "event organizer": [
      {
        name: "Elegant Wedding Organizer",
        rating: 4.9,
        price: "Rp 18.000.000",
        location: "Jakarta Pusat",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Perfect Moments Planner",
        rating: 4.8,
        price: "Rp 15.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Dream Wedding Organizer",
        rating: 4.9,
        price: "Rp 22.000.000",
        location: "Jakarta Barat",
        image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Royal Wedding Planner",
        rating: 4.7,
        price: "Rp 16.500.000",
        location: "Jakarta Timur",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Blissful Event Organizer",
        rating: 4.8,
        price: "Rp 20.000.000",
        location: "Jakarta Utara",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Luxury Wedding Planner",
        rating: 4.9,
        price: "Rp 25.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Enchanted Wedding Co",
        rating: 4.6,
        price: "Rp 14.000.000",
        location: "Jakarta Pusat",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Fairytale Event Planner",
        rating: 4.8,
        price: "Rp 19.500.000",
        location: "Jakarta Barat",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Premium Wedding Services",
        rating: 4.7,
        price: "Rp 17.800.000",
        location: "Jakarta Timur",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Elite Event Organizer",
        rating: 4.5,
        price: "Rp 13.500.000",
        location: "Jakarta Utara",
        image: "https://images.unsplash.com/photo-1582052426304-bf142aa3a96c?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Platinum Wedding Co",
        rating: 4.8,
        price: "Rp 23.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop&auto=format"
      }
    ],
    catering: [
      {
        name: "Royal Catering Services",
        rating: 4.9,
        price: "Rp 120.000/pax",
        location: "Jakarta Pusat",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Premium Feast Catering",
        rating: 4.8,
        price: "Rp 95.000/pax",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Deluxe Wedding Catering",
        rating: 4.9,
        price: "Rp 150.000/pax",
        location: "Jakarta Barat",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Golden Spoon Catering",
        rating: 4.7,
        price: "Rp 85.000/pax",
        location: "Jakarta Timur",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Elite Culinary Services",
        rating: 4.8,
        price: "Rp 110.000/pax",
        location: "Jakarta Utara",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Gourmet Wedding Catering",
        rating: 4.9,
        price: "Rp 135.000/pax",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1506761815721-2c9ac8e1be63?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Signature Catering Co",
        rating: 4.6,
        price: "Rp 88.000/pax",
        location: "Jakarta Pusat",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Exquisite Food Services",
        rating: 4.8,
        price: "Rp 105.000/pax",
        location: "Jakarta Barat",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Culinary Excellence",
        rating: 4.7,
        price: "Rp 92.000/pax",
        location: "Jakarta Timur",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Luxury Dining Catering",
        rating: 4.5,
        price: "Rp 78.000/pax",
        location: "Jakarta Utara",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Master Chef Catering",
        rating: 4.8,
        price: "Rp 125.000/pax",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&auto=format"
      }
    ]
  };

  // Budget estimation
  const budgetEstimation = [
    { category: "Wedding Organizer", price: "15 - 50 jt" },
    { category: "Catering", price: "80k - 200k/pax" },
    { category: "Dekorasi", price: "10 - 30 jt" },
    { category: "Dokumentasi", price: "5 - 15 jt" },
    { category: "Venue", price: "20 - 80 jt" },
    { category: "Hiburan", price: "3 - 12 jt" }
  ];

  // Slider functions
  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 280;
      const newScrollLeft = direction === 'left' 
        ? sliderRef.current.scrollLeft - scrollAmount
        : sliderRef.current.scrollLeft + scrollAmount;
      
      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-super-black text-primary-white' 
        : 'bg-primary-white text-super-black'
    }`}>
      {/* Navbar */}
      <nav className={`backdrop-blur-sm border-b sticky top-0 z-50 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-super-black/95 border-border-subtle' 
          : 'bg-primary-white/95 border-gray-200'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                isDarkMode ? 'bg-primary-white' : 'bg-super-black'
              }`}>
                <span className={`font-bold text-lg transition-colors duration-300 ${
                  isDarkMode ? 'text-super-black' : 'text-primary-white'
                }`}>H</span>
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-primary-white' : 'text-super-black'
              }`}>Hacara</span>
            </Link>

            {/* Search Bar & Dropdowns */}
            <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
              <div className="relative flex-1">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-secondary-gray' : 'text-gray-500'
                }`} />
                <Input 
                  placeholder="Cari event, vendor, atau lokasi…"
                  className={`pl-10 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-surface border-border-subtle text-primary-white placeholder:text-secondary-gray' 
                      : 'bg-white border-gray-200 text-super-black placeholder:text-gray-500'
                  }`}
                />
              </div>
              <Button variant="outline" className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'border-border-subtle text-primary-white hover:bg-surface bg-transparent' 
                  : 'border-gray-200 text-super-black hover:bg-gray-50 bg-white'
              }`}>
                Kategori <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'border-border-subtle text-primary-white hover:bg-surface bg-transparent' 
                  : 'border-gray-200 text-super-black hover:bg-gray-50 bg-white'
              }`}>
                Kota <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Theme Toggle & Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-primary-white hover:bg-surface' 
                    : 'text-super-black hover:bg-gray-100'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button variant="outline" className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'border-border-subtle text-primary-white hover:bg-surface bg-transparent' 
                  : 'border-gray-200 text-super-black hover:bg-gray-50 bg-white'
              }`}>
                Masuk
              </Button>
              <Button className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-primary-white text-super-black hover:bg-secondary-light' 
                  : 'bg-super-black text-primary-white hover:bg-gray-800'
              }`}>
                Daftar
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-6">
        <Link href="/" className={`inline-flex items-center transition-colors ${
          isDarkMode ? 'text-secondary-gray hover:text-primary-white' : 'text-gray-600 hover:text-super-black'
        }`}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Comprehensive Information Section */}
      <section className={`pt-8 transition-colors duration-300 ${
        isDarkMode ? 'bg-surface' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl md:text-3xl font-bold mb-8 transition-colors duration-300 ${
            isDarkMode ? 'text-primary-white' : 'text-super-black'
          }`}>Informasi Lengkap Event</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Promo Special & Estimasi Biaya */}
            <div className="lg:col-span-2">
              <div className={`rounded-xl p-8 overflow-hidden transition-colors duration-300 ${
                isDarkMode ? 'bg-gradient-to-br from-super-black via-surface to-super-black border border-border-subtle' : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-200'
              }`}>
                <div className="relative z-10">
                  {/* Promo Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-white rounded-full flex items-center justify-center mr-4">
                      <span className="text-super-black font-bold text-xl">%</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-white">Promo Spesial!</h3>
                      <p className="text-secondary-light text-sm">Dapatkan diskon hingga 30%</p>
                    </div>
                  </div>
                  
                  {/* Event Details Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Detail Event */}
                    <div>
                      <h4 className="text-primary-white font-bold mb-3">Detail Event:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-secondary-light" />
                          <span className="text-secondary-light">{eventData.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 mr-2 text-secondary-light" />
                          <span className="text-secondary-light">{eventData.date}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="w-4 h-4 mr-2 text-secondary-light" />
                          <span className="text-secondary-light">{eventData.capacity}</span>
                        </div>
                      </div>
                    </div>

                    {/* Estimasi Biaya */}
                    <div>
                      <h4 className="text-primary-white font-bold mb-3">Estimasi Biaya:</h4>
                      <div className="space-y-2">
                        {budgetEstimation.slice(0, 3).map((item, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="text-secondary-light">{item.category}</span>
                            <span className="text-primary-white font-medium">Rp {item.price}</span>
                          </div>
                        ))}
                        <div className="border-t border-primary-white/20 pt-2 mt-2">
                          <div className="flex justify-between items-center">
                            <span className="text-primary-white font-bold text-sm">Total Estimasi:</span>
                            <span className="text-primary-white font-bold">Rp 50-150jt</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fasilitas Grid */}
                  <div className="mb-6">
                    <h4 className="text-primary-white font-bold mb-3">Fasilitas Tersedia:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {venueFacilities.map((facility, index) => {
                        const IconComponent = facility.icon;
                        return (
                          <div key={index} className="flex items-center p-3 rounded-lg bg-primary-white/10 border border-primary-white/20">
                            <IconComponent className="w-4 h-4 mr-2 text-primary-white" />
                            <div>
                              <p className="text-primary-white font-medium text-sm">{facility.name}</p>
                              <p className="text-secondary-light text-xs">{facility.value}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-primary-white">
                      <div className="w-2 h-2 bg-primary-white rounded-full mr-3"></div>
                      <span className="text-sm">Free konsultasi dengan wedding planner</span>
                    </div>
                    <div className="flex items-center text-primary-white">
                      <div className="w-2 h-2 bg-primary-white rounded-full mr-3"></div>
                      <span className="text-sm">Bundle package hemat untuk 5+ vendor</span>
                    </div>
                    <div className="flex items-center text-primary-white">
                      <div className="w-2 h-2 bg-primary-white rounded-full mr-3"></div>
                      <span className="text-sm">Garansi uang kembali 100%</span>
                    </div>
                  </div>
                  
                  {/* Price & CTA */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-secondary-gray text-sm">Berakhir dalam:</span>
                      <div className="flex space-x-2 mt-1">
                        <div className="bg-primary-white text-super-black px-2 py-1 rounded text-xs font-bold">12</div>
                        <div className="bg-primary-white text-super-black px-2 py-1 rounded text-xs font-bold">Hari</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-secondary-gray text-sm line-through">Rp 75.000.000</span>
                      <div className="text-primary-white font-bold text-xl">Rp 52.500.000</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button className="bg-primary-white text-super-black hover:bg-secondary-light font-bold">
                      Klaim Promo
                    </Button>
                    <Button variant="outline" className="border-primary-white/20 text-primary-white hover:bg-primary-white/10">
                      Hubungi Venue
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Gallery & Reviews */}
            <div className="space-y-6">
              {/* Review Chart */}
              <Card className={`transition-colors duration-300 ${
                isDarkMode ? 'bg-super-black border-border-subtle' : 'bg-white border-gray-200'
              }`}>
                <CardHeader className="pb-4">
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-primary-white' : 'text-super-black'
                  }`}>
                    Review Customer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {reviewData.map((item, index) => (
                    <div 
                      key={index} 
                      className="relative"
                      onMouseEnter={() => setHoveredReview(item.category)}
                      onMouseLeave={() => setHoveredReview(null)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-medium transition-colors duration-300 ${
                          isDarkMode ? 'text-primary-white' : 'text-super-black'
                        }`}>
                          {item.category}
                        </span>
                        <span className={`text-xs font-bold transition-colors duration-300 ${
                          isDarkMode ? 'text-primary-white' : 'text-super-black'
                        }`}>
                          {item.rating}⭐
                        </span>
                      </div>
                      <div className={`w-full h-2 rounded-full transition-colors duration-300 ${
                        isDarkMode ? 'bg-border-subtle' : 'bg-gray-200'
                      }`}>
                        <div 
                          className="h-2 rounded-full bg-[#00BFA6] transition-all duration-300"
                          style={{ width: `${(item.rating / 5) * 100}%` }}
                        />
                      </div>
                      
                      {/* Tooltip */}
                      {hoveredReview === item.category && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-super-black text-primary-white text-xs px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap">
                          {item.category} — {item.rating}⭐
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
              {/* Gallery Photos - Only 4 photos */}
              <div>
                <div className="grid grid-cols-2 gap-3">
                  {galleryPhotos.slice(0, 3).map((photo, index) => (
                    <div 
                      key={index} 
                      className="relative h-24 rounded-lg overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedPhoto(photo.url)}
                    >
                      <Image
                        src={photo.url}
                        alt={photo.caption}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-super-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-primary-white font-medium text-xs">{photo.caption}</span>
                      </div>
                    </div>
                  ))}
                  <div 
                    className="relative h-24 rounded-lg overflow-hidden cursor-pointer bg-super-black/80 flex items-center justify-center border-2 border-dashed border-primary-white/30"
                    onClick={() => setSelectedPhoto(galleryPhotos[3].url)}
                  >
                    <span className="text-primary-white font-bold text-sm">
                      +{galleryPhotos.length - 3} Foto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Section */}
      <section className={`py-16 transition-colors duration-300 ${
        isDarkMode ? 'bg-super-black' : 'bg-primary-white'
      }`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 transition-colors duration-300 ${
            isDarkMode ? 'text-primary-white' : 'text-super-black'
          }`}>Terkait Pernikahan Lainnya</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-1 mb-6 md:mb-8">
            {(Object.keys(vendorCategories) as Array<keyof typeof vendorCategories>).map((category) => (
              <button
                key={category}
                onClick={() => setActiveVendorCategory(category)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all capitalize text-sm md:text-base ${
                  activeVendorCategory === category
                    ? isDarkMode 
                      ? 'bg-primary-white text-super-black'
                      : 'bg-super-black text-primary-white'
                    : isDarkMode
                      ? 'bg-surface border border-border-subtle text-primary-white hover:bg-primary-white/10'
                      : 'bg-gray-50 border border-gray-200 text-super-black hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Vendor Slider */}
          <div className="relative">
            <div 
              ref={sliderRef}
              className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {vendorCategories[activeVendorCategory].map((vendor, index) => (
                <div 
                  key={index} 
                  className={`flex-none w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] md:min-w-[300px] md:w-[300px] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group border ${
                    isDarkMode 
                      ? 'bg-surface border-border-subtle hover:border-primary-white/30' 
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="relative h-32 md:h-40 overflow-hidden">
                    <Image
                      src={vendor.image}
                      alt={vendor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className={`font-bold text-base md:text-lg mb-2 line-clamp-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-primary-white' : 'text-super-black'
                    }`}>{vendor.name}</h3>
                    
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 mr-1" />
                        <span className={`text-xs md:text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-primary-white' : 'text-super-black'
                        }`}>{vendor.rating}</span>
                      </div>
                      <span className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-primary-white' : 'text-super-black'
                      }`}>{vendor.price}</span>
                    </div>
                    
                    <div className="flex items-center mb-3 md:mb-4">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 text-gray-500 flex-shrink-0" />
                      <span className={`text-xs md:text-sm transition-colors duration-300 truncate ${
                        isDarkMode ? 'text-secondary-gray' : 'text-gray-600'
                      }`}>{vendor.location}</span>
                    </div>
                    
                    <Button variant="outline" size="sm" className={`w-full text-xs md:text-sm py-1.5 md:py-2 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'border-border-subtle text-primary-white hover:bg-surface bg-transparent'
                        : 'border-gray-200 text-super-black hover:bg-gray-50 bg-white'
                    }`}>
                      Lihat Detail
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Navigation - Hidden on mobile for better UX */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollSlider('left')}
              className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full items-center justify-center transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-surface border-border-subtle text-primary-white hover:bg-primary-white/10'
                  : 'bg-white border-gray-200 text-super-black hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollSlider('right')}
              className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full items-center justify-center transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-surface border-border-subtle text-primary-white hover:bg-primary-white/10'
                  : 'bg-white border-gray-200 text-super-black hover:bg-gray-100'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="flex md:hidden justify-center mt-4">
            <div className={`flex items-center space-x-2 text-xs transition-colors duration-300 ${
              isDarkMode ? 'text-secondary-gray' : 'text-gray-500'
            }`}>
              <span>Geser untuk melihat lebih banyak</span>
              <div className="flex space-x-1">
                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  isDarkMode ? 'bg-border-subtle' : 'bg-gray-300'
                }`}></div>
                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  isDarkMode ? 'bg-border-subtle' : 'bg-gray-300'
                }`}></div>
                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  isDarkMode ? 'bg-border-subtle' : 'bg-gray-300'
                }`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced to match main page */}
      <footer className={`border-t py-16 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-super-black border-border-subtle'
          : 'bg-primary-white border-gray-200'
      }`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  isDarkMode ? 'bg-primary-white' : 'bg-super-black'
                }`}>
                  <span className={`font-bold text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-super-black' : 'text-primary-white'
                  }`}>H</span>
                </div>
                <span className={`text-xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-primary-white' : 'text-super-black'
                }`}>Hacara</span>
              </div>
              <p className={`text-sm mb-4 max-w-md transition-colors duration-300 ${
                isDarkMode ? 'text-secondary-gray' : 'text-gray-600'
              }`}>
                Platform terpercaya untuk menemukan vendor dan venue terbaik untuk acara impian Anda. 
                Dari pernikahan hingga event korporat, kami siap membantu mewujudkan acara yang berkesan.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <Link href="#" className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-surface hover:bg-primary-white/10 text-primary-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-super-black'
                }`}>
                  <span className="text-sm font-bold">f</span>
                </Link>
                <Link href="#" className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-surface hover:bg-primary-white/10 text-primary-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-super-black'
                }`}>
                  <span className="text-sm font-bold">@</span>
                </Link>
                <Link href="#" className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-surface hover:bg-primary-white/10 text-primary-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-super-black'
                }`}>
                  <span className="text-sm font-bold">in</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-primary-white' : 'text-super-black'
              }`}>Quick Links</h4>
              <div className="space-y-2">
                <Link href="#" className={`block text-sm transition-colors ${
                  isDarkMode ? 'text-secondary-gray hover:text-primary-white' : 'text-gray-600 hover:text-super-black'
                }`}>
                  Cari Event
                </Link>
                <Link href="#" className={`block text-sm transition-colors ${
                  isDarkMode ? 'text-secondary-gray hover:text-primary-white' : 'text-gray-600 hover:text-super-black'
                }`}>
                  Daftar Vendor
                </Link>
                <Link href="#" className={`block text-sm transition-colors ${
                  isDarkMode ? 'text-secondary-gray hover:text-primary-white' : 'text-gray-600 hover:text-super-black'
                }`}>
                  Inspiration
                </Link>
                <Link href="#" className={`block text-sm transition-colors ${
                  isDarkMode ? 'text-secondary-gray hover:text_primary-white' : 'text-gray-600 hover:text-super-black'
                }`}>
                  Blog
                </Link>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className={`font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-primary-white' : 'text-super-black'
              }`}>Support</h4>
              <div className="space-y-2">
                <Link href="#" className={`block text-sm transition-colors ${
                  isDarkMode ? 'text-secondary-gray hover:text-primary-white' : 'text-gray-600 hover:text-super-black'
                }`}>
                  Help Center
                </Link>
                <Link href="#" className={`block text-sm transition-colors ${
                  isDarkMode ? 'text-secondary-gray hover:text-primary-white' : 'text-gray-600 hover:text-super-black'
                }`}>
                  Hubungi Kami
                </Link>
                <Link href="#" className={`block text-sm transition-colors ${
                  isDarkMode ? 'text-secondary-gray hover:text_primary-white' : 'text-gray-600 hover:text-super-black'
                }`}>
                  Tentang Kami
                </Link>
                <Link href="#" className={`block text-sm transition-colors ${
                  isDarkMode ? 'text-secondary-gray hover:text_primary-white' : 'text-gray-600 hover:text-super-black'
                }`}>
                  Karir
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className={`border-t pt-8 mb-8 transition-colors duration-300 ${
            isDarkMode ? 'border-border-subtle' : 'border-gray-200'
          }`}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h4 className={`font-bold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-primary-white' : 'text-super-black'
                }`}>
                  Dapatkan Update Terbaru
                </h4>
                <p className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-secondary-gray' : 'text-gray-600'
                }`}>
                  Berlangganan newsletter untuk tips, promo, dan event terbaru
                </p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Input 
                  placeholder="Email Anda" 
                  className={`transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-surface border-border-subtle text-primary-white placeholder:text-secondary-gray'
                      : 'bg-gray-50 border-gray-200 text-super-black placeholder:text-gray-500'
                  }`}
                />
                <Button className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-primary-white text-super-black hover:bg-secondary-light'
                    : 'bg-super-black text-primary-white hover:bg-gray-800'
                }`}>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t transition-colors duration-300 ${
            isDarkMode 
              ? 'border-border-subtle text-secondary-gray'
              : 'border-gray-200 text-gray-600'
          }`}>
            <p className="text-sm text-center md:text-left">
              &copy; 2025 Hacara. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="#" className={`transition-colors ${
                isDarkMode ? 'hover:text-primary-white' : 'hover:text-super-black'
              }`}>
                Privacy Policy
              </Link>
              <Link href="#" className={`transition-colors ${
                isDarkMode ? 'hover:text-primary-white' : 'hover:text-super-black'
              }`}>
                Terms of Service
              </Link>
              <Link href="#" className={`transition-colors ${
                isDarkMode ? 'hover:text-primary-white' : 'hover:text-super-black'
              }`}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Photo Popup Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-super-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-10 right-0 text-primary-white hover:text-secondary-light text-2xl font-bold z-10"
            >
              ×
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedPhoto}
                alt="Event photo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            
            {/* Thumbnail navigation */}
            <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
              {galleryPhotos.map((photo, index) => (
                <div
                  key={index}
                  className={`relative w-16 h-16 rounded cursor-pointer border-2 transition-all ${
                    selectedPhoto === photo.url 
                      ? 'border-primary-white' 
                      : 'border-transparent hover:border-secondary-gray'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhoto(photo.url);
                  }}
                >
                  <Image
                    src={photo.url}
                    alt={photo.caption}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}