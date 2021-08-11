// boton imagen abrir-cerrar
let botonImagen =document.getElementById("boton-imagen")
let seccionImagen=document.getElementById("formulario-imagen")
let botonTexto = document.getElementById("boton-texto")
let seccionTexto=document.getElementById("formulario-texto")
let botonCerrarTexto= document.getElementById("boton-cerrar-texto")
let botonCerrarImagen = document.getElementById("boton-cerrar-imagen")
let fondoSuperior =document.getElementById("fondo-superior")
let fondoInferior = document.getElementById("fondo-inferior")
let inputFondoColor = document.getElementById("input-fondo-color")
let checkboxSuperior = document.getElementById("checkbox-superior") 
let checkboxInferior=document.getElementById("checkbox-inferior")
let textoSuperior= document.getElementById("texto-superior")
let inputTextoSuperior = document.getElementById("input-texto-superior")
let textoInferior= document.getElementById("texto-inferior")
let inputTextoInferior=document.getElementById("input-texto-inferior")
let inputTextoColor= document.getElementById("input-texto-color")

let claseOcultar=document.querySelector(".ocultar")



//IMAGEN
let inputColorFondoMeme =document.getElementById("input-color-fondo-meme")
let espacioMeme =document.getElementById("fondo-espacio-meme")

//boton imagen aparecer-desaparecer 
botonImagen.onclick=()=>{    
seccionImagen.style.display="flex"
seccionTexto.style.display="none"
}
//boton cerrar imagen

botonCerrarImagen.onclick=()=>{
 seccionImagen.style.display="none"

}

// boton texto abrir-cerrar

botonTexto.onclick=()=>{
 seccionTexto.style.display="flex"
 seccionImagen.style.display="none"
}

//boton cerrar texto

botonCerrarTexto.onclick=()=>{
  seccionTexto.style.display="none" 
}

//boton modo oscuro, boton modo claro

let botonModoOscuro= document.getElementById("boton-modo-oscuro")
let botonModoClaro=document.getElementById("boton-modo-claro")
let modoClaro=document.getElementById("modo-claro")
let mainClaro=document.getElementById("main-claro")
let botonDescargarMeme=document.getElementById("boton-descargar-meme")
let botonClaro=document.getElementById("boton-claro")

botonModoOscuro.onclick=()=>{
  if(botonModoClaro.style.display="block"){
    botonModoOscuro.style.display="none"
    modoClaro.classList.remove("header-claro")
     seccionImagen.classList.remove("seccion-claro")
     seccionTexto.classList.remove("seccion-claro")
     mainClaro.classList.remove("main-claro")
     botonImagen.classList.remove("botones-claro")
     botonTexto.classList.remove("botones-claro")
     botonModoOscuro.classList.remove("botones-claro")
     botonModoClaro.classList.remove("botones-claro")
     botonDescargarMeme.classList.remove("botones-claro")
     botonClaro.classList.remove("seccion-claro")
  }
  
}

botonModoClaro.onclick=()=>{
  if(botonModoOscuro.style.display="block"){
    botonModoClaro.style.display="none"
     modoClaro.classList.add("header-claro")
     seccionImagen.classList.add("seccion-claro")
     seccionTexto.classList.add("seccion-claro")
     mainClaro.classList.add("main-claro")
     botonImagen.classList.add("botones-claro")
     botonTexto.classList.add("botones-claro")
     botonModoOscuro.classList.add("botones-claro")
     botonModoClaro.classList.add("botones-claro")
     botonDescargarMeme.classList.add("botones-claro")
     botonClaro.classList.add("seccion-claro")
  }
  
}
 
//escribir valor en texto superior

inputTextoSuperior.oninput=()=>{
 textoSuperior.textContent=inputTextoSuperior.value
}

// escrbir  valor en texto inferior

inputTextoInferior.oninput=()=>{
  textoInferior.textContent=inputTextoInferior.value
}


//ocultar texto superior


checkboxSuperior.onclick=()=>{
    if(checkboxSuperior.checked){
      fondoSuperior.classList.add("ocultar")
    }
    else{
      fondoSuperior.classList.remover("ocultar")
    }
  
   
  }
  
 //ocultar texto inferior 
  checkboxInferior.onclick=()=>{
    fondoInferior.classList.toggle("ocultar")
  }
  
  //botones para alinear texto izquierda, central, derecha

  let botonTextoIzquierda=document.getElementById("boton-texto-izquierda")
  let botonTextoCentro=document.getElementById("boton-texto-centro")
  let botonTextoDerecha=document.getElementById("boton-texto-derecha")

  botonTextoIzquierda.onclick=()=>{
  
     textoSuperior.style.textAlign="left"
     textoInferior.style.textAlign="left"
    
  }

  botonTextoCentro.onclick=()=>{
    textoInferior.style.textAlign="left"
    textoSuperior.style.textAlign="center"

  }
  botonTextoDerecha.onclick=()=>{
    textoSuperior.style.textAlign="right"
    textoInferior.style.textAlign="right"
  }

  

 //cambiar color texto
inputTextoColor.oninput=()=>{
  textoSuperior.style.color=inputTextoColor.value
  textoInferior.style.color=inputTextoColor.value
}

//cambiar color fondo
inputFondoColor.oninput=()=>{
  fondoSuperior.style.backgroundColor=inputFondoColor.value
  fondoInferior.style.backgroundColor=inputFondoColor.value
}


let selectEstiloLetra = document.getElementById("select-estilo-letra")


  //console.log("selectEstiloLetra.options")
  
 // selectEstiloLetra.oninput=()=>{

  //}








//IMAGEN

let inputImagen = document.getElementById("input-imagen")
let espacioImagen = document.getElementById("espacio-imagen")


inputImagen.oninput=()=>{

  espacioImagen.src = inputImagen.value
}


//color del fondo

inputColorFondoMeme.oninput=()=>{
  espacioMeme.style.backgroundColor= inputColorFondoMeme.value
}


//RANGO

let inputBrillo = document.getElementById("input-brillo")

//inputBrillo.oninput=()=>{
  //espacioImagen=
//}