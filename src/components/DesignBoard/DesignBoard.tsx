import { css } from '@emotion/react';
import { minHScreen } from '../../styles/sizing';
import { gridArea } from '../../styles/grid';
import { DesignBoardSidebar } from './DesignBoardSidebar';
import { DesignBoardHeader } from './DesignBoardHeader';
import { DesignBoardContent } from './DesignBoardContent';
import { ButtonsPage } from './ButtonsPage';
import { ComponentType } from 'react';
import { ComponentPageProps } from './common';
import { InputsPage } from './InputsPage';
import { SwitchesPage } from './SwitchesPage';

const layout = {
  container: css`
    ${minHScreen};
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr;
    grid-template-areas:
      'sidebar header'
      'sidebar content';
  `,
  sidebar: gridArea('sidebar'),
  header: gridArea('header'),
  content: gridArea('content'),
};

export interface ComponentItem {
  name: string;
  title: string;
  Component: ComponentType<ComponentPageProps>;
}

const components: ComponentItem[] = [
  { name: 'buttons', title: '按钮', Component: ButtonsPage },
  { name: 'inputs', title: '输入', Component: InputsPage },
  { name: 'switches', title: '开关', Component: SwitchesPage },
];

export const DesignBoard = () => {
  return (
    <div css={layout.container}>
      <DesignBoardHeader css={layout.header} />
      <DesignBoardSidebar css={layout.sidebar} components={components} />
      <DesignBoardContent css={layout.content} components={components} />
    </div>
  );
};
