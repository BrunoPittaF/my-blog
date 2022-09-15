import Link from 'next/link';
import styles from './styles.module.scss';

interface IStep {
  date: string;
  image: string;
  techs: string[];
  name: string;
  description: string;
  destination: string;
}

export function Timeline() {
  const steps: IStep[] = [
    {
      date: '2019-2020',
      description:
        'Manuntenção de aplicações web, desenvolvimento de sites de noticia e institucionais',
      techs: [
        'React',
        'Next.js',
        'Typescript',
        'Styled-components',
        'Sass',
        'Javascript',
        'HTML',
        'CSS',
        'Figma',
        'Adobe XD',
      ],
      destination: 'https://nvgo.com.br/',
      image: '/images/nvgo.png',
      name: 'NVGO',
    },
    {
      date: '2020-2022',
      description:
        'Manuntenção do site de ecommerce, desenvolvimento de novas páginas e landings focadas em produtos e conversão, desenvolvimento de novo site, desenvolvimento e manutenção de sistemas internos, manutenção em projetos via FTP, metodologia Kanban, Desenvolvimento orientado a SEO, metodologia TDD ',
      techs: [
        'Angular',
        'Javascript',
        'Typescript',
        'Material UI',
        'Sass',
        'Less',
        'Magento',
        'Figma',
        'Adobe XD',
      ],
      destination: 'https://www.vxcase.com.br/',
      image: '/images/vxcase.png',
      name: 'VX Case',
    },
    {
      date: '2021-2021',
      description:
        'Auxiliar alunos com dúvidas e esclarecimentos em projetos no curso em parceria com o IFOOD.',
      techs: ['React', 'Material UI', 'Sass', 'HTML', 'Figma'],
      image: '/images/cubos-academy.png',
      destination: 'https://cubos.academy/',
      name: 'Cubos Academy',
    },
    {
      date: '2022-Atual',
      description:
        'Desenvolvimento de layouts e peças publicitárias ,Criação de novo template de publicidade criação de novo template de publicidade utilizando Typescript, Integração com sistemas externos de publicidade: ad servers e parceiros para publicidades de retargeting, manuntenção de teste unitários',
      techs: ['React', 'Typescript', 'Javascript', 'Sass', 'Photoshop', 'Figma', 'HTML'],
      image: '/images/uol.png',
      destination: '',
      name: 'UOL',
    },
  ];
  return (
    <section className={styles.contentContainer}>
      {steps.map((step, index) => (
        <div style={{ zIndex: index * -1 }} key={index} className={styles.step}>
          <span>{step.date}</span>
          <Link href={step.destination}>
            <a>
              <div style={{ backgroundImage: `url(${step.image})` }} className={styles.arrow}></div>
            </a>
          </Link>
          <p className={styles.name}>{step.name}</p>
          <p className={styles.description}>{step.description}</p>
          <div className={styles.techs}>
            <p>Tecnologias utilizadas: </p>
            {step.techs.map((tech, index) => (
              <div key={index}>- {tech}</div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
