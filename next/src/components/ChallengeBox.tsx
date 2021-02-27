import React from 'react';

import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <div className={styles.container}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="Hero" />

            <strong>Novo desafio</strong>
            <p>
              É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e estique
              suas pernas pra você ficar saudável.
            </p>
          </main>

          <footer>
            <button
              className={styles.challengeFailedButton}
              onClick={() => {}}
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
