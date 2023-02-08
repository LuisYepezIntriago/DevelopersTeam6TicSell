import React from 'react';
import { Box } from "@mui/material";
import LogoLetter from '../../assets/logoletter.png';
import Logo from '../../assets/logoTicSell.png';
import Navbar from '../Navbar';
import "../../styles.css";

const UserRegister = () => {
    return (
        <Box>
        <div className="logo">
          <img src={Logo} alt="TicSell icon" />
        </div> 
        <Navbar />
        <br />
        <form className='Formulario'>
            <caption className='Titulo-Formulario'>Registro de Nuevo Producto</caption>
            <label>
                Marca:
                <input type="text" name="brand" />
            </label>
            <label>
                Modelo:
                <input type="text" name="model" />
            </label>
            <label>
                Descripción:
                <input type="text" name="description" />
            </label>
            <label>
                Precio:
                <input type="text" name="price" />
            </label>
            <label>
                Cantidad:
                <input type="text" name="quantity" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <div className="endPage">
          <img src={LogoLetter} alt="TicSell icon" />
        </div>
        </Box>
    );
}

export default UserRegister;