import { Outlet, Link, NavLink } from "react-router-dom";

const Layout = () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/viewUser">Ver Usuarios</NavLink>
                </li>
                <li>
                    <NavLink to="/viewItems">Ver Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/userRegister">Registrar Usuario</NavLink>
                </li>
                <li>
                    <NavLink to="/itemRegister">Registrar Producto</NavLink>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>;
}
export default Layout;