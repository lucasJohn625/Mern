import "./App.css";
import CreateProduct from "./components/CreateProduct";


function App() {
    return (
        <div className="App">
            {/* For now, we only have our single Create component.
                The "/" path is our root. When we run npm start, this will be what displays at localhost:3000 */}
            <CreateProduct path="/" />
        </div>
    );
}

export default App;