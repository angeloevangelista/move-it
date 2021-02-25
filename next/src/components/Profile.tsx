import React from 'react';

import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
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
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
