import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Enkelt å bruke',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        dylgja.no er bygd for å vere enkel å installere og bruke. 
        Få nettstaden din opp og køyre raskt.
      </>
    ),
  },
  {
    title: 'Fokuser på det viktige',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Fokuser på dokumentasjonen din, resten ordnar vi. Flytt dokumenta dine 
        inn i <code>docs</code>-mappa og du er i gang.
      </>
    ),
  },
  {
    title: 'Drevet av React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Utvid eller tilpass nettside-layouten din ved å bruke React. 
        dylgja.no kan utvidast og tilpassast etter behov.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
