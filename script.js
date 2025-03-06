function fazerLogin() {
  const user = document.getElementById("userInput").value;
  const pass = document.getElementById("passInput").value;
  if (user === "admin" && pass === "123") {
    document.getElementById("loginArea").style.display = "none";
    document.getElementById("tabs").style.display = "block";
  } else {
    alert("Usuário ou senha incorretos! Tente admin / 123");
  }
}

function abrirAba(nome) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.getElementById("tab-" + nome).classList.add("active");
}

function gerarMilharesCentenas() {
  document.getElementById("milharesGeradas").innerText = "Milhares Geradas Aqui";
  document.getElementById("centenasGeradas").innerText = "Centenas Geradas Aqui";
}

function copiarMilhares() {
  alert("Milhares copiadas!");
}

function copiarCentenas() {
  alert("Centenas copiadas!");
}
