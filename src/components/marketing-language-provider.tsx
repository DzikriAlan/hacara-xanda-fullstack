"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import idTranslations from '@/locales/id.json'
import enTranslations from '@/locales/en.json'

export type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  switchLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Helper function to get nested property from object using dot notation
function getNestedProperty(obj: Record<string, unknown>, path: string): string {
  const result = path.split('.').reduce((current: unknown, key: string) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
  
  return typeof result === 'string' ? result : path;
}

// Translation collections
const translations = {
  id: idTranslations,
  en: enTranslations,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
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

  // Translation function with dot notation support
  const t = (key: string): string => {
    const currentTranslations = translations[language]
    return getNestedProperty(currentTranslations, key) || key
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