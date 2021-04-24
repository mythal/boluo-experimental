import { atom } from 'jotai';
import { useAtomValue } from 'jotai/utils';
import type { Translation } from '../locals';

export const languageAtom = atom<'zh' | 'ja' | 'default'>('default'); // default is english
export const translationAtom = atom<Partial<Translation>>(
  async (get): Promise<Partial<Translation>> => {
    const lang = get(languageAtom);
    if (lang === 'default') {
      return {};
    } else {
      const transitions = await import('../locals');
      if (lang === 'zh') {
        return transitions.zh;
      } else if (lang === 'ja') {
        return transitions.ja;
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
