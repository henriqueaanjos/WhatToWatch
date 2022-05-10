
import { ThemeProvider } from 'styled-components';
import theme from "../global/styles/theme";
import GlobalStyle from '../global/styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
