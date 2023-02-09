import "../../styles.css"
import axios  from "axios";
import Button from '@mui/material/Button';

const UserList = ({ users }) => {

  const deleteUser = async (_id) => {
    await axios.delete(`http://ec2-52-23-176-81.compute-1.amazonaws.com:3006/api/customers/${_id}`)  
  }

    return (
      <div>
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
            <th scope="col">Acción</th>
            <th scope="col">Acción</th>
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
              <td scope="col"><Button className="BotonUpdateItem" color="primary" href="/updateItem">Actualizar</Button></td>
              <td scope="col"><Button className="BotonDeleteItem" color="primary" onClick={() => deleteUser(user._id)}>Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="BotonPostUser" color="primary" href="/userRegister">Crear Cliente</Button>
      </div>
    );
  };
  
  export default UserList;