import hero from '../styles/Hero.module.scss';

export default function Hero({ img }) {
  return (
    <section className={hero.section}>
      <div className={hero.img} src={img} alt='image'>
        <h1>Coming soon. ✌️ </h1>
      </div>
    </section>
  );
}
