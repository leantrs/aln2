async function listaProdutosy() {
    try {
      let response = await fetch("https://alineleandro.com.br/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "bnc",
          
        }),
      });
  
      let json = await response.json();
      const xrec  = JSON.parse(json);

       // console.log(xrec[1].testte);
        
        //  const recz = xrec.map((item) => {
        //    console.log(item.testte);
        //  });
  
      return xrec;
    } catch (error) {
      console.log("banco de dados desconectado");
    }
  }
  
  export default listaProdutosy;
  