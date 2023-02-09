import React,{ useEffect } from 'react';
import { Box } from "@mui/material";
import axios from 'axios';
import LogoLetter from '../../assets/logoletter.png';
import Logo from '../../assets/logoTicSell.png';
import Navbar from '../Navbar';
import "../../styles.css";

function ProviderRegister () {
    const [RUC, setRUC] = React.useState('');
    const [ProviderName, setProviderName] = React.useState('');
    const [Address, setAddress] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [SellerName, setSellerName] = React.useState('');
      

    useEffect(() => {
    }, []
    )

    const addProvider = async () => {
        await axios.post('http://localhost:3006/api/providers', {
            RUC,
            ProviderName,
            Address,
            Phone,
            SellerName,   
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
            <h1 className='Titulo'>Registro de Proveedores</h1>
            <label className='Label'>RUC</label>
            <input className='Input' onChange={(e)=>setRUC(e.target.value)} type='text' name='id' placeholder='RUC' />
            <label className='Label'>Nombre</label>
            <input className='Input' onChange={(e)=>setProviderName(e.target.value)} type='text' name='name' placeholder='Nombre' />          
            <label className='Label'>Dirección</label>
            <input className='Input' onChange={(e)=>setAddress(e.target.value)} type='text' name='address' placeholder='Dirección' />
            <label className='Label'>Teléfono</label>
            <input className='Input' onChange={(e)=>setPhone(e.target.value)} type='text' name='phone' placeholder='Teléfono' />
            <label className='Label'>Nombre del vendedor</label>
            <input className='Input' onChange={(e)=>setSellerName(e.target.value)} type='text' name='seller' placeholder='Nombre del vendedor' />
            <br />
            <div>
                <button className='Button' type='submit' onClick={() => addProvider()} >Registrar</button>
            </div>
        </form>
        <div className="endPage">
          <img src={LogoLetter} alt="TicSell icon" />
        </div>
        </Box>
    );
}

export default ProviderRegister;