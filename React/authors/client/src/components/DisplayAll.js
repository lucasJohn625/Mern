import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
const DisplayAll = () => {

  
  const [allAuthors, setAllAuthors] = useState([]);
  const [review, setReview] = useState("");

  useEffect(() => {

    


    axios
      .get("http://localhost:8000/api/author")
      .then((response) => {
        console.log(response.data);
        setAllAuthors(response.data);
        setReview(response.data);
        
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleDeleteAuthor = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/author/${idFromBelow}`)
      .then((response) => {
        console.log("success deleting author");
        console.log(response);
        const filteredAuthors = allAuthors.filter((author) => {
          return author._id !== idFromBelow;
        });
        setAllAuthors(filteredAuthors);
      })
      .catch((err) => {
        console.log("error deleting author", err.response);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Link to="/new">Add an author</Link>
          <p className="purple-text">We have quotes by:</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Author</th>
                <th scope="col">Actions Available</th>
              </tr>
            </thead>
            <tbody>
              {allAuthors.map((author, index) => {
                return (
                  <tr key={author._id}>
                    <td>{author.name}</td>
                    <td>
                      <Link to={`/edit/${author._id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>

                      <button
                        onClick={() => handleDeleteAuthor(author._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>

                      <Link to={`/review`}>
                        <button className="btn btn-primary">Review</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
        {/* <h1>Reviews</h1>
        {review.map((author, index) => {
                return(
                    <table>
                        <tr key={author._id}>
                            <td>
                                {author.review}
                            </td>
                        </tr>
                      

                    </table> */}

                {/* ) */}

            {/* })} */}

    </div>
  );
};

export default DisplayAll;