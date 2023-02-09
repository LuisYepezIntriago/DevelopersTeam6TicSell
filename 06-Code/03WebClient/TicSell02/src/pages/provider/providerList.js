import React, {Fragment, useState, useEffect} from 'react';
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Button, sliderClasses } from "@mui/material";
import LogoLetter from '../../assets/logoletter.png';
import Logo from '../../assets/logoTicSell.png';
import "../../styles.css";
import Navbar from '../Navbar';
import ProviderList from './viewProvider';

function ProvidersList() {

  const [provider, setProvider] = useState([
    {
      ruc: '',
      nameProvider: '',
      addres: '',
      Phone: '',
      nameSeller: '',
    }
  ]);

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const getProviders = () => {
      fetch('http://ec2-52-23-176-81.compute-1.amazonaws.com:3006/api/providers')
      .then(res => res.json())
      .then(res => setProviders(res))
    }
    getProviders();
  }, [])

  return (
    <>
      <Box>
        <div className="logo">
          <img src={Logo} alt="TicSell icon" />
        </div> 
        <Navbar />
        <br />
        <ProviderList providers={providers} />
        <div className="endPage">
          <img src={LogoLetter} alt="TicSell icon" />
        </div>
      </Box>
    </>
  );
}

export default ProvidersList;  