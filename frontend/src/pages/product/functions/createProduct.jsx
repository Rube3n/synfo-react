import { useState } from "react";
import axios from "axios";

const URL = "http://localhost:8000/api/products";


const CreateProduct = () => {
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
  axios
    .post(`${URL}`, { name: text, description: description, price: price })
    .then((response) => {
      console.log("Données envoyées");
    })
    .catch((err) => {
      console.error(err);
    });
};

export default CreateProduct;
