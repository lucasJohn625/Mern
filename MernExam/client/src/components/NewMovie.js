import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const NewMovie =() =>{
  const [movieName, setMovieName] = useState("");
  let movieId;
  const [user,setUser] = useState("");
  const [movieRating,setMovieRating] = useState("")
  const [movieReview,setMovieReview] = useState("")

  // This is triggered when form is submitted
  const newSubmitHandler = (e) => {

    const body = {
      name : movieName,
      reviews : {
        movieTitle : movieName,
        userName : user,
        rating : movieRating,
        review : movieReview,
    }}

    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/movies`,body ).then((res) => {
        console.log(res.data);
        movieId = res.data.movie._id;
       
        window.location.href="/";
      })
      .catch((err) => {
        console.log(err);
        // setErrors(err.response.data.errors);
      })
      
  }


  return (
    <div  className="nmdiv">
     
        <header>
          <h1 className="header1" >Moldy Tomatoes</h1>
          <h2 className="header2" >New Movie and Reviews <Link to={"/"}>Home</Link></h2>
         
          
        </header>
        
      <form onSubmit={newSubmitHandler}>
       
        <input
          onChange={(e) => setMovieName(e.target.value)}
          name="movieName"
          value={movieName}
          required 
          minLength = "3"
          placeholder="Enter Movie Name"
        />
        <input
          onChange={(e) => setUser(e.target.value)}
          name="username"
          value={user}
          required 
          minLength = "3"
          placeholder="Enter User Name"
        />
        <input
        type="number"
          onChange={(e) => setMovieRating(e.target.value)}
          name="movieRating"
          value={movieRating}
          required 
          min = "0"
          max = "10"
          placeholder="Enter Rating"
        />
        <input
          onChange={(e) => setMovieReview(e.target.value)}
          name="movieReview"
          value={movieReview}
          required 
          minLength = "5"
          placeholder="Enter Review"
        />
       
        <button type="submit" >Submit</button>
        
     <Link to="/" >   <button >Cancel</button></Link>
      </form>
    </div>
  );
}

export default NewMovie