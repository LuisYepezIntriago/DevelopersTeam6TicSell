import React from 'react';
import axios from 'axios';
import { Box, Button } from "@mui/material";
import LogoLetter from '../../assets/logoletter.png';
import Logo from '../../assets/logoTicSell.png';
import Navbar from '../Navbar';
import "../../styles.css";

const BillRegister = ({bill, setBill}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://ec2-52-23-176-81.compute-1.amazonaws.com:3006/api/bills', bill)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <Box>
        <div className="logo">
          <img src={Logo} alt="TicSell icon" />
        </div> 
        <Navbar />
        <br />
        <form onSubmit={handleSubmit} className='Formulario'>
            <caption className='Titulo-Formulario'>Registro de Nueva Factura</caption>
            <div className='Formulario-Grupo'>
                <label className='Formulario-Label'>Cédula</label>
                <input type='number' className='Formulario-Input' placeholder='Nombre del cliente' onChange={(event) => setBill({...bill, customer: event.target.value})} />
            </div>
            <div className='Formulario-Grupo'>
                <label className='Formulario-Label'>Nombre</label>
                <input type='string' className='Formulario-Input' placeholder='Nombre del cliente' onChange={(event) => setBill({...bill, name: event.target.value})} />
            </div>
            <div className='Formulario-Grupo'>
                <label className='Formulario-Label'>Apellido</label>
                <input type='string' className='Formulario-Input' placeholder='Apellido del cliente' onChange={(event) => setBill({...bill, lastname: event.target.value})} />
            </div>
            <div className='Formulario-Grupo'>
                <label className='Formulario-Label'>Dirección</label>
                <input type='string' className='Formulario-Input' placeholder='Dirección del cliente' onChange={(event) => setBill({...bill, address: event.target.value})} />
            </div>
            <div className='Formulario-Grupo'>
                <label className='Formulario-Label'>Teléfono</label>
                <input type='number' className='Formulario-Input' placeholder='Teléfono del cliente' onChange={(event) => setBill({...bill, phone: event.target.value})} />
            </div>
            <div className='Formulario-Grupo'>
                <label className='Formulario-Label'>Correo Electrónico</label>
                <input type='string' className='Formulario-Input' placeholder='Correo electrónico del cliente' onChange={(event) => setBill({...bill, email: event.target.value})} />
            </div>
            <div className='Formulario-Grupo'>
                <label className='Formulario-Label'>Producto</label>
                <input type='string' className='Formulario-Input' placeholder='Producto' onChange={(event) => setBill({...bill, product: event.target.value})} />
            </div>
            <div className='Formulario-Grupo'>
                <label className='Formulario-Label'>Cantidad</label>
                <input type='number' className='Formulario-Input' placeholder='Cantidad' onChange={(event) => setBill({...bill, quantity: event.target.value})} />
            </div>
            <div className='Formulario-Grupo'>
                <label className='Formulario-Label'>Precio</label>
                <input type='number' className='Formulario-Input' placeholder='Precio' onChange={(event) => setBill({...bill, price: event.target.value})} />
            </div>
            <Button type='submit' variant="contained" color="primary">Registrar</Button>
        </form>
        <Button type='submit' variant="contained" color="primary" href="/viewBills">Volver</Button>
        <div className="endPage">
          <img src={LogoLetter} alt="TicSell icon" />
        </div>
        </Box>
    );
}

export default BillRegister;