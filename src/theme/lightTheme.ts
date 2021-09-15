import { responsiveFontSizes, createTheme, Theme } from '@material-ui/core/styles';

import { lightThemeOptions, themeOverrides } from './options';

const lightTheme: Theme = createTheme({
  ...lightThemeOptions,
  overrides: {
    ...themeOverrides,
  },
});

export default responsiveFontSizes(lightTheme);
