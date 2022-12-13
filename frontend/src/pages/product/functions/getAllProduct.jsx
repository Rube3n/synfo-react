import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteProduct from "./deleteProduct";
import SubmitForm from "./createProduct";
import Update from "../../update";
import { Link } from "react-router-dom";

const URL = "http://localhost:8000/api/products";

const Product = () => {
  const [products, getProduct] = useState([]);

  const GetAllProduct = async () => {
    await axios
      .get(`${URL}`)
      .then((response) => {
        getProduct(response.data["hydra:member"]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    GetAllProduct();
  }, []);

  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
    console.log(event.target.value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(parseFloat(event.target.value));
    console.log(event.target.value);
  };

  return (
    <>
    <nav>
      <ul>
        <li>
            <Link to={'/logout'}>deconection</Link>
        </li>
      </ul>
    </nav>
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
          value={text}
          onChange={handleChangeText}
        />
        <label htmlFor="description">Description :</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChangeDescription}
          value={description}
        />
        <label htmlFor="price">Prix :</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={handleChangePrice}
        />
        <button type="button" onClick={() => SubmitForm()}>
          Envoyer
        </button>
      </form>
      <hr style={{ marginBottom: "5rem" }} />
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ul>
              <li>votre produit est: {product.name}</li>
              <li>Description du produit : {product.description}</li>
              <li>Le prix est : {product.price} €</li>
              <button type="button" onClick={() => showProduct(product.id)}>
                Afficher
              </button>
              <button type="button" onClick={() => DeleteProduct(product.id)}>
                Supprimer un produit
              </button>
              
                <Link to={"/update"}>Mise a jour</Link>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Product;
