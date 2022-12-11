import React, { useState, useEffect } from "react";
import '../css/viewthree.css';
import 'react-toastify/dist/ReactToastify.css';
import listarComprasthree from "../services/listarComprasthree";




const Viewthree = () => {

 

  const [teste, setTeste] = useState(null);
  
  useEffect(
    () => {

      const url1 = window.location.href;
      const res1 = url1.split("?");
  
      krn(res1[1]);
    }, // eslint-disable-next-line
    []
  );



  async function krn(rec) {
    
    const xrec = await listarComprasthree(rec);
    setTeste(xrec);
    
  }

  
  return (
      <>
    <div className="containerc">
     
        <div className="boxc-2">
  
        {teste &&
          teste.map((item) =>  ( 

  
            <table >
            {item.estabelecimento} - {item.itens} - {item.datual}        
              <tr>
                 
                  <th>{item.vlr}</th>
                  <th>{item.quant}</th>
                  <th>{item.obs}</th>
              </tr>
            </table>
         
         ))}  
         
        </div>
          
    </div>

        
    
    </>
  )
}

export default Viewthree