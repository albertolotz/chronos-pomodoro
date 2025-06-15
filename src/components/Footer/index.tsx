import styles from './styles.module.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <a href='#'>Entenda como funciona a técnica Pomodoro 🍅</a>
      <a href='#'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </div>
  );
}
