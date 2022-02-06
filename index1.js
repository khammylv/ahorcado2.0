const bancoDePalabras = [
    "Profesor",
    "Velo",
    "Casco",
    "Tijeras",
    "Aceite",
    "Yunta",
    "Tarta",
    "Derecha",
    "Tostar",
    "Flecha",
    "Tarjetas",
    "Sufrir",
    "Madurez",
    "Donde",
    "Cajonera",
    "Cosa",
    "Lamer",
    "Espumar",
    "Postre",
    "Tornillo",
    "Leer",
    "Pastar",
    "Mantel",
    "Novio",
    "Collar",
    "Cambio",
    "Uniforme",
  ];
  
  var rand = Math.floor(Math.random() * bancoDePalabras.length);
  var rValue = bancoDePalabras[rand];
  let palabraOc = "";
  let adivina = "";
  let intentos = 8;
  let cont = 0;
  let largo = "";
  let sN = "";
  const unicos = [];
  var pantalla = document.getElementById("lienzo");
  var dibujo = pantalla.getContext("2d");
  dibujo.fillStyle = "lightgrey";
  dibujo.fillRect(0, 0, 1080, 600);
  
  iniciar()
  function iniciar() {
    let t = document.getElementById("teclad").value;
    t.innerHTML = "";
    palabraOc =
      bancoDePalabras[Math.floor(Math.random() * bancoDePalabras.length)];
    for (let i = 0; i < palabraOc.length; i++) {
      adivina += "_ ";
      largo += " ";
    }
   
    dibujoInicio();
  }
  
  function dibujoInicio() {
    let pinto = "";
    for (let i = 0; i < palabraOc.length; i++) {
      pinto += "_ ";
    }
  
    dibujo.clearRect(450, 490, 500, 80);
    dibujo.beginPath();
    dibujo.fillStyle = "lightgrey";
    dibujo.fillRect(450, 490, 500, 80);
    dibujo.closePath();
    dibujo.beginPath();
  
    dibujo.beginPath();
    dibujo.font = "50px Comic Sans MS";
    dibujo.fillStyle = "blue";
    dibujo.fillText(pinto, 455, 555);
    dibujo.closePath();
  
    dibujo.beginPath();
    dibujo.lineTo(300, 550);
    dibujo.lineTo(100, 550);
    dibujo.lineTo(100, 50); //primer palo
    dibujo.lineTo(100, 50); //segundo palo
    dibujo.lineTo(350, 50); // segundo palo
    dibujo.lineTo(350, 100); //ultimo palo
    dibujo.lineWidth = 15;
    dibujo.strokeStyle = "#000";
    dibujo.stroke();
    dibujo.closePath();
  }
  function teclado(event) {
    let tecla = event.key;
    let txt = /[\W \d]/g;
    let valor = txt.test(tecla);
  
    if (valor == true) {
      
    } else {
      
      comprobar(event);
      
    }
  }
  

   