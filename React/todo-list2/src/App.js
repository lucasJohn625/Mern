import Form from "./components/Form";
import Display from "./components/Display";
import React, {useState} from 'react';
import './App.css';
import Profile from "./components/Profile";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [name, setName] = useState([]);

  return (
    <div className="App">
      <Profile name={name} setName={setName}/>
      <Form todoList={todoList} setTodoList={setTodoList} name={name} setName={setName}/>
      <Display todoList={todoList} setTodoList={setTodoList} name={name} setName={setName}/>
    </div>
  );
}

export default App;
