import { Global, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { ReactElement, StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';

import { LightTheme } from '../design-system';
import GlobalStyles from '../design-system/global-styles';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <StrictMode>
    <ThemeProvider theme={LightTheme}>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);

export default App;
