async function authServices(user, password) {
  let response = await fetch("https://alineleandro.ml/Controller.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: user,
      password: password,
      pass: "login",
    }),
  });

  let json = await response.json();

  return json;
}

export default authServices;
