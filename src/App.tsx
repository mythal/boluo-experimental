import { atom, useRecoilState } from 'recoil';
import { textColor, textXl } from './styles/typography';
import { blue, gray, white } from './styles/color';
import { mb, my, p, px, py, spaceX } from './styles/spacing';
import { active, dark, focus, hover, lg, md, sm, switchToDark, switchToLight } from './styles/base';
import { bg } from './styles/backgrounds';
import { w, wFull } from './styles/sizing';
import { rounded, roundedSm } from './styles/borders';
import { clearBoth, floatRight } from './styles/layout';
import { shadowLg, shadowSm } from './styles/effect';
import { outlineBlack, outlineWhite } from './styles/interactivity';
import { lazy, Suspense, useMemo } from 'react';
import { animatePing } from './styles/transitions';
import { Icon } from './Icon';
import { css } from '@emotion/react';

const Logo = lazy(() => import('./assets/development-favicon.svg'));
const counterState = atom({
  key: 'counter', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

const button = [
  bg(gray['800']),
  px(3),
  py(1),
  roundedSm,
  shadowSm,
  textColor(white),
  hover(bg(gray['700']), shadowLg),
  active(bg(gray['600'])),
  focus(outlineBlack),
  dark(focus(outlineWhite)),
];

export function App() {
  const [counter, setCounter] = useRecoilState(counterState);
  const add1 = () => setCounter((counter) => counter + 1);
  const card = useMemo(
    () =>
      css(
        wFull,
        md(w(64)),
        rounded,
        bg(blue['100']),
        shadowLg,
        textColor(blue['900']),
        dark(bg(blue['900']), textColor(blue['100'])),
        p(4),
        sm(textColor(blue['500'])),
        lg(textColor('black'))
      ),
    []
  );
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div css={[p(2)]}>
        <div css={card}>
          <Logo css={[md(floatRight), hover(animatePing)]} />
          <h1 css={[textXl, mb(4)]}>Counter: {counter}</h1>
          <div>
            <button onClick={add1} css={[button]}>
              +1
            </button>
          </div>
          <div css={[spaceX(1), my(1), clearBoth]}>
            <button css={[button]} onClick={switchToLight}>
              <Icon icon="light" />
            </button>
            <button css={[button]} onClick={switchToDark}>
              <Icon icon="dark" />
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
