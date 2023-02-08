import React from 'react';
import "../styles.css";
import UserRegister from './costumers/userRegister';
import {Link} from 'react-router-dom';
import ViewUsers from './costumers/viewUsers';
import {Route, Navigate } from 'react-router-dom';
import Home from './costumers/userList';
import ItemsList from './items/itemList';
import ProvidersList from './provider/providerList';
import BillsList from './bills/billList';

const Navbar = ({brand}) => {
    return (
        <nav className=" navbar">
            <div className="container">
                    <a href='/users' className="navbar-brand">Usuarios {Home}</a>
                    <a href='/viewItems' className="navbar-brand">Productos {ItemsList}</a>
                    <a href='/viewProviders' className="navbar-brand">Proveedores {ProvidersList}</a>
                    <a href='/viewBills' className="navbar-brand">Facturas  {BillsList} </a>
                    <a href='/logout' className="navbar-logout">Cerrar Sesión</a>
            </div>
        </nav>
    );
    }

export default Navbar;