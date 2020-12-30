import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Katherine Jack</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Hero />
    </div>
  );
}
