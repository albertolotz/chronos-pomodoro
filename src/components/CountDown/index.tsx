import styles from './styles.module.css';

export function CountDown() {
  return (
    <div className={styles.countdown}>
      <span>00:00</span>
    </div>
  );
}
