async function listarComprasthree(rec) {

console.log(rec);

  try {
    let response = await fetch("https://alineleandro.com.br/Controller.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pass: "produtosTamthree",
        fornc: rec,
      }),
    });

    let json = await response.json();

      return json;
  } catch (error) {
   console.log("banco de dados desconectado");
  }
}

export default listarComprasthree;
