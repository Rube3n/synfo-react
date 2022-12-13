import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL_PRODUCT } from "../../../middleware/environment";
import {Link, useParams } from "react-router-dom";

const ShowProduct = () => {
  //   const [id, getId] = useParams().id;
  const [product, getProduct] = useState({
    id: useParams().id,
    name: "",
    description: "",
    price: "0",
  });

  useEffect(() => {
    axios
      .get(`${URL_PRODUCT}/${product.id}`)
      .then((response) => {
        getProduct(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <>
      <div>
        <ul>
          Name of product:
          {product.name}
        </ul>
        <ul>
          Description of product:
          {product.description}
        </ul>
        <ul>
          Price of product:
          {product.price}
        </ul>
      </div>
      <Link to={"/"}>Back To Home</Link>

    </>
  );
};
export default ShowProduct;
