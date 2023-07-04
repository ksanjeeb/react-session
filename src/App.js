import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PagesRouting from './pages/PagesRouting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PagesRouting />
      </BrowserRouter>
    </div>
  );
}

export default App;
