import React from 'react';
import { Box } from "@mui/material";
import LogoLetter from '../assets/logoletter.png';
import Logo from '../assets/logoTicSell.png';
import Navbar from './Navbar';
import "../styles.css";

const UserRegister = () => {
    return (
        <Box>
        <div className="logo">
          <img src={Logo} alt="TicSell icon" />
        </div> 
        <Navbar />
        <br />
        <form className='Formulario'>
            <caption className='Titulo-Formulario'>Registro de Nuevo Usuario</caption>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Lastname:
                <input type="text" name="lastname" />
            </label>
            <label>
                Birthday:
                <input type="text" name="birthday" />
            </label>
            <label>
                Address:
                <input type="text" name="address" />
            </label>
            <label>
                City:
                <input type="text" name="city" />
            </label>
            <label>
                Phone:
                <input type="text" name="phone" />
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