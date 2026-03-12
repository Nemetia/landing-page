import type { Language } from "./index"

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
    path: "/",
  },
  {
    code: "en",
    label: "English",
    shortLabel: "EN",
    path: "/en",
  },
]