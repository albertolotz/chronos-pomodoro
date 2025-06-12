import './assets/styles/theme.css';
import './assets/styles/global.css';

import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='teste'>
        Olá Dev 1
      </Heading>
      <Heading>Olá Dev 2</Heading>
      <Heading>Olá Dev 3</Heading>
      <p>teste 123</p>
    </>
  );
}
