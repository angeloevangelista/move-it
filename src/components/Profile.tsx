import React from 'react';

import { useChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

interface IProfileProps {
  small?: boolean;
}

const Profile: React.FC<IProfileProps> = ({ small = false }) => {
  const { level } = useChallengesContext();

  return (
    <div className={`${styles.container} ${small ? styles.small : ''}`}>
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
