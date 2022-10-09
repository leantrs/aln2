//import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState, useEffect } from "react";
import '../css/Cart.css'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/NavBar'
import Header from '../components/header'
import {BiTrash} from 'react-icons/bi'

import cartkrn from "../actions/cartAction";
import { useDispatch } from "react-redux";



const Container = styled.div``;




const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  border-bottom: 0.5px solid lightgray;

  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 10px;
  padding: 10px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;



const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;


const Cart = () => {
  const [teste, setTeste] = useState(null);
  
  const [soma, setSoma] = useState(0);
  const [estado, setEstado] = useState(false);
  const [estado2, setEstado2] = useState(false);
  const [quantidade, setQuantidade] = useState(0);
  const navigate = useNavigate();
  const [rec, setRec] = useState("Default");
  const [itt, setItt] = useState(null);
  const dispatch = useDispatch();

  const userx = JSON.stringify(localStorage.getItem("pass"));

  useEffect(
    () => {
      krn();
    }, // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      if (userx === "20" || userx === "null") {
      } else {
        setEstado(true);
        pegarEmail();
      }
    }, // eslint-disable-next-line
    [estado2 === true]
  );

  async function krn() {
    const keys = Object.keys(localStorage);
    const rec = keys.filter(checkar);
    setItt(rec);
    function checkar(k) {
      return k !== "pass" && k !== "fornecedor"  ;
    }


    console.log(rec) 


    const recx = rec.map((item) => {
      return JSON.parse(localStorage.getItem(item));
    });



    let valor = 0;
    let quantidade = 0;

    recx.forEach((item) => {
      valor += item.valor;
      quantidade += item.total;
    });

    setSoma(valor.toFixed(2));
    setQuantidade(quantidade);

  
    console.log(recx)

    if (recx !== null) {
      dispatch(cartkrn(recx));
      console.log("entrou");
      setTeste(Array.from(recx));
    }
    setEstado2(true);

  
  }

  async function pegarEmail() {
    const userx = await JSON.stringify(localStorage.getItem("pass"));

    const teste = JSON.parse(atob(userx.split(".")[1]));
    setRec(teste);

    return rec["email"];
  }

  async function handleSignIn(rec) {
    // eslint-disable-next-line
    localStorage.removeItem(rec);

    await krn();
  }

  async function handleSignIn1() {
    try {
      /*
      if (estado === true) {
        const email = await pegarEmail();

        let response = await fetch("https://alineleandro.ml/Controller.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pass: "krn",
            email: email,
            items: teste,
          }),
        });

        let json = await response.json();

        let reca = json[0];

        window.location.href =
          "https://pagseguro.uol.com.br/v2/checkout/payment.html?code=" + reca;

        itt.map((item) => {
          localStorage.removeItem(item);
          return item;
        });
      } else {
       
        navigate("/Login");
     
      }
      */
      let response = await fetch('https://graph.facebook.com/v15.0/17841402265662259?fields=business_discovery.username(cnovohamburgo){followers_count,media_count,media}&access_token=EAAGpPS1V6ZB0BAD4OiKbZAC9FDR3Qq9rAZC8AIuji4vWltLulyDiQocrQW18ftCsEnmI1dLDkGUB3F2UqkRFDJ47ZA4vjMil2ZCZCcC5gzKE4q8N0ePbYZArJhoZA0CiqEszGZBWw7K4PzXPht24PZAEv9svvZBUZBbhZC8BN60i8gqpjOkisVUdZAbBgZAYwsPflBystjS1PLhtk6MRLhWQggzeNCl')
      .then(response => response.json())
      .then();

      console.log(response.business_discovery.followers_count)
    } catch (error) {
      console.log("algo errado aqui")
    }
    
  }

    
  return (
      <>
      <Navbar/>
      <Header/>
          
    <div className="containerc">
        <div className="boxc-1">
        <Container>
        <Bottom>
          <Info>
            {teste &&
              teste.map((item) => (
                <Product key={item.id}>
                  <ProductDetail>
                    <Image src={item.img} />
                    <Details>
                      <ProductName>
                        <b>Produto:</b> {item.titulo}
                      </ProductName>
                      <ProductName>
                        <b>Tamanho:</b> {item.tamanho}
                      </ProductName>
                      <ProductId>
                        <b>Ref:</b> {item.ref}
                      </ProductId>
                      <ProductColor color="green" />
                      <ProductSize>quant: {item.total}</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <button className="btnd" onClick={() => handleSignIn(item.id)}><BiTrash/></button>                      
                    </ProductAmountContainer>
                    <ProductPrice>R$ {item.valor}</ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
            <Hr />
          </Info>
        </Bottom>
        
   
    </Container>
        </div>
        <div className="boxc-2">
        
          <SummaryTitle>PEDIDO</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>R$ {soma}</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Quantidade</SummaryItemText>
            <SummaryItemPrice>{quantidade}</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>R$ {soma}</SummaryItemPrice>
          </SummaryItem>
         <button className="btnd2" onClick={handleSignIn1}> FINALIZAR COMPRA</button> 
        
        </div>
    </div>
    </>
  )
}

export default Cart