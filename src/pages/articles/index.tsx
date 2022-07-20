import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IArticle } from '../../interfaces';
import { devToService } from '../../services/devTo';

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
          <div>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
