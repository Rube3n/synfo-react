import axios from "axios";

const DeleteProduct = (id) => {
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

export default DeleteProduct;
