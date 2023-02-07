import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home  from './userList'
import ViewUsers from './viewUsers'
import ViewItems from './viewItems'
import UserRegister from './userRegister'
import ItemRegister from './itemRegister'
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import Logo from "../assets/logoTicSell.png";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Usuario Incorrecto",
    pass: "Contraseña Incorrecta"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {

      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    
    <div className="form">

      <caption className='captionForm'>Inicio de Sesión</caption>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Usuario </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit"value="Enviar"/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
        <div className="logo">
          <img src={Logo} alt="TicSell icon" />
        </div> 
        {isSubmitted ? <Home /> : renderForm}
      </div>
  );
}

export default Login;
