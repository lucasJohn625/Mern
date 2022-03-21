import React, {useState} from 'react';

const Profile = (props) => {
    
    
    const {name, setName} = props;
    // const [title, setTitle] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createName = (e) =>{
        e.preventDefault();
    
        setName([...name,{
           
        }])

        const newUser = { name };
        console.log("welcome", newUser);

        setName("");
    
        setHasBeenSubmitted( true );
        };

    


    return( 
        <div>
            <form onSubmit={ createName }>
    {
                hasBeenSubmitted ? 
                <h3>{name}</h3> :
                <div>
                    <h3>pleae add a name of the list</h3> 
                
                    <label>Name: </label> 
                    <input type="text" onChange={ (e) => setName(e.target.value) }
                    value={name}/>
                    <button>Submit</button>
        </div>

        
    }
    {/* Email and Password inputs removed for brevity */}
    
</form>
            
        </div>
    )

}
export default Profile;