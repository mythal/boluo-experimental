import { ClassNameProps } from '../common';
import { input } from '../atoms/input';

interface Props extends ClassNameProps {}

export function InputsPage({ className }: Props) {
  return (
    <div className={className}>
      <input css={input} />
    </div>
  );
}
