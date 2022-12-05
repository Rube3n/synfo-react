//Add New Product
import React, { useState } from "react";
import axios from "axios";


const [Products, getProduct] = useState([]);
const [text, setText] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");

let set = {
  text: text,
  description: description,
  price: price,
};

const handleChangeDescription = (event) => {
  this.setDescription({ value: event.target.value });
};
const handleChangeText = (event) => {
  this.setText({ value: event.target.value });
};
const handleChangePrice = (event) => {
  this.setPrice({ value: event.target.value });
};

const submiteForm = async () => {
  await axios
    .post(`${URL}`, {
    })
    .then((response) => {
      getProduct(response.data["hydra:member"]);
    })

    .catch((err) => {
      console.error(err);
    });
};