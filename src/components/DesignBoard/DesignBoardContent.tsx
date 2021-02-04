import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { text } from '../atoms/text';
import { ClassNameProps } from '../common';
import { ComponentItem } from './DesignBoard';
import { rightPx, schemeState } from './common';
import { py } from '../../styles/spacing';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/react';
import { bgColor } from '../../styles/backgrounds';
import { gray } from '../../styles/color';
import { transitionColors } from '../../styles/transitions';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useMemo } from 'react';

interface Props extends ClassNameProps {
  components: ComponentItem[];
}

const style = css(
  rightPx,
  py(6),
  transitionColors,
  css`
    &[data-theme='dark'] {
      ${bgColor(gray['900'])};
    }
  `
);

export function DesignBoardContent({ className, components }: Props) {
  const { path } = useRouteMatch();
  const scheme = useRecoilValue(schemeState);
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          mode: scheme,
        },
      }),
    [scheme]
  );

  return (
    <main css={style} data-theme={scheme} className={className}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path={path}>
            <p css={text}>选择需要查看的组件</p>
          </Route>
          {components.map(({ title, name, Component }) => (
            <Route path={`${path}/${name}`} key={name}>
              <Component title={title} />
            </Route>
          ))}
          <Route>
            <p css={text}>这个组件还未实现</p>
          </Route>
        </Switch>
      </ThemeProvider>
    </main>
  );
}
