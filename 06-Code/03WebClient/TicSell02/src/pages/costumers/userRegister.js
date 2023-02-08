import React from 'react';
import axios from 'axios';
import { Box } from "@mui/material";
import {useState, useEffect} from 'react';
import LogoLetter from '../../assets/logoletter.png';
import Logo from '../../assets/logoTicSell.png';
import Navbar from '../Navbar';
import "../../styles.css";

const UserRegister = () => {

    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://ec2-52-23-176-81.compute-1.amazonaws.com:3006/api/customers')
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

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