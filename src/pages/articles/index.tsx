import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IArticle } from '../../interfaces';
import { devToService } from '../../services/devTo';
import styles from '../../styles/articles.module.scss';

export default function Articles() {
  const [page, setPage] = useState<number>(1);
  const [article, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    (async () => {
      const response = await devToService.getArticlesList(page);
      setArticles(response);
    })();
  }, [page]);
  return (
    <>
      <Head>
        <title>Artigos de estudo | caio.dev</title>
        <meta
          name="description"
          content="Artigos de estudo feitos por Caio Bruno Pitta Figueiredo"
        />
      </Head>
      {article.map((article) => (
        <Link key={article.id} href={`/articles/${encodeURIComponent(article.id)}`}>
          <div className={styles.articleWrapper}>
            <h2>{article.title}</h2>
            <div className={styles.details}>
              <span className={styles.date}>
                {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(
                  new Date(article.published_at)
                )}
              </span>
              <span>
                {article.reading_time_minutes == 1
                  ? `${article.reading_time_minutes} minuto `
                  : `${article.reading_time_minutes} minutos `}
                de leitura
              </span>
            </div>
            <p className={styles.description}>{article.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
