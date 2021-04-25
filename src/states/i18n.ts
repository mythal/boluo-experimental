import { atom } from 'jotai';
import { useAtomValue } from 'jotai/utils';
import type { Translation } from '../locals';

type SupportedLang = 'zhHans' | 'ja' | 'en';
const supportedLanguages: SupportedLang[] = ['zhHans', 'ja', 'en'];
const getLang = (): SupportedLang => {
  const setting = localStorage.getItem('language');
  for (const lang of supportedLanguages) {
    if (lang === setting) {
      return lang;
    }
  }
  const defaultLang: SupportedLang = 'en';
  const languages = navigator.languages.slice() ?? [navigator.language];
  while (languages.length > 0) {
    const lang = languages.pop()!;
    if (lang.startsWith('zh')) {
      return 'zhHans';
    } else if (lang.startsWith('ja')) {
      return 'ja';
    } else if (lang.startsWith('en')) {
      return 'en';
    }
  }
  return defaultLang;
};

export const languageAtom = atom<SupportedLang>(getLang());
export const translationAtom = atom<Partial<Translation>>(
  async (get): Promise<Partial<Translation>> => {
    const lang = get(languageAtom);
    if (lang === 'en') {
      return (await import('../locals/en')).default;
    } else {
      if (lang === 'zhHans') {
        return (await import('../locals/zhHans')).default;
      } else if (lang === 'ja') {
        return (await import('../locals/ja')).default;
      }
    }
    return {};
  }
);

export type TranslationFunction = (key: keyof Translation, defaultText?: string | null) => string;

export const useTranslation = (): TranslationFunction => {
  const translation = useAtomValue(translationAtom);
  return (key, defaultText = null): string => {
    return translation[key] ?? defaultText ?? key;
  };
};
