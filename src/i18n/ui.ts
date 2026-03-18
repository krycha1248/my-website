export const languages = {
  pl: 'Polski',
  en: 'English',
} as const;

export type Lang = keyof typeof languages; // "pl" | "en"

export const defaultLang: Lang = 'pl';
export const showDefaultLang = false;

export const ui = {
  pl: {
    greeting: 'Witaj na moim portfolio!',
  },
  en: {
    greeting: 'Welcome to my portfolio!',
  },
} as const;