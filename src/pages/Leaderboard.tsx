import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Leaderboard.module.css';

import Sidebar from '../components/Sidebar';
import LeaderboardUser from '../components/LeaderboardUser';

import ChallengesContextProvider, {
  IChallengeContextProps,
} from '../contexts/ChallengesContext';

export const Leaderboard: React.FC<IChallengeContextProps> = ({
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
          <title>Leaderboard | move.it</title>
        </Head>

        <Sidebar activeRoute="leaderboard" />

        <h1>Leaderboard</h1>

        <div className={styles.ranking}>
          <header>
            <div>
              <strong>Posição</strong>
            </div>
            <div>
              <strong>Usuário</strong>
              <strong>Desafios</strong>
              <strong>
                <span className={styles.hideResponsive}>Experiência</span>
                <span className={styles.showOnlyResponsive}>XP</span>
              </strong>
            </div>
          </header>
          <div>
            <LeaderboardUser />
            <LeaderboardUser />
            <LeaderboardUser />
            <LeaderboardUser />
            <LeaderboardUser />
            <LeaderboardUser />
            <LeaderboardUser />
            <LeaderboardUser />
            <LeaderboardUser />
            <LeaderboardUser />
            <LeaderboardUser />
          </div>
        </div>
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

export default Leaderboard;
