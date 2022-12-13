import React, { useState, useEffect } from "react";
import '../css/view.css';
import 'react-toastify/dist/ReactToastify.css';
import listarComprastwo from "../services/listarComprastwo";
import { useNavigate } from "react-router-dom";
import Progressbar from '../components/Progressbar';
import '../css/style.css';



const Viewtwo = () => {
  const navigate = useNavigate();
 

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


  
   
  }
async function handleSignIn(rec){

  navigate("/Viewthree?"+rec);

}
  
  return (
      <>
    <div className="containerc">
     
        <div className="boxc-2">
        
         
     
        {teste &&
          teste.map((item) =>  ( 


            <table >
              <tr>
                  <th onClick={() => handleSignIn(item.itens)}>{item.itens}</th>
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

export default Viewtwo