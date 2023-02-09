import React,{ useEffect } from 'react';
import { Box } from "@mui/material";
import axios from 'axios';
import LogoLetter from '../../assets/logoletter.png';
import Logo from '../../assets/logoTicSell.png';
import Navbar from '../Navbar';
import "../../styles.css";

function ProviderRegister () {
    const [ ruc , setRuc ] = React.useState("")
    const [ nameProvider , setNameProvider ] = React.useState("")
    const [ address , setAddress ] = React.useState("")
    const [ phone , setPhone ] = React.useState("")
    const [ nameSeller, setNameSeller ] = React.useState("")

    useEffect(() => {
    }, []
    )

    const addProvider = async () => {
        await axios.post('http://localhost:3006/api/providers', {
            ruc,
            nameProvider,
            address,
            phone,
            nameSeller
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
            <input className='Input' onChange={(e)=>setRuc(e.target.value)} type='number' name='ruc' placeholder='RUC' />
            <label className='Label'>Nombre del Proveedor</label>
            <input className='Input' onChange={(e)=>setNameProvider(e.target.value)} type='text' name='nameProvider' placeholder='Nombre' />
            <label className='Label'>Dirección</label>
            <input className='Input' onChange={(e)=>setAddress(e.target.value)} type='text' name='address' placeholder='Dirección' />
            <label className='Label'>Teléfono</label>
            <input className='Input' onChange={(e)=>setPhone(e.target.value)} type='number' name='phone' placeholder='Teléfono' />
            <label className='Label'>Nombre del Vendedor</label>
            <input className='Input' onChange={(e)=>setNameSeller(e.target.value)} type='text' name='nameSeller' placeholder='Nombre del Vendedor' />
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