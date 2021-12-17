import React, {useState} from "react";



const Child = (props) =>{
    const { firstName, lastName, Age, hairColor} = props;

    const [stateAge, setStateAge] = useState(Age);
    

        return(
            <div>
                <h2>
                    {lastName}, {firstName}
                </h2>
                
                <p>Age: {stateAge}</p>
                <p>Hair Color: {hairColor}</p>
            
                <button onClick={() => setStateAge(stateAge + 1)}>
                    Birthday Button for {firstName} {lastName}
                </button>
             </div>
        );
}


export default Child;