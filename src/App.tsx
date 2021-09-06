import { useReducer } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import styled from '@emotion/styled';

import { Chart, Layout, Menu, ThemeSwitch, HeaderTitle } from './components';

import { lightTheme, darkTheme, GetTheme } from './theme';

const App = () => {
  const [isDefaultTheme, themeDispatch] = useReducer((isDefaultTheme) => !isDefaultTheme, true);
  const theme = GetTheme(isDefaultTheme ? lightTheme : darkTheme);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderWrapper>
          <HeaderTitle />
          <ThemeSwitch isDefaultTheme={isDefaultTheme} toggleTheme={themeDispatch} />
        </HeaderWrapper>
        <Layout
          chart={
            <Chart
              title="React Highcharts Demo"
              subtitle="Powered by Welcome, Developer"
              data={[
                {
                  name: 'Installation',
                  type: 'column',
                  data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
                },
                {
                  name: 'Manufacturing',
                  type: 'column',
                  data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
                },
                {
                  name: 'Sales & Distribution',
                  type: 'column',
                  data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
                },
                {
                  name: 'Project Development',
                  type: 'column',
                  data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
                },
                {
                  name: 'Other',
                  type: 'column',
                  data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
                },
              ]}
            />
          }
          menu={<Menu />}
        />
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
