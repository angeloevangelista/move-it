import styles from '../styles/components/LeaderboardUser.module.css';
import Profile from './Profile';

const LeaderboardUser: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.position}>
        <h1>1</h1>
      </div>

      <div className={styles.information}>
        <Profile small />

        <p>
          <strong>12</strong> <span>completados</span>
        </p>

        <p>
          <strong>243243</strong> <span>xp</span>
        </p>
      </div>
    </div>
  );
};

export default LeaderboardUser;
