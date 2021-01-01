import hero from '../styles/Hero.module.scss';
import Image from 'next/image';

export default function Hero({ img }) {
  return (
    <section className={hero.section}>
      <Image
        src='/image.jpg'
        alt='Picture of the author'
        width={500}
        height={250}
        // width={100}
        // sizes='responsive'
        objectFit='cover'
        layout='responsive'
        // height={500}
      />

      <div className={hero.img}>
        <h1>Coming soon. </h1>
      </div>
    </section>
  );
}
