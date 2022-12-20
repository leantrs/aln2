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
  const [ordem,setOrdem] = useState('vlr desc');
  const [desc,setDesc] = useState('ORDEM 1');

  useEffect(
    () => {
  
      krn(ordem);
    }, // eslint-disable-next-line
    []
  );



  async function krn(rec) {
    
    const xrec = await listarComprastwo(rec);
    setTeste(xrec);
   
  }
async function handleSignIn(rec){

  navigate("/Viewthree?"+rec);

}
async function handleSignIn2(){

  if(ordem==='vlr desc'){
    setOrdem('itens asc');
    setDesc('ORDEM 2');
    krn('itens asc');
} else{
   setOrdem('vlr desc');
   setDesc('ORDEM 1');
   krn('vlr desc');
   
}

  

}
  
  return (
      <>
    <div className="containerc">

   
     
        <div className="boxc-2">
        
        <button className="btnd2" onClick={handleSignIn2}> {desc}</button> 
     
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