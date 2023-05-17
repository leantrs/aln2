import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/NavBar";
import InputCEP from "../components/InputCEP";
import InputNormal from "../components/InputNormal";
import InputNasc from "../components/InputNasc";
import InputCPF from "../components/InputCPF";
import InputCELULAR from "../components/InputCELULAR";
import "../css/Register.css";
import authServices from "../services/authServices";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 130vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  background-repeat: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 300px;
  height: 90%;
  padding: 10px;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  margin: 20px;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

// eslint-disable-next-line
const Input = styled.input`
  flex: 0;
  min-width: 80%;
  margin: 20px 5px 10px 0px;
  padding: 10px;
  color: black;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  display: flex;
  width: 40%;
  border: none;
  margin-top: 10px;
  padding: 15px 20px;
  background-color: #db7093;
  color: white;
  cursor: pointer;
`;


const Register = () => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [documento, setDocumento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [nascimento, setNascimento] = useState("");
  const navigate = useNavigate(); // eslint-disable-next-line
  const dispatch = useDispatch();

  const fail = (rec) =>  toast.error(rec);
  const success = () =>toast.success("Cadastro realizado c/ sucesso");


  async function handleSignIn() {

    //console.log('aqui')

    try {
      let response = await fetch("https://trs2500.site/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "registrar",
          clienteNome: nome,
          clienteEndereco: endereco,
          clienteNumero: numero,
          clienteBairro: bairro,
          clienteEstado: estado,
          clienteCidade: cidade,
          clienteCEP: cep,
          clienteDocumento: documento,
          clienteSenha: senha,
          clienteConfirmacaoSenha: confirmacaoSenha,
          clienteEmail: email,
          clienteCelular: celular,
          clienteNascimento: nascimento,
        }),
      });

      let json = await response.json();

      if (json === true) {
       // console.log("Cadastro realizado c/ sucesso"); 
        success();
        acessar(email,senha);  
        //navigate("/");
      } else {
        fail(json);
      //  console.log(json);
         //toast.error(json);
      }
    } catch (error) {

      
    }

    async function acessar(user,password) {

   

      try {
         const rec = await authServices(user, password); // BUSCA NO BANCO DE DADOS INF LOGIN E SENHA
 
        //INICIO IF
       if (rec === false) {
         // SE NAO ENCONTRAR DESTROI A INFORMAÇÃO NO LOCALSTORAGE
 
         await localStorage.removeItem("pass");
       } else {
         // SE EXISTIR CRIA UM OBJETO DE USUARIO
         // eslint-disable-next-line
         const objUsuario = {
           user: rec,
         };
 
         localStorage.setItem("pass", rec);
 
 
 
         navigate("/");
        }
        //FIM BLOCO IF
       } catch (error) {}
    }
  }

  return (
    <>
      <Navbar />
        <Container>
        <Wrapper>
          <Title>CRIE A SUA CONTA AQUI</Title>
          <Form>
            <InputNormal
              className="inputc"
              placeholder="Nome Completo"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <InputNasc
              placeholder="Nascimento"
              value={nascimento}
              onChange={(event) => setNascimento(event.target.value)}
            />
            <InputCPF
              placeholder="Cpf"
              value={documento}
              onChange={(event) => setDocumento(event.target.value)}
            />
            <InputNormal
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <InputCELULAR
              placeholder="Celular"
              value={celular}
              onChange={(event) => setCelular(event.target.value)}
            />
            <InputCEP
              placeholder="CEP"
              value={cep}
              onChange={(event) => setCep(event.target.value)}
            />

            <InputNormal
              placeholder="Endereco"
              value={endereco}
              onChange={(event) => setEndereco(event.target.value)}
            />
            <InputNormal
              placeholder="Complemento"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
            />
            <InputNormal
              placeholder="Bairro"
              value={bairro}
              onChange={(event) => setBairro(event.target.value)}
            />

            <InputNormal
              placeholder="Cidade"
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
            />
            <InputNormal
              placeholder="Estado"
              value={estado}
              onChange={(event) => setEstado(event.target.value)}
            />

            <InputNormal
              placeholder="Senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
            <InputNormal
              placeholder="Confirmacao Senha"
              value={confirmacaoSenha}
              onChange={(event) => setConfirmacaoSenha(event.target.value)}
            />
          </Form>

          <Agreement></Agreement>
          <Button
            onClick={handleSignIn}
            
          >
            CRIAR
          </Button>
          <ToastContainer />
          <br></br>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
