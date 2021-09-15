import { responsiveFontSizes, Theme, createTheme } from '@material-ui/core/styles';

import { darkThemeOptions, themeOverrides } from './options';

const darkTheme: Theme = createTheme({
  ...darkThemeOptions,
  overrides: {
    ...themeOverrides,
  },
});

export default responsiveFontSizes(darkTheme);
