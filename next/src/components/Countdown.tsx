import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (!isActive) return;

    if (time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      setHasFinished(true);
      resetCountdown();
    }
  }, [isActive, time]);

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
