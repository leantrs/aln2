import styled from "styled-components";
import React, { useState, useEffect } from "react";
import '../css/view.css';
import 'react-toastify/dist/ReactToastify.css';
import listarComprastwo from "../services/listarComprastwo";



const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;



const Viewtwo = () => {
 

  const [teste, setTeste] = useState(null);

  useEffect(
    () => {
  
      krn();
    }, // eslint-disable-next-line
    []
  );



  async function krn() {
    
    const xrec = await listarComprastwo('');
    setTeste(xrec);
    console.log(xrec+"T");

  
   
  }

  
  return (
      <>
    <div className="containerc">
     
        <div className="boxc-2">
        
         
     
        {teste &&
          teste.map((item) =>  ( 
          <SummaryItem>
               <SummaryItemText>{item.itens} </SummaryItemText>
               
               <SummaryItemText>{item.vlr} </SummaryItemText>

               <SummaryItemText> {item.perc} % </SummaryItemText>
          
           
            
          </SummaryItem>       
         
         ))}  
         
        </div>
          
    </div>

        
    
    </>
  )
}

export default Viewtwo