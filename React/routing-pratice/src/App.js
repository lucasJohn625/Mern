import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Word from './components/Word';
import Number from './components/Number';
import Welcome from './components/Welcome';
import Color from './components/Color';
import './App.css';

function App() {
  
  return (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/number" element={<Number />} />
        <Route path="/color" element={<Color />} />
        <Route path="/word" element={<Word />} />
      </Routes>
      
    </div>
  </BrowserRouter>  
  );
}

export default App;
