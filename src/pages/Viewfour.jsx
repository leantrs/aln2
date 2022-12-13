import React, { useState, useEffect } from "react";
import '../css/view.css';
import 'react-toastify/dist/ReactToastify.css';
import Progressbar from '../components/Progressbar';
import '../css/style.css';
import listarComprasfour from "../services/listarComprasfour";



const Viewfour = () => {

 

  const [teste, setTeste] = useState(null);

  useEffect(
    () => {
  
      krn();
    }, // eslint-disable-next-line
    []
  );



  async function krn() {
    
    const xrec = await listarComprasfour();
    setTeste(xrec);


  
   
  }

  return (
      <>
    <div className="containerc">
     
        <div className="boxc-2">
        
         
     
        {teste &&
          teste.map((item) =>  ( 


            <table >
              <tr>
                  <th >{item.estabelecimento}</th>
                  <th>{item.vlr}</th>
                  <Progressbar perc={item.perc}/>
                  {/* <th>{item.perc} % </th> */}
              </tr>
            </table>
         
         ))}  
         
        </div>
          
    </div>

        
    
    </>
  )
}

export default Viewfour