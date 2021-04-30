import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { paragraph } from '../../styles/atom';
import { m, p } from '../../styles/spacing';
import { shadow } from '../../styles/effect';
import { fontMono, uppercase } from '../../styles/typography';
import { rounded } from '../../styles/borders';
import { h, w } from '../../styles/sizing';
import { display } from '../../styles/layout';

export function Controls() {
  const [color, setColor] = useState('#aabbcc');
  return (
    <div css={[]}>
      <div css={[]}>
        <button css={[]}>按钮</button>
        <button css={[]}>Button</button>
        <button css={[]} disabled>
          Disabled Button
        </button>
        <button data-kind="primary">Primary</button>
        <button data-kind="primary" disabled>
          Disabled Primary
        </button>
      </div>
      <div>
        <p css={[paragraph, uppercase, fontMono]}>
          <span
            style={{ backgroundColor: color }}
            css={[shadow.inner, rounded.sm, m.r.n(1), w.n(3), h.n(3), display.inlineBlock]}
          />
          {color}
        </p>
        <HexColorPicker color={color} onChange={setColor} />
      </div>
    </div>
  );
}
