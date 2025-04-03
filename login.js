document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        
        if (email === "" || senha === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        
        if (email === "cliente@exemplo.com" && senha === "123456") {
            alert("Login bem-sucedido! Redirecionando para a página inicial.");
            window.location.href = "Home.html";
        } else {
            alert("E-mail ou senha incorretos. Tente novamente.");
        }
    });
});