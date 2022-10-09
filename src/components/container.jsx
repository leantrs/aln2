import React,{useState,useEffect} from 'react';
import listaProdutos from '../services/listarProdutos';
import '../css/container.css';
import { useNavigate } from "react-router-dom";
import Paginacao from '../services/paginacao';
import signIn from "../actions/listaActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Container = () => {
    const [lista, setLista] = useState(null);
    const navigate = useNavigate();
    const[tam2,setTam2] = useState(null);
    const[fornecedor,setFornecedor] = useState("");
    const todos = useSelector((state) => state.lista.listax);
    const dispatch = useDispatch();
    

    useEffect(
        () => {    
         
          const krn = localStorage.getItem('fornecedor');        

          if(krn == null){
             buscarP(0,"");      
             buscarQ(""); 
             console.log('a')
             
            
          }else{

             
           // setLista(todos);
  
           
            const tarefa = JSON.parse(krn);            
            
            setFornecedor(tarefa.params);   

            if(todos.id !== 1){
              console.log('b')

              buscarP(0,todos[0].fornecedor)
            }else{
              console.log('c')
              buscarP(0,tarefa.params);      
            }            
         
            
            buscarQ(tarefa.params);
            
                   
          }         
        }, // eslint-disable-next-line
        []
      );

   
   async function buscarQ(tam){

    const rec = await listaProdutos(tam);
    let total = rec.length;
    setTam2(Math.round((total -1) / 10));
   }    
   
   
   async function buscarP(tre,forn) {      
           
           const teste = await Paginacao(tre,10,forn);
           setLista(teste);
           await dispatch(signIn(teste));
     }

    
  async function handleSignIn(rec) {

    // eslint-disable-next-line
    navigate("/Details" + "?" + rec);
  }

  function teste(params) {
       
    buscarP(params,fornecedor);  
   
  }
   
    return(
        <div className="containerb">
             <div className="box-1">
           
                  
             {lista &&
          lista.map((item) =>  ( 
                  
                  <div className="products-image">

                          <div className="vimagem">
                                    <img src={item.img} alt="" className="img" />
					                <h3>{item.title}</h3>
								    <p>{item.como_usar}</p>
                    <p>ref: {item.ref}</p>
								    <p>3x de<span className="decoration">{(item.valor / 3).toFixed(2)}</span></p>
								    <p>total R$<span className="bold">{item.valor}</span></p>
								    <button className="btn-2" onClick={(event) => handleSignIn(item.id)}>COMPRAR</button>  
                                                   
								 </div>                   
                   </div>
             
             
             ))}   
               </div>
               <div className="box-2">

                      {tam2 &&
                        Array(tam2).fill('').map((_,index) => {
                          return <button className='pag' onClick={(event) => teste((index) * 10)}>
                            {index + 1}
                          </button>
                        })
                      }               
<span></span>
              </div>
              
   </div>


    )

}

export default Container;
