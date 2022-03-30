import "./App.css";
// This is the component we will use to define our UI routes
import { Routes,BrowserRouter,Route } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import ReadReviews from "./components/ReadReviews";
import NewMovie from "./components/NewMovie";
import NewReview from "./components/NewReview";

function App() {
  return (
    <div className="App">
      {/* Inside of <Router> we put UI routes */}
      <BrowserRouter>
        <Routes>
          <Route element={<DisplayAll/>} path="/" index />
          <Route element={<ReadReviews/>} path="/:id/reviews"  />
          <Route element={<NewMovie/>} path="/addmovie"  />
          <Route element={<NewReview/>} path="/:id/addreview"  />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;