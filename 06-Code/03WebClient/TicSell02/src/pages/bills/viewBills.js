import { Button } from "@mui/material";
import React,{ useEffect } from 'react';
import axios from "axios";
import "../../styles.css";

const BillList = ({ bills }) => {
  const [customer, setCustomer] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [item, setItems] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [subtotal, setSubtotal] = React.useState("");
  const [iva, setIva] = React.useState("");
  const [total, setTotal] = React.useState("");
  const [validationModified, setValidationModified] = React.useState(false);
  const [idModified, setIdModified] = React.useState(0);

  useEffect(() => {
  }, []
  )

  const deleteBill = async (_id) => {
    await axios.delete(`http://ec2-52-23-176-81.compute-1.amazonaws.com:3006/api/bills/${_id}`);
  };


  const activateModified = async (_id) => {
    setValidationModified(true);
    setIdModified(_id);
  };

  const modifiedBill = async (idModified) => {
    await axios.put(`http://localhost:3006/api/bills/${idModified}`, {
      customer,
      name,
      lastname,
      address,
      phone,
      email,
      item,
      quantity,
      price
    })
  }

  return (
    <div>
      <table className="table">
        <caption className="titulo-tabla">Lista de Facturas</caption>
        <thead>
          <tr>
            <th scope="col">Cédula</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Correo</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Subtotal</th>
            <th scope="col">IVA</th>
            <th scope="col">Total</th>
            <th scope="col">Acción</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr>
              <td scope="col">{bill.customer}</td>
              <td scope="col">{bill.name}</td>
              <td scope="col">{bill.lastname}</td>
              <td scope="col">{bill.address}</td>
              <td scope="col">{bill.phone}</td>
              <td scope="col">{bill.email}</td>
              <td scope="col">{bill.item}</td>
              <td scope="col">{bill.quantity}</td>
              <td scope="col">{bill.price}</td>
              <td scope="col">{bill.subtotal}</td>
              <td scope="col">{bill.iva}</td>
              <td scope="col">{bill.total}</td>
              <td scope="col">
                <Button
                  className="BotonUpdateItem"
                  color="primary"
                  onClick={() => activateModified(bill._id)}
                >
                  Actualizar
                </Button>
              </td>
              <td scope="col">
                <Button
                  className="BotonDeleteItem"
                  color="primary"
                  onClick={() => deleteBill(bill._id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {validationModified ? (
        <form className="Formulario">
          <h1 className="Titulo">Registro de Facturas</h1>
          <label className="Label">Cédula</label>
          <input
            className="Input"
            onChange={(e) => setCustomer(e.target.value)}
            type="number"
            name="id"
            placeholder="Cédula"
          />
          <label className="Label">Nombre</label>
          <input
            className="Input"
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Nombre"
          />
          <label className="Label">Apellido</label>
          <input
            className="Input"
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            name="lastname"
            placeholder="Apellido"
          />
          <label className="Label">Dirección</label>
          <input
            className="Input"
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            name="address"
            placeholder="Dirección"
          />
          <label className="Label">Teléfono</label>
          <input
            className="Input"
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            name="phone"
            placeholder="Teléfono"
          />
          <label className="Label">Correo</label>
          <input
            className="Input"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Correo"
          />
          <label className="Label">Artículo</label>
          <input
            className="Input"
            onChange={(e) => setItems(e.target.value)}
            type="text"
            name="items"
            placeholder="Artículo"
          />
          <label className="Label">Cantidad</label>
          <input
            className="Input"
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            name="quantity"
            placeholder="Cantidad"
          />
          <label className="Label">Precio</label>
          <input
            className="Input"
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            name="price"
            placeholder="Precio"
          />
          <br />
          <div>
            <button
              className="Button"
              type="submit"
              onClick={() => modifiedBill()}
            >
              Actualizar
            </button>
          </div>
        </form>
      ) : (
        console.log("Hi")
      )}
      <Button className="BotonPostBill" color="primary" href="/billRegister">
        Crear Factura
      </Button>
    </div>
  );
};

export default BillList;
