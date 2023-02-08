import { Button } from "@mui/material";

const ItemList = ({ items }) => {
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
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
                <td scope="col">{item.brand}</td>
                <td scope="col">{item.model}</td>
                <td scope="col">{item.description}</td>
                <td scope="col">{item.price}</td>
                <td scope="col">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="BotonPostItem" color="primary" href="/itemRegister">Crear Producto</Button>
      <Button className="BotonUpdateItem" color="primary" href="/updateItem">Actualizar Producto</Button>
      <Button className="BotonDeleteItem" color="primary" href="/deleteItem">Eliminar Producto</Button>
      </div>
    );
  };
  
  export default ItemList;

  