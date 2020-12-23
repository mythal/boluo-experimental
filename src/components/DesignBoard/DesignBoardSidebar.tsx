import { DesignBoardSidebarItem as Item } from './DesignBoardSidebarItem';
import { ClassNameProps } from '../common';
import { ComponentItem } from './DesignBoard';
import { borderColor, borderR } from '../../styles/borders';
import { gray } from '../../styles/color';
import { css } from '@emotion/react';
import { bgColor } from '../../styles/backgrounds';

interface Props extends ClassNameProps {
  components: Array<Pick<ComponentItem, 'name' | 'title'>>;
}

const sidebarStyle = css`
  ${[borderR, borderColor(gray['300']), bgColor(gray['100'])]};
  width: clamp(6rem, 30vw, 12rem);
`;

export function DesignBoardSidebar({ className, components }: Props) {
  return (
    <aside className={className} css={sidebarStyle}>
      <ul>
        {components.map(({ title, name }) => (
          <Item title={title} name={name} key={name} />
        ))}
      </ul>
    </aside>
  );
}
