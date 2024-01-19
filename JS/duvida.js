var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa');
        
        // puxa a classe duvida e seleciona a img 
        var seta = duvida.querySelector('img');
        
        // classe CSS para girar a seta
        seta.classList.toggle('rotate', duvida.classList[1] == 'ativa');
        seta.classList.toggle('rotate2', duvida.classList[1] == undefined);

        console.log(duvida.classList);
    })
})


