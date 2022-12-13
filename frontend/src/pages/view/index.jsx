import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const View = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "0",
  });

const {id}=useParams();


  return (
    <div>
      <h1>hellow user</h1>

      <div>
        <ul>
        <li>
                <p>id :</p>
                {product.id}
            </li>
            <li>
                <p>name:</p>
                {product.name}

            </li>
            <li>
                <p>desc:</p>
                {product.description}

            </li>
            <li>
                <p>price:</p>
                {product.price}

            </li>
        </ul>
        
      </div>
      <Link to={"/"}>Back To Home</Link>
    </div>
  );
};

export default View;
