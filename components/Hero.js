import hero from '../styles/Hero.module.scss';

export default function Hero() {
  return (
    <section className={hero.section}>
      <img
        className={hero.img}
        src='https://images.pexels.com/photos/6317434/pexels-photo-6317434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        alt='image'
      />
    </section>
  );
}
