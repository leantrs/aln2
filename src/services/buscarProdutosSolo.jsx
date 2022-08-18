async function buscarProduto(rec) {
    try {
      let response = await fetch("https://alineleandro.ml/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "produtosolo",
          fornc: rec,
        }),
      });
  
      let json = await response.json();
  
      return json;
    } catch (error) {
      console.log("banco de dados desconectado");
    }
  }
  
  export default buscarProduto;
  