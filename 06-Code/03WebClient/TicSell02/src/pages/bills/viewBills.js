import { Button } from "@mui/material";
import "../../styles.css"

const BillList = ({ bills }) => {
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
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td scope="col">{bill.customer}</td>
              <td scope="col">{bill.name}</td>
              <td scope="col">{bill.lastname}</td>
              <td scope="col">{bill.address}</td>
              <td scope="col">{bill.phone}</td>
              <td scope="col">{bill.email}</td>
              <td scope="col">{bill.item}</td>
              <td scope="col">{bill.quantity}</td>
              <td scope="col">{bill.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="BotonPostBill" color="primary" href="/billRegister">Crear Factura</Button>
      <Button className="BotonUpdateBill" color="primary" href="/updateBill">Actualizar Factura</Button>
      <Button className="BotonDeleteBill" color="primary" href="/deleteBill">Eliminar Factura</Button>
      </div>
    );
  };
  
  export default BillList;

  