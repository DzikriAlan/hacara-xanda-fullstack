'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, ArrowRight, MapPin, Calendar, Star, Heart, Users, Moon, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeVendorCategory, setActiveVendorCategory] = useState<'gedung' | 'catering' | 'event organizer' | 'makeup & wardrobe' | 'dokumentasi' | 'entertaintment' | 'tim dekorasi & bunga'>('gedung');

  // Refs for sliders
  const popularEventsSliderRef = useRef<HTMLDivElement>(null);
  const weddingVendorsSliderRef = useRef<HTMLDivElement>(null);
  const seminarsSliderRef = useRef<HTMLDivElement>(null);
  const gatheringEventsSliderRef = useRef<HTMLDivElement>(null);

  // Hero slider data
  const heroSlides = [
    {
      id: 1,
      title: "Wujudkan Event Impian Anda",
      subtitle: "Temukan vendor terbaik untuk acara spesial Anda",
      cta: "Mulai Sekarang",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop&auto=format"
    },
    {
      id: 2,
      title: "Platform Vendor Terpercaya",
      subtitle: "Ribuan vendor berkualitas siap melayani kebutuhan Anda",
      cta: "Jelajahi Vendor",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop&auto=format"
    },
    {
      id: 3,
      title: "Event Mudah & Berkesan",
      subtitle: "Dari planning hingga eksekusi, semua dalam satu platform",
      cta: "Pelajari Lebih Lanjut",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=1080&fit=crop&auto=format"
    }
  ];

  // Popular events data - Added 6th item
  const popularEvents = [
    {
      id: 1,
      title: "Tech Conference 2025: Innovation Summit",
      location: "Jakarta Convention Center",
      date: "15 Nov 2025",
      price: "Rp 850.000",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=250&fit=crop&auto=format",
      rating: 4.8
    },
    {
      id: 2,
      title: "Wedding Expo Jakarta 2025",
      location: "JCC Senayan",
      date: "20 Nov 2025", 
      price: "Gratis",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=250&fit=crop&auto=format",
      rating: 4.9
    },
    {
      id: 3,
      title: "Startup Pitch Night Vol.12",
      location: "Co-working Space Kemang",
      date: "17 Nov 2025",
      price: "Rp 150.000",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop&auto=format",
      rating: 4.7
    },
    {
      id: 4,
      title: "Music Festival: Nusantara Beats",
      location: "Ancol Beach City",
      date: "23 Nov 2025",
      price: "Rp 350.000",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&auto=format",
      rating: 4.6
    },
    {
      id: 5,
      title: "Food & Culinary Festival 2025",
      location: "BSD Green Office Park",
      date: "27 Nov 2025", 
      price: "Rp 75.000",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&auto=format",
      rating: 4.5
    },
    {
      id: 6,
      title: "Art & Design Exhibition",
      location: "National Gallery Indonesia",
      date: "30 Nov 2025",
      price: "Rp 50.000",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop&auto=format",
      rating: 4.4
    }
  ];

  // Vendor categories data - Updated with new categories and 6 items each
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
      }
    ],
    "makeup & wardrobe": [
      {
        name: "Glamour Makeup Studio",
        rating: 4.9,
        price: "Rp 2.500.000",
        location: "Jakarta Pusat",
        image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Elegant Bridal Makeup",
        rating: 4.8,
        price: "Rp 3.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Royal Wardrobe Collection",
        rating: 4.9,
        price: "Rp 15.000.000",
        location: "Jakarta Barat",
        image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Luxury Gown & Makeup",
        rating: 4.7,
        price: "Rp 12.000.000",
        location: "Jakarta Timur",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Dream Wardrobe Studio",
        rating: 4.8,
        price: "Rp 18.000.000",
        location: "Jakarta Utara",
        image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Perfect Beauty & Dress",
        rating: 4.9,
        price: "Rp 20.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=250&fit=crop&auto=format"
      }
    ],
    dokumentasi: [
      {
        name: "Capture Moments Photography",
        rating: 4.9,
        price: "Rp 6.000.000",
        location: "Jakarta Pusat",
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Eternal Memories Studio",
        rating: 4.8,
        price: "Rp 8.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Wedding Story Photography",
        rating: 4.9,
        price: "Rp 10.000.000",
        location: "Jakarta Barat",
        image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Timeless Photos & Video",
        rating: 4.7,
        price: "Rp 7.500.000",
        location: "Jakarta Timur",
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Cherished Moments Media",
        rating: 4.8,
        price: "Rp 9.000.000",
        location: "Jakarta Utara",
        image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Forever Photography",
        rating: 4.9,
        price: "Rp 11.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=250&fit=crop&auto=format"
      }
    ],
    entertaintment: [
      {
        name: "Harmony Wedding Band",
        rating: 4.9,
        price: "Rp 8.500.000",
        location: "Jakarta Pusat",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Star MC & Entertainment",
        rating: 4.8,
        price: "Rp 5.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Sound & Light Masters",
        rating: 4.9,
        price: "Rp 12.000.000",
        location: "Jakarta Barat",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Elite Entertainment Co",
        rating: 4.7,
        price: "Rp 7.000.000",
        location: "Jakarta Timur",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Royal Band & MC",
        rating: 4.8,
        price: "Rp 9.500.000",
        location: "Jakarta Utara",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Premium Sound System",
        rating: 4.9,
        price: "Rp 15.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop&auto=format"
      }
    ],
    "tim dekorasi & bunga": [
      {
        name: "Blossom Decoration Studio",
        rating: 4.9,
        price: "Rp 12.000.000",
        location: "Jakarta Pusat",
        image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Elegant Floral Design",
        rating: 4.8,
        price: "Rp 8.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Royal Decoration Team",
        rating: 4.9,
        price: "Rp 15.000.000",
        location: "Jakarta Barat",
        image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Dream Floral & Deco",
        rating: 4.7,
        price: "Rp 10.000.000",
        location: "Jakarta Timur",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Luxury Event Decor",
        rating: 4.8,
        price: "Rp 18.000.000",
        location: "Jakarta Utara",
        image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=250&fit=crop&auto=format"
      },
      {
        name: "Perfect Floral Studio",
        rating: 4.9,
        price: "Rp 20.000.000",
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=250&fit=crop&auto=format"
      }
    ]
  };

  // Seminar data - Added 6th item
  const seminars = [
    {
      id: 1,
      title: "Digital Marketing Masterclass 2025",
      instructor: "Dr. Sarah Martinez", 
      date: "19 Nov 2025",
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
    },
    {
      id: 6,
      title: "Data Science Bootcamp",
      instructor: "Dr. Nina Santoso",
      date: "2 Dec 2025",
      price: "Rp 500.000",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
      participants: 90,
      duration: "10 jam"
    }
  ];

  // Gathering events data - Added 6th item
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
    },
    {
      id: 6,
      title: "Music Producers Network",
      community: "Indonesian Music Producers",
      date: "1 Dec 2025",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&auto=format",
      attendees: 70,
      type: "Music"
    }
  ];

  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Scroll functions for sliders
  const scrollSlider = (direction: 'left' | 'right', sliderRef: React.RefObject<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const scrollAmount = 320; // Approximate card width + gap
    const currentScroll = sliderRef.current.scrollLeft;
    const newScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;
    
    sliderRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
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
            <div className="flex items-center space-x-2">
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
                      : 'border-gray-200 text-super-black placeholder:text-gray-500'
                  }`}
                />
              </div>
              <Button variant="outline" className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'border-border-subtle text-primary-white hover:bg-primary-white/10' 
                  : 'border-gray-200 text-super-black hover:bg-gray-100'
              }`}>
                Kategori <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'border-border-subtle text-primary-white hover:bg-primary-white/10' 
                  : 'border-gray-200 text-super-black hover:bg-gray-100'
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
                    ? 'text-primary-white hover:bg-primary-white/10' 
                    : 'text-super-black hover:bg-gray-100'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button variant="outline" className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'border-border-subtle text-primary-white hover:bg-primary-white/10' 
                  : 'border-gray-200 text-super-black hover:bg-gray-100'
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

      {/* Hero Section dengan Slider */}
      <section className="pt-8">
        <div className="container mx-auto px-4">
          <div className="relative h-[200px] md:h-[240px] overflow-hidden rounded-xl">
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
                    className="object-cover rounded-xl"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-super-black/40 rounded-xl" />
                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4">
                      <h1 className="text-3xl md:text-5xl font-bold text-primary-white mb-4 md:mb-6 animate-fade-in-up">
                        {slide.title}
                      </h1>
                      <p className="text-md md:text-xl text-secondary-light mb-6 md:mb-8 animate-fade-in-up">
                        {slide.subtitle}
                      </p>
                      <Button size="lg" className="bg-primary-white text-super-black hover:bg-secondary-light text-base md:text-lg px-6 md:px-8 py-3 md:py-4 animate-fade-in-up">
                        {slide.cta} <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Slider Indicators */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
          </div>
        </div>
      </section>

     {/* Section Vendor Terpilih yang Cocok untuk Event Kamu */}
      <section className={`pt-8 transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-primary-white' : 'text-super-black'
            }`}>
              Vendor Terpilih yang Cocok untuk Event Kamu
            </h2>
            <p className={`text-base md:text-lg transition-colors duration-300 ${
              isDarkMode ? 'text-secondary-gray' : 'text-gray-600'
            }`}>
              Temukan vendor terbaik untuk acara spesial Anda.
            </p>
          </div>

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
              ref={popularEventsSliderRef}
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

            {/* Slider Navigation */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollSlider('left', popularEventsSliderRef)}
              className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full transition-colors duration-300 ${
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
              onClick={() => scrollSlider('right', popularEventsSliderRef)}
              className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full transition-colors duration-300 ${
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

      {/* Section Seminar & Workshop */}
      <section className={`pt-8 transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-primary-white' : 'text-super-black'
            }`}>
              Seminar & Workshop
            </h2>
          </div>

          {/* Seminars Slider */}
          <div className="relative">
            <div 
              ref={seminarsSliderRef}
              className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {seminars.map((seminar) => (
                <div key={seminar.id} className={`flex-none w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] md:min-w-[300px] md:w-[300px] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group border ${
                  isDarkMode 
                    ? 'bg-super-black border-border-subtle hover:border-primary-white/30' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="relative h-32 md:h-40 overflow-hidden">
                    <Image
                      src={seminar.image}
                      alt={seminar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-super-black/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-primary-white">
                      {seminar.price}
                    </div>
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className={`font-semibold mb-2 line-clamp-2 text-sm md:text-base transition-colors duration-300 ${
                      isDarkMode ? 'text-primary-white' : 'text-super-black'
                    }`}>{seminar.title}</h3>
                    <p className={`text-xs md:text-sm mb-2 transition-colors duration-300 truncate ${
                      isDarkMode ? 'text-secondary-gray' : 'text-gray-600'
                    }`}>Instruktur: {seminar.instructor}</p>
                    <div className={`flex items-center justify-between text-xs mb-3 transition-colors duration-300 ${
                      isDarkMode ? 'text-secondary-gray' : 'text-gray-500'
                    }`}>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{seminar.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        <span>{seminar.participants}</span>
                      </div>
                    </div>
                    <Button size="sm" className={`w-full text-xs md:text-sm py-1.5 md:py-2 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-primary-white text-super-black hover:bg-secondary-light' 
                        : 'bg-super-black text-primary-white hover:bg-gray-800'
                    }`}>
                      Daftar Sekarang
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Navigation */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollSlider('left', seminarsSliderRef)}
              className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full transition-colors duration-300 ${
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
              onClick={() => scrollSlider('right', seminarsSliderRef)}
              className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full transition-colors duration-300 ${
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

      {/* Section Gathering & Event Komunitas */}
      <section className={`pt-8 pb-16  transition-colors duration-300 ${
        isDarkMode ? 'bg-super-black' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-primary-white' : 'text-super-black'
            }`}>
              Gathering & Event Komunitas
            </h2>
          </div>

          {/* Gathering Events Slider */}
          <div className="relative">
            <div 
              ref={gatheringEventsSliderRef}
              className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {gatheringEvents.map((gathering) => (
                <div key={gathering.id} className={`flex-none w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] md:min-w-[300px] md:w-[300px] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group border ${
                  isDarkMode 
                    ? 'bg-surface border-border-subtle hover:border-primary-white/30' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="relative h-32 md:h-40 overflow-hidden">
                    <Image
                      src={gathering.image}
                      alt={gathering.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 md:top-3 left-2 md:left-3 bg-super-black/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-primary-white">
                      {gathering.type}
                    </div>
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className={`font-semibold mb-2 line-clamp-2 text-sm md:text-base transition-colors duration-300 ${
                      isDarkMode ? 'text-primary-white' : 'text-super-black'
                    }`}>{gathering.title}</h3>
                    <p className={`text-xs md:text-sm mb-2 transition-colors duration-300 truncate ${
                      isDarkMode ? 'text-secondary-gray' : 'text-gray-600'
                    }`}>{gathering.community}</p>
                    <div className={`flex items-center justify-between text-xs mb-3 transition-colors duration-300 ${
                      isDarkMode ? 'text-secondary-gray' : 'text-gray-500'
                    }`}>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{gathering.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        <span>{gathering.attendees}</span>
                      </div>
                    </div>
                    <Button size="sm" className={`w-full text-xs md:text-sm py-1.5 md:py-2 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-primary-white/10 border border-primary-white/20 text-primary-white hover:bg-primary-white/20'
                        : 'bg-gray-100 border border-gray-200 text-super-black hover:bg-gray-200'
                    }`}>
                      Gabung Event
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Navigation */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollSlider('left', gatheringEventsSliderRef)}
              className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full transition-colors duration-300 ${
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
              onClick={() => scrollSlider('right', gatheringEventsSliderRef)}
              className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full transition-colors duration-300 ${
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

      {/* Footer */}
      <footer className={`border-t pt-8 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-super-black border-border-subtle' 
          : 'border-gray-200'
      }`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  isDarkMode ? 'bg-primary-white' : 'bg-super-black'
                }`}>
                  <span className={`font-bold text-xl transition-colors duration-300 ${
                    isDarkMode ? 'text-super-black' : 'text-primary-white'
                  }`}>H</span>
                </div>
                <span className={`text-2xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-primary-white' : 'text-super-black'
                }`}>Hacara</span>
              </div>
              <p className={`max-w-md transition-colors duration-300 ${
                isDarkMode ? 'text-secondary-gray' : 'text-gray-600'
              }`}>
                Platform terpercaya untuk menemukan vendor terbaik untuk acara impian Anda. 
                Dari pernikahan hingga acara korporat, kami siap membantu.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-primary-white' : 'text-super-black'
              }`}>Tentang Kami</h4>
              <ul className={`space-y-2 transition-colors duration-300 ${
                isDarkMode ? 'text-secondary-gray' : 'text-gray-600'
              }`}>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-primary-white' : 'hover:text-super-black'
                }`}>Tentang Hacara</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-primary-white' : 'hover:text-super-black'
                }`}>Cara Kerja</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-primary-white' : 'hover:text-super-black'
                }`}>Karir</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-primary-white' : 'hover:text-super-black'
                }`}>Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-primary-white' : 'text-super-black'
              }`}>Kontak</h4>
              <ul className={`space-y-2 transition-colors duration-300 ${
                isDarkMode ? 'text-secondary-gray' : 'text-gray-600'
              }`}>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-primary-white' : 'hover:text-super-black'
                }`}>Bantuan</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-primary-white' : 'hover:text-super-black'
                }`}>Kontak Kami</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-primary-white' : 'hover:text-super-black'
                }`}>Kebijakan Privasi</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-primary-white' : 'hover:text-super-black'
                }`}>Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className={`border-t pt-8 text-center transition-colors duration-300 ${
            isDarkMode 
              ? 'border-border-subtle text-secondary-gray' 
              : 'border-gray-200 text-gray-600'
          }`}>
            <p>&copy; 2025 Hacara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}