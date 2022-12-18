import React, { useState, useEffect } from "react";
import '../css/view.css';
import 'react-toastify/dist/ReactToastify.css';
import Progressbar from '../components/Progressbar';
import '../css/style.css';
import listarComprasfour from "../services/listarComprasfour";
import buscarProdutoImg from "../services/buscarProdutosImg";



const Viewfour = () => {

 

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
    
    const xrec = await listarComprasfour();
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
                  <th >{item.estabelecimento}</th>
                  <th>{item.vlr}</th>
                  <Progressbar perc={item.perc}/>
                  {/* <th>{item.perc} % </th> */}
              </tr>
            </table>
         
         ))}  

           <table >
              <tr>
                  <th id="aq">Total Gastos: {total}</th>
                  <th id="aqx">Media diaria:  {vlrmedia}</th>
                  
              </tr>
            </table>
         
        </div>
        
          
    </div>

        
    
    </>
  )
}

export default Viewfour