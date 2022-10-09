import React from 'react';
import Container from '../components/container';
import Header from '../components/header';
import NavBar from '../components/NavBar';
import Barralogin from '../components/barralogin';
import Footer from '../components/Footer';


const Home = () => {
   
   
    return(
        <>
        <NavBar/>
        <Header/> 
        <Barralogin/> 
        <Container/> 
        <Footer/>
        </>
    )

}

export default Home;
