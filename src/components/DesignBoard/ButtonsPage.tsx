import { ClassNameProps } from '../common';
import { spaceX, spaceY } from '../../styles/spacing';
import { button, primaryButton } from '../atoms/Button';

interface Props extends ClassNameProps {}

export function ButtonsPage({ className }: Props) {
  return (
    <div className={className} css={[spaceX(2), spaceY(2)]}>
      <button css={button}>按钮</button>
      <button css={primaryButton}>主要</button>
    </div>
  );
}
