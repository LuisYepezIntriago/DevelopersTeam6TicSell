import React from 'react';
import "../styles/HomePage.css";
import UserRegister from './userRegister';
import {Link} from 'react-router-dom';

const Navbar = ({brand}) => {
    return (
        <nav className=" navbar">
            <div className="container">
                <a to='UserRegister' className="navbar-brand">Productos</a>
                <a href='/userList' className="navbar-brand">Registrar Clientes</a>
                <a href='/userRegister' className="navbar-brand">Ventas</a>
                <a href='/userRegister' className="navbar-brand">Sobre Nosotros</a>
            </div>
        </nav>
    );
    }

export default Navbar;