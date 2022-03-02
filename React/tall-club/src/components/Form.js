import React, { useState } from "react";

const Form = (props) =>{

    const {studentList, setStudentList}= props;
    
    const [name, setName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();


        setStudentList([ ...studentList,{
            name: name,
            
            
        }
    ]);
        setName("");
        setFavStack("");
        
    }
    return(
        <div>
            <form onSubmit={(e)=> submitHandler(e)}>
                <div>
                    <label>Name: </label>
                    <input 
                    onChange={(e)=>{
                        console.log(e);
                        console.log(e.target);
                        console.log(e.target.value);
                        setName(e.target.value);
                    }}
                    value={name}
                    type="text" />
                    
                </div>



            </form>
        
        
        
        </div>



    )


}

export default Form;