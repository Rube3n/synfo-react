import React from "react";
// Le provider est le fournisseur de route du côté front-end
import { createBrowserRouter } from "react-router-dom";

// PAGES COMPONENTS
import Home from "../../pages/home/index";
import Client from "../../pages/client/index";
import Products from "../../pages/product/index";

// CRUD OPERATIONS PRODUCTS
import CreateProduct from "../../pages/product/functions/createProduct";
import Update from "../../pages/update";
import { element } from "prop-types";

export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/clients",
    element: <Client />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/create",
    element: <CreateProduct />,
  },
  {
    path: "products/update/:id",
    element: <Update />,
  },

  {
    path:"/show/products/:id",
    element:<ShowPorduct/>,
  },
]);
