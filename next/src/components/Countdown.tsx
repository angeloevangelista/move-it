import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

import { useCountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

const Countdown: React.FC = () => {
  const {
    time,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
  } = useCountdownContext();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <div className={styles.container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished && (
        <button
          disabled
          className={`${styles.countdownButton} ${styles.countdownButtonFinished}`}
        >
          Ciclo encerrado
          <AiFillCheckCircle />
        </button>
      )}

      {!hasFinished && (
        <>
          {isActive ? (
            <button
              onClick={resetCountdown}
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button onClick={startCountdown} className={styles.countdownButton}>
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Countdown;
