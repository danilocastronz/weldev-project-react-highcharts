import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { AppContext } from './context/AppContext';

import { Footer, Menu, ThemeSwitch, Chart, Greet, Translation } from './components';
import AppClient from './context/AppClient';

const App = () => {
  const client = new AppClient();

  return (
    <AppContext.Provider value={client}>
      <MuiThemeProvider theme={client.theme}>
        <ThemeProvider theme={client.theme}>
          <StylesProvider injectFirst>
            <CssBaseline />
            <AppWrapper>
              <MainWrapper>
                <Greet />
                <OptionsWrapper>
                  <Translation />
                  <ThemeSwitch />
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
    </AppContext.Provider>
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
  /* style */
  width: 100%;
  height: 2.5rem;
  text-align: center;
`;

export default App;
