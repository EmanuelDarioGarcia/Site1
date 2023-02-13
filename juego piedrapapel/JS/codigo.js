function aleatoreidad (min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
let eleccionJugador = 0
let eleccionPC = 0
let ganadas = 0       
let perdidas = 0
function arrancaeljuego(){
    let sectionreiniciar = document.getElementById('reiniciar')
    sectionreiniciar.style.display = 'none'
    let botonreiniciar=document.getElementById('boton-reiniciar')
    botonreiniciar.addEventListener('click', reiniciarjuego)
    elecciondeljugador()
    let sectionmensajes = document.getElementById('mensajes')
    sectionmensajes.style.display = 'flex'
}

function elecciondeljugador() {
    let botonPiedra=document.getElementById('boton-piedra')
    botonPiedra.addEventListener('click',eleccionPiedra)
    let botonPapel=document.getElementById('boton-papel')
    botonPapel.addEventListener('click',eleccionPapel)
    let botonTijera=document.getElementById('boton-tijera')
    botonTijera.addEventListener('click',eleccionTijera)
}
function eleccionPiedra(){
    eleccionJugador= 'PIEDRA'
    elecciondelcpu()
    let spaneleccionjugador=document.getElementById('eleccion-jugador')
    spaneleccionjugador.innerHTML= 'PIEDRA'    
}
function eleccionPapel(){
    eleccionJugador = 'PAPEL'
    elecciondelcpu()
    let spaneleccionjugador=document.getElementById('eleccion-jugador')
    spaneleccionjugador.innerHTML= 'PAPEL'
}
function eleccionTijera(){
    eleccionJugador = 'TIJERA'
    elecciondelcpu()
    let spaneleccionjugador=document.getElementById('eleccion-jugador')
    spaneleccionjugador.innerHTML= 'TIJERA'
}
function elecciondelcpu(){
    eleccionPC = aleatoreidad (1, 3)     
    let spaneleccioncpu=document.getElementById('eleccion-cpu')
    if(eleccionPC==1){
        spaneleccioncpu.innerHTML='PIEDRA'
    } else if(eleccionPC==2){
        spaneleccioncpu.innerHTML='PAPEL'
    } else if(eleccionPC==3){
        spaneleccioncpu.innerHTML='TIJERA'}
    combate()
}
function combate() {
    let spanGanadas=document.getElementById('ganadas')
    let spanPerdidas=document.getElementById('perdidas')
    let spanresultadoparcial=document.getElementById('resultado-parcial')
    if (eleccionJugador == 'PIEDRA' && eleccionPC== 1) {
        spanresultadoparcial.innerHTML= 'EMPATE PAAA, VAMO DEVUELTA'
    } else if (eleccionJugador == 'PAPEL' && eleccionPC== 2) {
        spanresultadoparcial.innerHTML= 'EMPATE PAAA, VAMO DEVUELTA'
    } else if (eleccionJugador == 'TIJERA' && eleccionPC== 3) {
        spanresultadoparcial.innerHTML= 'EMPATE PAAA, VAMO DEVUELTA'
    } else if (eleccionJugador == 'PAPEL' && eleccionPC== 1) {
        ganadas = ganadas + 1
        spanGanadas.innerHTML=ganadas
        spanresultadoparcial.innerHTML= 'LPM, GANASTE!'
    } else if (eleccionJugador == 'TIJERA' && eleccionPC== 2) {
        ganadas = ganadas + 1
        spanGanadas.innerHTML=ganadas
        spanresultadoparcial.innerHTML= 'QUE CULO!!! GANASTE!'
    } else if (eleccionJugador == 'PIEDRA' && eleccionPC== 3) {
        //('GANASTE') 
        ganadas = ganadas + 1
        spanGanadas.innerHTML=ganadas
        spanresultadoparcial.innerHTML= 'QUE ORTENCIO, GANASTE!'
    } else {
        //('PERDISTE.')
        perdidas = perdidas + 1
        spanPerdidas.innerHTML=perdidas
        spanresultadoparcial.innerHTML= 'UOPAA, PERDISTE'
     }
     revisarVictoria()
}
function revisarVictoria(){
    if (ganadas == 5 ){
        crearresultadofinal('GANASTE!!!!')
    }
    if (perdidas == 5 ) {
        crearresultadofinal('PERDISTE!! TE DEBES UNA BIRRA.')
    }
}
function crearresultadofinal(resultado){
    let resultadoFinal=document.getElementById('resultado')
    let parrafo=document.createElement('p')
    parrafo.innerHTML=resultado
    resultadoFinal.appendChild(parrafo)
    let botonPiedra=document.getElementById('boton-piedra')
    botonPiedra.disabled=true
    let botonPapel=document.getElementById('boton-papel')
    botonPapel.disabled=true
    let botonTijera=document.getElementById('boton-tijera')
    botonTijera.disabled=true
    let sectionreiniciar = document.getElementById('reiniciar')
    sectionreiniciar.style.display = 'flex'
}
function reiniciarjuego() {
    location.reload()
}
window.addEventListener('load', arrancaeljuego)