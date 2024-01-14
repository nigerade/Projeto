const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);
});

// declarando variaveis
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let header2 = document.querySelector('#header');

// ao clicar no menu
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    header2.classList.toggle('header2'); 
    // muda a classe para header2 e puxa do css
    // ao clicar no menu hamburguer não deixa o fundo do logo ficar transparent
};

// ao scrollar depois de ter clicado no menu
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
    header2.classList.remove('header2');
    // tira a classe header2 para parar de puxar o css dessa classe e voltar a ficar transparent
};