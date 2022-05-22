import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import { useRouter } from "next/router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appId = process.env.NEXT_PUBLIC_APP_ID;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  console.log(router.basePath);
  return (
    <MoralisProvider
      // appId="sBU4FWFBy3XjXNBNBOR72fdSAncpJnHRRsVsYxiT" serverUrl={serverUrl}
      initializeOnMount={false}
    >
      <NotificationProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        </ThemeProvider>
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default MyApp;
