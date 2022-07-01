import styles from './styles.module.scss';

import ActiveLink from '../ActiveLink';

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
              <ActiveLink activeClassName={styles.active} href="/">
                <span>Home</span>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/experience">
                <span>Experiência</span>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/articles">
                <span>Artigos</span>
              </ActiveLink>
            </li>
          </ul>
        </nav>
        <nav className={styles.navBarMobile}>
          <ul>
            <li>
              <ActiveLink activeClassName={styles.active} href="/">
                <span>Home</span>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/about">
                <span>Sobre mim</span>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
