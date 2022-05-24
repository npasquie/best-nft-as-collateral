import "../styles/globals.css";
import { NotificationProvider } from "web3uikit";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { ChainId, DAppProvider, useEthers } from "@usedapp/core";
import { createContext, useState } from "react";

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

export const BorrowContext = createContext();
export const SupplyContext = createContext();

function MyApp({ Component, pageProps }) {
  const [hasBorrowed, setHasBorrowed] = useState(false);
  const [hasSupplied, setHasSupplied] = useState(false);

  return (
    <DAppProvider config={config}>
      <SupplyContext.Provider value={{ hasSupplied, setHasSupplied }}>
        <BorrowContext.Provider value={{ hasBorrowed, setHasBorrowed }}>
          <NotificationProvider>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </NotificationProvider>
        </BorrowContext.Provider>
      </SupplyContext.Provider>
    </DAppProvider>
  );
}

export default MyApp;
