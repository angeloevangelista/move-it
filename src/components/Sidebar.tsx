import Link from 'next/link';

import styles from '../styles/components/Sidebar.module.css';

interface ISidebarProps {
  activeRoute: 'home' | 'leaderboard';
}

const Sidebar: React.FC<ISidebarProps> = ({ activeRoute }) => {
  return (
    <nav className={styles.container}>
      <img src="/icons/logo.svg" alt="Move it" />

      <div>
        <Link href="/">
          <div className={activeRoute === 'home' && styles.active}>
            <img src="/icons/home.svg" alt="Home" />
          </div>
        </Link>

        <Link href="Leaderboard">
          <div className={activeRoute === 'leaderboard' && styles.active}>
            <img src="/icons/award.svg" alt="Ranking" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
