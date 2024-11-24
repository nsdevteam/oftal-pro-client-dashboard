import '../api/init';

import { Global, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { ReactElement, StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';

import { UserProvider } from '../context/user';
import { LightTheme } from '../design-system';
import GlobalStyles from '../design-system/global-styles';
import '../styles/global.css';   
const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <StrictMode>
    <UserProvider>
      <ThemeProvider theme={LightTheme}>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>
);

export default App;
