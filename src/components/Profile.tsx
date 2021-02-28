import React from 'react';

import { useChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const { level } = useChallengesContext();

  return (
    <div className={styles.container}>
      <img
        src="https://github.com/angeloevangelista.png"
        alt="Angelo Evangelista"
      />

      <div>
        <strong>Angelo Evangelista</strong>

        <p>
          <img src="/icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
