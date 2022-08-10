
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./store";


import "./App.css";

const App = () => {
 
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Details" element={<Details />} />     
         <Route path="/Cart" element={<Cart />} />   
      </Routes>
    </BrowserRouter>
    </Provider>
     )
};

export default App;
