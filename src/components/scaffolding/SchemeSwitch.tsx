import { atom, useAtom } from 'jotai';
import React, { useCallback } from 'react';
import { Icon } from '../Icon';
import { Scheme } from '../../styles/scheme';

const schemeAtom = atom<Scheme | 'auto'>('auto');
export const SchemeSwitch = () => {
  const [scheme, setScheme] = useAtom(schemeAtom);
  const handle = useCallback(
    (scheme: Scheme) => () => {
      setScheme((prev) => (prev === scheme ? 'auto' : scheme));
    },
    [setScheme]
  );
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
