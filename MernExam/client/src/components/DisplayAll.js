import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css"


const DisplayAll = () => {

    const [movieList, setMovieList] = useState([]);

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/movies')
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setMovieList(res.data.movies);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    



    return (
        <div>
            <header>
                <h1 className="header1">Moldy Tomatoes</h1>
                <h2 className="header2">All movies
               
                <Link to={"/addmovie"}>Add a movie</Link></h2>
            </header>
            <table style={{ margin: "auto", border: "1px solid black" }}>
                <thead style={{ backgroundColor: "lightgray", color: "white" }}>
                    
                    <tr>
                        <th>Movies</th>
                        <th>Action Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movieList ?
                            
                            movieList.map((movie, index) => (
                                <tr key={index}>
                                    
                                    <td>{movie.name}</td>
                                   
                                    <td>
                                       
                                       <Link to={`/${movie._id}/reviews`} > <button className='edit-button-style' >Read Reviews</button></Link>
                                       <Link to={`/${movie._id}/addreview`} > <button className='edit-button-style' >Add Reviews</button></Link>
                                        
                                    </td>
                                </tr>
                            ))
                            : null
                    }
                </tbody>
            </table>
        </div>
    )
}


export default DisplayAll;