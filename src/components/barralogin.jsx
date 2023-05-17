import React, { useEffect, useState } from "react";
import "../css/barralogin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Paginacao from '../services/paginacao';
import signIn from "../actions/listaActions";
import signUser from "../actions/accountActions";
import {FaUserAlt} from 'react-icons/fa'




const Navbar = () => {
  const [lista, setLista] = useState(null);
  const navigate = useNavigate();
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



  
  async function handleSignIn2() {
    // eslint-disable-next-line
    navigate("/Login");
  }

  
  return (
    
    <div className="barra">
     <p> <FaUserAlt  onClick={handleSignIn2}></FaUserAlt> {rec && rec["email"]}</p>
    </div>
  );
};

export default Navbar;
