import { createContext, useContext, useState } from 'react';

interface IChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;

  levelUp: VoidFunction;
  startNewChallenge: VoidFunction;
}

const ChallengesContext = createContext<IChallengesContextData>(
  {} as IChallengesContextData,
);

const ChallengesContextProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('startNewChallenge');
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,

        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export const useChallengesContext = () => useContext(ChallengesContext);

export default ChallengesContextProvider;
