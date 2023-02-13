//imagenes de banderas. hay que hacerlo aleatorio
let banderas = ["de.svg", "au.svg", "cm.svg", "ca.svg", "co.svg", "es.svg", "il.svg", "jm.svg", "jp.svg", "kr.svg", "mx.svg", "ps.svg", "za.svg", "se.svg", "uy.svg"];

//opcioncorrecta
let correcta = [2,0,1,0,2,0,1,2,0,1,1,2,0,2,0];

//paises a mostrar en cada jugada
let opciones = [];

//opciones a mostrar en cada jugada
opciones.push(["ESPAÑA", "ARMENIA", "ALEMANIA"]);
opciones.push(["AUSTRALIA", "INGLATERRA", "TAILANDIA"]);
opciones.push(["SENEGAL", "CAMERUN", "EGIPTO"]);
opciones.push(["CANADA", "AUSTRIA", "BANGLADESH"]);
opciones.push(["ECUADOR", "VENEZUELA", "COLOMBIA"]);
opciones.push(["ESPAÑA", "MALTA", "PORTUGAL"]);
opciones.push(["PALESTINA", "ISRAEL", "SIRIA"]);
opciones.push(["CUBA", "SUDADFRICA", "JAMAICA"]);
opciones.push(["JAPON", "MONGOLIA", "RUSIA"]);
opciones.push(["VIETNAM", "COREA DEL SUR", "COREA DEL NORTE"]);
opciones.push(["ITALIA", "MEXICO", "SURINAM"]);
opciones.push(["TURQUIA", "EGIPTO", "PALESTINA"]);
opciones.push(["SUDAFRICA", "TUNEZ", "NIGERIA"]);
opciones.push(["FINLANDIA", "SUIZA", "SUECIA"]);
opciones.push(["URUGUAY", "ARGENTINA", "PANAMA"]);

//variable que guarda la posicion actual
let posActual = 0;

//variable que guarda las acertadas hasta el momento
let cantidadAcertadas = 0;

function comenzarJuego(){
//reseteamos las variables
    cantidadAcertadas = 0;
    //active las pantallas
    document.getElementById('pantalla-inicial').style.display = 'none';
    document.getElementById('pantalla-juego').style.display = 'block';
    cargarBandera();
}

//funcion que carga la siguiente bandera y sus opciones
function cargarBandera(){
    if (banderas.length <= posActual){
        terminarJuego();
    }
    else {
        limpiarOpciones()
        document.getElementById("imgBandera").src= "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre"
    document.getElementById("n1").className = "nombre"
    document.getElementById("n2").className = "nombre"
    document.getElementById("l0").className = "letra"
    document.getElementById("l1").className = "letra"
    document.getElementById("l2").className = "letra"
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //contador para pasar a la prox bandera
    setTimeout(cargarBandera,1500);
}
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length -cantidadAcertadas;
    if ( cantidadAcertadas == 15 ){
        document.getElementById("mensajeFinal").innerHTML = ("Felicitaciones!! Acertaste todas!")
    }
}
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById('pantalla-inicial').style.display = 'block';
    document.getElementById("pantalla-juego").style.display = "none";

}