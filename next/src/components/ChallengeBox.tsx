import React from 'react';

import {
  IChallenge,
  useChallengesContext,
} from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useChallengesContext();

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
              onClick={resetChallenge}
              type="button"
            >
              Falhei
            </button>

            <button
              className={styles.challengeSucceededButton}
              onClick={() => {}}
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
