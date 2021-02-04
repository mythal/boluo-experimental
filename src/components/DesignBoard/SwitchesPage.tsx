import { ClassNameProps } from '../common';
import { useState } from 'react';
import Switch from '@material-ui/core/Switch';

interface Props extends ClassNameProps {}

export function SwitchesPage({ className }: Props) {
  const [on, setOn] = useState(false);
  return (
    <div className={className}>
      <Switch
        value={on}
        onChange={(event) => setOn(event.target.checked)}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}
