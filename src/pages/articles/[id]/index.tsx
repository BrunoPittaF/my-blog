import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { devToService } from '../../../services/devTo';

export default function singlePost() {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [articleTitle, setArticleTitle] = useState<string>('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    (async () => {
      const response = await devToService.getArticle(Number(id));
      setHtmlContent(response.body_html);
      setArticleTitle(response.title);
    })();
  }, [id]);

  return (
    <>
      <h1>{articleTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}
