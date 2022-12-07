import React, { useState, useEffect } from "react";
import '../css/view.css';
import 'react-toastify/dist/ReactToastify.css';
import listarComprastwo from "../services/listarComprastwo";




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


            <table >
              <tr>
                  <th>{item.itens}</th>
                  <th>{item.vlr}</th>
                  <th>{item.perc} % </th>
              </tr>
            </table>
         
         ))}  
         
        </div>
          
    </div>

        
    
    </>
  )
}

export default Viewtwo