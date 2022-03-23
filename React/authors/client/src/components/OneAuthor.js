import React, { useState } from 'react'
import axios from 'axios';


const OneAuthor = (props) => {
    
    // const [authorName, setAuthorName] = useState(""); 
    
    // const onSubmitHandler = (e) => {
       
    //     e.preventDefault();
    //     //make a post request to create a new person
    //     axios
    //         .post('http://localhost:8000/api/author', {
    //             authorName,  
               
    //     })
    //         .then(res=>{
    //             console.log(res); 
    //             console.log(res.data);
    //         })
    //         .catch(err=>console.log(err))
    // }
    
    return(
        <div><h1>One author</h1></div>
        // <form onSubmit={onSubmitHandler}>
            // <p>
            //     <label>First Name</label><br/>
                
                /* <input  
                    onChange = {(e)=>setAuthorName(e.target.value)}
                    value={authorName}
                    name="authorName"
                    type="text" */
                    
                    /* />
                    <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
           
            <input type="submit"/> */
        /* </form> */
    )
}
export default OneAuthor;