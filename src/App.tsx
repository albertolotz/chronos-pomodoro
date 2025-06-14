import './assets/styles/theme.css';
import './assets/styles/global.css';

import { Container } from './components/Container';

//import { Heading } from './components/Heading';
//import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Container>
        <section>Logo</section>
      </Container>

      <Container>
        <section>Menu</section>
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
