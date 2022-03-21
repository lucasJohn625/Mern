import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {
    const { productList, setProductList } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios
            .post("http://localhost:8000/api/products", {
                title, //shorthand for title:title
                price, //NOTE: this only works if the getter name (price) EXACTLY matches the field in your schema
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                //We set state to an array consisting of everything CURRENTLY in state via the spread operator on our getter PLUS whatever our response from our API is
                //Look back to our controller create logic to see where we defined that response (also check console logs)
                setProductList([...productList, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
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

export default CreateProduct;