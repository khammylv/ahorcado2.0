function comprobar(event) {
    let ccc = "";
    let tecla = event.key.toUpperCase();
    palabraOc = palabraOc.toUpperCase();
    let nuevo = "";
    let encontrar = false;
  
    for (let i = 0; i < palabraOc.length; i++) {
      if (tecla == palabraOc[i]) {
        ccc = ccc + tecla + " ";
        nuevo = nuevo + tecla + " ";
  
        encontrar = true;
      } else {
        nuevo = nuevo + adivina[i * 2] + " ";
        ccc = ccc + largo[i * 1] + "  ";
      }
    }
  
    if (!encontrar) {
      mostrarletras();
      
    }
  
    adivina = nuevo;
    dibujo.beginPath();
    dibujo.font = "50px Comic Sans MS";
    dibujo.fillStyle = "blue";
    dibujo.fillText(ccc, 450, 540);
    dibujo.closePath();
  
    if (intentos == cont) {
      finalJuego();
      dibujar();
    }
  
    if (adivina.search("_") == -1) {
      ganasteJuego();
    }
    
  }
  
  function mostrarletras() {
    palabraOc = palabraOc.toUpperCase();
    let i = document.getElementById("teclad").value.toUpperCase();
    let casa = Array.from(i);
    let uu = Array.from(palabraOc);
    if (adivina.search("_") == -1 ||intentos == cont) {
      sN = "";
    } 
    else {
      for (var r = 0; r < casa.length; r++) {
        const elemento = casa[r];
  
        if (!uu.includes(casa[r])) {
          unicos.push(elemento);
        }
      }
  
      let gg = unicos.toString();
      let nn = gg.replace(/[\W \d]/g, "");
      let jjj = Array.from(nn);
      let ooo = new Set(jjj);
      let rr = Array.from(ooo);
      let yy = rr.toString();
      sN = yy.replace(/[\W \d]/g, "");
      cont = sN.length;
  
      dibujo.beginPath();
      dibujo.font = "50px Comic Sans MS";
      dibujo.fillStyle = "blue";
      dibujo.fillText(sN, 600, 350);
      dibujo.closePath();
  
       dibujar();
    }
}

