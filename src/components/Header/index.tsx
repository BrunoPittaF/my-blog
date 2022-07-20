import styles from './styles.module.scss';
import Image from 'next/image';
import ActiveLink from '../ActiveLink';

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image
            className="desktopImage"
            layout="fill"
            objectFit="cover"
            src="/images/logo.svg"
            alt="Dono do website"
            title="Dono do website"
          />
          <Image
            className="mobileImage"
            layout="fill"
            objectFit="cover"
            src="/images/logo-mobile.svg"
            alt="Dono do website"
            title="Dono do website"
          />
        </div>

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
      </header>
    </>
  );
}
