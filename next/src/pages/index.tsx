import React from 'react';

import styles from '../styles/pages/Home.module.css'

import Profile from '../components/Profile';
import ExperienceBar from '../components/ExperienceBar';


export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>

        <div>

        </div>
      </section>
    </div>
  );
}
