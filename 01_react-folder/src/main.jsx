import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Tausif, Ahmed} from './App.jsx';
import Home from './components/Home.jsx';
import Featuers from './components/Featuers.jsx';

createRoot(document.getElementById('root')).render(
    <>
      <App />
      <Tausif />
      <Ahmed/>
      <Home/>
      <Featuers/>
    </>
);