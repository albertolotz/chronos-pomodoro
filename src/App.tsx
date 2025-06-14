import './assets/styles/theme.css';
import './assets/styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo/index';
import { Menu } from './components/Menu';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <section>Formulario</section>
      </Container>

      <Container>
        <section>Header</section>
      </Container>
    </>
  );
}
