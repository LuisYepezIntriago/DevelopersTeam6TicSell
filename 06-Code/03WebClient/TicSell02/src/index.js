import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/costumers/userList";
import UserRegister from "./pages/costumers/userRegister";
import UserList from "./pages/costumers/viewUsers"; 
import ItemsList from "./pages/items/itemList";
import ItemRegister from "./pages/items/itemRegister";
import ProviderRegister from "./pages/provider/providerRegister";
import ProvidersList from "./pages/provider/providerList";
import BillsList from "./pages/bills/billList";
import UserDelete from "./pages/costumers/userDelete";
import BillRegister from "./pages/bills/billRegister";
import BillUpdate from "./pages/bills/updateBill";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/users" element={<Home />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/viewItems" element={<ItemsList />} />
        <Route path="/viewProviders" element={<ProvidersList />} />
        <Route path="/viewBills" element={<BillsList />} />
        <Route path="/updateBill" element={<BillUpdate />} />
        <Route path="/itemRegister" element={<ItemRegister />} />
        <Route path="/providerRegister" element={<ProviderRegister />} />
        <Route path="/billRegister" element={<BillRegister />} />
        <Route path="/logout" element={<Login />} /> 

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

