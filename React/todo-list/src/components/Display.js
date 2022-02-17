import React, { useState } from "react";

const Display =(props)=>{

  //deconstruct props
  const {todoList, setTodoList} = props;

  //delete functionality

  //simple marked comp;ete

  //function to handle style when the checkboz is clicked
  const handleCompleted = (todo) =>{
    todo.markedDelete = !todo.markedDelete;
    let updateTodos = [...todoList];
    setTodoList(updateTodos);

  }
  const styled = (markedDelete) =>{
    if(markedDelete === true){
      return "completed"
    }
    else{
      return"notCompleted"
    }
  }
    //delete functionality
    const deleteButton = (idFromBelow) => {
      setTodoList(

        todoList.filter((todo, index)=>{
          return todo.id !== idFromBelow;

        })
      )
    }
  

  return(
    <div>
        {
          todoList.map((todo, index)=>(
            <div className={styled(todo.markedDelete)} key={index}>
              <p>{todo.content}</p>
              <input onChange={(e)=> handleCompleted(todo)} type = "checkbox"/>
              <button onClick={(e)=>deleteButton(todo.id)}> Delete</button>
            </div>
          ))
        }

    </div>
  
  )
  }
export default Display;