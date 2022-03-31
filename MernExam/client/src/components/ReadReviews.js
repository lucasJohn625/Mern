import axios from 'axios';
import React,{useState,useEffect} from 'react';
import{useParams,Link} from 'react-router-dom';
import "../App.css";

function ReadReviews() {
    const [movieids,setMovieIds] = useState([]);
    const [reviews,setReviews] = useState([]);
    const [movieName,setMovieName] = useState("")
    let {id} = useParams();


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${id}`).then((results)=>{
            setReviews(results.data.movie.reviews);
            console.log(results.data.movie.reviews)
        }).catch(err=>console.error(err))
    },[]); 

  

    console.log(reviews[0])

    const deleteHandler = ()=>{
  
        axios.delete(`http://localhost:8000/api/movies/${id}`)
            
            .then((res)=>{
                console.log(res.data);
                
                window.location.href="/"
            })
            .catch((err)=>{
                console.log(err);
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
        <div>
            <h1 className="header1">Moldy Tomatoes</h1>
            <h2 className="header2">New Review for {movieName}</h2>
           <table style={{ margin: "auto", border: "1px solid black" }}>
                <thead style={{ backgroundColor: "lightgray", color: "white" }}>
                    
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews ?
                          
                            reviews.map((reviews, index) => (
                                <tr key={index}>
                                    
                                    <td>{reviews.userName}</td>
                                    <td>{reviews.rating}</td>
                                   
                                    <td>{reviews.review}</td>
                                       
                                       
                                        
                                </tr>
                            ))
                            : null
                    }
                </tbody>
            </table>
            <button onClick={()=>deleteHandler()} className="delete" >Delete Movie</button>
            <Link to="/" ><button>Home</button></Link>
        </div>
    )
}

export default ReadReviews
