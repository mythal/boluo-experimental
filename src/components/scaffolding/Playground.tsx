import { atom, useAtom } from 'jotai';
import { focusAtom } from 'jotai/optics';
import { block } from '../../styles/layout';
import { uppercase } from '../../styles/typography';
import { bgColor } from '../../styles/backgrounds';

interface Outer {
  a: {
    b: {
      c: number,
    }
  },
  d: {
    e: string;
  }
}

const initOuter: Outer = { a: { b: { c: 42 } }, d: { e: "hello" } };
const outer = atom(initOuter)
const c = focusAtom(outer, (optic) => optic.prop('a').prop('b').prop('c'));
const e = focusAtom(outer, (optic) => optic.prop('d').prop('e'));

function Counter() {
  const [counter, setCounter] = useAtom(c)
  console.log('Counter render')
  return (
    <div css={bgColor('red', 10)}>
      {counter}s <button onClick={() => setCounter(counter => counter + 1)}>+1s</button>
    </div>
  )
}

function Input() {
  const [text, setText] = useAtom(e);
  console.log('Input render')
  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)}/>
    </div>
  )
}

export function Playground() {
  return (
    <div>
      <span css={[block, uppercase]}>design</span>
      <Counter/>
      <Input/>
    </div>
  );
}
