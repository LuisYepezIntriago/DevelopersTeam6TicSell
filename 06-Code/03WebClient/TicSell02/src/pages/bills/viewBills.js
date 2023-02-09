import { Button } from "@mui/material";
import React from "react";
import axios from "axios";
import "../../styles.css"

const BillList = ({ bills }) => {

  const [validationModified, setValidationModified] = React.useState(false)

  const deleteBill = async (_id) => {
    await axios.delete(`http://localhost:3006/api/bills/${_id}`)  
  }

  const activateModified = async () => {
    validationModified(true) 
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
              <td scope="col"><Button className="BotonUpdateItem" color="primary" href="/updateBill" onClick={() => activateModified (bill._id)} >Actualizar</Button></td>
              <td scope="col"><Button className="BotonDeleteItem" color="primary" onClick={() => deleteBill(bill._id)}>Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="BotonPostBill" color="primary" href="/billRegister">Crear Factura</Button>
      </div>
    );
  };
  
  export default BillList;

  