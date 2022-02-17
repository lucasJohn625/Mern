import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
//APP IS PARENT
//done first  
function App() {

  const [todoList, setTodoList] = useState([]);
//pass getter and setter into form and display
//send info down through props.

  return(
    <div className = "App">
      <Form todoList={todoList} setTodoList={setTodoList} />  
      <Display todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}

export default App;
