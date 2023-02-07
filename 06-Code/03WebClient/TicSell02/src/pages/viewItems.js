const ItemList = ({ items }) => {
    return (
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
    );
  };
  
  export default ItemList;

  