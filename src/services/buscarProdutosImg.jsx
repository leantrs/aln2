async function buscarProdutoImg(rec) {
  try {
    let response = await fetch("https://trs2500.site/Controller.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pass: "produtosImg",
        fornc: rec,
      }),
    });

    let json = await response.json();

    return json;
  } catch (error) {
    //console.log("banco de dados desconectado");
  }
}

export default buscarProdutoImg;
