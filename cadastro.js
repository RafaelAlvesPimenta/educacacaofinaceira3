var modal = document.getElementById("modal-termos");
var btn = document.getElementById("termos-link");
var span = document.getElementsByClassName("fechar")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("formCadastro").onsubmit = function(event) {
    event.preventDefault(); 
    setTimeout(function() {
        window.location.href = "index.html"; 
    }, 1000); 
}