import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../App.css"

const NewReview =() =>{
  
  const {id} = useParams(); // getting the id parameter from the page url
  const [user,setUser] = useState("");
  const [movieRating,setMovieRating] = useState("")
  const [moviewReview,setMovieReview] = useState("")
  const [movieName,setMovieName] = useState("")
  // This is triggered when form is submitted
  const newSubmitHandler = (e) => {
    e.preventDefault();
    const reviewBody = { // the body conatining the values needed to create a review ( the namings are dependent on the schema and its case-sensitive )
        movieId : id,
        review : {
          userName : user,
          rating : movieRating,
          review : moviewReview
        }
      }
      axios.post(`http://localhost:8000/api/review`,reviewBody).then(()=>{ // creating a post request to the review api
        alert("You're movie and review has been uploaded created ")
        window.location.href="/"
      }).catch(err=>{
        console.error(err)
      })
      
  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/movies/${id}`).then((e)=>{
        setMovieName(e.data.movie.name)
        console.log(e.data)
    }).catch(err=>{
        console.error(err)
    })
  },[])

  
 

  return (
    
      <div className="nrDiv" >
    
       
          <h1 className="header1">Moldy Tomatoes</h1>
          <h2 className="header2">New Review for {movieName} <Link to={"/"}>Home</Link></h2>
         
         
       
      
        
      <form onSubmit={newSubmitHandler}>
       
       
        <input
          onChange={(e) => setUser(e.target.value)}
          name="username"
          placeholder="Enter your name"
          value={user}
          required
          minLength = "3"
        />
        <input
        type="number"
          onChange={(e) => setMovieRating(e.target.value)}
          name="movieRating"
          placeholder="Enter Movie Rating"
          value={movieRating}
          required
        />
        <input
          onChange={(e) => setMovieReview(e.target.value)}
          name="movieReview"
          placeholder="Enter your review"
          value={moviewReview}
          required
          minLength = "5"
        />
        
        <button type="submit" >Submit</button>
        
     <Link to="/" >   <button >Cancel</button></Link>
      </form>
    </div>
  );
};

export default NewReview