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

      return xrec;
    } catch (error) {

    }
  }
  
  export default listaProdutosy;
  