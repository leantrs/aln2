import React, { useState, useEffect } from "react";
import '../css/view.css';
import 'react-toastify/dist/ReactToastify.css';
import listarCompras from "../services/listarCompras";
import buscarProdutoImg from "../services/buscarProdutosImg";




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
   

    const zrec = await buscarProdutoImg();
    setVlrmedia(zrec[0].imagem);
    setTotal(zrec[0].total);

  }

  
  return (
      <>
      
     
      
    <div className="containerc">
     
        <div className="boxc-2">
        
         
     
        {teste &&
          teste.map((item) =>  ( 


            <table >
              <tr>
                  <th>{item.datual}</th>
                  <th>{item.vlr}</th>
                  <th>{item.estabelecimento}</th>
              </tr>
            </table>
          
      
         
         ))}  
        
        </div>
        <table >
              <tr>
                  <th>Total Gastos: {total}</th>
                  <th>Media diaria:  {vlrmedia}</th>
                  
              </tr>
            </table>
            
    </div>
   
        
    
    </>
    
  )
}

export default View