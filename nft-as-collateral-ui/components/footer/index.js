import Image from 'next/image';
import styles from '../../styles/Home.module.css'


const myLoader = ({ src,width,quality}) => {
  return `${src}?w=${width}&q=${quality || 75}`

  };

const Footer = () => {
    return (
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
    )
}

export default Footer;