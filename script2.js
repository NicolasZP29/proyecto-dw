const ground = document.getElementById('tablero')
const combinaciones = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
let registro = ['','','','','','','','','']
let celdas = document.querySelectorAll('.celda')
let contador = 0
celdas.forEach(celda => {celda.addEventListener('click', detectarCelda)})

function reinicio(){
    hayganador = false
    contador = 0
    celdas.forEach(celda => {
        
        while (celda.firstChild) {
            celda.removeChild(celda.firstChild);
        }
    })
    registro.fill('')

}

function detectarCelda(event){
    contador++
    const celdaClickeada = event.target
    if(contador%2 == 0){
        const indiceColumna = Array.from(celdaClickeada.parentNode.children).indexOf(celdaClickeada)
        if(registro[indiceColumna] == ''){
            let x = document.createElement('img')
            x.src = "kan.png"
            registro[indiceColumna] = 'X'
            celdaClickeada.appendChild(x)
        }else{
            alert('Casilla ocupada')
            if(contador > 0){
                contador--
            }
        }
       
    }
    else{
        const indiceColumna = Array.from(celdaClickeada.parentNode.children).indexOf(celdaClickeada)
        if(registro[indiceColumna] == ''){
            let x = document.createElement('img')
            x.src = "linux.png"
            celdaClickeada.appendChild(x)
            registro[indiceColumna] = 'O'
        }else{
            alert('Casilla ocupada')
            if(contador > 0){
                contador--
            }
        }
        
    }
    setTimeout(() => {validarGanador()}, 300);
    
}  

function validarGanador(){
    let hayGanador = false
    for(let i = 0; i < combinaciones.length; i++){
        const ganadora = combinaciones[i]
        let posicion1 = registro[ganadora[0]]
        let posicion2 = registro[ganadora[1]]
        let posicion3 = registro[ganadora[2]]
    if(posicion1 != '' && posicion1 == posicion2 && posicion2 == posicion3){
        hayGanador = true;
        alert('HAY GANADOR')
        reinicio()
    }    
        
    }if(contador == 9){
        alert('HAY EMPATE')
        reinicio()
    }
}

