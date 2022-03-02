
import React, { useState } from 'react';

const Input = (props) => {
    const {itemList, setItemList} = props;
    
    const [newItem, setNewItem]= useState("");

    const submitHandler =(e) =>{
        e.preventDefault();

        const myNewItem={
            itemName: newItem,
            
        
        }

        setItemList([newItem, ...itemList]);
        setNewItem("");
    }
    return  (
        <div>
            <h3>Hey! Lets make a shopping list</h3>
            <form onSubmit = {(e) => submitHandler(e)}>
                <p>
                <label>What would you like to get?</label>
                <input
                    type="text"
                    name= "newItem"
                    value= { newItem }
                    onChange={ (e) => setNewItem(e.target.value)}
                />
                    <button type="submit">Add Skill</button>
                </p>
            </form>
        </div>
   )


}
export default Input;