import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";
//import { useDispatch } from "react-redux";
import Navbar from "../components/NavBar";
import '../css/Login.css';
import Header from '../components/header';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
   //const dispatch = useDispatch();


   const fail = (rec) =>  toast.error("Email ou Senha nao conferem");

   async function handleSignIn() {

   

     try {
        const rec = await authServices(user, password); // BUSCA NO BANCO DE DADOS INF LOGIN E SENHA

       //INICIO IF
      if (rec === false) {
        // SE NAO ENCONTRAR DESTROI A INFORMAÇÃO NO LOCALSTORAGE
         fail('Email ou Senha nao conferem');
        await localStorage.removeItem("pass");
      } else {
        // SE EXISTIR CRIA UM OBJETO DE USUARIO
        //const objUsuario = {
         // user: rec,
        //};

        localStorage.setItem("pass", rec);



        navigate("/");
       }
       //FIM BLOCO IF
      } catch (error) {}
   }
  async function handleSignIn2() {
    // eslint-disable-next-line
    navigate("/Register");
  }
  return (
    <>
      <Navbar />
      <Header/>



      <div className="container">
        <div className="wrapper">
        <div className="title">
          ENTRAR
          </div>
          <div className="form">
          
            <input 
              className="input"
              type="text"             
              placeholder="email"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              />
            <input 
              className="input"
              type="password"
              id="pass"
              name="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              />
            
            <button className="btn" onClick={handleSignIn}>LOGIN</button>
            <ToastContainer />
            <button className="btny" onClick={handleSignIn2}>
              Nao tem uma conta? Registre-se
            </button>
            {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> 

            <Link onClick={handleSignIn2}>Nao tem uma conta? Registre-se</Link>
            */}
          </div>
          </div>
        </div>

    </>
  );
};

export default Login;
