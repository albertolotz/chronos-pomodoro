import type { TaskModel } from './TaskModel';

//Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; //historico, MainForm
  secondsRemaning: number; //CoutDown, Historico, MainForm, Button
  formattedSecondsRemaning: string; // Titulo, CoutDown
  activeTask: TaskModel | null; //CoutDown, Historico, MainForm, Button
  currentCycle: number; // numero de 1 a 8 // Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; //MainForm
    longBreak: number; //MainForm
  };
};
