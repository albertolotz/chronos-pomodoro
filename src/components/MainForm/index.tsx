//import styles from './styles.module.css';

import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import type { HomeProps } from '../../pages/home';

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 78,
        },
        formattedSecondsRemaning: '44:87',
      };
    });
  }
  return (
    <form className='form' action=''>
      <div>
        <button type='button' onClick={handleClick}>
          clicar
        </button>
      </div>

      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='Task'
          placeholder='Digite Algo'
        />
      </div>

      <div className='formRow'>
        <p>proximo intervalo {state.config.workTime} min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton color='green' icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
