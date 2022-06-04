import type { AppProps } from 'next/app';
import { GlobalStyles } from '@config/globalStyles';
import original from 'react95/dist/themes/original';
import { ThemeProvider } from 'styled-components';
import GlobalContext from '@resources/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <GlobalContext>
          <Component {...pageProps} />
        </GlobalContext>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
