import { Theme } from './app.models';
import './app.scss';
import { AppContext } from './context/context';
import { ScrollbarExample } from './pages/scrollbar-example/scrollbar-example';
export function App() {
  // TODO: app state with auth
  return (
    <AppContext.Provider value={{ appThemes: [Theme.base] }}>
      <ScrollbarExample></ScrollbarExample>
    </AppContext.Provider>
  );
}

export default App;
