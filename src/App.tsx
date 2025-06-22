import './assets/styles/theme.css';
import './assets/styles/global.css';

import { Home } from './pages/home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

export function App() {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
}
