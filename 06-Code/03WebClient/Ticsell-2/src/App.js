import React, {Fragment, useState, useEffect} from 'react';
import { Box } from "@mui/material";
import LogoLetter from './assets/logoletter.png';
import Logo from './assets/logoTicSell.png';
import "./styles/TableLayout.css";
import Navbar from './components/Navbar';
import UserList from './components/userList';
import UserRegister from './components/userRegister';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import cors from "cors"

function App() {

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
      fetch('http://ec2-44-211-70-232.compute-1.amazonaws.com:3006/api/customers')
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
        <Navbar/>
        <br />
        <UserList users={users} />
        <div className="endPage">
          <img src={LogoLetter} alt="TicSell icon" />
        </div>
      </Box>
    </>
  );
}

export default App;
