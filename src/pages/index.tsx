import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';

import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import ExperienceBar from '../components/ExperienceBar';
import CompletedChallenges from '../components/CompletedChallenges';

import CountdownContextProvider from '../contexts/CountdownContext';

import ChallengesContextProvider, {
  IChallengeContextProps,
} from '../contexts/ChallengesContext';

export const Home: React.FC<IChallengeContextProps> = ({
  level,
  currentExperience,
  challengesCompleted,
}) => {
  return (
    <ChallengesContextProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <Sidebar activeRoute="home" />

        <ExperienceBar />

        <CountdownContextProvider>
          <section>
            <div>
              <Profile />

              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownContextProvider>
      </div>
    </ChallengesContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<IChallengeContextProps> = async (
  context,
) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  const props: IChallengeContextProps = {
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted: Number(challengesCompleted),
  };

  return {
    props,
  };
};

export default Home;
