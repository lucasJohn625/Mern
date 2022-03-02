import Display from "./components/Display"
import Name from './components/Name';
import Input from './components/Input';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [itemList, setItemList] = useState([]);
  const [newName, setNewName] = useState("");

  return (
  
    <div className="App">
      <h1>Your shopping list</h1>
      
      <Name />
      <Input itemList={itemList} setItemList={setItemList} />
      <Display itemList={itemList} setItemList={setItemList}/>
    </div>
  );
}

export default App;
