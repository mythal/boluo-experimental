import { scaffoldContainer } from './Scaffolding';
import { css } from '@emotion/react';
import { size } from '../../styles/base';
import { controlStyle } from '../../styles/controls';
import { useState } from 'react';
import { HexColorPicker } from "react-colorful";

const buttons = css`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  gap: ${size(2)};
`;

const colorPickerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${size(2)} 0;
  padding: ${size(4)};
  border-radius: ${size(2)};
  transition: background-color 100ms;
`;

const colorPicker = css`
  filter: drop-shadow(0px 0px 2px #0005) drop-shadow(0px 2px 2px #0005);
`;

const colorText = css`
  color: #FFF;
  font-family: monospace;
  text-shadow: 1px 1px 0 #000;
  font-size: var(--text-2xl);
  text-transform: uppercase;
`;

export function Controls() {
  const [color, setColor] = useState("#aabbcc");
  return (
    <div css={scaffoldContainer}>
      <div css={buttons}>
        <button css={controlStyle.button}>按钮</button>
        <button css={controlStyle.button}>Button</button>
        <button css={controlStyle.button} disabled>Disabled Button</button>
        <button data-kind="primary" css={controlStyle.button}>Primary</button>
        <button data-kind="primary" css={controlStyle.button} disabled>Disabled Primary</button>
      </div>
      <div css={colorPickerContainer} style={{ backgroundColor: color }}>
        <HexColorPicker css={colorPicker} color={color} onChange={setColor} />
        <span css={colorText}>{color}</span>
      </div>
    </div>
  )
}
