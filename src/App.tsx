import './assets/styles/theme.css';
import './assets/styles/global.css';

import { Home } from './pages/home';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaning: 0,
  formattedSecondsRemaning: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreak: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home />;
}
