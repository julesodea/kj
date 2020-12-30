import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import data from '../components/data';

export default function Home() {
  data.map((res) => console.log(res));
  return (
    <div>
      <Head>
        <title>Katherine Jack</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      {data.map((res) => (
        <Hero img={res} key={res} />
      ))}

      <Footer />
    </div>
  );
}
