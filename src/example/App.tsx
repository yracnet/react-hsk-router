import { BrowserRouter } from 'react-router-dom';
import { nivel } from './routes';
import { ItemRender } from '../module';

function App() {
  return (
    <BrowserRouter>
      <ItemRender value={nivel} />
    </BrowserRouter>
  );
}

/*
<ConfigRender value={wizard} defaultTo="/d1" container={DebugContainer} />
<ItemRender value={app} defaultTo="/a2" />
*/
export default App;
