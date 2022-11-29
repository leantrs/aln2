//import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import '../css/view.css';
import Header from '../components/header';
import 'react-toastify/dist/ReactToastify.css';
import listarCompras from "../services/listarCompras";
import buscarProdutoImg from "../services/buscarProdutosImg";



const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;




const View = () => {

 

  const [teste, setTeste] = useState(null);
  const [vlrmedia,setVlrmedia] = useState(0);
  const [total,setTotal] = useState(0);
 
 
  

  useEffect(
    () => {
  
      krn();
    }, // eslint-disable-next-line
    []
  );



  async function krn() {
    
    const xrec = await listarCompras();
    setTeste(xrec);
    console.log(xrec);

    const zrec = await buscarProdutoImg();
    setVlrmedia(zrec[0].imagem);
    setTotal(zrec[0].total);

    console.log(zrec);
    
   
  }

  
  return (
      <>
      
      <Header/>
      
    <div className="containerc">
     
        <div className="boxc-2">
        
         
     
        {teste &&
          teste.map((item) =>  ( 
          <SummaryItem>
               <SummaryItemText>{item.datual} | R$ {item.vlr} </SummaryItemText>
               
               <SummaryItemText>{item.estabelecimento}</SummaryItemText>
          
           
            
          </SummaryItem>       
         
         ))}  
         
        </div>
          
    </div>
     <div className = "btnde"> Total de Gastos - R$ {total}</div>
     <div className = "btnde"> Media diaria - R$ {vlrmedia}</div>
        
    
    </>
  )
}

export default View