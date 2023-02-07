import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/userList";
import UserRegister from "./pages/userRegister";
import UserList from "./pages/viewUsers"; 
import ItemsList from "./pages/itemList";
import ItemRegister from "./pages/itemRegister";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/users" element={<Home />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/viewItems" element={<ItemsList />} />
        <Route path="/itemRegister" element={<ItemRegister />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

