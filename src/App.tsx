import { atom, useRecoilState } from 'recoil';
import { italic, textColor } from './styles/typography';
import { blue } from './styles/color';
import { p } from './styles/spacing';
import { css } from '@emotion/react';
import { lg, sm } from './styles/base';

const counterState = atom({
  key: 'counter', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export function App() {
  const [counter, setCounter] = useRecoilState(counterState);
  const add1 = () => setCounter((counter) => counter + 1);
  return (
    <div
      css={[
        css`
          width: 20em;
        `,
        p(4),
        sm(textColor(blue['500'])),
        lg(textColor('black')),
      ]}
    >
      <h1 css={[italic]}>Counter: {counter}</h1>
      <button onClick={add1}>+1</button>
    </div>
  );
}
