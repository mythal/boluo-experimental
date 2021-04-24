const sizeFactor = 0.25;
export const size = (n: number): string => `${n * sizeFactor}rem`;
export type Scheme = 'light' | 'dark';

export const schemeToClassName = (scheme: string | null): string => {
  if (scheme === null || scheme === 'auto' || !['dark', 'light'].includes(scheme)) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'scheme-dark';
    } else {
      return 'scheme-light';
    }
  }
  return `scheme-${scheme}`;
};

export const setSchemeClass = () => {
  for (const className of document.documentElement.classList.values()) {
    if (className.startsWith('scheme-')) {
      document.documentElement.classList.remove(className);
    }
  }
  const className = schemeToClassName(localStorage.getItem('scheme'));
  document.documentElement.classList.add(className);
};

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export function setHeight() {
  if (isSafari) {
    const root = document.getElementById('root')!;
    // root.style.setProperty('--fill-height', '-webkit-fill-available');
  }
}
