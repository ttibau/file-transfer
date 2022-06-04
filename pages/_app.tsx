import type { AppProps } from 'next/app';
import { GlobalStyles } from '@config/globalStyles';
import original from 'react95/dist/themes/original';
import { ThemeProvider } from 'styled-components';
import AppContextProvider from '@resources/context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
