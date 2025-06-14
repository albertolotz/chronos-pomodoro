import './assets/styles/theme.css';
import './assets/styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo/index';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

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
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              type='text'
              labelText='Task'
              placeholder='Digite Algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className='formRow'>
            <p>ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
