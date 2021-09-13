import { useReducer } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import styled from '@emotion/styled';

import { Footer, Menu, ThemeSwitch, Chart } from './components';

import { lightTheme, darkTheme, GetTheme } from './theme';

// import { countries } from './mock/data';

const App = () => {
  const [isDefaultTheme, themeDispatch] = useReducer((isDefaultTheme) => !isDefaultTheme, true);
  const theme = GetTheme(isDefaultTheme ? lightTheme : darkTheme);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper>
          <MainWrapper>
            <ThemeSwitch isDefaultTheme={isDefaultTheme} toggleTheme={themeDispatch} />
            <Chart data={[]} />
            <Menu />
          </MainWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </AppWrapper>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

const AppWrapper = styled.div`
  min-height: 100vh;
`;

const MainWrapper = styled.main`
  /* layout */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* style */
  background: ${(props) => props.theme.palette?.background?.default || '#fff'};
`;

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`;

export default App;
