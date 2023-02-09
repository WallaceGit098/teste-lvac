const campo = document.querySelector('input[type=tel]')

const teclado = document.querySelectorAll('.teclado > input')

/*for (let contador = 0; contador < teclado.length; contador++) {

    const tecla = teclado[contador]

    tecla.onclick = function () {
        campo.value += tecla.value
    }
}
    */
for (let contador = 0; contador < teclado.length; contador++) {

    const tecla = teclado[contador]
    
    tecla.onclick = function () {
        campo.value += tecla.value
        }

/*    tecla.onkeydown = function(evento) {
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa'); 
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }*/
    tecla.onkeyDown = function(evento){
        if (evento.code === Enter || evento.code === Space)
          tecla.classList.add('ativa')
       }
       tecla.onkeyUp = function(){
         tecla.classList.remove('ativa')
       }
}