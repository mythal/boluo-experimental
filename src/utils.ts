export const timestamp = (): number => new Date().getTime();

export function defineMatchMedia() {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

export const sleep = (ms: number, signal?: AbortSignal): Promise<'cancelled' | undefined> => new Promise((resolve) => {
  const handle = window.setTimeout(resolve, ms);

  // see https://css-tricks.com/using-abortcontroller-as-an-alternative-for-removing-event-listeners/
  signal?.addEventListener('abort', _e => {
    clearTimeout(handle);
    resolve('cancelled');
  });
});
