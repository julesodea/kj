import hero from '../styles/Hero.module.scss';

export default function Hero({ img }) {
  return (
    <section className={hero.section}>
      <img className={hero.img} src={img} alt='image' />
    </section>
  );
}
