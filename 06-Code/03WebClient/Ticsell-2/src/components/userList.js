import React from "react";
import "../styles/HomePage.css";
import { DataGrid } from "@mui/x-data-grid";
import { Button, sliderClasses } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const UserList = ({ users }) => {
  return (
    <table className="table">
        <caption className="titulo-tabla">Lista de Clientes</caption>
      <thead>
        <tr>
          <th scope="col">Cédula</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Fecha de Nacimiento</th>
          <th scope="col">Dirección</th>
          <th scope="col">Ciudad</th>
          <th scope="col">Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td scope="col">{user.customer}</td>
            <td scope="col">{user.name}</td>
            <td scope="col">{user.lastname}</td>
            <td scope="col">{user.birthday}</td>
            <td scope="col">{user.address}</td>
            <td scope="col">{user.city}</td>
            <td scope="col">{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
