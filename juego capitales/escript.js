let estado = "open";
function showHideSideBar(){
    var links = document.getElementsByClassName("txtLink");
    if (estado == "open"){
        document.getElementById("sideBar").style.width="80px";
        document.getElementById("main").style.marginLeft="80px";
        document.getElementById("img-info").style.width="50px";
        document.getElementById("texto-info").style.display="none";
        //vamos a esconder los enlaces
        for (var i = links.length -1; i>=0; i--){
            links[i].style.display= "none"
        }
        estado= "close";
    }
    else if (estado == "close"){
        document.getElementById("sideBar").style.width="250px";
        document.getElementById("main").style.marginLeft="250px";
        document.getElementById("img-info").style.width="112px";
        document.getElementById("texto-info").style.display="block";
        //vamos a esconder los enlaces
        for (var i = links.length -1; i>=0; i--){
            links[i].style.display= "inline"
        }
        estado= "open";
    }
}
let clima = {
    apiKey: "3bc6e13ff58a2577c4c7abdcdd655fa0",
    fetchClima:function(ciudad){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + ciudad
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response)=>{
            return response.json();
        })
        .then((data)=>this.mostrarClima(data));
    },
    mostrarClima:function(data){
        const {temp} = data.main;
        document.querySelector("#temp").innerHTML = temp + "&#8451;"
    }
}
let ciudad = document.querySelector("#ciudad");
ciudad.addEventListener("change", function(){
    clima.fetchClima(ciudad.value)
})
clima.fetchClima("buenos aires");
