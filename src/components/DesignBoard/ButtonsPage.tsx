import { ClassNameProps } from '../common';
import { spaceX, spaceY } from '../../styles/spacing';
import { button, primaryButton } from '../atoms/button';
import Tooltip from '@material-ui/core/Tooltip';

interface Props extends ClassNameProps {}

export function ButtonsPage({ className }: Props) {
  return (
    <div className={className} css={[spaceX(2), spaceY(2)]}>
      <Tooltip arrow title="Tooltip">
        <button css={button}>按钮</button>
      </Tooltip>
      <button css={primaryButton}>主要</button>
    </div>
  );
}
