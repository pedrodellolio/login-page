function login(e) {
  e.preventDefault();
  const username = event.target.username.value.trim();
  const password = event.target.password.value.trim();
  let errors = [];

  if (username !== "Pedro") errors.push(`O usuário ${username} não existe.`);
  if (password !== "1234") errors.push("Senha incorreta.");

  if (errors.length === 0) {
    window.location.replace("/home.html");
  } else {
    const errorMessage = errors.length === 1 ? errors[0] : errors.join(" ");
    alert(errorMessage + " Tente novamente!");
  }
}

function fillForm() {
  document.querySelector("#username").value = "Pedro";
  document.querySelector("#password").value = "1234";
}
