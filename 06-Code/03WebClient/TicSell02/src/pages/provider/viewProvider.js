import { Button } from "@mui/material";
import axios from "axios";

const ProviderList = ({ providers }) => {

  const deleteProviders = async (_id) => {
    await axios.delete(`http://ec2-52-23-176-81.compute-1.amazonaws.com:3006/api/providers/${_id}`)  
  }
  
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
          {providers.map((provider) => (
            <tr>
                <td scope="col">{provider.ruc}</td>
                <td scope="col">{provider.nameProvider}</td>
                <td scope="col">{provider.address}</td>
                <td scope="col">{provider.phone}</td>
                <td scope="col">{provider.nameSeller}</td>
                <td scope="col"><Button className="BotonUpdateItem" color="primary" href="/updateProvider">Actualizar</Button></td>
                <td scope="col"><Button className="BotonDeleteItem" color="primary" onClick={() => deleteProviders(provider._id)}>Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="BotonPostItem" color="primary" href="/providerRegister">Crear Producto</Button>
      </div>
    );
  };
  
  export default ProviderList;

  