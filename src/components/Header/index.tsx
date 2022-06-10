import Link from 'next/link';
import styles from './styles.module.scss';

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <picture>
          <source srcSet="/images/logo.svg" media="(min-width: 769px)" type="image/png" />
          <source srcSet="/images/logo-mobile.svg" media="(max-width: 768px)" type="image/png" />
          <img src="/images/logo.svg" alt="Dono do website" />
        </picture>

        <nav>
          <ul>
            <li>
              <Link href="#">
                <span className={styles.active}>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Sobre mim</span>
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.navBarMobile}>
          <ul>
            <li>
              <Link href="#">
                <span className={styles.active}>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Sobre mim</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
