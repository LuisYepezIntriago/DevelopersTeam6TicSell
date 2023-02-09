import React, { useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import LogoLetter from "../../assets/logoletter.png";
import Logo from "../../assets/logoTicSell.png";
import Navbar from "../Navbar";
import "../../styles.css";
import modifiedBill from "./viewBills";
import bill from "./viewBills";
import BillList from "./viewBills";
import validationModified from "./viewBills";
import activateModified from "./viewBills";

function BillUpdate(props) {
  const [customer, setCustomer] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [items, setItems] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [subtotal, setSubtotal] = React.useState("");
  const [iva, setIva] = React.useState("");
  const [total, setTotal] = React.useState("");
  const [idModified, setIdModified] = React.useState(0);

  return (
    <Box>
      <div className="logo">
        <img src={Logo} alt="TicSell icon" />
      </div>
      <Navbar />
      <form className="Formulario">
        <h1 className="Titulo">Actualizar Factura</h1>
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
          type="email"
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
        <div>
          {validationModified
            ? () => (
                <button
                  className="Button"
                  type="submit"
                  onClick={() => modifiedBill(bill._id)}
                >
                  Actualizar
                </button>
              )
            : <button
            className="Button"
            type="submit"
          >
            Agregar
          </button>}
        </div>
      </form>
      <div className="endPage">
        <img src={LogoLetter} alt="TicSell icon" />
      </div>
    </Box>
  );
}

export default BillUpdate;
