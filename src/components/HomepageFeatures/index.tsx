import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simple',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Assuming basic knowledge of unix, (i.e.: you know what a <a href="https://en.wikipedia.org/wiki/Shebang_(Unix)">shebang</a> is).
        It shouldn't take you more than a few minutes to learn everything there is to know about chim.
      </>
    ),
  },
  {
    title: 'Flexible',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Out of the box with support for different methods of remote fetching binaries, e.g.: HTTPS, S3, GCP, Azure Blob Storage, ssh.
      </>
    ),
  },
  {
    title: 'Efficient',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Binary assets are cached in the user's cache directory so they only need to be fetched once.
        They're periodically pruned so they don't grow out of control.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/*<div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>*/}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
