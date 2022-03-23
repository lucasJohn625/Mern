import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import OneAuthor from './components/OneAuthor';
import AddAuthor from './components/AddAuthor';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path= "/author/:id" element={<OneAuthor/>}/>
            <Route path= '/author' element={<AddAuthor/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}
export default App;