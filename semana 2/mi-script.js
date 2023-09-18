function validarNombre() {
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
      alert("Por favor, introduzca su nombre.");
      return false;
    }
    return true;
  }
  
  //valida entrada de datos
  function validarCorreo() {
    var correo = document.getElementById("correo").value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(correo)) {
      alert("El correo electrónico no es válido.");
      return false;
    }
    return true;
  }
  
  function validarFormulario() {
    var selectCurso = document.getElementById("curso");
    var inputEnviar = document.getElementById("enviar");
    var mensajeError = document.getElementById("mensajeError");

    if (selectCurso.value === "") {
        mensajeError.textContent = "Debes seleccionar una opción válida en el campo 'Curso'.";
        inputEnviar.disabled = true; 
        return false; 
    } else {
        mensajeError.textContent = "";  
        inputEnviar.disabled = false; 
       
        return true;
    }
}


//Muestras las opciones que tenemos en cada campo.
  function mostrarOpciones() {
  
    var select1 = document.getElementById("curso");
    var select2 = document.getElementById("select2");
    var valorSeleccionado = select1.value;
    
  
    select2.innerHTML = "";
    
    
  
    if (valorSeleccionado === "deportes") {
        var opcionesDeportes = ["Fútbol", "Baloncesto", "Tenis", "Balonmano"];
        for (var i = 0; i < opcionesDeportes.length; i++) {
            var option = document.createElement("option");
            option.text = opcionesDeportes[i];
            select2.add(option);
        }
    } else if (valorSeleccionado === "tecnologia") {
        var opcionesTecnologia = ["Manejo de base de datos", "Ofimatica", "Robotica", "Dise;o web"];
        for (var i = 0; i < opcionesTecnologia.length; i++) {
            var option = document.createElement("option");
            option.text = opcionesTecnologia[i];
            select2.add(option);
        }
    } else if (valorSeleccionado === "artes") {
      var opcionesTecnologia = ["Dibujo digital", "Curso de guitarra", "Curso de violin", "Danza expresiva", "Teatro"];
      for (var i = 0; i < opcionesTecnologia.length; i++) {
          var option = document.createElement("option");
          option.text = opcionesTecnologia[i];
          select2.add(option);
      }
  }   else if (valorSeleccionado === "etiqueta") {
    var opcionesTecnologia = ["Modales de mesa", "Lexico y vocalizacion", "Control de personalidad", "Manejo de impulsos"];
    for (var i = 0; i < opcionesTecnologia.length; i++) {
        var option = document.createElement("option");
        option.text = opcionesTecnologia[i];
        select2.add(option);
    }
}
}

//cambia la imagen dependiendo de que curso se elija.
function cambiarImagen() {
  var select = document.getElementById("curso");
  var imagen = document.getElementById("Imagen");
  var opcionSeleccionada = select.value;

  
  var imagenes = {
      deportes: "multi/deporte.jpg",
      tecnologia: "multi/tecno.jpg",
      artes: "multi/artes.jpg",
      etiqueta: "multi/etiq.jpg"
  };

  
  if (imagenes[opcionSeleccionada]) {
      imagen.src = imagenes[opcionSeleccionada];
      imagen.style.display = "block";
  } else {
      imagen.src = ""; 
      imagen.style.display = "none";
  }
}
