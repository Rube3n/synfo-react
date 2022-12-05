import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:8000/api/clients";

const Client = () => {
  const [Clients, getClients] = useState([]);

  const getAllClient = async () => {
    await axios
      .get(`${URL}`)
      .then((response) => {
        getClients(response.data["hydra:member"]);
      })
      .catch((error) => console.error(erorr));
  };
  useEffect(() => {
    getAllClient();
  }, []);

  return (
    <>
      <h1>Hello Client !</h1>
      {Clients.map((client) => {
        return (
          <div key={client.id}>
            <ul>
              <li>{client.fullName}</li>
              <li>{client.email}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Client;
