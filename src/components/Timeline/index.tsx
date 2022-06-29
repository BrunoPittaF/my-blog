import styles from './styles.module.scss';

interface IStep {
  date: string;
  image: string;
  name: string;
  description: string;
}

export function Timeline() {
  const steps: IStep[] = [
    {
      date: '2019-2020',
      description: 'Aqui vai minha XP da nvgo',
      image: '/images/nvgo.png',
      name: 'NVGO',
    },
    {
      date: '2020-2022',
      description: 'Aqui vai minha XP da vx case',
      image: '/images/vxcase.png',
      name: 'VX Case',
    },
    {
      date: '2021-2021',
      description: 'Aqui vai minha XP da Cubos Academy',
      image: '/images/cubos-academy.png',
      name: 'Cubos Academy',
    },
    {
      date: '2022-Atual',
      description: 'Aqui vai minha XP da UOL',
      image: '/images/uol.png',
      name: 'UOL',
    },
  ];
  return (
    <section className={styles.contentContainer}>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <span>{step.date}</span>
          <div
            style={{ backgroundImage: `url(${step.image})`, zIndex: index * -1 }}
            className={styles.arrow}
          ></div>
          <p className={styles.name}>{step.name}</p>
          <p className={styles.description}>{step.description}</p>
        </div>
      ))}
    </section>
  );
}
