import React, { useState, useEffect } from "react";
import axios from "axios";
import{Link} from '@reach/router'

//list each individual project 
const DisplayAll = (props) => {
    
    const {productList,setProductList} = props;  ////deconstrucitng? how?
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err)=>console.log(err))
    },[])

    
    const deleteFilter = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProductList(productList.filter((product, index)=> product._id !== idFromBelow))
            })
            .catch((err)=>console.log(err))
    }


    return (// map like for loop.. going thru data// help woth link to product
        <div>
            {
            productList.map((product, index)=>(
                <div key={product._id}>           
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                    <Link to={`/product/edit/${product._id}`}>edit</Link>
                    <button onClick={()=>
                    deleteFilter(product._id)}>Delete</button>
                                          
                </div>
            ))
        }
        </div>
    );
};
 
export default DisplayAll;