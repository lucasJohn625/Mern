import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link, useParams, useNavigate } from "react-router-dom";

const Review = () => {

    const [review, setReview] = useState("");
    const { id } = useParams();
   
    const [content, setContent] = useState("");
    const [rating, setRating] = useState("");
    const [yourName, setYourName] = useState("");
    const navigate = useNavigate();
    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .put(`http://localhost:8000/api/review/${id}`,{ review
                // content,
                // rating,
                // yourName,
                
            })
            .then((response)=>{
                console.log(response);
                console.log(response.data);
                setReview([...review, response.data]);
                // setContent("");
                // setRating("");
                // setYourName("");
                navigate("/");
            })
        
            .catch((err) => {
                console.log(err);
                
            });
    }
    return(

     
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Link to="/">Home</Link>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="content"> Content</label>
                            <input               
                            type="text"
                            className="form-control"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}                    
                            />
                            <label htmlFor="rating"> Rating </label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setRating(e.target.value)}
                                value={rating}
                            />
                            <label htmlFor="yourName"> Your Name </label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setYourName(e.target.value)}
                                value={yourName}
                            />

                            <button className="btn btn-primary" type="submit">
                            SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>

    );
};
export default Review;