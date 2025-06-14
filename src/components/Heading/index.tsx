import type React from 'react';
import styles from './styles.module.css';

type HeadingProps = { children: React.ReactNode }; // tudo que o react aceita

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children} </h1>;
}
