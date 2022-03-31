import React from "react";
import PersonCard from "./components/PersonCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Tommy"}
        firstName={"David"}
        age={12}
        hair={"Blonde"}
      />
      <PersonCard
        lastName={"Gary"}
        firstName={"Level"}
        age={13}
        hair={"black"}
      />
      <PersonCard lastName={"Jacob"} 
        firstName={"Tee"} 
        age={31} 
        hair={"none"} />
      <PersonCard
        lastName={"Bobby"}
        firstName={"Clout"}
        age={81}
        hair={"red"}
      />
    </div>
  );
}

export default App;