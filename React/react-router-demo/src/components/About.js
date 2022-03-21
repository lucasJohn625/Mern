import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";

const About = (props) => {

    const navigate = useNavigate();
        
    const {big} = useParams();

    const goHome = () => {
        navigate("/");
        console.log("works")
    }


return(
    <div>
        

    {
        big?
        <h1 style={{ color: "blue", fontSize: big + "px"}}>
            About Component
        </h1>

        :
        <h1 style= {{color: "blue"}}>
            About Component
        </h1>
    }
      
        <button onClick={goHome}>Home</button>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>

    </div>
)



}

export default About;