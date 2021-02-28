import { createContext, useContext, useEffect, useState } from 'react';
import { useChallengesContext } from './ChallengesContext';

interface ICountdownContextData {
  time: number;
  isActive: boolean;
  hasFinished: boolean;

  startCountdown: VoidFunction;
  resetCountdown: VoidFunction;
}

const CountdownContext = createContext<ICountdownContextData>(
  {} as ICountdownContextData,
);

let countdownTimeout: NodeJS.Timeout;

const CountdownContextProvider: React.FC = ({ children }) => {
  const { startNewChallenge } = useChallengesContext();

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);

    setHasFinished(false);
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
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        time,
        isActive,
        hasFinished,

        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

export const useCountdownContext = () => useContext(CountdownContext);

export default CountdownContextProvider;
