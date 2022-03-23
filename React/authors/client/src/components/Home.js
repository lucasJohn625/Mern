import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const Home= (props) => {


    const [ authorList, setAuthorList] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then((res) => {
                console.log(res.data);
                setAuthorList(res.data);
                
        })
            .catch((err)=> 
                console.log(err));
    }, []);


    return (
        <div>
            <header>All Authors:
                
                 <Link to={`/author/${author}`}>
                            {author.authorName}
                        </Link>
            </header>
            {
            authorList.map((author, index) => (
                    <div key={index}>
                    {/* link to one author */}
                        <Link to={`/author/${author._id}`}>
                            {author.AuthorName}
                        
                        </Link>
                    {/* link to create author */}
                        {/* <Link to={`/author/${author}`}>
                            {author.authorName}Hello
                        </Link> */}
                    </div>
            
                ))}
      </div>
            
    );
  };
  export default Home;