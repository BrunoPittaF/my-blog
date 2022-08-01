import styles from './styles.module.scss';
import Image from 'next/image';
import ActiveLink from '../ActiveLink';
import Link from 'next/link';

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
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
            </a>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <ActiveLink activeClassName={styles.active} href="/">
                <a>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/experience">
                <a>Experiência</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/articles">
                <a>Artigos</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
