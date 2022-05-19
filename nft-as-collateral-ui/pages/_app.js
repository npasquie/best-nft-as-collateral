import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
        </ThemeProvider>
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default MyApp;
