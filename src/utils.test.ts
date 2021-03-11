import { sleep, timestamp } from './utils';

test('Promise of sleep', async () => {
  const sleepTime = 100;
  let now = timestamp();
  expect(await sleep(sleepTime)).toEqual(undefined);
  expect(timestamp() - now).toBeGreaterThanOrEqual(sleepTime);
  now = timestamp();
  const controller = new AbortController();
  const sleepPromise = sleep(10000, controller.signal);
  controller.abort();
  expect(timestamp() - now).toBeLessThan(10);
  expect(await sleepPromise).toEqual('cancelled');
});
