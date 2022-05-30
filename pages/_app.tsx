import type { AppProps } from 'next/app';
import { GlobalStyles } from '@config/globalStyles';
import original from 'react95/dist/themes/original';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
