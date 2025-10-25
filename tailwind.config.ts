import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			poppins: ['var(--font-poppins)', 'sans-serif'],
  			playfair: ['var(--font-playfair)', 'serif'],
  		},
  		colors: {
  			// Monochrome theme colors
  			'super-black': {
  				DEFAULT: '#0B0B0B',
  				50: '#1A1A1A',
  				100: '#171717',
  				200: '#141414',
  				300: '#121212',
  				400: '#0F0F0F',
  				500: '#0B0B0B',
  				600: '#080808',
  				700: '#050505',
  				800: '#030303',
  				900: '#000000',
  			},
  			'surface': {
  				DEFAULT: '#121212',
  				50: '#2A2A2A',
  				100: '#262626',
  				200: '#222222',
  				300: '#1E1E1E',
  				400: '#1A1A1A',
  				500: '#121212',
  				600: '#0F0F0F',
  				700: '#0C0C0C',
  				800: '#090909',
  				900: '#060606',
  			},
  			'primary-white': {
  				DEFAULT: '#FFFFFF',
  				50: '#FFFFFF',
  				100: '#FAFAFA',
  				200: '#F5F5F5',
  				300: '#F0F0F0',
  				400: '#EBEBEB',
  				500: '#E5E5E5',
  				600: '#D1D1D1',
  				700: '#BFBFBF',
  				800: '#A0A0A0',
  				900: '#808080',
  			},
  			'secondary-light': {
  				DEFAULT: '#E5E5E5',
  				50: '#FFFFFF',
  				100: '#FAFAFA',
  				200: '#F5F5F5',
  				300: '#F0F0F0',
  				400: '#EBEBEB',
  				500: '#E5E5E5',
  				600: '#D1D1D1',
  				700: '#BFBFBF',
  				800: '#A0A0A0',
  				900: '#808080',
  			},
  			'border-subtle': {
  				DEFAULT: '#2A2A2A',
  				50: '#4A4A4A',
  				100: '#454545',
  				200: '#404040',
  				300: '#3A3A3A',
  				400: '#353535',
  				500: '#2A2A2A',
  				600: '#252525',
  				700: '#202020',
  				800: '#1A1A1A',
  				900: '#151515',
  			},
  			// Keep existing for compatibility but update values
  			midnight: {
  				DEFAULT: '#0B0B0B', // Updated to super black
  				50: '#121212',
  				100: '#0F0F0F',
  				200: '#0C0C0C',
  				300: '#0A0A0A',
  				400: '#080808',
  				500: '#0B0B0B',
  			},
  			gold: {
  				DEFAULT: '#FFFFFF', // Updated to white
  				50: '#FFFFFF',
  				100: '#FAFAFA',
  				200: '#F5F5F5',
  				300: '#F0F0F0',
  				400: '#EBEBEB',
  				500: '#E5E5E5',
  				600: '#D1D1D1',
  				700: '#BFBFBF',
  				800: '#A0A0A0',
  				900: '#808080',
  			},
  			navy: {
  				DEFAULT: '#0B0B0B',
  				50: '#121212',
  				100: '#0F0F0F',
  				200: '#0C0C0C',
  				300: '#0A0A0A',
  				400: '#080808',
  				500: '#0B0B0B',
  				600: '#060606',
  				700: '#040404',
  				800: '#020202',
  				900: '#000000',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;
