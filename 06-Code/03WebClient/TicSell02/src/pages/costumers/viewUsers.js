import "../../styles.css"
import Button from '@mui/material/Button';

const UserList = ({ users }) => {
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
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="BotonPostUser" color="primary" href="/userRegister">Crear Cliente</Button>
      <Button className="BotonUpdateUser" color="primary" href="/updateUser">Actualizar Cliente</Button>
      <Button className="BotonDeleteUser" color="primary" href="/deleteUser">Eliminar Cliente</Button>
      </div>
    );
  };
  
  export default UserList;

  