import "../styles/globals.css";
import { NotificationProvider } from "web3uikit";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { ChainId, DAppProvider, useEthers } from "@usedapp/core";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appId = process.env.NEXT_PUBLIC_APP_ID;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const config = {
  readOnlyChain: [ChainId.ArbitrumRinkeby],
  readOnlyUrls: {
    [ChainId.ArbitrumRinkeby]: "https://rinkeby.arbitrum.io/rpc",
  },
};

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <NotificationProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </NotificationProvider>
    </DAppProvider>
  );
}

export default MyApp;
