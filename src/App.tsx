import { useMemo, useState } from 'react';
import { CssBaseline, responsiveFontSizes } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

// app components
import { Footer, Menu, ThemeSwitch, Chart, Greet, Translation } from './components';

// app context
import { AppContext } from './context/AppContext';

// app client
import AppClient from './context/AppClient';

// app themes
import { ColorModeContext } from './context/ColorModeContext';

const App = () => {
  const client = new AppClient();
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => {
    let theme = createTheme({
      palette: {
        mode,
      },
    });
    theme = responsiveFontSizes(theme);
    return theme;
  }, [mode]);

  return (
    <AppContext.Provider value={client}>
      <ColorModeContext.Provider value={colorMode}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
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
      </ColorModeContext.Provider>
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
  height: 65px;
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
