import React, {Fragment, useState, useEffect} from 'react';
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Button, sliderClasses } from "@mui/material";
import LogoLetter from '../../assets/logoletter.png';
import Logo from '../../assets/logoTicSell.png';
import "../../styles.css";
import Navbar from '../Navbar';
import UserList from './viewUsers';

function Home() {

  const [user, setUser] = useState([
    {
      customer: '',
      name: '',
      lastname: '',
      birthday: '',
      address: '',
      city: '',
      phone: ''
    }
  ]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = () => {
      fetch('http://ec2-52-23-176-81.compute-1.amazonaws.com:3006/api/customers')
      .then(res => res.json())
      .then(res => setUsers(res))
    }
    getUsers();
  }, [])

  return (
    <>
      <Box>
        <div className="logo">
          <img src={Logo} alt="TicSell icon" />
        </div> 
        <Navbar />
        <br />
        <UserList users={users} />
        <div className="endPage">
          <img src={LogoLetter} alt="TicSell icon" />
        </div>
      </Box>
    </>
  );
}

export default Home;  