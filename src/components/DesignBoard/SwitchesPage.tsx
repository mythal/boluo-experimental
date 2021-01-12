import { ClassNameProps } from '../common';
import { Switch } from '../atoms/Switch';
import { useState } from 'react';

interface Props extends ClassNameProps {}

export function SwitchesPage({ className }: Props) {
  const [on, setOn] = useState(false);
  return (
    <div className={className}>
      <Switch value={on} onChange={setOn} />
    </div>
  );
}
