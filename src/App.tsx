import { useReducer } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import styled from '@emotion/styled';

import { Footer, Menu, ThemeSwitch, Chart } from './components';

import { lightTheme, darkTheme, GetTheme } from './theme';

const App = () => {
  const [isDefaultTheme, themeDispatch] = useReducer((isDefaultTheme) => !isDefaultTheme, true);
  const theme = GetTheme(isDefaultTheme ? lightTheme : darkTheme);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <AppWrapper>
            <MainWrapper>
              <ThemeSwitch isDefaultTheme={isDefaultTheme} toggleTheme={themeDispatch} />
              <Chart />
              <Menu />
            </MainWrapper>
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          </AppWrapper>
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

const AppWrapper = styled.div`
  /* style */
  min-height: 100vh;
`;

const MainWrapper = styled.main`
  /* layout */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 2.5rem);
  /* style */
  background: ${(props) => props.theme.palette?.background?.default || '#fff'};
  > * {
    margin: 1rem auto;
  }
`;

const FooterWrapper = styled.footer`
  /* layout */
  position: absolute;
  bottom: 0;
  /* style */
  width: 100%;
  height: 2.5rem;
`;

export default App;
