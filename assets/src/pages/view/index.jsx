import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../product";

const View = () => {
  const [prdoduct, setProduct] = useState({
    id:"",
    name: "",
    description: "",
    price: "",
  });

const {id}=useParams();

const loadProduct = async ()=>{
    const result=await axios.get(`http//localhost:8000/view/${id}`)
}

  return (
    <div>
      <h1>hellow user</h1>

      <div>
        <ul>
        <li>
                <p>id :</p>
                {Product.id}
            </li>
            <li>
                <p>name:</p>
                {Product.name}

            </li>
            <li>
                <p>desc:</p>
                {Product.description}

            </li>
            <li>
                <p>price:</p>
                {Product.price}

            </li>
        </ul>
        
      </div>
      <Link to={"/"}>Back To Home</Link>
    </div>
  );
};

export default View;
