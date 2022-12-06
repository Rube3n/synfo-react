/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';

// start the Stimulus application
// import './bootstrap';

import React from "react";
import Home from "./src/pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Client from "./src/pages/client";
import Product from "./src/pages/product";
import Update from "./src/pages/update";
import View from "./src/pages/view";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/client",
    element: <Client />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/update",
    element: <Update />,
  },

  {
    path: "/view",
    element: <View />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
