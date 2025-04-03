function calcularPoupanca() {
    let valorInicial = parseFloat(document.getElementById("valor").value);
    let tempo = parseInt(document.getElementById("tempo").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    
    if (isNaN(valorInicial) || isNaN(tempo) || isNaN(taxa)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    
    let montante = valorInicial * Math.pow((1 + taxa), tempo);
    document.getElementById("resultado").innerText = `Após ${tempo} anos, o valor será de R$ ${montante.toFixed(2)}`;
}