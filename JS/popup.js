// cria funcao para saber se o usuário clicou para enviar o formulário 
document.querySelector(".open-popup-btn").addEventListener("click", function (event) {
    // declara var para saber o valor dos campos do formulario
    var nome = document.getElementById("campo__nome").value;
    var email = document.getElementById("campo__email");
    var mensagem = document.getElementById("campo__msg").value;
    var popup = document.getElementsByClassName("popup")[0];

    // validacao dos campos do formulario
    if (nome && email.validity.valid && mensagem) {
        // Todos os campos estão preenchidos, permite o envio do formulário
        document.querySelector(".open-popup-btn").style.display = "none";
        popup.querySelector(".icon").classList.remove("error");
        popup.querySelector(".icon img").src = "../IMGS/sucesso.png";
        popup.querySelector(".title").textContent = "Email enviado com Sucesso!";
        popup.querySelector(".description").textContent = "Nossa equipe receberá o seu email com suas informações e questionamentos";
        popup.classList.add("active");
    } else {
        // Campos estão vazios, evita o envio do formulário e mostra uma mensagem de erro
        event.preventDefault();
        popup.querySelector(".icon").classList.add("error");
        popup.querySelector(".icon img").src = "../IMGS/x.png";
        popup.querySelector(".title").textContent = "Por favor, preencha todos os campos!";
        popup.querySelector(".description").textContent = "";
        popup.classList.add("active");
    }
});

// caso o usuário clique no sair do popup muda a classe e o popup some 
document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
    document.querySelector(".open-popup-btn").style.display = "block";
    document.querySelector(".popup").classList.remove("active");
});
