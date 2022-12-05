import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { update } from "../update";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:8000/api/products";

const Product = (props) => {
  // Fuction get All Product
  const [products, getProduct] = useState([]);

  const getAllProduct = async () => {
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
    getAllProduct();
  }, []);

  //Add New Product

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

  const submitForm = () => {
    axios
      .post(`${URL}`, { name: text, description: description, price: price })
      .then((response) => {
        console.log("Données envoyées");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Show product

  const showProduct = (id) => {
    console.log(id);
    Link(`http://localhost:8000/view/${id}`)
    axios
    .get(`http://localhost:8000/api/products/${id}`)
  };

  // Supr Product

  const { id } = useParams();

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)

      .then((response) => {
        console.log("données supprimer");
        getAllProduct();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Update Product

  let navigate = useNavigate();
  const [editText, setUpdateText] = useState("");
  const [editDescription, setUpdateDescription] = useState("");
  const [editPrice, setUpdatePrice] = useState("");

  const updateProduct = (id) => {
    console.log(id);
    props.history.push("/update/" + id);
  };

  // VUE

  return (
    <>
      <h1>Hello product</h1>
      <hr style={{ marginTop: "5rem" }} />
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
        <button type="button" onClick={() => submitForm()}>
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
              <button type="button" onClick={() => deleteProduct(product.id)}>
                Supprimer un produit
              </button>
              <button type="button" onClick={() => updateProduct(product.id)}>
                Mise a jour
              </button>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Product;
