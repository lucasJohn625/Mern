import React, {useState} from "react";
import Form from "../components/Form";
import DisplayAll from "../components/DisplayAll"

const Home = (props)=> {
    const[countryList, setCountryList] = useState([]);  //pasing in a list array


    return(
        <div>
            <Form countryList = {countryList} setCountryList={setCountryList} />
            <DisplayAll countryList = {countryList} setCountryList={setCountryList}/>

        </div>
    )
}

export default Home;