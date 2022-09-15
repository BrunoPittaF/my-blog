import Head from 'next/head';
import styles from '../styles/home.module.scss';

import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | caio.dev</title>
        <meta
          name="description"
          content="Página principal do website sobre o desenvolvedor Caio Bruno Pitta Figueiredo"
        />
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.info}>
          <h1>
            Estamos em construção!
            <a
              href="https://www.flaticon.com/free-icons/work-in-progress"
              title="Worker illustrations by Storyset"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={64}
                height={64}
                src="/images/work-in-progress.png"
                title="construct"
                alt="construct"
              />
            </a>
          </h1>
          <p>
            Em breve estaremos funcionando com todas as funcionalidades, mas caso já queira saber
            mais informações, pode acessar o figma do projeto e o meu linkedin :
          </p>
          <div className={styles.icons}>
            <a
              href="https://www.figma.com/file/W5s0wsYtQ7y11sqQVw7j3Z/Meu-blog-pessoal?node-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={24}
                height={24}
                src="/images/icons/figma.png"
                title="figma"
                alt="figma"
              />
            </a>
            <a href="https://linkedin.com/in/brunopittaf" target="_blank" rel="noopener noreferrer">
              <Image
                width={24}
                height={24}
                src="/images/icons/linkedin.png"
                title="linkedin"
                alt="linkedin"
              />
            </a>

            <p style={{ marginBottom: '20px' }}>Sites feitos por mim, ou com a minha participação:</p>
            <Link href="https://modaisemfoco.com.br/">
              <a style={{ textDecoration: 'underline', color: 'white', cursor: 'pointer' }}>Modais em foco</a>
            </Link>


            <Link href="https://www.vxcase.com.br/">
              <a style={{ textDecoration: 'underline', color: 'white', cursor: 'pointer' }}>Vx Case</a>
            </Link>

            <Link href="https://nvgo.com.br/">
              <a style={{ textDecoration: 'underline', color: 'white', cursor: 'pointer' }}>NVGO</a>
            </Link>

            <Link href="https://www.uol.com.br/">
              <a style={{ textDecoration: 'underline', color: 'white', cursor: 'pointer' }}>UOL</a>
            </Link>

            <p style={{ marginBottom: '20px' }}>Protótipos feitos por mim:</p>
            <Link href="https://www.figma.com/file/IQWR0hwVaAgep7WvDy3iy5/Contabilidade?node-id=0%3A1">
              <a style={{ textDecoration: 'underline', color: 'white', cursor: 'pointer' }}>Contabilidade</a>
            </Link>

            <Link href="https://www.figma.com/file/PiOCPtDRMokgXxOwHKXOW7/SmartBuy?node-id=0%3A1">
              <a style={{ textDecoration: 'underline', color: 'white', cursor: 'pointer' }}>Sistema de mercado</a>
            </Link>



          </div>
        </section>
        <a
          className={styles.workImage}
          href="https://storyset.com/worker"
          title="work in progress icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            layout="fill"
            width={542}
            height={542}
            src="/images/work.png"
            alt="Work construct"
            title="Work construct"
          />
        </a>
      </main>
    </>
  );
}
