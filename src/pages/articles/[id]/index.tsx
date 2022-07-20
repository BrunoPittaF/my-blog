import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { devToService } from '../../../services/devTo';

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
      <h1>{articleTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await devToService.getAllArticles();

  const paths = response.map((article: any) => ({
    params: {
      id: article.id.toString(),
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await devToService.getArticle(Number(params.id));
  console.log(response);

  return {
    props: {
      htmlContent: response.body_html,
      articleTitle: response.title,
      description: response.description,
    },
  };
};
