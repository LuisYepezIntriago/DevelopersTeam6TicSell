import { Button } from "@mui/material";
import "../../styles.css"

const ProviderList = ({ bills }) => {
    return (
      <div>
      <table className="table">
          <caption className="titulo-tabla">Lista de Proveedores</caption>
        <thead>
          <tr>
            <th scope="col">RUC</th>
            <th scope="col">Nombre del Proveedor</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Nombre del Vendedor</th>
            <th scope="col">Acción</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td scope="col">{bill.RUC}</td>
                <td scope="col">{bill.ProviderName}</td>
                <td scope="col">{bill.Addres}</td>
                <td scope="col">{bill.Phone}</td>
                <td scope="col">{bill.SellerName}</td>
                <td scope="col"><Button className="BotonUpdateItem" color="primary" href="/updateItem">Actualizar</Button></td>
                <td scope="col"><Button className="BotonDeleteItem" color="primary" href="/deleteItem">Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="BotonPostProvider" color="primary" href="/providerRegister">Crear Proveedor</Button>
      </div>
    );
  };
  
  export default ProviderList;

  