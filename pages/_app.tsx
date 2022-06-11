import type { AppProps } from 'next/app';
import { GlobalStyles } from '@config/globalStyles';
import original from 'react95/dist/themes/original';
import { ThemeProvider } from 'styled-components';
import AppContextProvider from '@resources/context/AppContext';
import { QueryClientProvider, QueryClient } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <QueryClientProvider client={queryClient}>
          <AppContextProvider>
            <Component {...pageProps} />
          </AppContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
