import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Playground } from './Playground';
import { ErrorTrigger } from './ErrorTrigger';
import React, { useEffect, useState } from 'react';
import { css, cx } from '@linaria/core';
import { AppLoading } from '../AppLoading';
import { Scheme, schemeToClassName, size } from '../../styles/base';
import { colors } from '../../styles/color';
import { Controls } from './Controls';
import { controlStyle } from '../../styles/controls';
import { Icon } from '../Icon';
import { sleep } from '../../utils';

interface ScaffoldingItem {
  name: string;
  title: string;
  component: React.ComponentType;
}

const items: ScaffoldingItem[] = [
  { name: 'error', component: ErrorTrigger, title: '错误处理' },
  { name: 'playground', component: Playground, title: '沙盒' },
  { name: 'app-loading', component: AppLoading, title: '全页载入' },
  { name: 'controls', component: Controls, title: '控件' },
];

const itemToRoute = (url: string) => (item: ScaffoldingItem) => {
  const Component = item.component;
  return (
    <Route path={`${url}/${item.name}`} key={item.name}>
      <Component />
    </Route>
  );
};


export const scaffoldContainer = css`
  padding: 4rem clamp(2rem, 10vw, 6rem);
`;

const styles = {
  sidebarItem: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 ${size(4)};
    font-size: var(--text-sm);
    height: 3rem;
    &:hover {
      background-color: ${colors.gray['200']};
    }
    &.active, &:active {
      font-weight: bold;
      background-color: ${colors.gray['300']};
    }
  `,
  sidebar: css`
    width: clamp(10rem, 20vw, 13rem);
    flex-shrink: 0;
    background: ${colors.gray['100']};
    border-right: 1px solid ${colors.gray['300']};
  `,
  container: css`
    display: grid;
    grid-template-columns: auto 1fr;
    height: var(--fill-height);
  `,
  context: css`
    width: 100%;
    height: 100%;
  `,
  empty: css`
    width: 100%;
    height: 100%;
    padding: 30px 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  main: css`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    &.scheme-dark {
      color: ${colors.blueGray['100']};
      background-color: ${colors.blueGray['900']};
    }
  `,
  schemeSwitchBar: css`
    display: flex;
    gap: ${size(1)};
    justify-content: flex-end;
    padding: ${size(2)};
  `,
}

const itemToSidebarItem = (url: string) => (item: ScaffoldingItem) => {
  return (
    <NavLink className={styles.sidebarItem} activeClassName="active" to={`${url}/${item.name}`} key={item.name}>
      {item.title}
    </NavLink>
  );
}

export function Scaffolding() {
  const { url, path } = useRouteMatch();
  const routerMapper = itemToRoute(url);
  const sidebarItemMapper = itemToSidebarItem(path);
  const [startTransition, setStartTransition] = useState(false);
  const [scheme, setScheme] = useState<Scheme | null>(null);
  const changeScheme = (scheme: Scheme | null) => async () => {
    setStartTransition(true);
    await sleep(0);
    setScheme(scheme);
  };
  useEffect(() => {
    let handler: number | undefined;
    if (startTransition) {
      handler = window.setTimeout(() => setStartTransition(false), 3000);
    }
    return () => window.clearTimeout(handler);
  }, [startTransition]);
  return (
    <div className={cx(styles.container, startTransition && 'color-transition')}>
      <aside className={styles.sidebar}>
        <div className={styles.schemeSwitchBar}>
          <button
            data-icon={true}
            data-active={scheme === 'light'}
            className={controlStyle.button}
            onClick={changeScheme(scheme === 'light' ? null : 'light')}
          >
            <Icon id="sun"/>
          </button>
          <button
            data-icon={true}
            data-active={scheme === 'dark'}
            className={controlStyle.button}
            onClick={changeScheme(scheme === 'dark' ? null : 'dark')}
          >
            <Icon id="moon"/>
          </button>
        </div>
        {items.map(sidebarItemMapper)}
      </aside>
      <main className={cx(schemeToClassName(scheme), styles.main)}>
        <Switch>
          {items.map(routerMapper)}
        </Switch>
      </main>
    </div>
  )
}
