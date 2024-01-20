// seleciona todos documento com classe duvida
var elementosDuvida = document.querySelectorAll('.duvida')

// itera cada elemento com parâmetro: duvida
elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        // add a classe ativa à duvida
        duvida.classList.toggle('ativa');
        
        // puxa a classe duvida e seleciona a img 
        var seta = duvida.querySelector('img');
        
        // classe CSS para girar a seta
        seta.classList.toggle('rotate', duvida.classList[1] == 'ativa');
        seta.classList.toggle('rotate2', duvida.classList[1] == undefined);

        // console.log(duvida.classList);
        // Verificação Prévia para ver se estava funcionando o classList.toggle
    })
})


