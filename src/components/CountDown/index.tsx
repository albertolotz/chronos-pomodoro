import type { HomeProps } from '../../pages/home';
import styles from './styles.module.css';

export function CountDown({ state }: HomeProps) {
  return (
    <div className={styles.countdown}>
      <span>{state.formattedSecondsRemaning}</span>
    </div>
  );
}
