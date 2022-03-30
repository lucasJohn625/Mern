import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css"


const DisplayAll = () => {

    const [movieList, setMovieList] = useState([]);

    // This useEffect will run ONLY on component INITIAL render, and never afterwards.
    // THis is so because of the empty [] given as second argument
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
                {/* Add UI link to author form page */}
                <Link to={"/addmovie"}>Add a movie</Link></h2>
            </header>
            <table style={{ margin: "auto", border: "1px solid black" }}>
                <thead style={{ backgroundColor: "lightgray", color: "white" }}>
                    {/* Inside thead we define the column names in the "table header" */}
                    <tr>
                        <th>Movies</th>
                        <th>Action Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movieList ?
                            // iterate through authorList and render list of elements to dom
                            movieList.map((movie, index) => (
                                <tr key={index}>
                                    {/* Pack in movie name to td. a "td" is a table cell */}
                                    <td>{movie.name}</td>
                                    {/* put buttons inside td. Each of */}
                                    <td>
                                        {/* when edit button is clicked, navigate to /edit/:id in UI url */}
                                       <Link to={`/${movie._id}/reviews`} > <button className='edit-button-style' >Read Reviews</button></Link>
                                       <Link to={`/${movie._id}/addreview`} > <button className='edit-button-style' >Add Reviews</button></Link>
                                        {/* when delete button is clicked, trigger deleteHandler(id), the id as argument being the current movie being iterated on in the .map() function */}
                                        {/* <button className='delete-button-style' onClick={(e)=>deleteHandler(movie._id)}>Delete</button> */}
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