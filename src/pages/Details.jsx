import React,{useState,useEffect} from 'react';
import '../css/Details.css';
import buscarProdutoImg from '../services/buscarProdutosImg';
import Header from '../components/header.jsx';
import buscarProduto from '../services/buscarProdutosSolo';
import buscarProdutoTam from '../services/buscarProdutosTam';
import Navbar from '../components/NavBar';
import { useNavigate } from "react-router-dom";



const Details = () => {
  const [lista, setLista] = useState(null);  
  // eslint-disable-next-line
  const [listaB, setListaB] = useState(null);  
  const[imagem1,setImagem1] = useState(null);
  const[imagem2,setImagem2] = useState(null);
  const[imagem3,setImagem3] = useState(null);
  const[titulo,setTitulo] = useState(null);
  const[descr,setDescr] = useState(null);
  const[forma_do_produto,setForma_do_produto] = useState(null);
  const[ingredientes,setIngredientes] = useState(null);
  const[sobre_este_item,setSobre_este_item] = useState(null);
  const[tipo_de_pele,setTipo_de_pele] = useState(null);
  const[valor,setValor] = useState(null);
  const[tamanho,setTamanho] = useState(null);   
  const[parcela,setParcela] = useState(0);
  const[referencia,setReferencia] = useState(0);
  const[fornecedor,setFornecedor] = useState(0);
  const[id,setId] = useState(0);

  const [itemsf, setItemsf] = useState("");
  const [count, setCount] = useState(1);
  const navigate = useNavigate();


    let slideIndex = 1;
   
   useEffect(() => {

    const url = window.location.href;
    const res = url.split("?");
        
    buscarQ(res[1]);
    
    showSlides(slideIndex);   
    currentSlide(1);
   },  // eslint-disable-next-line
   []);
    

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
 
    async function buscarQ(krn) {
      const rec = await buscarProdutoImg(krn);
      setImagem1(rec[0].imagem);
      setImagem2(rec[1].imagem);
      setImagem3(rec[2].imagem);

      buscarP(rec[0].produtoID);
      buscarR(rec[0].produtoID);

      setListaB(rec);

     }
     async function buscarP(fox) {
      const rec = await buscarProduto(fox);
      
     
      let soma = 0;
     
      setId(rec[0].id);
      setTitulo(rec[0].titulo);
      setDescr(rec[0].descr);
      setForma_do_produto(rec[0].forma_do_produto);
      setIngredientes(rec[0].ingredientes);
      setSobre_este_item(rec[0].sobre_este_item);
      setTipo_de_pele(rec[0].tipo_de_pele);
      setValor(rec[0].valor);
      setReferencia(rec[0].ref);
      setFornecedor(rec[0].fornecedor);

      
      soma = rec[0].valor / 3;
      setParcela(soma.toFixed(2));
      
}

async function buscarR(jul) {
  const rec = await buscarProdutoTam(jul);
  setLista(rec);
}

 async function Tam(rec){
   setTamanho(rec);
      
 }
 async function handleSignIn() {
  // if (tamanho === "") {
  //   //alert("Olá! Escolha o tamanho antes de continuar. ");
  // console.log("Escolha o tamanho antes de continuar");
  // } else {
    try {
     
      let soma = valor * count;

      const itemx = {
        id: id,
        titulo: titulo,
        fornecedor: fornecedor,
        valor: soma,
        valororiginal: Number(valor),
        img: listaB[0].imagem,
        total: count,
        tamanho,
        ref: referencia,
      };
       
      console.log(itemx)
      
      const armaz = JSON.stringify(itemx);
      localStorage.setItem(id, armaz);

      navigate("/Cart");
    } catch (error) {
      console.log(titulo);
    }
  // }
}

    return(
      <>
      <Navbar/>
      <Header/>
           <div className="container">
           <div className="box-1b">
                
<div className="slideshow-container">
 

<div className="mySlides fade">
  <img className='cimg' src={imagem1} alt="" />
<div className="text">
  <p> Apenas: 3x de: {parcela}</p>
  <p> Total: {valor}</p>
  </div>
</div>

<div className="mySlides fade">
<img  className='cimg' src={imagem2} alt="" />
<div className="text">
<p> Apenas: 3x de: {parcela}</p>
  <p> Total: {valor}</p>
</div>
</div>

<div className="mySlides fade">
<img  className='cimg' src={imagem3} alt="" />
<div className="text">
<p> Apenas: 3x de: {parcela}</p>
  <p> Total: {valor}</p>
</div>
</div> 


<div className='teste' >

  
<span className="dot" onClick={(event) => currentSlide(1)}>
    <img className='cimg-2' src={imagem1} alt="" />
</span>
<span className="dot" onClick={(event) => currentSlide(2)}>
    <img className='cimg-2' src={imagem2} alt="" />
</span>
<span className="dot" onClick={(event) => currentSlide(3)}>
    <img className='cimg-2' src={imagem3} alt="" />
</span>
</div>
</div>
            </div>
            <div className="box-2b">
                          <div className="testando">
                            <h1>{titulo}</h1>
                            <p>{descr}</p>
                            <p>{forma_do_produto}</p>
                            <p>{ingredientes}</p>
                            <p>{sobre_este_item}</p>
                            <p>{tipo_de_pele}</p>
                                          <div className="tam">
                                            <p className='escolher'>Escolha o tamanho:</p>
                                            {lista &&
                                          lista.map((item) =>     
                                            <span onClick={(event) => Tam(item.tamanho)} className='vnss'>{item.tamanho}</span>
                                          )}
                                            <span className='lcn'>{tamanho}</span>
                                          </div>
                                   <button className='btn' onClick={handleSignIn}>Adicionar Carrinho</button>   
                            </div>
                  
                                   
                            
            </div>

        </div>
        </>
)

}

export default Details;
