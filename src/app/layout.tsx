import { ReactNode } from 'react';
import { Poppins, Playfair_Display, Inter, Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-playfair",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hacara - Platform Event Vendor Terpercaya Indonesia",
  description: "Temukan vendor terbaik untuk acara spesial Anda. Dari pernikahan hingga ulang tahun, Hacara menghubungkan Anda dengan vendor terpercaya di seluruh Indonesia.",
  keywords: "event vendor, pernikahan, ulang tahun, catering, dekorasi, vendor Indonesia",
  authors: [{ name: "Hacara" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${poppins.variable} ${playfair.variable} ${inter.variable} ${roboto.variable} font-poppins antialiased bg-super-black text-primary-white`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-super-black">
              {children}
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}