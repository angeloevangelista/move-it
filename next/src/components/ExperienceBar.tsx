import React, { useCallback, useEffect, useState } from 'react';

import styles from '../styles/components/ExperienceBar.module.css';

const ExperienceBar: React.FC = () => {
  const [nextLevelMark, setNextLevelMark] = useState(600);
  const [experiencePoints, setExperiencePoints] = useState(0);

  const calculatePercentage = useCallback(
    (currentValue: number, total: number) => (currentValue / total) * 100,
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (calculatePercentage(experiencePoints, nextLevelMark) === 100) {
        setNextLevelMark(Math.round(nextLevelMark * 1.2));
        setExperiencePoints(0);
      } else setExperiencePoints(experiencePoints + 1);
    }, 1);

    return () => clearInterval(interval);
  }, [calculatePercentage, experiencePoints, nextLevelMark]);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>

      <div>
        <div
          className={styles.progress}
          style={{
            width: `${calculatePercentage(experiencePoints, nextLevelMark)}%`,
          }}
        />

        <span
          className={styles.currentExperience}
          style={{
            left: `${calculatePercentage(experiencePoints, nextLevelMark)}%`,
          }}
        >
          {experiencePoints} xp
        </span>
      </div>

      <span>{nextLevelMark} xp</span>
    </header>
  );
};

export default ExperienceBar;
