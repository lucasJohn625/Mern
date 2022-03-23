import React, { useState } from 'react'
import axios from 'axios';


const AddAuthor = (props) => {
    
    const [AuthorName, setAuthorName] = useState(""); 
    const {authorList, setAuthorList} = props;
    
    const onSubmitHandler = (e) => {
       
        e.preventDefault();
        //make a post request to create a new person
        axios
            .post('http://localhost:8000/api/author', {
                AuthorName,  
               
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    
    return(
        <div><h1>Add an author</h1>
        <form onSubmit={onSubmitHandler}>
             <p>
                 <label>First Name</label><br/>
                
                 <input  
                    onChange = {(e)=>setAuthorName(e.target.value)}
                    value={AuthorName}
                    name="AuthorName"
                    type="text" 
                    />
                    
            </p>
           
            <input type="submit"/> 
        </form> 
        </div>
    )
}
export default AddAuthor;