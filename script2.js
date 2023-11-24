const ground = document.getElementById('tablero')
const combinaciones = [[0, 1, 2],[0, 0, 0],[1, 1, 1],[2, 2, 2],[2, 1, 0]]
//const combinaciones = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
const registro = ['','','','','','','','','']
let celdas = document.querySelectorAll('.celda')
let contador = 0
celdas.forEach(celda => {
    celda.addEventListener('click', detectarCelda);
  });

function detectarCelda(event){
    contador++
    const celdaClickeada = event.target
    console.log(celdaClickeada)
    let x = document.createElement('img')
    if(contador%2 == 0){
        x.src = "kan.png"
    }
    else{
        x.src = "linux.png"
    }
    celdaClickeada.appendChild(x)
    const indiceCelda = Array.from(celdaClickeada.parentNode.children).indexOf(celdaClickeada)
    console.log(indiceCelda)
    
}  

function validarGanador(){
    
}
//window.addEventListener('load', setTablero)

/*function setTablero(){
    for(let i = 0; i < 9; i++ ){
        let casilla = document.createElement('div')
        casilla.classList.add('casilla')
        casilla.id = i.toString()
        ground.appendChild(casilla)
        
    }
}*/

