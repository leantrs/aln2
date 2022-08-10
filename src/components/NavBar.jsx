import React, { useState } from "react";
import "../css/NavBar.css";
import {BsCartCheck} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Paginacao from '../services/paginacao';
import signIn from "../actions/listaActions";




const Navbar = () => {
  const [lista, setLista] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const todos = useSelector((state) => state.cart.listaCarrinho);
  const dispatch = useDispatch();



  // console.log(todos);


  function teste(params) {

    //criar um armazenamento
    const itemx = {
       params,
    };
        
    const armaz = JSON.stringify(itemx);
    localStorage.setItem('fornecedor', armaz);

  }

  
  async function handleSignIn2() {
    // eslint-disable-next-line
    navigate("/Cart");
  }

  async function buscarP(tre,forn) {  

           
    const teste = await Paginacao(1,10,forn);
    setLista(teste)
    await dispatch(signIn(lista));
    
    setIsOpen(false)
    
}
  return (
    
    <div className="Navbar">
      <p className="dot">
      {Object.keys(todos).length}
        <BsCartCheck className="cartcheck"  onClick={handleSignIn2}/>
        
        </p>

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/" onClick={() => teste("")}>Home</a>
        
        {/* <a href="/" onClick={() => teste("Scarpin")}> Scarpin</a> */}
        <a  onClick={() => buscarP(1,"Scarpin")}> Scarpin</a> 
        
        <a href="/" onClick={() => teste("Botas")}>Botas</a>
        {/* <a href="/" onClick={() => teste("Tenis")} >Tenis</a> */}
        <a  onClick={() => buscarP(1,"Tenis")}> Tenis</a> 
        <a href="/" onClick={() => teste("Sandalia")}>Sandalia</a>
        <a href="/" onClick={() => teste("Bolsas")}>Bolsas</a>

      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
