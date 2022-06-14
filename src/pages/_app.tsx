
import { ThemeProvider } from 'styled-components';
import theme from "../global/styles/theme";
import { GlobalStyle } from '../global/styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalStyle>
    </>
  )
}

export default MyApp
