import React, { useCallback, useState } from 'react';

import { useChallengesContext } from '../contexts/ChallengesContext';

import calculatePercentage from '../util/calculatePercentage';

import styles from '../styles/components/ExperienceBar.module.css';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useChallengesContext();

  const currentExperiencePercent = calculatePercentage(
    currentExperience,
    experienceToNextLevel,
  );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (calculatePercentage(experiencePoints, nextLevelMark) === 100) {
  //       setNextLevelMark(Math.round(nextLevelMark * 1.2));
  //       setExperiencePoints(0);
  //     } else setExperiencePoints(experiencePoints + 1);
  //   }, 1);

  //   return () => clearInterval(interval);
  // }, [calculatePercentage, experiencePoints, nextLevelMark]);
  // // Good bye

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>

      <div>
        <div
          className={styles.progress}
          style={{
            width: `${currentExperiencePercent}%`,
          }}
        />

        <span
          className={styles.currentExperience}
          style={{
            left: `${currentExperiencePercent}%`,
          }}
        >
          {currentExperience} xp
        </span>
      </div>

      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};

export default ExperienceBar;
