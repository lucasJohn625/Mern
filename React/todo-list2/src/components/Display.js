import React, { useState } from 'react';

 

const Display = (props) => {
    const {todoList, setTodoList} = props;

    const {name, setName}=props;
    
    const deleteButton = (idFromBelow) => {
        setTodoList(todoList.filter((todo, index)=> todo.id !== idFromBelow));      
        //.filter(current valie in array, index)
    }
    const handleCompleted = (todo)=>{

        todo.markedDelete = !todo.markedDelete;
        setTodoList([...todoList])
        ///look for bonus to complete

    }
    const styled=(markedDelete)=>{
        if(markedDelete === true){
            return "completed"
        }
        else{
            return "notCompleted"
        }
    }


    return (
        <div> 
            
            {
                todoList.map((todo, index)=>(
                    <div key={index}>
                       
                        <p className={styled(todo.markedDelete)}>{todo.todoText}</p>
                        <input onClick={()=> handleCompleted(todo)}type="checkbox" />
                        <button onClick={()=> deleteButton(todo.id)}>Delete</button>
                    </div>
                ))
            }

        </div>
    )

}
export default Display;