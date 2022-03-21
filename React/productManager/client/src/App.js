import "./App.css";
import Main from "./views/main";
import UpdateProduct from "./components/UpdateProduct";
import OneProduct from "./components/OneProduct";
import { Router } from "@reach/router";

///oneprodct path?

function App() {
    return (
        <div className="App">
            <Router>
                <Main path="/"/>
                <OneProduct path="/product/:id"/>
                <UpdateProduct path="/product/edit/:id"/>
           </Router>
        </div>
    );
}

export default App;