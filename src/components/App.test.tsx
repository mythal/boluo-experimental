import { render } from '@testing-library/react'
import { App } from './App';
import { defineMatchMedia } from '../utils';
defineMatchMedia();

test("render <App/>", () => {
  render(<App/>);
});
