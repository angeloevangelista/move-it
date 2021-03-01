import React from 'react';

import styles from '../styles/components/Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.container}>
      <img src="/icons/logo.svg" alt="Move it" />

      <div>
        <a>
          <img src="/icons/home.svg" alt="Home" />
        </a>
        <a>
          <img src="/icons/award.svg" alt="Ranking" />
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
