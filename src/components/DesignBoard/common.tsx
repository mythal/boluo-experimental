import { ClassNameProps } from '../common';
import { px } from '../../styles/spacing';
import { atom } from 'recoil';

export interface ComponentPageProps extends ClassNameProps {
  title: string;
}

export const rightPx = px(4);

export const schemeState = atom<'dark' | 'light'>({
  key: 'SCHEME_ATOM',
  default: 'light',
});
