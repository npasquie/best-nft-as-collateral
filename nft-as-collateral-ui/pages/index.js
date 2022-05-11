import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Navbar from './components/Navbar';
import Pool from './components/pools/index';
const myLoader = ({ src }) => {
  return `${src}`;
};
export default function Home() {
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
        <Pool myLoader={myLoader} />
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image 
            loader={myLoader}
            src="/vercel.svg" alt="Vercel Logo" width={72} color="white" height={16} className="fill-white" />
          </span>
        </a>
      </footer>
    </div>
  )
}
