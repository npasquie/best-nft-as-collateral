import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useMoralis } from "react-moralis";
import Banner from "./connectBanner";
import Footer from "./footer";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  const { isWeb3Enabled } = useMoralis();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
          <header>
            <Navbar />
          </header>
          <main className={styles.main}>
      {
      isWeb3Enabled ? children : <Banner />  
      }
      </main>
      <Footer />
    </div>
  )
}
