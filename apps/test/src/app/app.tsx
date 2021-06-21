import './app.scss';
import { Scrollbar } from '@react-nx/ui'

export function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
      <Scrollbar>
        <div style={{height: '2000px'}}>Test</div>
      </Scrollbar>
    </div>
  );
}

export default App;
