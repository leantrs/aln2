import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState, useEffect } from "react";
import '../css/Cart.css';
import Header from '../components/header';
import {BiTrash} from 'react-icons/bi';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import listaitens from '../services/listarProdutos';
import listaestab from '../services/listarProdutosy'
import inserirdados from "../services/inserirdados";
import { useNavigate } from "react-router-dom";





const Container = styled.div`
background: #333;
height: 100vh;
`;




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


const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`;

const ProductName = styled.span``;

const ProductId = styled.span``;





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

  
  const[valor,setValor] = useState();
  const[estab,setEstab] = useState(null);   
  const[itens,setItens] = useState(null);
  const[quant,setQuant] = useState();
  const[obs,setObs] = useState("");
  const[listaitem,setListaitem] =  useState(null);
  const[listalocais,setListalocais] = useState(null);


  const [teste, setTeste] = useState(null);
  const [soma, setSoma] = useState(0);
  
  const [estado2, setEstado2] = useState(false);
  const [quantidade, setQuantidade] = useState(0);
 
  

  
  const [itt, setItt] = useState(null);
 

  const userx = JSON.stringify(localStorage.getItem("pass"));
  const navigate = useNavigate();
  

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
        
        
      }
    }, // eslint-disable-next-line
    [estado2 === true]
  );

  async function krn() {
    const keys = Object.keys(localStorage);
    const rec = keys.filter(checkar);

    const xrec = await listaitens();
    setListaitem(xrec);

   


    const xrecy = await listaestab();
    setListalocais(xrecy);
   

    setItt(rec);
    function checkar(k) {
      return k !== "pass" && k !== "fornecedor"  ;
    }


   
    const recx = rec.map((item) => {
      return JSON.parse(localStorage.getItem(item));
    });



    let valor = 0;
    let quantidade = 0;
    let total = 0;

    recx.forEach((item) => {
      console.log(item);
      if(Number(item.quant) > 1 ){
        valor = Number(item.valor) * 1; 
      }else{
      valor = Number(item.valor) * Number(item.quant);
      }
      quantidade = quantidade + Number(item.quant); 
      total += valor;       
    });

   


    setSoma(total.toFixed(2));
    setQuantidade(quantidade);

  
  
    if (recx !== null) {
  
   //   console.log("entrou");
      setTeste(Array.from(recx));
    }
    setEstado2(true);

  
  }

  async function lrz() {
    const keys = Object.keys(localStorage);
    const rec = keys.filter(checkar);

    setItt(rec);
    function checkar(k) {
      return k !== "pass" && k !== "fornecedor"  ;
    }


    const recx = rec.map((item) => {
      return JSON.parse(localStorage.getItem(item));
    });


   recx.map((item) => {
      const recy = inserirdados(item.estab,item.itens,item.valor,item.quant,item.obs);
      return recy;   
      
    });
    

    toast.success("cadastro realizado com sucesso");

    itt.map((item) => {
               localStorage.removeItem(item);
              return item;
             });
      krn();
   
  }

  async function handleSignIn() {
      try {
       
         let soma = valor * quant;

        
        const itemx = {
           id: Math.floor(Math.random() * 10000),
           estab: estab,
           itens: itens,
           valor: soma,
           quant: quant,
           obs: obs,
        };
         
    //   console.log(itemx)
        
        const armaz = JSON.stringify(itemx);
        localStorage.setItem(itemx.id, armaz);

        setItens('');
        setValor('');
        setQuant('');
        setObs('');
        krn();
  
       
      } catch (error) {
  
      }
  
  }

  async function handleSignIn3() {
    try {
        lrz();

     
    } catch (error) {
  
    }
  
}
async function handleSignIn4() {
  try {
    navigate("/View");
   
  } catch (error) {
  
  }

}
async function handleSignIn5() {
  try {
    navigate("/Viewtwo");
   
  } catch (error) {

  }

}

async function handleSignIn6() {
  try {
    navigate("/Viewfour");
   
  } catch (error) {

  }

}
  async function handleSignIn1(item) {

    localStorage.removeItem(item);
    krn();

  }
    
  return (
      <>
      
      <Header teste ={soma}/>
      <Container>
    <div className="containerc">
        <div className="boxc-2">
       
       
             <select
              className= "teste"
              type="text"
              id="estabelecimento"
              name="estabelecimento"
            
              onChange={(event) => setEstab(event.target.value)}
              >
                 {listalocais &&
              listalocais.map((item) => (<option>{item.estabelecimento}</option>))}
                </select>

                <select
              className= "teste"
              type="text"
              id="itens"
              name="itens"
             
              value={itens}
              onChange={(event) => setItens(event.target.value)}
              >
                 {listaitem &&
              listaitem.map((item) => (<option>{item.testte}</option>))}
                
                </select>
             
              <input  
               className= "teste"
              type="number"
              id="quant"
              name="valor"
              placeholder="valor"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
              />
        <input 
               className= "teste"
              type="number"             
              placeholder="quant"
              value={quant}
              onChange={(event) => setQuant(event.target.value)}
         />
         
         <input 
               className= "teste"
              type="text"             
              placeholder="OBSERVACAO"
              value={obs}
              onChange={(event) => setObs(event.target.value)}
         />
         

         <button className="btnd2" onClick={() => handleSignIn()}>INSERIR</button>    
       

        <Bottom>
          <Info>
            {teste &&
              teste.map((item) => (
                <Product key={item.id}>
                  <ProductDetail>

                    <Details>
                      <ProductName>
                        <b>Produto:</b> {item.estab}
                      </ProductName>
                      <ProductName>
                        <b>Item:</b> {item.itens}
                      </ProductName>
                      <ProductName>
                        <b>Quant:</b> {item.quant}
                      </ProductName>
                      <ProductId>
                        <b>Obs:</b> {item.obs}
                      </ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <button className="btnd" onClick={() => handleSignIn1(item.id)}><BiTrash/></button>                      
                    </ProductAmountContainer>
                    <ProductPrice>R$ {item.valor}</ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
            <Hr />
          </Info>
        </Bottom>
        
   
  
        </div>
        <div className="boxc-2">

        <SummaryTitle>TOTAL</SummaryTitle>
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
         <button className="btnd2" onClick={handleSignIn3}> INSERIR BD</button> 
         <button className="btnd2" onClick={() => handleSignIn4()}>LOCCAIS</button>  
         <button className="btnd2" onClick={() => handleSignIn5()}>ITENS</button>  
         <button className="btnd2" onClick={() => handleSignIn6()}>PROGRESS</button>  




        
         <ToastContainer />
        </div>
       
    </div>
    </Container>
    </>
  )
}

export default Cart