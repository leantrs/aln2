import React from "react";
import '../css/header.css';


const Header = (props) => {


    return(
         <header >
             <h1>R$ {props.teste}</h1>
         </header>
    )
    
}

export default Header;