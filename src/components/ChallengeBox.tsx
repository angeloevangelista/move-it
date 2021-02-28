import React from 'react';

import {
  IChallenge,
  useChallengesContext,
} from '../contexts/ChallengesContext';
import { useCountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useChallengesContext();

  const { resetCountdown } = useCountdownContext();

  function renderChallengeHero(challenge: IChallenge) {
    switch (challenge.type) {
      case 'body':
        return <img src="icons/body.svg" alt="Hero" />;
      case 'eye':
        return <img src="icons/eye.svg" alt="Hero" />;
      default:
        return <img src="icons/help-circle.svg" alt="Hero" />;
    }
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.container}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            {renderChallengeHero(activeChallenge)}

            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
              type="button"
            >
              Falhei
            </button>

            <button
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
              type="button"
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt="Leve Up" />
            Avançe de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
