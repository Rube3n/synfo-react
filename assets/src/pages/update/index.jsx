import axios from "axios";
import React, { useEffect, useState } from "react";

const Update = () => {
  const getAllProduct = async () => {
    await axios
      .get("http://localhost:8000/api/products" + id)
      .then((response) => {
        getProduct(response.data["hydra:member"]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const [editText, setUpdateText] = useState("");
  const [editDescription, setUpdateDescription] = useState("");
  const [editPrice, setUpdatePrice] = useState("");

  const handleChangeEditDescription = (event) => {
    setUpdateDescription(event.target.value);
    console.log(event.target.value);
  };
  const handleChangeEditText = (event) => {
    setUpdateText(event.target.value);
    console.log(event.target.value);
  };
  const handleChangeEditPrice = (event) => {
    setUpdatePrice(parseFloat(event.target.value));
    console.log(event.target.value);
  };

  const submitForm = () => {
    axios
      .put(`${URL}`, {
        name: editText,
        description: editDescription,
        price: editPrice,
      })
      .then((response) => {
        console.log("Données Update");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h1>Hello update</h1>

      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <label htmlFor="text">Nom du produit :</label>
        <input
          type="text"
          id="text"
          name="text"
          value={editText}
          onChange={handleChangeEditText}
        />
        <label htmlFor="description">Description :</label>
        <textarea
          id="description"
          name="description"
          value={editDescription}
          onChange={handleChangeEditDescription}
        />
        <label htmlFor="price">Prix :</label>
        <input
          type="number"
          id="price"
          name="price"
          value={editPrice}
          onChange={handleChangeEditPrice}
        />
        <button type="button" onClick={() => submitForm()}>
          Envoyer
        </button>
      </form>
    </>
  );
};

export default Update;
