import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Live Support',
    Svg: require('@site/static/img/discord-mark-blue.svg').default,
    description: (
      <>
       Have any questions the documentation can't solve? Reach out to us on <a href='https://discord.gg/peepostream'>Discord</a>!
      </>
    ),
  },
  {
    title: 'Give your chat a voice',
    Svg: require('@site/static/img/undraw_typing_re_d4sq.svg').default,
    description: (
      <>
        With TTS rewards, commands, and even sending all chat messages through text to speech, peepoStream helps streamers interact with their chat even when they're too busy to read.
      </>
    ),
  },
  {
    title: 'Works with the tools you already use',
    Svg: require('@site/static/img/TwitchGlitchPurple.svg').default,
    description: (
      <>
        Built from the ground up for Twitch, we work well with all your existing tools to level up your streaming experience.
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
        <h3>{title}</h3>
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
