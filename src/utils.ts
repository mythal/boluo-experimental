import devFavicon from './assets/logo.dev.svg';

export const timestamp = (): number => new Date().getTime();

export const sleep = (ms: number, signal?: AbortSignal): Promise<'cancelled' | undefined> => new Promise((resolve) => {
  const handle = window.setTimeout(resolve, ms);

  // see https://css-tricks.com/using-abortcontroller-as-an-alternative-for-removing-event-listeners/
  signal?.addEventListener('abort', _e => {
    clearTimeout(handle);
    resolve('cancelled');
  });
});

export const env = (): 'development' | 'production' => {
  if (process.env['NODE_ENV'] === 'production') {
    return 'production'
  }
  return 'development';
};

export const setDevFavicon = () => {
  // Different Favicon for Development
  // https://css-tricks.com/different-favicon-for-development/
  let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = devFavicon;
};
