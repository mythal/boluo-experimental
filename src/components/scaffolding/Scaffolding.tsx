import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Playground } from './Playground';
import { ErrorTrigger } from './ErrorTrigger';
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { AppLoading } from '../AppLoading';
import { Scheme, schemeToClassName, size } from '../../styles/base';
import { colors } from '../../styles/color';
import { Controls } from './Controls';
import { controlStyle } from '../../styles/controls';
import { Icon } from '../Icon';
import { sleep } from '../../utils';
import { Internationalization } from './Internationalization';
import { textColor } from '../../styles/theme';
import { TranslationFunction, useTranslation } from '../../states/i18n';

interface ScaffoldingItem {
  name: string;
  title: string;
  component: React.ComponentType;
}

const generateItems = (_: TranslationFunction): ScaffoldingItem[] => [
  { name: 'error', component: ErrorTrigger, title: _('Error Handling') },
  { name: 'playground', component: Playground, title: _('Sandbox') },
  { name: 'app-loading', component: AppLoading, title: _('Page Loading') },
  { name: 'controls', component: Controls, title: _('Controls') },
  { name: 'i18n', component: Internationalization, title: _('Internationalization') },
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
    color: ${textColor};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 ${size(4)};
    font-size: var(--text-sm);
    height: 3rem;
    &:hover {
      background-color: ${colors.gray['200']};
    }
    &.active,
    &:active {
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
};

const itemToSidebarItem = (url: string) => (item: ScaffoldingItem) => {
  return (
    <NavLink css={styles.sidebarItem} activeClassName="active" to={`${url}/${item.name}`} key={item.name}>
      {item.title}
    </NavLink>
  );
};

export function Scaffolding() {
  const { url, path } = useRouteMatch();
  const routerMapper = itemToRoute(url);
  const _ = useTranslation();
  const sidebarItemMapper = itemToSidebarItem(path);
  const [startTransition, setStartTransition] = useState(false);
  const [scheme, setScheme] = useState<Scheme | null>(null);
  const items = generateItems(_);
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
    <div css={[styles.container]}>
      <aside css={styles.sidebar}>
        <div css={styles.schemeSwitchBar}>
          <button
            data-icon={true}
            data-active={scheme === 'light'}
            css={controlStyle.button}
            onClick={changeScheme(scheme === 'light' ? null : 'light')}
          >
            <Icon id="sun" />
          </button>
          <button
            data-icon={true}
            data-active={scheme === 'dark'}
            css={controlStyle.button}
            onClick={changeScheme(scheme === 'dark' ? null : 'dark')}
          >
            <Icon id="moon" />
          </button>
        </div>
        {items.map(sidebarItemMapper)}
      </aside>
      <main css={[schemeToClassName(scheme), styles.main]}>
        <Switch>{items.map(routerMapper)}</Switch>
      </main>
    </div>
  );
}
