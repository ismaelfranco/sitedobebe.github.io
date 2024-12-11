// Função para confirmar presença
function confirmarPresenca() {
    alert("Obrigado por confirmar sua presença!");
    document.getElementById("confirmar").disabled = true;
}

// Função para avançar para a segunda etapa de escolha de presente
function avancarEtapa() {
    document.getElementById("etapa-1").style.display = "none";
    document.getElementById("etapa-2").style.display = "block";
}

// Função para finalizar a escolha de presente
function finalizarEscolha() {
    const fraldaEscolhida = document.getElementById("fraldas").value;
    const presenteEscolhido = document.getElementById("outros-presentes").value;
    alert(`Você escolheu: \nFralda: ${fraldaEscolhida} \nPresente: ${presenteEscolhido}`);
}
