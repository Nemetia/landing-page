import { es } from "./es"
import { en } from "./en"

export const translationsByLanguage = {
  es,
  en,
} as const

export type Language = keyof typeof translationsByLanguage

export const defaultLanguage: Language = "es"

export function getTranslations(language: Language) {
  return translationsByLanguage[language]
}