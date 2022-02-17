import React, { useState } from "react";
//adding different todos
const Form =(props)=>{

  //state for todo text
    const[todoText, setTodoText] = useState("");

  //destruct props object
//1
    const {todoList, setTodoList} = props;


//(...) give you everything in array
const submitHandler = (e) =>{
    e.preventDefault();

    setTodoList([...todoList, {
      content: todoText,
      markedDelete: false,
      id: Math.floor(Math.random() * 100000000)
    }])

    setTodoText("")
  } 

//set 
    return(
      <div>
        <form onSubmit={submitHandler}>
          <input value={todoText} onChange={(e)=>setTodoText(e.target.value)} type="text"/>
          <button>Add</button>
        </form>
      </div>
    ) 
}
export default  Form;