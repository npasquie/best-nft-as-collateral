import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Pool from '../components/pools';

const myLoader = ({ src,width,quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`};
export default function Home() {

  return (

          <Pool myLoader={myLoader} />

  )
}
