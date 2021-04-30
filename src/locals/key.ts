import { atom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

export type TextKey =
  | 'HOME'
  | 'LANG'
  | 'I18N'
  | 'CONTROLS'
  | 'SANDBOX'
  | 'ERROR_HANDING'
  | 'PAGE_LOADING'
  | 'LOADING'
  | 'TEXT_DISPLAY';

export type Translation = {
  [key in TextKey]: string;
};
export const supportedLanguages = {
  'zh-hans': '简体中文',
  en: 'English',
  ja: '日本語',
};
type SupportedLang = keyof typeof supportedLanguages;
const defaultLang: SupportedLang = 'en';
export const isSupportedLang = (lang: string): lang is SupportedLang => {
  return lang in supportedLanguages;
};
const getLang = (): SupportedLang => {
  const setting = localStorage.getItem('language');
  if (setting && isSupportedLang(setting)) {
    return setting;
  }
  const languages = navigator.languages.slice() ?? [navigator.language];
  while (languages.length > 0) {
    const lang = languages.pop()!;
    if (lang.startsWith('zh')) {
      return 'zh-hans';
    } else if (lang.startsWith('ja')) {
      return 'ja';
    } else if (lang.startsWith('en')) {
      return 'en';
    }
  }
  return defaultLang;
};
export const languageAtom = atom<SupportedLang>(getLang());
export const translationAtom = atom<Translation>(async (get): Promise<Translation> => {
  const lang = get(languageAtom);
  if (lang === 'zh-hans') {
    return (await import('../locals/zh-hans')).default;
  } else if (lang === 'ja') {
    return (await import('../locals/ja')).default;
  } else {
    return (await import('../locals/en')).default;
  }
});
export const useTranslation = (): Translation => {
  return useAtomValue(translationAtom);
};
