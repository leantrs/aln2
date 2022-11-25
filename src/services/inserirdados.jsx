async function inserirdados(estab,itens,valor,quant,obs) {

  
  try {
    let response = await fetch("https://alineleandro.com.br/Controller.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pass: "registrar",
        xestab: estab,
        xitens: itens,
        xvalor: valor,
        xquant: quant,
        xobs: obs,

      }),
    });

    let json = await response.json();

    console.log(json);

     return json;

  } catch (error) {

    
  }
}

export default inserirdados;
