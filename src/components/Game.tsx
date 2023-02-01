import styles from '@/styles/Home.module.css';
import { Board } from '@/components';
export default function Game({}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
}
