import { ClassNameProps } from '../common';
import { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { text } from '../atoms/text';

interface Props extends ClassNameProps {}

export function SwitchesPage({ className }: Props) {
  // https://next.material-ui.com/components/switches/
  const [on, setOn] = useState(false);
  return (
    <div className={className}>
      <Switch
        value={on}
        onChange={(event) => setOn(event.target.checked)}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <span css={text}>{on ? '开' : '关'}</span>
    </div>
  );
}
