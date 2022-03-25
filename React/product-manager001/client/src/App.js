import "./App.css";

import UpdateProduct from "./components/UpdateProduct";
import Main from './view/Main';
import DisplayOne from "./components/DisplayOne";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
            <Routes>
                <Route path="/" element={<Main/>}/>

                <Route path="/products/:id" element={<DisplayOne/>}/>

                <Route path="/products/edit/:id" element={<UpdateProduct />} />
            </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;