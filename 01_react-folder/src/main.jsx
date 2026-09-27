import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Tausif, Ahmed} from './App.jsx';
import Home from './components/Home.jsx';
import Featuers from './components/Featuers.jsx';
import First_Second from './components/First_Second.jsx';

createRoot(document.getElementById('root')).render(
    <>
      <App />
      <Tausif />
      <Ahmed/>
      <Home/>
      <Featuers/>
      <First_Second/>
    </>
);