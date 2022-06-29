import Head from 'next/head';
import { Timeline } from '../components/Timeline';
import styles from '../styles/experience.module.scss';

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experiência | caio.dev</title>
        <meta
          name="description"
          content="Experiências de trabalho de Caio Bruno Pitta Figueiredo"
        />
      </Head>
      <main className={styles.contentContainer}>
        <h1 className={styles.mainTitle}>Minha Trajetória</h1>

        <Timeline />
      </main>
    </>
  );
}
