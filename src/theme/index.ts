import { createTheme, responsiveFontSizes, ThemeOptions } from '@material-ui/core/styles';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

const GetTheme = (themeOptions: ThemeOptions) => {
  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);
  return theme;
};

export { darkTheme, lightTheme, GetTheme };
