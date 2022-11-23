async function listaProdutosPag(page,limite,forn) {
    
    try {
      let response = await fetch("https://alineleandro.ml/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "listaProdutosT",
          page,
          limite,
          forn,
        }),
      });
  
      let json = await response.json();

 
      return json;
    } catch (error) {
    //  console.log("banco de dados desconectado",page,limite);
    }
  }
  
  export default listaProdutosPag;
  