import React, { useEffect, useState } from "react";
import "../css/NavBar.css";
import {BsCartCheck} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import Paginacao from '../services/paginacao';
// import signIn from "../actions/listaActions";
import signUser from "../actions/accountActions";




const Navbar = () => {
  // const [lista, setLista] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const todos = useSelector((state) => state.cart.listaCarrinho);
  const dispatch = useDispatch();
  const [rec, setRec] = useState("Default");
  const [user, setUser] = useState("20");
  const [estado, setEstado] = useState(false);

  useEffect(
    () => {
      if (estado === false) {
        rsn();
        comparar();
      }
    }, // eslint-disable-next-line
    [estado]
  );



  async function rsn() {
    
    
    const userx = JSON.stringify(localStorage.getItem("pass"));
    setUser(userx);

    if (userx === "20" || userx === "null") {
    } else {
      setRec(JSON.parse(atob(userx.split(".")[1])));
      dispatch(signUser(userx));
    }

    setEstado(true);
  }

  async function comparar() {
    let date1 = rec["exp"];
    let date2 = new Date() - 3 * 60 * 60 * 1000;

    let dataUm = new Date(date1).getTime();
    let dataDois = new Date(date2).getTime();

    let dataBd = dataUm.toString().substr(0, 10);
    let dataAtual = dataDois.toString().substr(0, 10);

    if (estado === true) {
      if (parseInt(dataBd) > parseInt(dataAtual)) {
        await dispatch(signUser(user));
      } else {
        if (rec === "Default") {
          localStorage.setItem("pass", "20");
        }
      }
    }
  }

  // console.log(todos);


  // function teste(params) {

  //   //criar um armazenamento
  //   const itemx = {
  //      params,
  //   };
        
  //   const armaz = JSON.stringify(itemx);
  //   localStorage.setItem('fornecedor', armaz);

  // }

  
  async function handleSignIn2() {
    // eslint-disable-next-line
    navigate("/Cart");
  }

  async function handleSignIn3() {

    console.log('teste')
    // eslint-disable-next-line
    navigate("/");
  }

  
//   async function buscarP(tre,forn) {  

           
//     const teste = await Paginacao(1,10,forn);
//     setLista(teste)
//     await dispatch(signIn(lista));
    
//     setIsOpen(false)

//     console.log(teste)
    
// }
  return (
    
    <div className="Navbar">
      <p className="dot">
      {Object.keys(todos).length}
        <BsCartCheck className="cartcheck"  onClick={handleSignIn2}/>
      
        </p>
        <div>
          <button className="bnc" onClick={handleSignIn3}> HOME </button>
        </div>

      {/* <div className={`nav-items ${isOpen && "open"}`}>
        <button  onClick={() => buscarP(1,"")}>Home</button>
        <button  onClick={() => buscarP(1,"Scarpin")}> Scarpin</button> 
        <button  onClick={() => buscarP(1,"Botas")}>Botas</button>
        <button  onClick={() => buscarP(1,"Tenis")}> Tenis</button> 
        <button  onClick={() => buscarP(1,"Sandalia")}>Sandalia</button>
        <button  onClick={() => buscarP(1,"Bolsas")}>Bolsas</button>

      </div> */}
      {/* <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
   */}
    </div>
  );
};

export default Navbar;
