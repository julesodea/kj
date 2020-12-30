import Link from 'next/link';
import nav from '../styles/Nav.module.scss';

export default function Home() {
  return (
    <nav className={nav.nav}>
      <h1>Katherine Jack</h1>
      <ul>
        <li>
          <Link href='/'>
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
