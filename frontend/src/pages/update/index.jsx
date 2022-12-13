import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { URL_PRODUCT } from "../../middleware/environment";

const Update = () => {
  const [product, setProduct] = useState({
    id: useParams().id,
    name: "",
    description: "",
    price: 0,
  });

  const onChangeName = (event) => {
    setProduct({
      ...product,
      name: event.target.value,
    });
  };
  const onChangeDescription = (event) => {
    setProduct({
      ...product,
      description: event.target.value,
    });
  };
  const onChangePrice = (event) => {
    setProduct({
      ...product,
      price: parseFloat.event.target.value,
    });
  };

  axios
    .put(`${URL}`, { name: text, description: description, price: price })
    .then((response) => {
      console.log("donnée mis à jour");
    })
    .catch((err) => {
      console.log(error);
    });

  const SubmitProduct = async () => {
    await axios
      .put(`${URL_PRODUCT}/${product.id}`, {
        name: product.name,
        description: product.description,
        price: product.price,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h1>Hello update</h1>

      <form>
        <label htmlFor="">Nom :</label>
        <input type="text" onChange={onChangeName} value={product.name} />
        <label htmlFor=""> description :</label>
        <input
          type="text"
          onChange={onChangeDescription}
          value={product.description}
        />
        <label htmlFor="">Prix :</label>
        <input type="text" onChange={onChangePrice} value={product.price} />
        <button type="button" onClick={() => SubmitProduct()}></button>
      </form>

      <button type="button" onClick={() => Update(product.id)}>
        Mise a jour
      </button>
    </>
  );
};

export default Update;
