import { useReducer } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import styled from '@emotion/styled';

import { Footer, Menu, ThemeSwitch, Chart, Greet } from './components';

import { lightTheme, darkTheme, GetTheme } from './theme';
import { Translation } from './components/Translation';

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
              <Greet />
              <OptionsWrapper>
                <Translation />
                <ThemeSwitch isDefaultTheme={isDefaultTheme} toggleTheme={themeDispatch} />
              </OptionsWrapper>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* style */
  min-height: calc(100vh - 2.5rem);
  background: ${(props) => props.theme.palette?.background?.default || '#fff'};
  > * {
    margin: 5px;
  }
`;

const OptionsWrapper = styled.main`
  /* layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* style */
  background: ${(props) => props.theme.palette?.background?.default || '#fff'};
  > * {
    margin: 0 15px;
  }
`;

const FooterWrapper = styled.footer`
  /* layout */
  bottom: 0;
  text-align: center;
  /* style */
  width: 100%;
  height: 2.5rem;
`;

export default App;
