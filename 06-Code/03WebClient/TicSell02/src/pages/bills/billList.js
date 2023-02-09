import React, {Fragment, useState, useEffect} from 'react';
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Button, sliderClasses } from "@mui/material";
import LogoLetter from '../../assets/logoletter.png';
import Logo from '../../assets/logoTicSell.png';
import "../../styles.css";
import Navbar from '../Navbar';
import BillList from './viewBills';

function BillsList() {

  const [bill, setBill] = useState([
    {
      customer: '',
      name: '',
      lastname: '',
      address: '',
      phone: '',
      email: '',
      items: '',
      quantity: '',
      price: '',
    }
  ]);

  const [bills, setBills] = useState([]);

  useEffect(() => {
    const getBills = () => {
      fetch('http://ec2-52-23-176-81.compute-1.amazonaws.com:3006/api/bills')
      .then(res => res.json())
      .then(res => setBills(res))
    }
    getBills();
  }, [])

  return (
    <>
      <Box>
        <div className="logo">
          <img src={Logo} alt="TicSell icon" />
        </div> 
        <Navbar />
        <br />
        <BillList bills={bills} />
        <div className="endPage">
          <img src={LogoLetter} alt="TicSell icon" />
        </div>
      </Box>
    </>
  );
}

export default BillsList;  