import React,{ useEffect } from 'react';
import { Box } from "@mui/material";
import axios from 'axios';
import LogoLetter from '../../assets/logoletter.png';
import Logo from '../../assets/logoTicSell.png';
import Navbar from '../Navbar';
import "../../styles.css";

function BillUpdate (props) {
    const [customer, setCustomer] = React.useState(props.customer);
    const [address, setAddress] = React.useState(props.address);
    const [phone, setPhone] = React.useState(props.phone);
    const [email, setEmail] = React.useState(props.email);
    const [items, setItems] = React.useState(props.items);
    const [quantity, setQuantity] = React.useState(props.quantity);
    const [price, setPrice] = React.useState(props.price);       

    const updateBill = async () => {
        await axios.put(`http://localhost:3006/api/bills/${props._id}`, {
            customer,
            address,
            phone,
            email,
            items,
            quantity,
            price, 
        })
    } 

    return (
        <Box>
        <div className="logo">
          <img src={Logo} alt="TicSell icon" />
        </div> 
        <Navbar />
        <form className='Formulario'>
            <h1 className='Titulo'>Actualizar Factura</h1>
            <label className='Label'>Cédula</label>
            <input className='Input' onChange={(e)=>setCustomer(e.target.value)} type='number' name='id' placeholder='Cédula' />
            <label className='Label'>Dirección</label>
            <input className='Input' onChange={(e)=>setAddress(e.target.value)} type='text' name='address' placeholder='Dirección' />
            <label className='Label'>Teléfono</label>
            <input className='Input' onChange={(e)=>setPhone(e.target.value)} type='number' name='phone' placeholder='Teléfono' />
            <label className='Label'>Correo</label>
            <input className='Input' onChange={(e)=>setEmail(e.target.value)} type='email' name='email' placeholder='Correo' />
            <label className='Label'>Artículo</label>
            <input className='Input' onChange={(e)=>setItems(e.target.value)} type='text' name='items' placeholder='Artículo' />
            <label className='Label'>Cantidad</label>
            <input className='Input' onChange={(e)=>setQuantity(e.target.value)} type='number' name='quantity' placeholder='Cantidad' />
            <label className='Label'>Precio</label>
            <input className='Input' onChange={(e)=>setPrice(e.target.value)} type='number' name='price' placeholder='Precio' />
            <br />
            <div>
                <button className='Button' type='submit' onClick={() => updateBill()} >Actualizar</button>
            </div>
        </form>
        <div className="endPage">
          <img src={LogoLetter} alt="TicSell icon" />
        </div>
        </Box>
    );
}

export default BillUpdate;