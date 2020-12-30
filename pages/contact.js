import Nav from '../components/Nav';
import Head from 'next/head';
import styles from '../styles/Main.module.scss';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Katherine Jack</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      Contact
    </div>
  );
}
