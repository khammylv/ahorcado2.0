function dibujar() {
  if (cont == 1) {
    //cabeza
    dibujo.beginPath();
    dibujo.arc(350, 140, 40, 0, Math.PI * 2, false);
    dibujo.strokeStyle = "red";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
  if (cont == 2) {
    //torso
    dibujo.beginPath();
    dibujo.moveTo(350, 180);
    dibujo.lineTo(350, 250);
    dibujo.strokeStyle = "red";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
  if (cont == 3) {
    //brazos 1
    dibujo.beginPath();
    dibujo.lineTo(350, 180);
    dibujo.lineTo(400, 220);
    dibujo.strokeStyle = "red";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
  if (cont == 4) {
    //brazos 2
    dibujo.beginPath();
    dibujo.moveTo(290, 220);
    dibujo.lineTo(350, 180);
    dibujo.lineTo(400, 220);
    dibujo.strokeStyle = "red";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
  if (cont == 5) {
  }
  if (cont == 6) {
    //piernas 2
    dibujo.beginPath();
    dibujo.moveTo(250, 350);
    dibujo.lineTo(350, 250);
    dibujo.lineTo(450, 350);
    dibujo.strokeStyle = "red";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
  if (cont == 7) {
    //piernas 1
    dibujo.beginPath();
    dibujo.lineTo(350, 250);
    dibujo.lineTo(450, 350);
    dibujo.strokeStyle = "red";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
  if (cont == 8) {
    //ojos
    dibujo.beginPath();
    dibujo.moveTo(370, 120);
    dibujo.lineTo(350, 145);
    dibujo.moveTo(350, 120);
    dibujo.lineTo(370, 145);
    //otro ojo
    dibujo.moveTo(340, 120);
    dibujo.lineTo(325, 145);
    dibujo.moveTo(325, 120);
    dibujo.lineTo(340, 145);
    dibujo.strokeStyle = "blue";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
}

function finalJuego() {
  palabraOc = palabraOc.toUpperCase();
  document.getElementById("teclad").disabled = true;
  let tv = palabraOc.split("");
  let pp = tv.toString();
  let mmm = pp.replace(/\W/g, " ");
  let jjj = "";
  for (let i = 0; i < palabraOc.length; i++) {
    jjj += "_ ";
  }

  //rectangulo
  dibujo.clearRect(450, 490, 500, 80);
  dibujo.beginPath();
  dibujo.fillStyle = "lightgrey";
  dibujo.fillRect(450, 490, 500, 80);
  dibujo.closePath();
  dibujo.beginPath();

  dibujo.beginPath();
  dibujo.font = "50px Comic Sans MS";
  dibujo.fillStyle = "red";
  dibujo.fillText(mmm, 450, 540);
  dibujo.closePath();

  dibujo.beginPath();
  dibujo.font = "60px Comic Sans MS";
  dibujo.fillStyle = "red";
  dibujo.fillText(jjj, 453, 555);
  dibujo.closePath();

  //lo siento
  dibujo.beginPath();
  dibujo.font = "60px Comic Sans MS";
  dibujo.fillStyle = "green";
  dibujo.fillText("Lo siento", 500, 100);
  dibujo.closePath();

  //perdiste
  dibujo.beginPath();
  dibujo.font = "60px Comic Sans MS";
  dibujo.fillStyle = "green";
  dibujo.fillText("perdiste", 700, 150);
  dibujo.closePath();
}

function ganasteJuego() {
  dibujo.clearRect(450, 490, 500, 80);
  palabraOc = palabraOc.toUpperCase();
  document.getElementById("teclad").disabled = true;
  let tv = palabraOc.split("");
  let pp = tv.toString();
  let mmm = pp.replace(/\W/g, " ");
  let jjj = "";
 
  for (let i = 0; i < palabraOc.length; i++) {
    jjj += "_ ";
  }

  //rectangulo
  dibujo.clearRect(450, 490, 500, 80);

  dibujo.beginPath();
  dibujo.fillStyle = "lightgrey";
  dibujo.fillRect(450, 490, 500, 80);
  dibujo.closePath();

  dibujo.beginPath();
  dibujo.font = "50px Comic Sans MS";
  dibujo.fillStyle = "blue";
  dibujo.fillText(mmm, 450, 540);
  dibujo.closePath();

  dibujo.beginPath();
  dibujo.font = "60px Comic Sans MS";
  dibujo.fillStyle = "blue";
  dibujo.fillText(jjj, 453, 555);
  dibujo.closePath();

  //felicidades
  dibujo.beginPath();
  dibujo.font = "60px Comic Sans MSl";
  dibujo.fillStyle = "green";
  dibujo.fillText("¡Felicidades", 500, 100);
  dibujo.closePath();

  //ganaste
  dibujo.beginPath();
  dibujo.font = "60px Comic Sans MS";
  dibujo.fillStyle = "green";
  dibujo.fillText("ganaste!", 700, 150);
  dibujo.closePath();
}
