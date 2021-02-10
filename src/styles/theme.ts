import { createMuiTheme, Theme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';

export function createTheme(scheme: 'dark' | 'light'): Theme {
  return createMuiTheme({
    // https://next.material-ui.com/customization/palette/
    palette: {
      mode: scheme,
    },
    // https://next.material-ui.com/customization/theme-components/
    components: {
      MuiSwitch: {
        defaultProps: {
          disableRipple: true,
          // size: 'small',
        },
      },
      MuiTooltip: {
        defaultProps: {
          TransitionComponent: Zoom,
        },
      },
    },
  });
}
