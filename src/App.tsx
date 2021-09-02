import { useReducer } from 'react';
import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { Chart, Layout, Menu, ThemeSwitch } from './components';

import { lightTheme, darkTheme, GetTheme } from './theme';
import { CssBaseline } from '@material-ui/core';

const App = () => {
  const [isDefaultTheme, themeDispatch] = useReducer((isDefaultTheme) => !isDefaultTheme, true);
  const theme = GetTheme(isDefaultTheme ? lightTheme : darkTheme);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeSwitch isDefaultTheme={isDefaultTheme} toggleTheme={themeDispatch} />
        <Layout
          chart={<Chart title="React Highcharts Demo" subtitle="Powered by Welcome, Developer" />}
          menu={<Menu />}
        />
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
