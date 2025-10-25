# Hacara - Platform Event Vendor Premium

> **Landing page elegan dengan tema Midnight Gold untuk platform penyedia layanan event terpercaya di Indonesia**

## 🌟 Fitur Utama yang Sudah Diimplementasi

### ✨ **UI/UX Premium**
- **Tema Midnight Gold**: Kombinasi elegan #0D0D0D (midnight) dan #D4AF37 (gold)
- **Typography Premium**: Playfair Display untuk heading, Poppins untuk body text
- **Animasi Halus**: Framer Motion untuk scroll animations dan micro-interactions
- **Responsive Design**: Mobile-first approach dengan breakpoints optimal

### 🌍 **Bilingual Support**
- **Bahasa Indonesia & English** dengan custom language provider
- **Dynamic Translation**: Toggle bahasa real-time tanpa reload
- **Persistent Language**: Preferensi bahasa tersimpan di localStorage

### 🎨 **Dark/Light Mode**
- **Theme Switching**: Toggle mode gelap/terang dengan shadcn/ui
- **Persistent Storage**: Preferensi tema tersimpan di localStorage
- **Smooth Transition**: Animasi transisi yang mulus antar tema

## 🚀 **Tech Stack**

### **Frontend**
- **Next.js 14** (App Router) + TypeScript
- **TailwindCSS** dengan custom Midnight Gold color palette
- **shadcn/ui** untuk komponen UI yang konsisten
- **Framer Motion** untuk animasi premium
- **Lucide React** untuk icon system
- **react-hot-toast** untuk notifications

## 📁 **Struktur Marketing Page**

### **Komponen yang Sudah Dibuat**
```
src/components/marketing/
├── MarketingNavbar.tsx      # ✅ Navbar sticky dengan mobile menu
├── HeroSection.tsx          # ✅ Hero dengan gradasi premium  
├── AboutSection.tsx         # ✅ About dengan stats
├── FeaturesSection.tsx      # ✅ 6 fitur unggulan dengan animasi
├── FAQAccordion.tsx         # ✅ FAQ interactive accordion
├── CTASection.tsx           # ✅ Call-to-action dengan social proof
└── Footer.tsx               # ✅ Footer lengkap dengan contact info
```

### **Translation Files**
```
src/locales/
├── id.json                  # ✅ Indonesian translations
└── en.json                  # ✅ English translations
```

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Beautiful UI**: Uses shadcn/ui components for a professional look
- **Database**: MySQL integration with Prisma ORM
- **CRUD Operations**: Full Create, Read, Update, Delete functionality
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Type Safety**: Fully typed with TypeScript
- **Ready to Deploy**: Optimized for Vercel deployment

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: MySQL with Prisma ORM
- **Deployment**: Vercel
- **Node.js**: Compatible with v20.19.5

## 📦 Prerequisites

- Node.js v20.19.5 or higher
- MySQL database (local or remote)
- npm or yarn package manager

## 🚀 Quick Start

### 1. Clone and Install

```bash
cd xanda-lsp-fullstack
npm install
```

### 2. Environment Setup

Copy the environment file and configure your database:

```bash
cp .env.example .env.local
```

Update `.env.local` with your database configuration:

```env
DATABASE_URL="mysql://username:password@localhost:3306/xanda_lsp_db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

### 3. Database Setup

Run Prisma migrations to set up your database:

```bash
npx prisma db push
npx prisma generate
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 🗄️ Database Schema

The application uses a simple Task model with the following structure:

```prisma
model Task {
  id          String   @id @default(cuid())
  title       String
  description String?  @db.Text
  status      Status   @default(PENDING)
  priority    Priority @default(MEDIUM)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum Status {
  PENDING
  IN_PROGRESS
  COMPLETED
  CANCELLED
}

enum Priority {
  LOW
  MEDIUM
  HIGH
  URGENT
}
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks/[id]` | Get a specific task |
| PUT | `/api/tasks/[id]` | Update a specific task |
| DELETE | `/api/tasks/[id]` | Delete a specific task |

## 🚀 Deployment to Vercel

### 1. Prepare for Deployment

Make sure your code is committed to a Git repository (GitHub, GitLab, or Bitbucket).

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your repository
3. Configure environment variables in Vercel dashboard:
   - `DATABASE_URL`: Your production MySQL database URL
   - `NEXTAUTH_SECRET`: A secure random string
   - `NEXTAUTH_URL`: Your production domain

### 3. Database Migration

After deployment, run the database migration:

```bash
npx prisma db push
```

## 🎨 UI Components

This project uses shadcn/ui components including:

- **Button**: For actions and navigation
- **Card**: For content containers
- **Table**: For data display
- **Dialog**: For modal forms
- **Form**: For data input
- **Select**: For dropdown menus
- **Badge**: For status indicators
- **Alert**: For notifications

## 📱 Features Overview

### Task Management
- ✅ Create new tasks with title, description, status, and priority
- ✅ View all tasks in a responsive table
- ✅ Edit existing tasks
- ✅ Delete tasks
- ✅ Filter by status and priority
- ✅ Real-time updates

### User Interface
- ✅ Clean, modern design with shadcn/ui
- ✅ Responsive layout for all screen sizes
- ✅ Loading states and error handling
- ✅ Form validation
- ✅ Intuitive navigation

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npx prisma studio    # Open Prisma Studio
npx prisma db push   # Push schema to database
npx prisma generate  # Generate Prisma client
```

## 📁 Project Structure

```
xanda-lsp-fullstack/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── api/tasks/         # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── TaskForm.tsx       # Task form component
│   │   └── TaskList.tsx       # Task list component
│   ├── lib/
│   │   ├── prisma.ts          # Database connection
│   │   └── utils.ts           # Utility functions
│   └── types/
│       └── task.ts            # TypeScript types
├── .env.local                 # Environment variables
├── .env.example               # Environment template
└── vercel.json                # Vercel configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please create an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and shadcn/ui
