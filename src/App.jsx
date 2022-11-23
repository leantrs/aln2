
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./pages/Login";



import "./App.css";

const App = () => {
 
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/Cart" element={<Cart />} />
         {/* <Route path="/Details" element={<Details />} />     
         <Route path="/Cart" element={<Cart />} />   
         <Route path="/Login" element={<Login/>} />   
         <Route path="/Register" element={<Register/>} />    */}
      </Routes>
    </BrowserRouter>
    </Provider>
     )
};

export default App;
