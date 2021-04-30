import { atom, useAtom } from 'jotai';
import React, { useCallback } from 'react';
import { Icon } from '../Icon';
import { Scheme, switchToAuto, switchToDark, switchToLight } from '../../styles/scheme';

export type SchemeState = Scheme | 'auto';
const schemeDataAtom = atom<SchemeState>('auto');
export const schemeAtom = atom<SchemeState, SchemeState>(
  (get) => get(schemeDataAtom),
  (get, set, next) => {
    if (next === 'auto') {
      switchToAuto();
    } else if (next === 'light') {
      switchToLight();
    } else if (next === 'dark') {
      switchToDark();
    }
    set(schemeDataAtom, next);
  }
);
schemeAtom.onMount = () => switchToAuto();

export const toggleSchemeAtom = atom<SchemeState, Scheme>(
  (get) => get(schemeDataAtom),
  (get, set, update) => {
    const prev = get(schemeAtom);
    if (prev === update) {
      set(schemeAtom, 'auto');
      return;
    }
    set(schemeAtom, update);
  }
);
export const SchemeSwitch = () => {
  const [scheme, setScheme] = useAtom(toggleSchemeAtom);
  const handle = useCallback((scheme: Scheme) => () => setScheme(scheme), [setScheme]);
  return (
    <div>
      <button data-icon={true} data-active={scheme === 'light'} onClick={handle('light')}>
        <Icon name="sun" />
      </button>
      <button data-icon={true} data-active={scheme === 'dark'} onClick={handle('dark')}>
        <Icon name="moon" />
      </button>
    </div>
  );
};
