import { createContext, useContext, useEffect, useState } from 'react';

import challenges from '../../challenges.json';

export interface IChallenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface IChallengesContextData {
  level: number;
  activeChallenge: IChallenge;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;

  levelUp: VoidFunction;
  resetChallenge: VoidFunction;
  startNewChallenge: VoidFunction;
  completeChallenge: VoidFunction;
}

const ChallengesContext = createContext<IChallengesContextData>(
  {} as IChallengesContextData,
);

const ChallengesContextProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState<IChallenge>(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengeIndex] as IChallenge;

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setChallengesCompleted(challengesCompleted + 1);
    resetChallenge();
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        activeChallenge,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,

        levelUp,
        resetChallenge,
        startNewChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export const useChallengesContext = () => useContext(ChallengesContext);

export default ChallengesContextProvider;
