function validar() {
    let agrego = document.getElementById("agre").value;
    let txt = /[\W \d /a-z/]/g;
    let valor = txt.test(agrego);
    let larr = agrego.length;
     
    if (larr > 8||valor == true) {
      
      agregar()
      
   
    } else {
      alert("No es una letra")
    }


}

function agregar() {
    let agrego = document.getElementById("agre").value;
    bancoDePalabras.push(agrego);
    document.getElementById("ocultar").style.display = "none";
    
}

function mostrar(){
    document.getElementById("ocultar").style.display = "block";
}

function reiniciarJ(){
    location.reload();
}