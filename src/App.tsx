import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { css, cx } from '@emotion/css';

const style = {
  italic: css`
    font-style: italic;
  `,
};

const counterState = atom({
  key: 'counter', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export function App() {
  const [counter, setCounter] = useRecoilState(counterState);
  const add1 = () => setCounter((counter) => counter + 1);
  return (
    <div>
      <h1 className={style.italic}>Counter: {counter}</h1>
      <button onClick={add1}>+1</button>
    </div>
  );
}
