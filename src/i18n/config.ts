import type { Language } from "./index"

const base = import.meta.env.BASE_URL

export interface LanguageOption {
  code: Language
  label: string
  shortLabel: string
  path: string
}

export const availableLanguages: LanguageOption[] = [
  {
    code: "es",
    label: "Español",
    shortLabel: "ES",
    path: base,
  },
  {
    code: "en",
    label: "English",
    shortLabel: "EN",
    path: `${base}en`,
  },
]