import React,{ useEffect } from 'react';
import { Box } from "@mui/material";
import axios from 'axios';
import LogoLetter from '../../assets/logoletter.png';
import Logo from '../../assets/logoTicSell.png';
import Navbar from '../Navbar';
import "../../styles.css";

function ItemRegister () {
    const [brand , setBrand] = React.useState('')
    const [model , setModel] = React.useState('')
    const [description , setDescription] = React.useState('')
    const [price , setPrice] = React.useState('')
    const [quantity , setQuantity] = React.useState('')
       

    useEffect(() => {
    }, []
    )

    const addItem = async () => {
        await axios.post('http://ec2-52-23-176-81.compute-1.amazonaws.com:3006/api/items', {
            brand,
            model,
            description,
            price,
            quantity,
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
            <h1 className='Titulo'>Registro de productos</h1>
            <label className='Label'>Marca</label>
            <input className='Input' onChange={(e)=>setBrand(e.target.value)} type='text' name='id' placeholder='Cédula' />
            <label className='Label'>Modelo</label>
            <input className='Input' onChange={(e)=>setModel(e.target.value)} type='text' name='name' placeholder='Nombre' />
            <label className='Label'>Descripción</label>
            <input className='Input' onChange={(e)=>setDescription(e.target.value)} type='text' name='lastname' placeholder='Apellido' />
            <label className='Label'>Precio</label>
            <input className='Input' onChange={(e)=>setPrice(e.target.value)} type='number' name='birthday' placeholder='Fecha de nacimiento' />
            <label className='Label'>Cantidad</label>
            <input className='Input' onChange={(e)=>setQuantity(e.target.value)} type='number' name='address' placeholder='Dirección' />
            <br />
            <div>
                <button className='Button' type='submit' onClick={() => addItem()} >Registrar</button>
            </div>
        </form>
        <div className="endPage">
          <img src={LogoLetter} alt="TicSell icon" />
        </div>
        </Box>
    );
}

export default ItemRegister;