import Router, { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { devToService } from '../../../services/devTo';

export default function SinglePost({ htmlContent, articleTitle }) {
  // const [content, setContent] = useState<string>('');
  // const [title, setTitle] = useState<string>('');
  // const router = useRouter();
  // const { id } = router.query;

  // useEffect(() => {
  //   (async () => {
  //     const response = await devToService.getArticle(Number(id));
  //     setContent(response.body_html);
  //     setTitle(response.title);
  //   })();
  // }, [id]);

  return (
    <>
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

  return {
    props: {
      htmlContent: response.body_html,
      articleTitle: response.title,
    },
  };
};
