document.querySelector(".open-popup-btn").addEventListener("click", function (event) {
    var nome = document.getElementById("campo__nome").value;
    var email = document.getElementById("campo__email").value;
    var mensagem = document.getElementById("campo__msg").value;
    var popup = document.getElementsByClassName("popup")[0];

    if (nome && email && mensagem) {
        // Todos os campos estão preenchidos, permita o envio do formulário
        document.querySelector(".open-popup-btn").style.display = "none";
        popup.querySelector(".icon").classList.remove("error");
        popup.querySelector(".icon i.fa").classList.remove("fa-times");
        popup.querySelector(".icon i.fa").classList.add("fa-check");
        popup.querySelector(".title").textContent = "Email enviado com Sucesso";
        popup.querySelector(".description").textContent = "Nossa equipe receberá o seu email com suas informações e questionamentos";
        popup.classList.add("active");
    } else {
        // Campos estão vazios, evite o envio do formulário e mostre uma mensagem de erro
        event.preventDefault();
        popup.querySelector(".icon").classList.add("error");
        popup.querySelector(".icon i.fa").classList.remove("fa-check");
        popup.querySelector(".icon i.fa").classList.add("fa-times");
        popup.querySelector(".title").textContent = "Por favor, preencha todos os campos!";
        popup.querySelector(".description").textContent = "";
        popup.classList.add("active");
    }
});

document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
    document.querySelector(".open-popup-btn").style.display = "block";
    document.querySelector(".popup").classList.remove("active");
});
