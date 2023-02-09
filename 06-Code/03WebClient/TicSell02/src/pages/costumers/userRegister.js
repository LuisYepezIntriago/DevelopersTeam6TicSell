import React,{ useEffect } from 'react';
import { Box } from "@mui/material";
import axios from 'axios';
import LogoLetter from '../../assets/logoletter.png';
import Logo from '../../assets/logoTicSell.png';
import Navbar from '../Navbar';
import "../../styles.css";

function UserRegister () {
    const [customer, setCustomer] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [birthday, setBirthday] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [phone, setPhone] = React.useState('');
       

    useEffect(() => {
    }, []
    )

    const addUser = async () => {
        await axios.post('http://localhost:3006/api/customers', {
            customer,
            name,
            lastname,
            birthday,
            address,
            city,
            phone,    
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
            <h1 className='Titulo'>Registro de Clientes</h1>
            <label className='Label'>Cédula</label>
            <input className='Input' onChange={(e)=>setCustomer(e.target.value)} type='number' name='id' placeholder='Cédula' />
            <label className='Label'>Nombre</label>
            <input className='Input' onChange={(e)=>setName(e.target.value)} type='text' name='name' placeholder='Nombre' />
            <label className='Label'>Apellido</label>
            <input className='Input' onChange={(e)=>setLastname(e.target.value)} type='text' name='lastname' placeholder='Apellido' />
            <label className='Label'>Fecha de nacimiento</label>
            <input className='Input' onChange={(e)=>setBirthday(e.target.value)} type='text' name='birthday' placeholder='Fecha de nacimiento' />
            <label className='Label'>Dirección</label>
            <input className='Input' onChange={(e)=>setAddress(e.target.value)} type='text' name='address' placeholder='Dirección' />
            <label className='Label'>Ciudad</label>
            <input className='Input' onChange={(e)=>setCity(e.target.value)} type='text' name='city' placeholder='Ciudad' />
            <label className='Label'>Teléfono</label>
            <input className='Input' onChange={(e)=>setPhone(e.target.value)} type='number' name='phone' placeholder='Teléfono' />          
            <br />
            <div>
                <button className='Button' type='submit' onClick={() => addUser()} >Registrar</button>
            </div>
        </form>
        <div className="endPage">
          <img src={LogoLetter} alt="TicSell icon" />
        </div>
        </Box>
    );
}

export default UserRegister;