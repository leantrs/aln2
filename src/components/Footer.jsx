import styled from "styled-components";


const Container = styled.div`
  display: flex; 
  background: #db7093;
  color: #fff;
`;

const Logo = styled.h1`
 color: #fff;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

// const SocialContainer = styled.div`
//   display: flex;
// `;

// const SocialIcon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   color: white;
//   background-color: #${(props) => props.color};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 20px;
// `;

const Center = styled.div`
  flex: 1;
  padding: 20px;
 
`;

const Footer = () => {
  // async function handleSignIn() {
  //   // eslint-disable-next-line
  // //  window.location.href = "https://www.instagram.com/alineleandromodas/";
  // }
  return (
    <Container>
      <Center>
        <Desc>
                    
        </Desc>
        <Logo>Aline Leandro Modas</Logo>
        <Desc>Qualidade, ética, comprometimento, respeito e simpatia.</Desc>
        <Desc>
          {" "}
          <br></br>© 2021 Aline Leandro Modas. Todos os direitos reservados.
          ALINE LEANDRO ME, com sede na Rua João Francisco Barbosa 170, Vila
          Nova, Porto Alegre/RS, CEP 91740-530, Fone 41 98538-9509 , inscrita no
          CNPJ sob o n° 71.673.990/0001-77, sociedade executa atividades de Drop
          Shipping em geral e se dedica à pesquisa e desenvolvimento de
          produtos.
        </Desc>
        
      </Center>
    </Container>
  );
};

export default Footer;
