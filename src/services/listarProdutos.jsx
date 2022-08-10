async function listaProdutos(tam) {
    try {
      let response = await fetch("http://localhost/aln/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "listaProdutos",
          tam,
        }),
      });
  
      let json = await response.json();
  
      return json;
    } catch (error) {
      console.log("banco de dados desconectado");
    }
  }
  
  export default listaProdutos;
  