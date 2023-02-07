import React, {Fragment, useState, useEffect} from 'react';
import { Box } from "@mui/material";
import LogoLetter from '../assets/logoletter.png';
import Logo from '../assets/logoTicSell.png';
import "../styles.css";
import Navbar from './Navbar';
import ItemList from './viewItems';

function ItemsList() {

  const [item, setItem] = useState([
    {
      brand: '',
      model: '',
      description: '',
      price: '',
      quantity: '',
    }
  ]);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = () => {
      fetch('http://ec2-52-23-176-81.compute-1.amazonaws.com:3006/api/items')
      .then(res => res.json())
      .then(res => setItems(res))
    }
    getItems();
  }, [])

  return (
    <>
      <Box className="Items">
        <div className="logo">
          <img src={Logo} alt="TicSell icon" />
        </div> 
        <Navbar />
        <br />
        <ItemList items={items} />
        <div className="endPage">
          <img src={LogoLetter} alt="TicSell icon" />
        </div>
      </Box>
    </>
  );
}

export default ItemsList;