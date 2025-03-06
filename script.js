// Alternar entre abas
function openTab(event, tabName) {
    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-button");

    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Contadores dos bichos
let contadoresBichos = {};

function selecionarBicho(bicho) {
    if (!contadoresBichos[bicho]) {
        contadoresBichos[bicho] = 0;
    }
    contadoresBichos[bicho]++;
    atualizarContadores("contadores-bichos", contadoresBichos);
}

// Atualizar contadores
function atualizarContadores(id, contadores) {
    let lista = document.getElementById(id);
    lista.innerHTML = "";
    for (let item in contadores) {
        let li = document.createElement("li");
        li.textContent = `${item}: ${contadores[item]}`;
        lista.appendChild(li);
    }
}

// Gerador de Milhares e Centenas
function gerarMilharesCentenas() {
    let milhar = document.getElementById("milhar").value;
    let centena = document.getElementById("centena").value;

    document.getElementById("milhares-geradas").textContent = `Milhar Gerada: ${milhar}X`;
    document.getElementById("centenas-geradas").textContent = `Centena Gerada: ${centena}X`;
}
