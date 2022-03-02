import React, { useState } from 'react';

const Name = (props) => {

    const [newName, setNewName] = useState("");

    const submitHandler= (e) =>{
        e.preventDefault();
    }

    return(
        <div>
            <h3>What is your name?</h3>
            <form onSubmit = {(e) => submitHandler(e)}>
                <p>
                <label>Type in name</label>
                <input
                    type="text"
                    name= "newName"
                    value= { newName }
                    onChange={ (e) => setNewName(e.target.value)}
                />
                    <button type="submit">Add name</button>
                </p>
            </form>
        </div>


    )

}

export default Name;