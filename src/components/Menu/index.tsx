import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // utilizado para previnir a ação padrão do redirect do link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  // useEffect(() => {
  //   console.log('Use effext sem dependencias', Date.now());
  // }); // é executado toda vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log('', Date.now());
  // }, []); // [] array de dependencias // executa quando o componente renderiza na tela PELA PRIMEIRA VEZ

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    return () => {
      //executa esse bloco primeiro, objetivo limpar eventuas sujeiras da página, etc..
    };
  }, [theme]); //é executado dependando das ações de theme

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para Home'
        title='Ir para Home'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para Configurações'
        title='Ir para Configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
