import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const About = (props) => {

    const navigate = useNavigate();
        
    
    const goHome = () => {
        navigate("/");
    }


return(
    <div>
        
        <h1>About</h1>
        <button onclick={goHome}>Home</button>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>

    </div>
)



}

export default About;