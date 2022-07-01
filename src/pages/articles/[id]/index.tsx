import { useRouter } from 'next/router';

export default function singlePost() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);

  return (
    <>
      <h1>Single Post</h1>
      <p>numero do post: {id}</p>
    </>
  );
}
