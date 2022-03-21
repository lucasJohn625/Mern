import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const UpdatedProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {id} = props;


    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/products/${id}`)
                
  
            .then((res)=>{
                console.log(res.data)
                console.log(res)
                console.log(res.data.title)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
               

            })
            .catch((err) => {
                console.log(err);
            });

    },[])





    const submitHandler = (e) => {
        e.preventDefault();
        
        axios
            .put(`http://localhost:8000/api/products/${id}`, {
                title, 
                price, 
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
               
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div>
            <header>Product Manager</header>

            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        //We set our value to title here mainly to help us clear out the inputs on submission
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                <br />
                {/* Could also be a button element. Try it! */}
                <input class="submit-input" type="submit" value="Create" />
            </form>
        </div>
    );
};

export default UpdatedProduct;