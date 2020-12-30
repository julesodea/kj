import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/Main.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Katherine Jack</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      About
    </div>
  );
}
