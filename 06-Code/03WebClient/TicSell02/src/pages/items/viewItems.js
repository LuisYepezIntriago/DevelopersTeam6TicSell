import { Button } from "@mui/material";
import axios from "axios";

const ItemList = ({ items }) => {

  const deleteItem = async (_id) => {
    await axios.delete(`http://ec2-52-23-176-81.compute-1.amazonaws.com:3006/api/items/${_id}`)  
  }

    return (
      <div>
      <table className="table">
          <caption className="titulo-tabla">Lista de Productos</caption>
        <thead>
          <tr>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acción</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
                <td scope="col">{item.brand}</td>
                <td scope="col">{item.model}</td>
                <td scope="col">{item.description}</td>
                <td scope="col">{item.price}</td>
                <td scope="col">{item.quantity}</td>
                <td scope="col"><Button className="BotonUpdateItem" color="primary" href="/updateItem">Actualizar</Button></td>
                <td scope="col"><Button className="BotonDeleteItem" color="primary" onClick={() => deleteItem(item._id)}>Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="BotonPostItem" color="primary" href="/itemRegister">Crear Producto</Button>
      </div>
    );
  };
  
  export default ItemList;

  