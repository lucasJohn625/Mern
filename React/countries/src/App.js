import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Form from "./components/Form"
import Home from "./views/Home";
import DisplayOne from "./components/DisplayOne";
// import DisplayAll from "./components/DisplayAll";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryCode" element={<DisplayOne/>} />
       

      </Routes>
   
    </div>
   
    </BrowserRouter>
    
  );
}

export default App;
