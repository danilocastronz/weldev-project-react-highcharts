import { createTheme, responsiveFontSizes, ThemeOptions } from '@material-ui/core/styles';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

const GetTheme = (themeOptions: ThemeOptions) => {
  let theme = createTheme({
    ...themeOptions,
    overrides: {
      MuiIconButton: {
        root: {
          '&:hover': {
            boxShadow: 'rgba(5, 105, 236, 0.5) 0px 2px 4px',
            backgroundColor: 'transparent',
          },
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};

export { darkTheme, lightTheme, GetTheme };
