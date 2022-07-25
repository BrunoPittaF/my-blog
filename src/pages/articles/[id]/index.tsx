import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { IArticle } from '../../../interfaces';
import { devToService } from '../../../services/devTo';
import styles from '../../../styles/singleArticle.module.scss';

export default function SinglePost({
  htmlContent,
  articleTitle,
  description,
}: {
  htmlContent: string;
  articleTitle: string;
  description: string;
}) {
  return (
    <>
      <Head>
        <title>{articleTitle} | caio.dev</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles.articleWrapper}>
        <h1>{articleTitle}</h1>
        <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await devToService.getAllArticles();

  const paths = response.map((article: IArticle) => ({
    params: {
      id: article.id.toString(),
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await devToService.getArticle(Number(params.id));

  return {
    props: {
      htmlContent: response.body_html,
      articleTitle: response.title,
      description: response.description,
    },
  };
};
