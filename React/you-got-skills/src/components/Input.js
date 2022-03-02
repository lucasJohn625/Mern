import React, { useState } from 'react';
 

const Input = (props) =>{
    const{ skillList, setSkillList} = props; //destructure from props at app.js

    const [skillLevel, setSkillLevel] = useState(5);

    const [ superSkilled, setSuperSkilled] = useState(false);
    const [newSkill, setNewSkill] = useState("")  ; // what type of data will be held, in this case a "string"
    // const [skillList, setSkillList] = useState([]); //an [array] of info ,list

    const submitHandler = (e) => {
        //never let the broweser refresh page on submit, will erase all things in state
        e.preventDefault();
    

        console.log("adding new skill" + newSkill);

    


        const myNewSkill = {
            skillName: newSkill,
            superSkilled: superSkilled
        }




        //setter methodss, adding skill it array of skills
        setSkillList([myNewSkill, ...skillList ]);
        setNewSkill("");
        setSuperSkilled(false);
        console.log("just reset new skill: " + newSkill);
    }
    return (
        <div>
            <h4>Skills Form for {props.name}</h4>
            <form onSubmit= { (e)=> submitHandler(e) }>
                
                {
                    newSkill.length >0 && newSkill.length < 3?
                        <span>Your skill needs to be 3 characters</span>
                        : null
                        /* conditional rendering */
                }
                <p>
                <label>Type your skill</label>
                <input
                    type="text"
                    name="newSkill"
                    value= { newSkill }
                    onChange={ (e) => setNewSkill(e.target.value)}
                    />
                    <button type="submit">Add Skill</button>
                </p>
                <p>
                    <input
                        type="checkbox"
                        name="superSkilled"
                        checked={ superSkilled }
                        onChange = { (e) => setSuperSkilled(e.target.checked)}
                        />
                        Are you Super Skilled at this
                </p>
                    
            </form>
            

        </div>
    )



}

export default Input;