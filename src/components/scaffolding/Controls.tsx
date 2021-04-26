import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

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
      <div style={{ backgroundColor: color }}>
        <HexColorPicker color={color} onChange={setColor} />
        <span>{color}</span>
      </div>
    </div>
  );
}
