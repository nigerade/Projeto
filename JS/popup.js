document.getElementById("open-popup-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    var nome = document.getElementById("campo__nome").value;
    var email = document.getElementById("campo__email").value;
    var mensagem = document.getElementById("campo__msg").value;
    var popup = document.getElementsByClassName("popup")[0];

    if (nome && email && mensagem) {
        document.getElementById("open-popup-btn").style.display = "none";
        popup.querySelector(".icon").classList.remove("error"); // Remove o estilo de erro
        popup.querySelector(".icon i.fa").classList.remove("fa-times"); // Remove o ícone de erro
        popup.querySelector(".icon i.fa").classList.add("fa-check"); // Adiciona o ícone de check
        popup.querySelector(".title").textContent = "Email enviado com Sucesso";
        popup.querySelector(".description").textContent = "Nossa equipe receberá o seu email com suas informações e questionamentos";
        popup.classList.add("active");
    } else {
        popup.querySelector(".icon").classList.add("error"); // Adiciona o estilo de erro
        popup.querySelector(".icon i.fa").classList.remove("fa-check"); // Remove o ícone de check
        popup.querySelector(".icon i.fa").classList.add("fa-times"); // Adiciona o ícone de erro
        popup.querySelector(".title").textContent = "Por favor, preencha todos os campos!";
        popup.querySelector(".description").textContent = "";
        popup.classList.add("active");
    }
});

document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
    document.getElementById("open-popup-btn").style.display = "block";
    document.getElementsByClassName("popup")[0].classList.remove("active");
});
