import styles from './styles.module.css';

type ContainerProps = { children: React.ReactNode };

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>
          <div>{children}</div>
        </section>
      </div>
    </div>
  );
}
