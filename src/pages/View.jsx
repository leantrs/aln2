//import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import '../css/view.css';
import Header from '../components/header';
import 'react-toastify/dist/ReactToastify.css';
import listarCompras from "../services/listarCompras";


const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;


const View = () => {

 

  const [teste, setTeste] = useState(null);
 
 
  

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

   
  }

  
  return (
      <>
      
      <Header/>
      
    <div className="containerc">
        
        <div className="boxc-2">
        
         
     
        {teste &&
          teste.map((item) =>  ( 
          <SummaryItem>
        
            <SummaryItemText>{item.estabelecimento}</SummaryItemText>
            <SummaryItemText>{item.itens}</SummaryItemText>
            <SummaryItemText>{item.datual}</SummaryItemText>
            <SummaryItemPrice>R$ {item.vlr}</SummaryItemPrice>
            
          </SummaryItem>       
         
         ))}  
         
        </div>
    </div>
    
    </>
  )
}

export default View